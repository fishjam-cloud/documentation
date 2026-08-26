# Function: useConnection()

> **useConnection**(): `object`

Defined in: [react-client/src/hooks/useConnection.ts:26](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-client/src/hooks/useConnection.ts#L26)

Hook allows to join or leave a room and check the current connection status.

## Returns

### joinRoom()

> **joinRoom**: \<`PeerMetadata`\>(`__namedParameters`) => `Promise`\<`void`\>

Join room and start streaming camera and microphone

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* `GenericMetadata` | `GenericMetadata` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`JoinRoomConfig`](../interfaces/JoinRoomConfig.md)\<`PeerMetadata`\> |

#### Returns

`Promise`\<`void`\>

### leaveRoom()

> **leaveRoom**: () => `void`

Leave room and stop streaming

#### Returns

`void`

### peerStatus

> **peerStatus**: [`PeerStatus`](../type-aliases/PeerStatus.md)

Current peer connection status

### reconnectionStatus

> **reconnectionStatus**: [`ReconnectionStatus`](../type-aliases/ReconnectionStatus.md)

Current reconnection status
