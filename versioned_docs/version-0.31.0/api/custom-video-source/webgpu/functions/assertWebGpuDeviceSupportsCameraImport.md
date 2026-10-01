# Function: assertWebGpuDeviceSupportsCameraImport()

> **assertWebGpuDeviceSupportsCameraImport**(`device`): `void`

Defined in: [src/webgpu/requiredFeatures.ts:31](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/requiredFeatures.ts#L31)

Throws a descriptive error when `device` is missing any feature required to import camera
frames or Fishjam output surfaces on this platform. Called automatically on devices passed as
an override; call it yourself to validate a device early.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |

## Returns

`void`
