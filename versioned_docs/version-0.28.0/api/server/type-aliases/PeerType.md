# Type Alias: PeerType

> **PeerType** = `OpenApiPeerType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:47](https://github.com/fishjam-cloud/js-server-sdk/blob/d70af8c6517be3f35a70de3a0c4ad33de743db55/packages/js-server-sdk/src/types.ts#L47)

Peer type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `PeerType`,
with the addition of `'unspecified'` for messages whose peer type is not set on the wire.
