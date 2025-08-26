# Type Alias: PersistLastDeviceHandlers

> **PersistLastDeviceHandlers** = `object`

Defined in: [packages/react-client/src/types/public.ts:48](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/types/public.ts#L48)

## Properties

### getLastDevice()

> **getLastDevice**: (`deviceType`) => `MediaDeviceInfo` \| `null`

Defined in: [packages/react-client/src/types/public.ts:49](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/types/public.ts#L49)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`MediaDeviceInfo` \| `null`

***

### saveLastDevice()

> **saveLastDevice**: (`info`, `deviceType`) => `void`

Defined in: [packages/react-client/src/types/public.ts:50](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/types/public.ts#L50)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | `MediaDeviceInfo` |
| `deviceType` | `"audio"` \| `"video"` |

#### Returns

`void`
