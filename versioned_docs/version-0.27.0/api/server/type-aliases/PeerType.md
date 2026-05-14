# Type Alias: PeerType

> **PeerType** = `OpenApiPeerType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:31](https://github.com/fishjam-cloud/js-server-sdk/blob/078f24967485d472cccb3de0de191adb81509a38/packages/js-server-sdk/src/types.ts#L31)

Peer type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `PeerType`,
with the addition of `'unspecified'` for messages whose peer type is not set on the wire.
