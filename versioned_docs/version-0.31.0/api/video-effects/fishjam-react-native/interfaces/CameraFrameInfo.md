# Interface: CameraFrameInfo

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:42](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L42)

What the per-frame worklet needs to know about the camera frame beyond the GPU textures the
render context already carries: its timestamp, which camera produced it, and its dimensions.
A plain object so it copies into the frame runtime.

## Properties

### height

> `readonly` **height**: `number`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:48](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L48)

***

### isFrontCamera

> `readonly` **isFrontCamera**: `boolean`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:46](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L46)

Whether the frame came from the front (self-view) camera.

***

### rotationDegrees

> `readonly` **rotationDegrees**: `0` \| `90` \| `180` \| `270`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:50](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L50)

Clockwise rotation applied to bring the frame upright at import.

***

### timestampNanoseconds

> `readonly` **timestampNanoseconds**: `number`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:44](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L44)

Presentation timestamp of this frame, in nanoseconds.

***

### width

> `readonly` **width**: `number`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:47](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L47)
