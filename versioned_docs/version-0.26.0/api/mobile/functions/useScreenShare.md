# Function: useScreenShare()

> **useScreenShare**(): `object`

Defined in: [packages/mobile-client/src/overrides/hooks.ts:44](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/mobile-client/src/overrides/hooks.ts#L44)

## Returns

### audioTrack

> **audioTrack**: `null` \| `MediaStreamTrack`

The separate audio MediaStreamTrack.

### currentTracksMiddleware

> **currentTracksMiddleware**: `null` \| [`TracksMiddleware`](../type-aliases/TracksMiddleware.md)

The middleware currently assigned to process the tracks.
A screenshare may include both audio and video tracks, and this middleware is capable of processing
each track type.

### setTracksMiddleware()

> **setTracksMiddleware**: (`middleware`) => `Promise`\<`void`\>

Sets the middleware responsible for processing the tracks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `middleware` | `null` \| [`TracksMiddleware`](../type-aliases/TracksMiddleware.md) | The middleware to set, which can be a TracksMiddleware instance or null to remove the middleware. |

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

> **stream**: `null` \| `MediaStream`

### videoTrack

> **videoTrack**: `null` \| `MediaStreamTrack`

The separate video MediaStreamTrack.
