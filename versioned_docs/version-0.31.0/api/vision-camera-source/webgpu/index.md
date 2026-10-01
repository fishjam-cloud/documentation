# webgpu

WebGPU tier of the VisionCamera → Fishjam adapter — render your own content into the published
video. Requires `react-native-webgpu` (an optional peer of this package; only this entry point
loads it).

- [useVisionCameraWebGpuSource](functions/useVisionCameraWebGpuSource.md) — the source hook: camera in, your WebGPU passes,
  published video out.
- Re-exports the WebGPU camera toolkit from
  `@fishjam-cloud/react-native-custom-video-source/webgpu` — `createCameraShaderBindings` /
  `sampleCamera`, `createCameraPassthroughPipeline`, the cropping helpers, the shared
  camera-import device, and so on — so you can build your shaders alongside the hook.

## Interfaces

- [CameraPassthroughPipelineOptions](interfaces/CameraPassthroughPipelineOptions.md)
- [CreateCameraShaderBindingsOptions](interfaces/CreateCameraShaderBindingsOptions.md)
- [UseCameraWebGpuDeviceResult](interfaces/UseCameraWebGpuDeviceResult.md)
- [UseVisionCameraWebGpuSourceOptions](interfaces/UseVisionCameraWebGpuSourceOptions.md)
- [UseVisionCameraWebGpuSourceResult](interfaces/UseVisionCameraWebGpuSourceResult.md)

## Type Aliases

- [WebGpuRuntime](type-aliases/WebGpuRuntime.md)

## Functions

- [getWebGpuRuntime](functions/getWebGpuRuntime.md)
- [useCameraWebGpuDeviceWithOverride](functions/useCameraWebGpuDeviceWithOverride.md)

## Hooks

- [useVisionCameraWebGpuSource](functions/useVisionCameraWebGpuSource.md)

## WebGPU

- [assertWebGpuDeviceSupportsCameraImport](functions/assertWebGpuDeviceSupportsCameraImport.md)
- [computeAspectFillCrop](functions/computeAspectFillCrop.md)
- [computeSquareCrop](functions/computeSquareCrop.md)
- [createCameraBindGroup](functions/createCameraBindGroup.md)
- [createCameraPassthroughPipeline](functions/createCameraPassthroughPipeline.md)
- [createCameraShaderBindings](functions/createCameraShaderBindings.md)
- [createCameraTextureResolver](functions/createCameraTextureResolver.md)
- [encodeCameraPassthrough](functions/encodeCameraPassthrough.md)
- [getOutputSurfaceFormat](functions/getOutputSurfaceFormat.md)
- [getRequiredWebGpuCameraFeatures](functions/getRequiredWebGpuCameraFeatures.md)
- [packFrameCropParams](functions/packFrameCropParams.md)
- [resolveCameraTexture](functions/resolveCameraTexture.md)
- [useCameraWebGpuDevice](functions/useCameraWebGpuDevice.md)
- [CameraPassthroughPipeline](interfaces/CameraPassthroughPipeline.md)
- [CameraShaderBindings](interfaces/CameraShaderBindings.md)
- [CameraTextureResolver](interfaces/CameraTextureResolver.md)
- [FrameCrop](interfaces/FrameCrop.md)
- [WebGpuFrameRenderContext](interfaces/WebGpuFrameRenderContext.md)
- [WebGpuFrameRenderFunction](type-aliases/WebGpuFrameRenderFunction.md)
- [FrameCropParams](variables/FrameCropParams.md)
- [sampleCamera](variables/sampleCamera.md)
