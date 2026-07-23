# Function: useCameraWebGpuDeviceWithOverride()

> **useCameraWebGpuDeviceWithOverride**(`override`): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:97](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L97)

Device resolution for the source hook: the user-provided override (validated) when present,
otherwise the shared device. Always called, so hook order stays stable either way.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `override` | `undefined` \| `GPUDevice` |

## Returns

[`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)
