# Type Alias: PeerWithTracks\<P, S, T\>

> **PeerWithTracks**\<`P`, `S`, `T`\> = `Omit`\<`ReactClientPeerWithTracks`\<`P`, `S`\>, [`TrackFields`](TrackFields.md)\> & `object`

Defined in: [packages/mobile-client/src/overrides/types.ts:79](https://github.com/fishjam-cloud/web-client-sdk/blob/9a4ad3270ef2456354c48b507c3cc9c08d58a0c7/packages/mobile-client/src/overrides/types.ts#L79)

## Type declaration

### cameraTrack?

> `optional` **cameraTrack**: `T`

### customAudioTracks

> **customAudioTracks**: `T`[]

### customVideoTracks

> **customVideoTracks**: `T`[]

### microphoneTrack?

> `optional` **microphoneTrack**: `T`

### screenShareAudioTrack?

> `optional` **screenShareAudioTrack**: `T`

### screenShareVideoTrack?

> `optional` **screenShareVideoTrack**: `T`

### tracks

> **tracks**: `T`[]

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `P` | - |
| `S` | - |
| `T` *extends* [`Track`](Track.md) | [`Track`](Track.md) |
