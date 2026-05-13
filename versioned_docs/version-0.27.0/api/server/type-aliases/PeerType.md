# Type Alias: PeerType

> **PeerType** = `OpenApiPeerType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:31](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/types.ts#L31)

Peer type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `PeerType`,
with the addition of `'unspecified'` for messages whose peer type is not set on the wire.
