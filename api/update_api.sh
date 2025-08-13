#!/bin/bash

set -e

# Initialize and update submodules
git submodule init
git submodule update --remote

CWD="$(pwd)"
API_DIRECTORY="api"

# Function to compare and sort semantic versions using sort command
sort_versions() {
    printf "%s\n" "$@" | sort -V
}

# Function to get the latest version tag that matches semantic versioning
get_latest_semver_tag() {
    # Fetch all tags, then filter out tags that match semantic versioning, sort them, and get the last one
    echo $(git tag -l | grep -E '^v?[0-9]+\.[0-9]+\.[0-9]+$' | sort -V | tail -n 1)
}

checkout_submodule() {
    local submodule_path
    submodule_path=api/$1

    cd $submodule_path
    git fetch
    latest_tag=$(get_latest_semver_tag)
    
    echo "Latest version tag for $submodule_path is $latest_tag"
    
    git checkout $latest_tag --detach &> /dev/null
    
    # Copy openapi.yaml to the main project directory (update the path as needed)
    
}

copy_openapi() {
    local submodule_path
    submodule_path=api/$1

    if [[ -f "openapi.yaml" ]]; then
        cp openapi.yaml $CWD/$submodule_path-openapi.yaml
        echo "Copied openapi.yaml from $submodule_path to the main project directory."
    else
        echo "openapi.yaml does not exist in $submodule_path."
    fi
}



copy_protos() {
    cp ./fishjam/server_notifications.proto $CWD/$API_DIRECTORY
}

checkout_submodule fishjam-server
copy_openapi fishjam-server

checkout_submodule room-manager
copy_openapi room-manager

checkout_submodule protos
copy_protos

echo $'\nSubmodule update and copy complete.'