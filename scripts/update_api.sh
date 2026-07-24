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

SMELTER_CLOUD_REPO="https://github.com/fishjam-cloud/foundry.git"
# TODO: switch to main once the template-workers branch is merged.
SMELTER_CLOUD_REF="template-workers"

# The source repo is private, so it is cloned on demand instead of being a
# submodule (submodules are cloned by CI, which has no access to it).
# The spec is sanitized before publishing: fields marked "Internal use only"
# are stripped.
copy_smelter_cloud_openapi() {
    local clone_dir
    clone_dir=$(mktemp -d)

    if ! git clone --quiet --depth 1 --branch $SMELTER_CLOUD_REF $SMELTER_CLOUD_REPO "$clone_dir" 2>/dev/null; then
        echo "Skipping smelter-cloud: unable to clone $SMELTER_CLOUD_REPO (access required)."
        rm -rf "$clone_dir"
        return 0
    fi

    jq '
        del(.components.schemas.WhipInput.properties.endpoint_override)
        | .components.schemas.Mp4Input.description = "Input stream from an MP4 file."
    ' "$clone_dir/openapi.json" >"$ASSETS_DIRECTORY/smelter-cloud-openapi.json"
    rm -rf "$clone_dir"
    echo "Copied openapi.json of smelter-cloud to the assets directory."
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

cd $CWD
copy_smelter_cloud_openapi

echo $'\nSubmodule update and copy complete.'
