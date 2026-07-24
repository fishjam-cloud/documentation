# Interface: CameraPassthroughPipelineOptions

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:4

Options for [createCameraPassthroughPipeline](../functions/createCameraPassthroughPipeline.md).

## Properties

### mirror?

> `optional` **mirror**: `boolean`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:8

Mirror the camera horizontally (the usual selfie self-view convention). Defaults to `false`.

***

### outputFormat?

> `optional` **outputFormat**: `GPUTextureFormat`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:6

Render-target format. Defaults to [getOutputSurfaceFormat](../functions/getOutputSurfaceFormat.md) (the Fishjam output surface).
