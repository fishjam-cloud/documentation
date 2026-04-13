# Type Alias: PeerWithTracks\<PeerMetadata, ServerMetadata, T\>

> **PeerWithTracks**\<`PeerMetadata`, `ServerMetadata`, `T`\> = `object`

Defined in: [react-client/src/hooks/usePeers.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L14)

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `PeerMetadata` | - | Type of metadata set by peer while connecting to a room. |
| `ServerMetadata` | - | Type of metadata set by the server while creating a peer. |
| `T` *extends* [`Track`](Track.md) | [`Track`](Track.md) | - |

## Properties

### cameraTrack?

> `optional` **cameraTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:18](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L18)

***

### customAudioTracks

> **customAudioTracks**: `T`[]

Defined in: [react-client/src/hooks/usePeers.ts:23](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L23)

***

### customVideoTracks

> **customVideoTracks**: `T`[]

Defined in: [react-client/src/hooks/usePeers.ts:22](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L22)

***

### id

> **id**: [`PeerId`](PeerId.md)

Defined in: [react-client/src/hooks/usePeers.ts:15](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L15)

***

### metadata?

> `optional` **metadata**: [`Metadata`](Metadata.md)\<`PeerMetadata`, `ServerMetadata`\>

Defined in: [react-client/src/hooks/usePeers.ts:16](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L16)

***

### microphoneTrack?

> `optional` **microphoneTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:19](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L19)

***

### screenShareAudioTrack?

> `optional` **screenShareAudioTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:21](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L21)

***

### screenShareVideoTrack?

> `optional` **screenShareVideoTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:20](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L20)

***

### tracks

> **tracks**: `T`[]

Defined in: [react-client/src/hooks/usePeers.ts:17](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/hooks/usePeers.ts#L17)
