# Function: useSandbox()

> **useSandbox**(`__namedParameters`): `object`

Defined in: [packages/react-native-client/src/hooks/useSandbox.ts:17](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useSandbox.ts#L17)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`UseSandboxProps`](../type-aliases/UseSandboxProps.md) |

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
| `roomType` | [`RoomType`](../type-aliases/RoomType.md) | `'conference'` |

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
