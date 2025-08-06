# Class: FishjamClient

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:12](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L12)

Client class that allows to manage Rooms and Peers for a Fishjam App.
It requires the Fishjam URL and management token that can be retrieved from the Fishjam Dashboard.

## Constructors

### Constructor

> **new FishjamClient**(`config`): `FishjamClient`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:28](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L28)

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

### createLivestreamStreamerToken()

> **createLivestreamStreamerToken**(`roomId`): `Promise`\<[`StreamerToken`](../interfaces/StreamerToken.md)\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:161](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L161)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:148](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L148)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:89](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L89)

Create a new peer assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | `PeerOptionsWebRTC` |

#### Returns

`Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); `peerToken`: `string`; \}\>

***

### createRoom()

> **createRoom**(`config`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:45](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L45)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:122](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L122)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:66](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L66)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:77](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L77)

Get a list of all existing rooms.

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)[]\>

***

### getRoom()

> **getRoom**(`roomId`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:109](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L109)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/client.ts:135](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/client.ts#L135)

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
