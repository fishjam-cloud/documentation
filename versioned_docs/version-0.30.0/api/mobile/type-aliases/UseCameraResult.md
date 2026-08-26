# Type Alias: UseCameraResult

> **UseCameraResult** = `Omit`\<`ReturnType`\<*typeof* `useCameraReactClient`\>, `"cameraStream"` \| `"startCamera"` \| `"currentCameraMiddleware"` \| `"setCameraTrackMiddleware"`\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:53](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/overrides/types.ts#L53)

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
