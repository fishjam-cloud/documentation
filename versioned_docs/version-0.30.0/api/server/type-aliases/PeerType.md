# Type Alias: PeerType

> **PeerType** = `OpenApiPeerType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:48](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/types.ts#L48)

Peer type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `PeerType`,
with the addition of `'unspecified'` for messages whose peer type is not set on the wire.
