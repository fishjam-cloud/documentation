# Interface: CameraFrameProcessorSession

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:86](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L86)

## Properties

### track

> `readonly` **track**: `MediaStreamTrack`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:88](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L88)

The pooled, effect-rendered video track to hand back from the camera track middleware.

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:90](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L90)

Detaches the camera tap and frees the pool. Idempotent.

#### Returns

`Promise`\<`void`\>
