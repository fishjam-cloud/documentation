# Function: useSandbox()

> **useSandbox**(`props`): `object`

Defined in: [react-client/src/hooks/useSandbox.ts:29](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/useSandbox.ts#L29)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`UseSandboxProps`](../type-aliases/UseSandboxProps.md) |

## Returns

`object`

### getSandboxLivestream()

> **getSandboxLivestream**: (`roomName`, `isPublic`) => `Promise`\<\{ `room`: \{ `id`: `string`; `name`: `string`; \}; `streamerToken`: `string`; \}\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `roomName` | `string` | `undefined` |
| `isPublic` | `boolean` | `false` |

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

> **getSandboxPeerToken**: (`roomName`, `peerName`, `roomType`) => `Promise`\<`string`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `roomName` | `string` | `undefined` |
| `peerName` | `string` | `undefined` |
| `roomType` | [`RoomType`](../type-aliases/RoomType.md) | `"conference"` |

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
