# Function: useCameraWebGpuDeviceWithOverride()

> **useCameraWebGpuDeviceWithOverride**(`override`): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:97](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L97)

Device resolution for the source hook: the user-provided override (validated) when present,
otherwise the shared device. Always called, so hook order stays stable either way.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `override` | `undefined` \| `GPUDevice` |

## Returns

[`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)
