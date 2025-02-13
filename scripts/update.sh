#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR

cd $ROOTDIR
cd packages/web-client-sdk/
git checkout main
git pull

cd $ROOTDIR
cd packages/mobile-client-sdk/
git checkout main
git pull

cd $ROOTDIR
cd packages/js-server-sdk/
git checkout main
git pull
