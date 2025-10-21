# Function: useSandbox()

> **useSandbox**(`props?`): `object`

Defined in: [packages/react-client/src/hooks/useSandbox.ts:19](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/useSandbox.ts#L19)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | [`UseSandboxProps`](../type-aliases/UseSandboxProps.md) |

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
