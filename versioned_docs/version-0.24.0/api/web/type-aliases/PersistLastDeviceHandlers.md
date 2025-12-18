# Type Alias: PersistLastDeviceHandlers

> **PersistLastDeviceHandlers** = `object`

Defined in: [react-client/src/types/public.ts:48](https://github.com/fishjam-cloud/web-client-sdk/blob/107b6ffadabe4f3f1c2f36f2cea7ac93db908c8c/packages/react-client/src/types/public.ts#L48)

## Properties

### getLastDevice()

> **getLastDevice**: (`deviceType`) => `MediaDeviceInfo` \| `null`

Defined in: [react-client/src/types/public.ts:49](https://github.com/fishjam-cloud/web-client-sdk/blob/107b6ffadabe4f3f1c2f36f2cea7ac93db908c8c/packages/react-client/src/types/public.ts#L49)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`MediaDeviceInfo` \| `null`

***

### saveLastDevice()

> **saveLastDevice**: (`info`, `deviceType`) => `void`

Defined in: [react-client/src/types/public.ts:50](https://github.com/fishjam-cloud/web-client-sdk/blob/107b6ffadabe4f3f1c2f36f2cea7ac93db908c8c/packages/react-client/src/types/public.ts#L50)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | `MediaDeviceInfo` |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`void`
