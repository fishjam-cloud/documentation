# Class: FishjamClient

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:13](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L13)

Client class that allows to manage Rooms and Peers for a Fishjam App.
It requires the Fishjam URL and management token that can be retrieved from the Fishjam Dashboard.

## Constructors

### Constructor

> **new FishjamClient**(`config`): `FishjamClient`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:30](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L30)

Create new instance of Fishjam Client.

Example usage:
```
const fishjamClient = new FishjamClient({
  fishjamUrl: fastify.config.FISHJAM_URL,
  managementToken: fastify.config.FISHJAM_MANAGEMENT_TOKEN,
});
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`FishjamConfig`](../type-aliases/FishjamConfig.md) |

#### Returns

`FishjamClient`

## Methods

### createAgent()

> **createAgent**(`roomId`, `options`, `onError`, `onClose`): `Promise`\<\{ `agent`: [`FishjamAgent`](FishjamAgent.md); `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:110](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L110)

Create a new agent assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | [`PeerOptions`](../type-aliases/PeerOptions.md) |
| `onError` | [`ErrorEventHandler`](../type-aliases/ErrorEventHandler.md) |
| `onClose` | [`CloseEventHandler`](../type-aliases/CloseEventHandler.md) |

#### Returns

`Promise`\<\{ `agent`: [`FishjamAgent`](FishjamAgent.md); `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

***

### createLivestreamStreamerToken()

> **createLivestreamStreamerToken**(`roomId`): `Promise`\<[`StreamerToken`](../interfaces/StreamerToken.md)\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:187](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L187)

Creates a livestream streamer token for the given room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<[`StreamerToken`](../interfaces/StreamerToken.md)\>

a livestream streamer token

***

### createLivestreamViewerToken()

> **createLivestreamViewerToken**(`roomId`): `Promise`\<[`ViewerToken`](../interfaces/ViewerToken.md)\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:174](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L174)

Creates a livestream viewer token for the given room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<[`ViewerToken`](../interfaces/ViewerToken.md)\>

a livestream viewer token

***

### createPeer()

> **createPeer**(`roomId`, `options`): `Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); `peerToken`: `string`; \}\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:90](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L90)

Create a new peer assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | [`PeerOptions`](../type-aliases/PeerOptions.md) |

#### Returns

`Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); `peerToken`: `string`; \}\>

***

### createRoom()

> **createRoom**(`config`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:48](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L48)

Create a new room. All peers connected to the same room will be able to send/receive streams to each other.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`RoomConfig`](../interfaces/RoomConfig.md) |

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)\>

***

### deletePeer()

> **deletePeer**(`roomId`, `peerId`): `Promise`\<`void`\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:148](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L148)

Delete a peer - this will also disconnect the peer from the room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `peerId` | [`PeerId`](../type-aliases/PeerId.md) |

#### Returns

`Promise`\<`void`\>

***

### deleteRoom()

> **deleteRoom**(`roomId`): `Promise`\<`void`\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:67](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L67)

Delete an existing room. All peers connected to this room will be disconnected and removed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<`void`\>

***

### getAllRooms()

> **getAllRooms**(): `Promise`\<[`Room`](../type-aliases/Room.md)[]\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:78](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L78)

Get a list of all existing rooms.

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)[]\>

***

### getRoom()

> **getRoom**(`roomId`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:136](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L136)

Get details about a given room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)\>

***

### refreshPeerToken()

> **refreshPeerToken**(`roomId`, `peerId`): `Promise`\<`string`\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:161](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/client.ts#L161)

Refresh the peer token for an already existing peer.
If an already created peer has not been connected to the room for more than 24 hours, the token will become invalid. This method can be used to generate a new peer token for the existing peer.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `peerId` | [`PeerId`](../type-aliases/PeerId.md) |

#### Returns

`Promise`\<`string`\>

refreshed peer token
