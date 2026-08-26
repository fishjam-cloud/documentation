# Variable: useSandbox()

> `const` **useSandbox**: (`props`) => `object`

Defined in: react-client/dist/hooks/useSandbox.d.ts:9

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`UseSandboxProps`](../type-aliases/UseSandboxProps.md) |

## Returns

`object`

### getSandboxLivestream()

> **getSandboxLivestream**: (`roomName`, `isPublic?`) => `Promise`\<\{ `room`: \{ `id`: `string`; `name`: `string`; \}; `streamerToken`: `string`; \}\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomName` | `string` |
| `isPublic?` | `boolean` |

#### Returns

`Promise`\<\{ `room`: \{ `id`: `string`; `name`: `string`; \}; `streamerToken`: `string`; \}\>

### getSandboxMoqPublisherAccess()

> **getSandboxMoqPublisherAccess**: (`streamName`) => `Promise`\<`MoqAccess`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `streamName` | `string` |

#### Returns

`Promise`\<`MoqAccess`\>

### getSandboxMoqSubscriberAccess()

> **getSandboxMoqSubscriberAccess**: (`streamName`) => `Promise`\<`MoqAccess`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `streamName` | `string` |

#### Returns

`Promise`\<`MoqAccess`\>

### getSandboxPeerToken()

> **getSandboxPeerToken**: (`roomName`, `peerName`, `roomType?`) => `Promise`\<`string`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomName` | `string` |
| `peerName` | `string` |
| `roomType?` | [`RoomType`](../type-aliases/RoomType.md) |

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
