# Type Alias: PersistLastDeviceHandlers

> **PersistLastDeviceHandlers** = `object`

Defined in: [react-client/src/types/public.ts:57](https://github.com/fishjam-cloud/web-client-sdk/blob/29d7e58d0e8147d691a9a39b74b9b4529ab32c98/packages/react-client/src/types/public.ts#L57)

## Properties

### getLastDevice()

> **getLastDevice**: (`deviceType`) => `MediaDeviceInfo` \| `null`

Defined in: [react-client/src/types/public.ts:58](https://github.com/fishjam-cloud/web-client-sdk/blob/29d7e58d0e8147d691a9a39b74b9b4529ab32c98/packages/react-client/src/types/public.ts#L58)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`MediaDeviceInfo` \| `null`

***

### saveLastDevice()

> **saveLastDevice**: (`info`, `deviceType`) => `void`

Defined in: [react-client/src/types/public.ts:59](https://github.com/fishjam-cloud/web-client-sdk/blob/29d7e58d0e8147d691a9a39b74b9b4529ab32c98/packages/react-client/src/types/public.ts#L59)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | `MediaDeviceInfo` |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`void`
