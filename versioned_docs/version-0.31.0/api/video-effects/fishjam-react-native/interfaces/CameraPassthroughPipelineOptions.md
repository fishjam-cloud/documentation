# Interface: CameraPassthroughPipelineOptions

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:80](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L80)

Options for [createCameraPassthroughPipeline](../functions/createCameraPassthroughPipeline.md).

## Properties

### cameraPixelLayout

> **cameraPixelLayout**: [`CameraPixelLayout`](../type-aliases/CameraPixelLayout.md)

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:82](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L82)

How the camera texture's samples are laid out; see [CameraPixelLayout](../type-aliases/CameraPixelLayout.md).

***

### mirror?

> `optional` **mirror**: `boolean`

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:86](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L86)

Mirror the camera horizontally (the usual selfie self-view convention). Defaults to `false`.

***

### outputFormat?

> `optional` **outputFormat**: `GPUTextureFormat`

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:84](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L84)

Render-target format. Defaults to [getOutputSurfaceFormat](../functions/getOutputSurfaceFormat.md) (the Fishjam output surface).
