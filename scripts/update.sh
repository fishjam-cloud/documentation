#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR

git submodule init
git submodule update --remote
