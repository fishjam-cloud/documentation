# Function: useCameraWebGpuDeviceWithOverride()

> **useCameraWebGpuDeviceWithOverride**(`override`): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:97](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L97)

Device resolution for the source hook: the user-provided override (validated) when present,
otherwise the shared device. Always called, so hook order stays stable either way.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `override` | `undefined` \| `GPUDevice` |

## Returns

[`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)
