# Type Alias: PeerType

> **PeerType** = `OpenApiPeerType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:47](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/types.ts#L47)

Peer type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `PeerType`,
with the addition of `'unspecified'` for messages whose peer type is not set on the wire.
