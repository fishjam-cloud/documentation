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
# Note: until that merge, the branch's checked-in spec lacks the oneOf variant
# titles the committed smelter-cloud-openapi.json already carries, so re-running
# this script before the merge drops them.
SMELTER_CLOUD_BRANCH="template-workers"

# The smelter-cloud source repo does not tag semver releases yet, so its
# submodule is checked out at a branch instead of the latest tag.
checkout_submodule_branch() {
    local submodule_path
    submodule_path=api/$1

    cd $CWD/$submodule_path
    git fetch origin $2
    git checkout FETCH_HEAD --detach &>/dev/null
}

# The spec is sanitized before publishing: fields marked "Internal use only"
# are stripped.
copy_smelter_cloud_openapi() {
    jq '
        del(.components.schemas.WhipInput.properties.endpoint_override)
        | .components.schemas.Mp4Input.description = "Input stream from an MP4 file."
    ' openapi.json >"$ASSETS_DIRECTORY/smelter-cloud-openapi.json"
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

checkout_submodule_branch smelter-cloud $SMELTER_CLOUD_BRANCH
copy_smelter_cloud_openapi

echo $'\nSubmodule update and copy complete.'
