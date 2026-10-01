# Interface: UseCameraWebGpuDeviceResult

Defined in: [react-native/webgpu/useCameraWebGpuDevice.ts:56](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/useCameraWebGpuDevice.ts#L56)

Result of [useCameraWebGpuDevice](../functions/useCameraWebGpuDevice.md).

## Properties

### device

> **device**: `null` \| `GPUDevice`

Defined in: [react-native/webgpu/useCameraWebGpuDevice.ts:58](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/useCameraWebGpuDevice.ts#L58)

The shared GPUDevice; `null` until acquisition resolves.

***

### error

> **error**: `null` \| `Error`

Defined in: [react-native/webgpu/useCameraWebGpuDevice.ts:60](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/useCameraWebGpuDevice.ts#L60)

Acquisition failure (no adapter, missing platform features), if any.
