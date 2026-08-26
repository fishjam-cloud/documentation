# Interface: UseCameraWebGpuDeviceResult

Defined in: react-native-custom-video-source/dist/typescript/webgpu/useCameraWebGpuDevice.d.ts:2

Result of [useCameraWebGpuDevice](../functions/useCameraWebGpuDevice.md).

## Properties

### device

> **device**: `null` \| `GPUDevice`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/useCameraWebGpuDevice.d.ts:4

The shared GPUDevice; `null` until acquisition resolves.

***

### error

> **error**: `null` \| `Error`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/useCameraWebGpuDevice.d.ts:6

Acquisition failure (no adapter, missing platform features), if any.
