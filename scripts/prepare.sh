#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR
cd $ROOTDIR

printf "Synchronising submodules... "
git submodule sync >>/dev/null
git submodule update --init --remote >>/dev/null

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
cd packages/web-client-sdk/packages/mobile-client/
yarn && yarn build

cd $ROOTDIR
cd packages/mobile-client-sdk/packages/react-native-client/
yarn && yarn build

cd $ROOTDIR
cd packages/js-server-sdk/
yarn && yarn build

printf "DONE\n"
