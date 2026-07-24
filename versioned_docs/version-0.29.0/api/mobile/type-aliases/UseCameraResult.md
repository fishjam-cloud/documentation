# Type Alias: UseCameraResult

> **UseCameraResult** = `Omit`\<`ReturnType`\<*typeof* `useCameraReactClient`\>, `"cameraStream"` \| `"startCamera"` \| `"currentCameraMiddleware"` \| `"setCameraTrackMiddleware"`\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:53](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/overrides/types.ts#L53)

## Type declaration

### cameraStream

> **cameraStream**: [`MediaStream`](../classes/MediaStream.md) \| `null`

### currentCameraMiddleware

> **currentCameraMiddleware**: [`TrackMiddleware`](TrackMiddleware.md)

### setCameraTrackMiddleware()

> **setCameraTrackMiddleware**: (`middleware`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `middleware` | [`TrackMiddleware`](TrackMiddleware.md) |

#### Returns

`Promise`\<`void`\>

### startCamera()

> **startCamera**: (...`args`) => `Promise`\<\[[`MediaStreamTrack`](../classes/MediaStreamTrack.md), `null`\] \| \[`null`, [`DeviceError`](DeviceError.md)\]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Parameters`\<`ReturnType`\<*typeof* `useCameraReactClient`\>\[`"startCamera"`\]\> |

#### Returns

`Promise`\<\[[`MediaStreamTrack`](../classes/MediaStreamTrack.md), `null`\] \| \[`null`, [`DeviceError`](DeviceError.md)\]\>
