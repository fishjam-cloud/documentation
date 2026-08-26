# Class: FishjamClient

Defined in: [js-server-sdk/src/client.ts:28](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L28)

Client class that allows to manage Rooms and Peers for a Fishjam App.
It requires the Fishjam ID and management token that can be retrieved from the Fishjam Dashboard.

## Constructors

### Constructor

> **new FishjamClient**(`config`): `FishjamClient`

Defined in: [js-server-sdk/src/client.ts:53](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L53)

Create new instance of Fishjam Client.

Does not verify credentials against the backend — use
[FishjamClient.create](#create) or call
[FishjamClient.checkCredentials](#checkcredentials) afterwards for that.

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

### checkCredentials()

> **checkCredentials**(): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:106](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L106)

Verifies the configured credentials by making a single lightweight
call to the Fishjam backend. Resolves on success, throws
[InvalidFishjamCredentialsException](InvalidFishjamCredentialsException.md) on 401/404 from the backend,
otherwise rethrows the standard mapped exception.

#### Returns

`Promise`\<`void`\>

***

### create()

> `static` **create**(`config`): `Promise`\<`FishjamClient`\>

Defined in: [js-server-sdk/src/client.ts:94](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L94)

Async factory: constructs a client and verifies credentials against
the backend.

Throws [InvalidFishjamCredentialsException](InvalidFishjamCredentialsException.md) when the
`fishjamId` / `managementToken` pair is rejected by the backend.

Example:
```
const client = await FishjamClient.create({
  fishjamId: process.env.FISHJAM_ID!,
  managementToken: process.env.FISHJAM_MANAGEMENT_TOKEN!,
});
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`FishjamConfig`](../type-aliases/FishjamConfig.md) |

#### Returns

`Promise`\<`FishjamClient`\>

***

### createAgent()

> **createAgent**(`roomId`, `options`, `callbacks?`): `Promise`\<\{ `agent`: [`FishjamAgent`](FishjamAgent.md); `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

Defined in: [js-server-sdk/src/client.ts:185](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L185)

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

Defined in: [js-server-sdk/src/client.ts:302](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L302)

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

Defined in: [js-server-sdk/src/client.ts:290](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L290)

Creates a livestream viewer token for the given room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<[`ViewerToken`](../interfaces/ViewerToken.md)\>

a livestream viewer token

***

### createMoqAccess()

> **createMoqAccess**(`config?`): `Promise`\<[`MoqAccess`](../interfaces/MoqAccess.md)\>

Defined in: [js-server-sdk/src/client.ts:314](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L314)

Creates MoQ access.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | [`MoqAccessConfig`](../interfaces/MoqAccessConfig.md) |

#### Returns

`Promise`\<[`MoqAccess`](../interfaces/MoqAccess.md)\>

connection details containing the relay URL with the JWT embedded as a `?jwt=` query parameter, and the token itself

***

### createPeer()

> **createPeer**(`roomId`, `options`): `Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); `peerToken`: `string`; \}\>

Defined in: [js-server-sdk/src/client.ts:169](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L169)

Create a new peer assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | [`PeerOptionsWebRTC`](../interfaces/PeerOptionsWebRTC.md) |

#### Returns

`Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); `peerToken`: `string`; \}\>

***

### createRecording()

> **createRecording**(`config`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

Defined in: [js-server-sdk/src/client.ts:325](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L325)

Create a new recording. Capturing starts synchronously, so the returned recording is `active`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`RecordingConfig`](../interfaces/RecordingConfig.md) |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

***

### createRoom()

> **createRoom**(`config`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [js-server-sdk/src/client.ts:134](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L134)

Create a new room. All peers connected to the same room will be able to send/receive streams to each other.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`RoomConfig`](../interfaces/RoomConfig.md) |

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)\>

***

### createVapiAgent()

> **createVapiAgent**(`roomId`, `options`): `Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

Defined in: [js-server-sdk/src/client.ts:208](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L208)

Create a new VAPI agent assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | [`PeerOptionsVapi`](../interfaces/PeerOptionsVapi.md) |

#### Returns

`Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

***

### deletePeer()

> **deletePeer**(`roomId`, `peerId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:236](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L236)

Delete a peer - this will also disconnect the peer from the room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `peerId` | [`PeerId`](../type-aliases/PeerId.md) |

#### Returns

`Promise`\<`void`\>

***

### deleteRecording()

> **deleteRecording**(`recordingId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:382](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L382)

Delete a recording. Its stored media is removed asynchronously.
A recording that is still `active` cannot be deleted — stop it first or wait for it to finish.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `recordingId` | [`RecordingId`](../type-aliases/RecordingId.md) |

#### Returns

`Promise`\<`void`\>

***

### deleteRoom()

> **deleteRoom**(`roomId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:146](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L146)

Delete an existing room. All peers connected to this room will be disconnected and removed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<`void`\>

***

### getAllRecordings()

> **getAllRecordings**(`metadata?`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>[]\>

Defined in: [js-server-sdk/src/client.ts:350](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L350)

Get a list of all recordings, optionally filtered by metadata.
Returns recordings whose metadata contains all the given key-value pairs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadata?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>[]\>

***

### getAllRooms()

> **getAllRooms**(): `Promise`\<[`Room`](../type-aliases/Room.md)[]\>

Defined in: [js-server-sdk/src/client.ts:157](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L157)

Get a list of all existing rooms.

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)[]\>

***

### getRecording()

> **getRecording**(`recordingId`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

Defined in: [js-server-sdk/src/client.ts:337](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L337)

Get details about a given recording.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `recordingId` | [`RecordingId`](../type-aliases/RecordingId.md) |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

***

### getRoom()

> **getRoom**(`roomId`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [js-server-sdk/src/client.ts:224](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L224)

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

Defined in: [js-server-sdk/src/client.ts:277](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L277)

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

### stopRecording()

> **stopRecording**(`recordingId`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

Defined in: [js-server-sdk/src/client.ts:369](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L369)

Stop an active recording. Finalization is asynchronous: the recording stays `active` until
the capture is finalized, then becomes `finished`. Stopping a recording that is no longer active is a no-op.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `recordingId` | [`RecordingId`](../type-aliases/RecordingId.md) |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

***

### subscribePeer()

> **subscribePeer**(`roomId`, `subscriberPeerId`, `publisherPeerId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:248](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L248)

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

Defined in: [js-server-sdk/src/client.ts:260](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/client.ts#L260)

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
