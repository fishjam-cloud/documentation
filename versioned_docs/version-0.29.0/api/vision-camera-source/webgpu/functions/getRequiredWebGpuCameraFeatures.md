# Function: getRequiredWebGpuCameraFeatures()

> **getRequiredWebGpuCameraFeatures**(): `GPUFeatureName`[]

Defined in: react-native-custom-video-source/dist/typescript/webgpu/requiredFeatures.d.ts:8

The GPU features a device must have to import camera frames and Fishjam output surfaces on this
platform. [useCameraWebGpuDevice](useCameraWebGpuDevice.md) requests them for you; pass them yourself as
`requiredFeatures` in `GPUDeviceDescriptor` when you bring your own device.

## Returns

`GPUFeatureName`[]
