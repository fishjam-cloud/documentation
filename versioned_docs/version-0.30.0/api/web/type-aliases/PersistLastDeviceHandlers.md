# Type Alias: PersistLastDeviceHandlers

> **PersistLastDeviceHandlers** = `object`

Defined in: [react-client/src/types/public.ts:60](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-client/src/types/public.ts#L60)

## Properties

### getLastDevice()

> **getLastDevice**: (`deviceType`) => `MediaDeviceInfo` \| `null`

Defined in: [react-client/src/types/public.ts:61](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-client/src/types/public.ts#L61)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`MediaDeviceInfo` \| `null`

***

### saveLastDevice()

> **saveLastDevice**: (`info`, `deviceType`) => `void`

Defined in: [react-client/src/types/public.ts:62](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-client/src/types/public.ts#L62)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | `MediaDeviceInfo` |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`void`
