#!/bin/bash
set -e

# Usage: ./bump-version.sh <version>
VERSION="$1"

if [ -z "$GH_TOKEN" ]; then
    echo "Error: GH_TOKEN environment variable is not set"
    exit 1
fi

if [ -z "$VERSION" ]; then
    echo "Usage: $0 <version>"
    exit 1
fi

# Install asdf dependencies if .tool-versions exists
if [ -f .tool-versions ]; then
    echo "Installing asdf dependencies..."
    # add plugins from .tool-versions
    while read -r line; do
        PLUGIN_NAME=$(echo "$line" | awk '{print $1}')
        if ! asdf plugin list | grep -q "^$PLUGIN_NAME$"; then
            echo "Adding asdf plugin: $PLUGIN_NAME"
            asdf plugin add "$PLUGIN_NAME"
        else
            echo "asdf plugin $PLUGIN_NAME already added"
        fi
    done < .tool-versions

    asdf install
else
    echo ".tool-versions file not found!"
    exit 1
fi

# Create release branch
BRANCH_NAME="release-$VERSION"
git checkout -b "$BRANCH_NAME"

# Update root package.json
if [ -f package.json ]; then
    echo "Enabling corepack..."
    corepack enable
    echo "Yarn"
    corepack yarn
    echo "Prepare"
    corepack yarn prepare
    echo "Update modules"
    corepack yarn update-modules
    echo "Update API"
    corepack yarn update-api
    echo "Docosaurus version"
    corepack yarn docusaurus docs:version "$VERSION"

    echo "Updated root package.json to $VERSION"
else
    echo "Root package.json not found!"
    exit 1
fi

echo "✅ Version bump complete for $VERSION"
echo "BRANCH_NAME:$BRANCH_NAME"
