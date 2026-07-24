# Interface: CameraPassthroughPipelineOptions

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:65](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L65)

Options for [createCameraPassthroughPipeline](../functions/createCameraPassthroughPipeline.md).

## Properties

### mirror?

> `optional` **mirror**: `boolean`

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:69](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L69)

Mirror the camera horizontally (the usual selfie self-view convention). Defaults to `false`.

***

### outputFormat?

> `optional` **outputFormat**: `GPUTextureFormat`

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:67](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L67)

Render-target format. Defaults to [getOutputSurfaceFormat](../functions/getOutputSurfaceFormat.md) (the Fishjam output surface).
