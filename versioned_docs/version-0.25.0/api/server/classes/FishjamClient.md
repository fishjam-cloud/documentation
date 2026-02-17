# Class: FishjamClient

Defined in: [js-server-sdk/src/client.ts:21](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L21)

Client class that allows to manage Rooms and Peers for a Fishjam App.
It requires the Fishjam ID and management token that can be retrieved from the Fishjam Dashboard.

## Constructors

### Constructor

> **new FishjamClient**(`config`): `FishjamClient`

Defined in: [js-server-sdk/src/client.ts:39](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L39)

Create new instance of Fishjam Client.

Example usage:
```
const fishjamClient = new FishjamClient({
  fishjamId: fastify.config.FISHJAM_ID,
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

> **createAgent**(`roomId`, `options`, `callbacks?`): `Promise`\<\{ `agent`: [`FishjamAgent`](FishjamAgent.md); `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

Defined in: [js-server-sdk/src/client.ts:142](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L142)

Create a new agent assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | [`PeerOptionsAgent`](../interfaces/PeerOptionsAgent.md) |
| `callbacks?` | [`AgentCallbacks`](../type-aliases/AgentCallbacks.md) |

#### Returns

`Promise`\<\{ `agent`: [`FishjamAgent`](FishjamAgent.md); `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

***

### createLivestreamStreamerToken()

> **createLivestreamStreamerToken**(`roomId`): `Promise`\<[`StreamerToken`](../interfaces/StreamerToken.md)\>

Defined in: [js-server-sdk/src/client.ts:243](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L243)

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

Defined in: [js-server-sdk/src/client.ts:230](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L230)

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

Defined in: [js-server-sdk/src/client.ts:122](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L122)

Create a new peer assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | [`PeerOptionsWebRTC`](../interfaces/PeerOptionsWebRTC.md) |

#### Returns

`Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); `peerToken`: `string`; \}\>

***

### createRoom()

> **createRoom**(`config`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [js-server-sdk/src/client.ts:80](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L80)

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

Defined in: [js-server-sdk/src/client.ts:180](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L180)

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

Defined in: [js-server-sdk/src/client.ts:99](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L99)

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

Defined in: [js-server-sdk/src/client.ts:110](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L110)

Get a list of all existing rooms.

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)[]\>

***

### getRoom()

> **getRoom**(`roomId`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [js-server-sdk/src/client.ts:168](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L168)

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

Defined in: [js-server-sdk/src/client.ts:217](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L217)

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

***

### subscribePeer()

> **subscribePeer**(`roomId`, `subscriberPeerId`, `publisherPeerId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:192](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L192)

Subscribe a peer to another peer - this will make all tracks from the publisher available to the subscriber.
Using this function only makes sense if subscribeMode is set to manual

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `subscriberPeerId` | [`PeerId`](../type-aliases/PeerId.md) |
| `publisherPeerId` | [`PeerId`](../type-aliases/PeerId.md) |

#### Returns

`Promise`\<`void`\>

***

### subscribeTracks()

> **subscribeTracks**(`roomId`, `subscriberPeerId`, `tracks`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:204](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/client.ts#L204)

Subscribe a peer to specific tracks from another peer - this will make only the specified tracks from the publisher available to the subscriber.
Using this function only makes sense if subscribeMode is set to manual

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `subscriberPeerId` | [`PeerId`](../type-aliases/PeerId.md) |
| `tracks` | [`TrackId`](../type-aliases/TrackId.md)[] |

#### Returns

`Promise`\<`void`\>
