# Interface: UseCameraWebGpuDeviceResult

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:49](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L49)

Result of [useCameraWebGpuDevice](../functions/useCameraWebGpuDevice.md).

## Properties

### device

> **device**: `null` \| `GPUDevice`

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:51](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L51)

The shared GPUDevice; `null` until acquisition resolves.

***

### error

> **error**: `null` \| `Error`

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:53](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L53)

Acquisition failure (no adapter, missing platform features), if any.
