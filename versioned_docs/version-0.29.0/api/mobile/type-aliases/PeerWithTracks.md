# Type Alias: PeerWithTracks\<P, S, T\>

> **PeerWithTracks**\<`P`, `S`, `T`\> = `Omit`\<`ReactClientPeerWithTracks`\<`P`, `S`\>, [`TrackFields`](TrackFields.md)\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:136](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/overrides/types.ts#L136)

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
