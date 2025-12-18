# Function: useScreenShare()

> **useScreenShare**(): `object`

Defined in: [react-client/src/hooks/useScreenShare.ts:10](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/hooks/useScreenShare.ts#L10)

Hook to enable screen sharing within a room and manage the existing stream.

## Returns

### audioTrack

> **audioTrack**: `null` \| `MediaStreamTrack` = `screenShareManager.audioTrack`

The separate audio MediaStreamTrack.

### currentTracksMiddleware

> **currentTracksMiddleware**: `null` \| [`TracksMiddleware`](../type-aliases/TracksMiddleware.md) = `screenShareManager.currentTracksMiddleware`

The middleware currently assigned to process the tracks.
A screenshare may include both audio and video tracks, and this middleware is capable of processing
each track type.

### setTracksMiddleware()

> **setTracksMiddleware**: (`middleware`) => `Promise`\<`void`\> = `screenShareManager.setTracksMiddleware`

Sets the middleware responsible for processing the tracks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `middleware` | `null` \| [`TracksMiddleware`](../type-aliases/TracksMiddleware.md) | The middleware to set, which can be a TracksMiddleware instance or null to remove the middleware. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves once the middleware is successfully set.

### startStreaming()

> **startStreaming**: (`props?`) => `Promise`\<`void`\> = `screenShareManager.startStreaming`

Invokes the screen sharing prompt in the user's browser and starts streaming upon approval.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | \{ `audioConstraints?`: `boolean` \| `MediaTrackConstraints`; `videoConstraints?`: `boolean` \| `MediaTrackConstraints`; \} |
| `props.audioConstraints?` | `boolean` \| `MediaTrackConstraints` |
| `props.videoConstraints?` | `boolean` \| `MediaTrackConstraints` |

#### Returns

`Promise`\<`void`\>

### stopStreaming()

> **stopStreaming**: () => `Promise`\<`void`\> = `screenShareManager.stopStreaming`

Stops the stream and cancels browser screen sharing.

#### Returns

`Promise`\<`void`\>

### stream

> **stream**: `null` \| `MediaStream` = `screenShareManager.stream`

The MediaStream object containing both tracks.

### videoTrack

> **videoTrack**: `null` \| `MediaStreamTrack` = `screenShareManager.videoTrack`

The separate video MediaStreamTrack.
