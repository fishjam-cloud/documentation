#!/bin/sh

set -e

git submodule init

CWD="$(pwd)"
ASSETS_DIRECTORY="$CWD/static/api"

# Get the last tag, that matches semantic versioning
get_latest_semver_tag() {
    echo $(git tag -l | grep -E '^v?[0-9]+\.[0-9]+\.[0-9]+$' | sort -V | tail -n 1)
}

checkout_submodule() {
    local submodule_path
    submodule_path=api/$1

    cd $CWD/$submodule_path
    git fetch --tags
    latest_tag=$(get_latest_semver_tag)
    
    echo "Latest version tag for $submodule_path is $latest_tag"
    
    git checkout $latest_tag --detach &> /dev/null
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

copy_protos() {
    cp ./fishjam/server_notifications.proto $ASSETS_DIRECTORY
}

checkout_submodule fishjam-server
copy_openapi fishjam-server

checkout_submodule room-manager
copy_openapi room-manager

checkout_submodule protos
copy_protos

echo $'\nSubmodule update and copy complete.'