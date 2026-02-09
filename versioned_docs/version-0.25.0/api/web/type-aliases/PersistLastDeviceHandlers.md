# Type Alias: PersistLastDeviceHandlers

> **PersistLastDeviceHandlers** = `object`

Defined in: [react-client/src/types/public.ts:54](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L54)

## Properties

### getLastDevice()

> **getLastDevice**: (`deviceType`) => `MediaDeviceInfo` \| `null`

Defined in: [react-client/src/types/public.ts:55](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L55)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`MediaDeviceInfo` \| `null`

***

### saveLastDevice()

> **saveLastDevice**: (`info`, `deviceType`) => `void`

Defined in: [react-client/src/types/public.ts:56](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L56)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | `MediaDeviceInfo` |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`void`
