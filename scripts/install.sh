#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR
cd $ROOTDIR

printf "Synchronising submodules... "
git submodule sync --recursive >> /dev/null
git submodule update --recursive --remote --init >> /dev/null

cd packages/web-client-sdk/
yarn && yarn build

cd $ROOTDIR

cd packages/mobile-client-sdk/
yarn
printf "DONE\n"