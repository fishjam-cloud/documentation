# fishjam-react-native

Runs video effects on Fishjam's own React Native camera track. Hand the raw camera track from
`useCamera`'s middleware to [createCameraFrameProcessorSession](functions/createCameraFrameProcessorSession.md); it renders your frame
kernel on the GPU and republishes the result as the peer's camera track.

Requires `@fishjam-cloud/react-native-webrtc`, `react-native-webgpu`, `react-native-worklets` and
`@fishjam-cloud/react-native-worklets` in the app.

## Interfaces

- [CameraEffectMiddlewareOptions](interfaces/CameraEffectMiddlewareOptions.md)
- [CameraFrameInfo](interfaces/CameraFrameInfo.md)
- [CameraFrameProcessorSession](interfaces/CameraFrameProcessorSession.md)
- [CameraPassthroughPipelineOptions](interfaces/CameraPassthroughPipelineOptions.md)
- [CreateCameraFrameProcessorSessionOptions](interfaces/CreateCameraFrameProcessorSessionOptions.md)
- [CreateCameraShaderBindingsOptions](interfaces/CreateCameraShaderBindingsOptions.md)
- [CreateCameraTextureResolverOptions](interfaces/CreateCameraTextureResolverOptions.md)
- [FishjamCameraEffectOptions](interfaces/FishjamCameraEffectOptions.md)
- [FishjamCameraEffectResult](interfaces/FishjamCameraEffectResult.md)
- [UseCameraWebGpuDeviceResult](interfaces/UseCameraWebGpuDeviceResult.md)

## Type Aliases

- [CameraFrameKernel](type-aliases/CameraFrameKernel.md)
- [SampleCameraFn](type-aliases/SampleCameraFn.md)

## Functions

- [createCameraEffectMiddleware](functions/createCameraEffectMiddleware.md)
- [createCameraFrameProcessorSession](functions/createCameraFrameProcessorSession.md)
- [getCameraWebGpuDevice](functions/getCameraWebGpuDevice.md)
- [useFishjamCameraEffect](functions/useFishjamCameraEffect.md)

## WebGPU

- [computeAspectFillCrop](functions/computeAspectFillCrop.md)
- [createCameraBindGroup](functions/createCameraBindGroup.md)
- [createCameraPassthroughPipeline](functions/createCameraPassthroughPipeline.md)
- [createCameraShaderBindings](functions/createCameraShaderBindings.md)
- [createCameraTextureResolver](functions/createCameraTextureResolver.md)
- [encodeCameraPassthrough](functions/encodeCameraPassthrough.md)
- [getOutputSurfaceFormat](functions/getOutputSurfaceFormat.md)
- [getRequiredWebGpuCameraFeatures](functions/getRequiredWebGpuCameraFeatures.md)
- [resolveCameraTexture](functions/resolveCameraTexture.md)
- [useCameraWebGpuDevice](functions/useCameraWebGpuDevice.md)
- [CameraPassthroughPipeline](interfaces/CameraPassthroughPipeline.md)
- [CameraShaderBindings](interfaces/CameraShaderBindings.md)
- [CameraTextureResolver](interfaces/CameraTextureResolver.md)
- [FrameCrop](interfaces/FrameCrop.md)
- [WebGpuFrameRenderContext](interfaces/WebGpuFrameRenderContext.md)
- [CameraPixelLayout](type-aliases/CameraPixelLayout.md)
- [WebGpuFrameRenderFunction](type-aliases/WebGpuFrameRenderFunction.md)
