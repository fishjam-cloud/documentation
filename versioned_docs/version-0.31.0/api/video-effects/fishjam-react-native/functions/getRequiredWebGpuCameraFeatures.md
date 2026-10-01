# Function: getRequiredWebGpuCameraFeatures()

> **getRequiredWebGpuCameraFeatures**(): `GPUFeatureName`[]

Defined in: [react-native/webgpu/requiredFeatures.ts:26](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/requiredFeatures.ts#L26)

The GPU features a device must have to import camera frames and Fishjam output surfaces on this
platform. [useCameraWebGpuDevice](useCameraWebGpuDevice.md) requests them for you; pass them yourself as
`requiredFeatures` in `GPUDeviceDescriptor` when you bring your own device.

## Returns

`GPUFeatureName`[]
