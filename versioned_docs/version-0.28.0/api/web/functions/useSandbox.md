# Function: useSandbox()

> **useSandbox**(`props`): `object`

Defined in: [react-client/src/hooks/useSandbox.ts:19](https://github.com/fishjam-cloud/web-client-sdk/blob/29d7e58d0e8147d691a9a39b74b9b4529ab32c98/packages/react-client/src/hooks/useSandbox.ts#L19)

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
