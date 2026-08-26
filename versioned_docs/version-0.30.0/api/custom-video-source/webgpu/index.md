# webgpu

WebGPU camera toolkit — sample the live camera and render your own content into the video you
publish with `useManagedPooledTrack` (from the package's main entry point). Requires `react-native-webgpu` (an optional peer of
this package; only this entry point loads it).

- [createCameraShaderBindings](functions/createCameraShaderBindings.md) — sample the live camera from your own shaders via
  `sampleCamera(uv)`, with the platform's YUV decode handled for you.
- [createCameraPassthroughPipeline](functions/createCameraPassthroughPipeline.md) / [encodeCameraPassthrough](functions/encodeCameraPassthrough.md) — a ready-made
  camera→output pass to publish the camera with zero WGSL, or to build overlays on.
- [createCameraTextureResolver](functions/createCameraTextureResolver.md) — opt-in plain-texture camera for pipelines that can't
  sample `texture_external`.
- [useCameraWebGpuDevice](functions/useCameraWebGpuDevice.md) — the shared, camera-import-capable GPUDevice.

## Interfaces

- [CameraPassthroughPipelineOptions](interfaces/CameraPassthroughPipelineOptions.md)
- [CreateCameraShaderBindingsOptions](interfaces/CreateCameraShaderBindingsOptions.md)
- [UseCameraWebGpuDeviceResult](interfaces/UseCameraWebGpuDeviceResult.md)

## Type Aliases

- [WebGpuRuntime](type-aliases/WebGpuRuntime.md)

## Functions

- [getWebGpuRuntime](functions/getWebGpuRuntime.md)
- [useCameraWebGpuDeviceWithOverride](functions/useCameraWebGpuDeviceWithOverride.md)

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
