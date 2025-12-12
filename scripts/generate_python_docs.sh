#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR
cd $ROOTDIR

cd packages/python-server-sdk
uv sync --all-packages --all-extras
uv run generate_docusaurus
cd $ROOTDIR

rm -rf docs/api/server-python
cp -r packages/python-server-sdk/docusaurus docs/api/server-python
