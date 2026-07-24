# Interface: UseVisionCameraSourceResult

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:50](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L50)

Result of [useVisionCameraSource](../functions/useVisionCameraSource.md).

## Properties

### error

> **error**: `null` \| `Error`

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:62](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L62)

Failure while creating the underlying track, if any.

***

### frameOutput

> **frameOutput**: `CameraFrameOutput`

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:55](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L55)

The VisionCamera frame output driving this source. Plug it into your camera session:
`useCamera({ device, isActive, outputs: [frameOutput] })`.

***

### stream

> **stream**: `null` \| `MediaStream`

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:60](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L60)

The published stream — render it with `RTCView` for a self-view. `null` until the
underlying track is ready (creation is asynchronous).
