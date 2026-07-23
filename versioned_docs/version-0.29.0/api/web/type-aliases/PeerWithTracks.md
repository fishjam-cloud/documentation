# Type Alias: PeerWithTracks\<PeerMetadata, ServerMetadata, T\>

> **PeerWithTracks**\<`PeerMetadata`, `ServerMetadata`, `T`\> = `object`

Defined in: [react-client/src/hooks/usePeers.ts:22](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L22)

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `PeerMetadata` | - | Type of metadata set by peer while connecting to a room. |
| `ServerMetadata` | - | Type of metadata set by the server while creating a peer. |
| `T` *extends* [`Track`](Track.md) | [`Track`](Track.md) | - |

## Properties

### cameraTrack?

> `optional` **cameraTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:26](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L26)

***

### customAudioTracks

> **customAudioTracks**: `T`[]

Defined in: [react-client/src/hooks/usePeers.ts:31](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L31)

***

### customVideoTracks

> **customVideoTracks**: `T`[]

Defined in: [react-client/src/hooks/usePeers.ts:30](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L30)

***

### id

> **id**: [`PeerId`](PeerId.md)

Defined in: [react-client/src/hooks/usePeers.ts:23](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L23)

***

### metadata?

> `optional` **metadata**: [`Metadata`](Metadata.md)\<`PeerMetadata`, `ServerMetadata`\>

Defined in: [react-client/src/hooks/usePeers.ts:24](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L24)

***

### microphoneTrack?

> `optional` **microphoneTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:27](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L27)

***

### screenShareAudioTrack?

> `optional` **screenShareAudioTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:29](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L29)

***

### screenShareVideoTrack?

> `optional` **screenShareVideoTrack**: `T`

Defined in: [react-client/src/hooks/usePeers.ts:28](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L28)

***

### tracks

> **tracks**: `T`[]

Defined in: [react-client/src/hooks/usePeers.ts:25](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/usePeers.ts#L25)
