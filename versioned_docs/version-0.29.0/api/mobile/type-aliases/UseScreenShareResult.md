# Type Alias: UseScreenShareResult

> **UseScreenShareResult** = `Omit`\<`ReturnType`\<*typeof* `useScreenShareReactClient`\>, `"stream"` \| `"videoTrack"` \| `"audioTrack"` \| `"currentTracksMiddleware"` \| `"setTracksMiddleware"`\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:81](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/overrides/types.ts#L81)

## Type declaration

### audioTrack

> **audioTrack**: [`MediaStreamTrack`](../classes/MediaStreamTrack.md) \| `null`

### currentTracksMiddleware

> **currentTracksMiddleware**: [`TracksMiddleware`](TracksMiddleware.md) \| `null`

### presentBroadcastPicker()

> **presentBroadcastPicker**: () => `Promise`\<`void`\>

iOS only. Presents the system `RPSystemBroadcastPickerView`. When a
broadcast is active, this opens the system "Stop Broadcast" sheet so
the user can end it cleanly (via `broadcastFinished()`) and avoid the
"Screen sharing stopped" error dialog that `stopStreaming` triggers
by force-closing the host-side socket. No-op on non-iOS.

#### Returns

`Promise`\<`void`\>

### setTracksMiddleware()

> **setTracksMiddleware**: (`middleware`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `middleware` | [`TracksMiddleware`](TracksMiddleware.md) \| `null` |

#### Returns

`Promise`\<`void`\>

### stream

> **stream**: [`MediaStream`](../classes/MediaStream.md) \| `null`

### videoTrack

> **videoTrack**: [`MediaStreamTrack`](../classes/MediaStreamTrack.md) \| `null`
