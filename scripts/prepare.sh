#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR
cd $ROOTDIR

printf "Synchronising submodules... "
git submodule sync --recursive >>/dev/null
git submodule update --init --recursive >>/dev/null

# react-native-builder-bob (used by react-native-webrtc and indirectly by
# mobile-client) walks up to the docs root and picks up its env-keyed
# `browserslist` field as babel targets, which newer babel rejects. Hide it
# for the duration of the build and restore on exit.
ROOT_PKG=$ROOTDIR/package.json
cp "$ROOT_PKG" "$ROOT_PKG.bak"
trap 'mv "$ROOT_PKG.bak" "$ROOT_PKG" 2>/dev/null || true' EXIT INT TERM
node -e "const fs=require('fs'),p=process.argv[1],j=JSON.parse(fs.readFileSync(p));delete j.browserslist;fs.writeFileSync(p,JSON.stringify(j,null,2)+'\n')" "$ROOT_PKG"

# cd packages/web-client-sdk/
# yarn && yarn build

cd $ROOTDIR
cd packages/web-client-sdk/packages/webrtc-client/
yarn && yarn build

cd $ROOTDIR
cd packages/web-client-sdk/packages/ts-client/
yarn && yarn build

cd $ROOTDIR
cd packages/web-client-sdk/packages/react-client/
yarn && yarn build

cd $ROOTDIR
cd packages/web-client-sdk/packages/react-native-webrtc/
npm run prepare

cd $ROOTDIR
cd packages/web-client-sdk/packages/mobile-client/
yarn && yarn build

cd $ROOTDIR
cd packages/js-server-sdk/
yarn && yarn build

mv "$ROOT_PKG.bak" "$ROOT_PKG"
trap - EXIT INT TERM

printf "DONE\n"
