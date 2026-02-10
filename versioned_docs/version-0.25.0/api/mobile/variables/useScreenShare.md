# Variable: useScreenShare()

> `const` **useScreenShare**: () => `object`

Defined in: packages/react-client/dist/hooks/useScreenShare.d.ts:6

Hook to enable screen sharing within a room and manage the existing stream.

## Returns

### audioTrack

> **audioTrack**: `MediaStreamTrack` \| `null`

The separate audio MediaStreamTrack.

### currentTracksMiddleware

> **currentTracksMiddleware**: [`TracksMiddleware`](../type-aliases/TracksMiddleware.md) \| `null`

The middleware currently assigned to process the tracks.
A screenshare may include both audio and video tracks, and this middleware is capable of processing
each track type.

### setTracksMiddleware()

> **setTracksMiddleware**: (`middleware`) => `Promise`\<`void`\>

Sets the middleware responsible for processing the tracks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `middleware` | [`TracksMiddleware`](../type-aliases/TracksMiddleware.md) \| `null` | The middleware to set, which can be a TracksMiddleware instance or null to remove the middleware. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves once the middleware is successfully set.

### startStreaming()

> **startStreaming**: (`props?`) => `Promise`\<`void`\>

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

> **stopStreaming**: () => `Promise`\<`void`\>

Stops the stream and cancels browser screen sharing.

#### Returns

`Promise`\<`void`\>

### stream

> **stream**: `MediaStream` \| `null`

The MediaStream object containing both tracks.

### videoTrack

> **videoTrack**: `MediaStreamTrack` \| `null`

The separate video MediaStreamTrack.
