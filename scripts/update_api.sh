#!/bin/bash

set -e

git submodule init

CWD="$(pwd)"
ASSETS_DIRECTORY="$CWD/static/api"

# Get the last tag, that matches semantic versioning
get_latest_semver_tag() {
    git tag -l | grep -E '^v?[0-9]+\.[0-9]+\.[0-9]+$' | sed 's/^v//' | sort -V | tail -n 1 | xargs -I {} git tag -l "v{}" "{}" | head -n 1
}

checkout_submodule() {
    local submodule_path
    submodule_path=api/$1

    cd $CWD/$submodule_path
    git fetch --tags
    latest_tag=$(get_latest_semver_tag)

    echo "Latest version tag for $submodule_path is $latest_tag"

    git checkout $latest_tag --detach &>/dev/null
}

copy_openapi() {
    local submodule_name
    submodule_name=$1

    if [[ -f "openapi.yaml" ]]; then
        cp openapi.yaml $ASSETS_DIRECTORY/$submodule_name-openapi.yaml
        echo "Copied openapi.yaml of $submodule_name to the assets directory."
    else
        echo "openapi.yaml for $submodule_name not found."
    fi
}

# TODO: switch to main once the template-workers branch is merged there.
COMPOSITION_BRANCH="template-workers"

# The composition source repo does not tag semver releases yet, so its
# submodule is checked out at a branch instead of the latest tag.
checkout_submodule_branch() {
    local submodule_path
    submodule_path=api/$1

    cd "$CWD/$submodule_path"
    git fetch origin "$2"
    git checkout FETCH_HEAD --detach &>/dev/null
}

copy_composition_openapi() {
    cp openapi.json "$ASSETS_DIRECTORY/composition-openapi.json"
    echo "Copied openapi.json of composition to the assets directory."
}

PROTO_FILES="server_notifications agent_notifications notifications/shared"
copy_protos() {
    for file in $PROTO_FILES; do
        cp ./fishjam/$file.proto $ASSETS_DIRECTORY/protobuf/$file.proto
    done
}

checkout_submodule fishjam-server
copy_openapi fishjam-server

checkout_submodule room-manager
copy_openapi room-manager

checkout_submodule protos
copy_protos

checkout_submodule_branch composition $COMPOSITION_BRANCH
copy_composition_openapi

echo $'\nSubmodule update and copy complete.'
