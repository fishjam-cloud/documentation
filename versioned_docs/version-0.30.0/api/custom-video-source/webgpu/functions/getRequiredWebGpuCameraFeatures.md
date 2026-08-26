# Function: getRequiredWebGpuCameraFeatures()

> **getRequiredWebGpuCameraFeatures**(): `GPUFeatureName`[]

Defined in: [src/webgpu/requiredFeatures.ts:20](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/requiredFeatures.ts#L20)

The GPU features a device must have to import camera frames and Fishjam output surfaces on this
platform. [useCameraWebGpuDevice](useCameraWebGpuDevice.md) requests them for you; pass them yourself as
`requiredFeatures` in `GPUDeviceDescriptor` when you bring your own device.

## Returns

`GPUFeatureName`[]
