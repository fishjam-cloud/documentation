# Function: useSandbox()

> **useSandbox**(`props`): `object`

Defined in: [react-client/src/hooks/useSandbox.ts:34](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-client/src/hooks/useSandbox.ts#L34)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`UseSandboxProps`](../type-aliases/UseSandboxProps.md) |

## Returns

`object`

### getSandboxLivestream()

> **getSandboxLivestream**: (`roomName`, `isPublic`, `options`) => `Promise`\<\{ `room`: \{ `id`: `string`; `name`: `string`; \}; `streamerToken`: `string`; \}\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `roomName` | `string` | `undefined` |
| `isPublic` | `boolean` | `false` |
| `options` | [`SandboxOptions`](../type-aliases/SandboxOptions.md) | `{}` |

#### Returns

`Promise`\<\{ `room`: \{ `id`: `string`; `name`: `string`; \}; `streamerToken`: `string`; \}\>

### getSandboxMoqPublisherAccess()

> **getSandboxMoqPublisherAccess**: (`streamName`) => `Promise`\<[`MoqAccess`](../type-aliases/MoqAccess.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `streamName` | `string` |

#### Returns

`Promise`\<[`MoqAccess`](../type-aliases/MoqAccess.md)\>

### getSandboxMoqSubscriberAccess()

> **getSandboxMoqSubscriberAccess**: (`streamName`) => `Promise`\<[`MoqAccess`](../type-aliases/MoqAccess.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `streamName` | `string` |

#### Returns

`Promise`\<[`MoqAccess`](../type-aliases/MoqAccess.md)\>

### getSandboxPeerToken()

> **getSandboxPeerToken**: (`roomName`, `peerName`, `roomType`, `options`) => `Promise`\<`string`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `roomName` | `string` | `undefined` |
| `peerName` | `string` | `undefined` |
| `roomType` | [`RoomType`](../type-aliases/RoomType.md) | `"conference"` |
| `options` | [`SandboxOptions`](../type-aliases/SandboxOptions.md) | `{}` |

#### Returns

`Promise`\<`string`\>

### getSandboxViewerToken()

> **getSandboxViewerToken**: (`roomName`) => `Promise`\<`string`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomName` | `string` |

#### Returns

`Promise`\<`string`\>
