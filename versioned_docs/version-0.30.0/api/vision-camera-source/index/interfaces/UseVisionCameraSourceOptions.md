# Interface: UseVisionCameraSourceOptions

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:24](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L24)

Options for [useVisionCameraSource](../functions/useVisionCameraSource.md). Also accepts every VisionCamera frame-output option
(`targetResolution`, `pixelFormat`, `dropFramesWhileBusy`, and so on) and passes it through.

## Extends

- `Partial`\<`FrameOutputOptions`\>

## Properties

### enabled?

> `optional` **enabled**: `boolean`

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:29](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L29)

Whether the source is live. While `false`, no track exists and nothing is published — the
declarative sibling of VisionCamera's `isActive`. Defaults to `true`.

***

### frameIntervalNanoseconds?

> `optional` **frameIntervalNanoseconds**: `number`

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:46](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L46)

Fallback spacing between published frames, in nanoseconds, used only when a camera frame
carries no usable timestamp. Defaults to 33,333,333 (30 fps).

***

### onFrame()?

> `optional` **onFrame**: (`frame`) => `void`

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:39](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L39)

Optional worklet called with every camera frame, after the frame has been sent to Fishjam —
run your frame-processor plugins (pose detection, OCR, …) here.

The frame is valid only for the duration of this synchronous callback; the hook releases it
when the callback returns, so do not retain it. Keep the function's identity stable
(`useCallback` or module scope) — a new function every render forces VisionCamera to
re-register the frame callback.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `frame` | `Frame` |

#### Returns

`void`

***

### onFrameDropped()?

> `optional` **onFrameDropped**: (`reason`) => `void`

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:41](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L41)

Called whenever the camera pipeline drops a frame; forwarded to VisionCamera.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason` | `FrameDroppedReason` |

#### Returns

`void`
