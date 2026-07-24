# Type Alias: UseMicrophoneResult

> **UseMicrophoneResult** = `Omit`\<`ReturnType`\<*typeof* `useMicrophoneReactClient`\>, `"toggleMicrophoneMute"` \| `"microphoneStream"` \| `"startMicrophone"` \| `"currentMicrophoneMiddleware"` \| `"setMicrophoneTrackMiddleware"`\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:65](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/overrides/types.ts#L65)

## Type declaration

### currentMicrophoneMiddleware

> **currentMicrophoneMiddleware**: [`TrackMiddleware`](TrackMiddleware.md)

### microphoneStream

> **microphoneStream**: [`MediaStream`](../classes/MediaStream.md) \| `null`

### setMicrophoneTrackMiddleware()

> **setMicrophoneTrackMiddleware**: (`middleware`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `middleware` | [`TrackMiddleware`](TrackMiddleware.md) |

#### Returns

`Promise`\<`void`\>

### startMicrophone()

> **startMicrophone**: (...`args`) => `Promise`\<\[[`MediaStreamTrack`](../classes/MediaStreamTrack.md), `null`\] \| \[`null`, [`DeviceError`](DeviceError.md)\]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Parameters`\<`ReturnType`\<*typeof* `useMicrophoneReactClient`\>\[`"startMicrophone"`\]\> |

#### Returns

`Promise`\<\[[`MediaStreamTrack`](../classes/MediaStreamTrack.md), `null`\] \| \[`null`, [`DeviceError`](DeviceError.md)\]\>
