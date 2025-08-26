# Function: useConnection()

> **useConnection**(): `object`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:87](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useConnection.ts#L87)

Connect/leave room. And get connection status.

## Returns

### joinRoom()

> **joinRoom**: \<`PeerMetadata`\>(`__namedParameters`) => `Promise`\<`void`\>

Join room and start streaming camera and microphone

See [JoinRoomConfig](../type-aliases/JoinRoomConfig.md) for parameter list

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* [`GenericMetadata`](../type-aliases/GenericMetadata.md) | [`GenericMetadata`](../type-aliases/GenericMetadata.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`JoinRoomConfig`](../type-aliases/JoinRoomConfig.md)\<`PeerMetadata`\> |

#### Returns

`Promise`\<`void`\>

### leaveRoom()

> **leaveRoom**: () => `void`

Leave room and stop streaming

#### Returns

`void`

### peerStatus

> **peerStatus**: [`PeerStatus`](../type-aliases/PeerStatus.md)

### reconnectionStatus

> **reconnectionStatus**: [`ReconnectionStatus`](../type-aliases/ReconnectionStatus.md)
