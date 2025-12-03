#!/bin/sh

set -e

ROOTDIR=$(dirname $(dirname "$(readlink -f $0)"))
echo $ROOTDIR
cd $ROOTDIR


# cd packages/python-server-sdk
# uv run generate_docs

# cd $ROOTDIR
# rm packages/python-server-sdk/docs/api/index.md
# cp -r packages/python-server-sdk/docs/api docs/api/server-python
rm -rf versioned_docs/version-0.20.0/api/server-python
rm -rf versioned_docs/version-0.21.0/api/server-python
rm -rf versioned_docs/version-0.22.0/api/server-python
rm -rf versioned_docs/version-0.23.0/api/server-python

cp -r docs/api/server-python versioned_docs/version-0.20.0/api/server-python
cp -r docs/api/server-python versioned_docs/version-0.21.0/api/server-python
cp -r docs/api/server-python versioned_docs/version-0.22.0/api/server-python
cp -r docs/api/server-python versioned_docs/version-0.23.0/api/server-python
