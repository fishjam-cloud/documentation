#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR
cd $ROOTDIR

printf "Synchronising submodules... "
git submodule sync >> /dev/null
git submodule update --init >> /dev/null

cd $ROOTDIR
cd packages/web-client-sdk/
yarn

cd $ROOTDIR
cd packages/web-client-sdk/packages/react-client/
yarn pack

cd $ROOTDIR
cd packages/mobile-client-sdk/
yarn

cd $ROOTDIR
cd packages/js-server-sdk/
yarn


cd $ROOTDIR
cd packages/mobile-client-sdk/packages/react-native-client/
yarn build && yarn pack

cd $ROOTDIR
cd packages/web-client-sdk/packages/react-client/
yarn build && yarn pack


cd $ROOTDIR
cd packages/js-server-sdk/packages/js-server-sdk/
yarn build && yarn pack

printf "DONE\n"
