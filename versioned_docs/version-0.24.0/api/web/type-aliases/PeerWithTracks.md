# Type Alias: PeerWithTracks\<PeerMetadata, ServerMetadata\>

> **PeerWithTracks**\<`PeerMetadata`, `ServerMetadata`\> = `object`

Defined in: [react-client/src/hooks/usePeers.ts:13](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L13)

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `PeerMetadata` | Type of metadata set by peer while connecting to a room. |
| `ServerMetadata` | Type of metadata set by the server while creating a peer. |

## Properties

### cameraTrack?

> `optional` **cameraTrack**: [`Track`](Track.md)

Defined in: [react-client/src/hooks/usePeers.ts:17](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L17)

***

### customAudioTracks

> **customAudioTracks**: [`Track`](Track.md)[]

Defined in: [react-client/src/hooks/usePeers.ts:22](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L22)

***

### customVideoTracks

> **customVideoTracks**: [`Track`](Track.md)[]

Defined in: [react-client/src/hooks/usePeers.ts:21](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L21)

***

### id

> **id**: [`PeerId`](PeerId.md)

Defined in: [react-client/src/hooks/usePeers.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L14)

***

### metadata?

> `optional` **metadata**: [`Metadata`](Metadata.md)\<`PeerMetadata`, `ServerMetadata`\>

Defined in: [react-client/src/hooks/usePeers.ts:15](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L15)

***

### microphoneTrack?

> `optional` **microphoneTrack**: [`Track`](Track.md)

Defined in: [react-client/src/hooks/usePeers.ts:18](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L18)

***

### screenShareAudioTrack?

> `optional` **screenShareAudioTrack**: [`Track`](Track.md)

Defined in: [react-client/src/hooks/usePeers.ts:20](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L20)

***

### screenShareVideoTrack?

> `optional` **screenShareVideoTrack**: [`Track`](Track.md)

Defined in: [react-client/src/hooks/usePeers.ts:19](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L19)

***

### tracks

> **tracks**: [`Track`](Track.md)[]

Defined in: [react-client/src/hooks/usePeers.ts:16](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/usePeers.ts#L16)
