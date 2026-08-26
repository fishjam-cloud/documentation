# Interface: UseCameraWebGpuDeviceResult

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:49](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L49)

Result of [useCameraWebGpuDevice](../functions/useCameraWebGpuDevice.md).

## Properties

### device

> **device**: `null` \| `GPUDevice`

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:51](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L51)

The shared GPUDevice; `null` until acquisition resolves.

***

### error

> **error**: `null` \| `Error`

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:53](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L53)

Acquisition failure (no adapter, missing platform features), if any.
