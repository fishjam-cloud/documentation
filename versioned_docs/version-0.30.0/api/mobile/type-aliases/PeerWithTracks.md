# Type Alias: PeerWithTracks\<P, S, T\>

> **PeerWithTracks**\<`P`, `S`, `T`\> = `Omit`\<`ReactClientPeerWithTracks`\<`P`, `S`\>, [`TrackFields`](TrackFields.md)\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:136](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/overrides/types.ts#L136)

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
