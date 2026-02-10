# Type Alias: PeerWithTracks\<PeerMetadata, ServerMetadata\>

> **PeerWithTracks**\<`PeerMetadata`, `ServerMetadata`\> = `object`

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:8

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `PeerMetadata` | Type of metadata set by peer while connecting to a room. |
| `ServerMetadata` | Type of metadata set by the server while creating a peer. |

## Properties

### cameraTrack?

> `optional` **cameraTrack**: [`Track`](Track.md)

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:12

***

### customAudioTracks

> **customAudioTracks**: [`Track`](Track.md)[]

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:17

***

### customVideoTracks

> **customVideoTracks**: [`Track`](Track.md)[]

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:16

***

### id

> **id**: [`PeerId`](PeerId.md)

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:9

***

### metadata?

> `optional` **metadata**: [`Metadata`](Metadata.md)\<`PeerMetadata`, `ServerMetadata`\>

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:10

***

### microphoneTrack?

> `optional` **microphoneTrack**: [`Track`](Track.md)

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:13

***

### screenShareAudioTrack?

> `optional` **screenShareAudioTrack**: [`Track`](Track.md)

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:15

***

### screenShareVideoTrack?

> `optional` **screenShareVideoTrack**: [`Track`](Track.md)

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:14

***

### tracks

> **tracks**: [`Track`](Track.md)[]

Defined in: packages/react-client/dist/hooks/usePeers.d.ts:11
