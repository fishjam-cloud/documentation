# Class: FishjamClient

Defined in: [js-server-sdk/src/client.ts:39](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L39)

Client class that allows to manage Rooms and Peers for a Fishjam App.
It requires the Fishjam ID and management token that can be retrieved from the Fishjam Dashboard.

## Constructors

### Constructor

> **new FishjamClient**(`config`): `FishjamClient`

Defined in: [js-server-sdk/src/client.ts:65](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L65)

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

Defined in: [js-server-sdk/src/client.ts:119](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L119)

Verifies the configured credentials by making a single lightweight
call to the Fishjam backend. Resolves on success, throws
[InvalidFishjamCredentialsException](InvalidFishjamCredentialsException.md) on 401/404 from the backend,
otherwise rethrows the standard mapped exception.

#### Returns

`Promise`\<`void`\>

***

### create()

> `static` **create**(`config`): `Promise`\<`FishjamClient`\>

Defined in: [js-server-sdk/src/client.ts:107](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L107)

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

Defined in: [js-server-sdk/src/client.ts:198](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L198)

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

### createCompositionRecording()

> **createCompositionRecording**(`config`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

Defined in: [js-server-sdk/src/client.ts:376](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L376)

Create a new recording that mirrors existing composition output. Capturing starts synchronously, so the returned recording is `active`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`CompositionRecordingConfig`](../type-aliases/CompositionRecordingConfig.md) |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

***

### createLivestreamStreamerToken()

> **createLivestreamStreamerToken**(`roomId`): `Promise`\<[`StreamerToken`](../interfaces/StreamerToken.md)\>

Defined in: [js-server-sdk/src/client.ts:340](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L340)

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

Defined in: [js-server-sdk/src/client.ts:328](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L328)

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

Defined in: [js-server-sdk/src/client.ts:352](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L352)

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

Defined in: [js-server-sdk/src/client.ts:182](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L182)

Create a new peer assigned to a room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `options` | [`PeerOptionsWebRTC`](../interfaces/PeerOptionsWebRTC.md) |

#### Returns

`Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); `peerToken`: `string`; \}\>

***

### ~~createRecording()~~

> **createRecording**(`config`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

Defined in: [js-server-sdk/src/client.ts:364](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L364)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`CompositionRecordingConfig`](../type-aliases/CompositionRecordingConfig.md) |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

#### Deprecated

Use [createCompositionRecording](#createcompositionrecording) instead.
Create a new recording that mirrors existing composition output. Capturing starts synchronously, so the returned recording is `active`.

***

### createRoom()

> **createRoom**(`config`): `Promise`\<[`Room`](../type-aliases/Room.md)\>

Defined in: [js-server-sdk/src/client.ts:147](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L147)

Create a new room. All peers connected to the same room will be able to send/receive streams to each other.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`RoomConfig`](../interfaces/RoomConfig.md) |

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)\>

***

### createTemplateRecording()

> **createTemplateRecording**(`config`, `template`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

Defined in: [js-server-sdk/src/client.ts:392](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L392)

Start a new recording that renders its own scene from a template.

The template bundle is either a `Blob` or a path to read it from, and can weigh at most 1 MiB;
Only valid template bundles are accepted.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`TemplateRecordingConfig`](../type-aliases/TemplateRecordingConfig.md) |
| `template` | `string` \| `Blob` |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

***

### createVapiAgent()

> **createVapiAgent**(`roomId`, `options`): `Promise`\<\{ `peer`: [`Peer`](../type-aliases/Peer.md); \}\>

Defined in: [js-server-sdk/src/client.ts:221](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L221)

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

Defined in: [js-server-sdk/src/client.ts:249](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L249)

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

Defined in: [js-server-sdk/src/client.ts:449](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L449)

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

Defined in: [js-server-sdk/src/client.ts:159](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L159)

Delete an existing room. All peers connected to this room will be disconnected and removed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<`void`\>

***

### forwardRoomTracks()

> **forwardRoomTracks**(`roomId`, `compositionUrl`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/client.ts:304](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L304)

Forwards every track published in the room into a composition, which composes them into
its outputs. Pass the composition's address, as returned by
[CompositionClient.compositionUrl](CompositionClient.md#compositionurl).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |
| `compositionUrl` | `string` |

#### Returns

`Promise`\<`void`\>

***

### getAllRecordings()

> **getAllRecordings**(`metadata?`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>[]\>

Defined in: [js-server-sdk/src/client.ts:417](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L417)

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

Defined in: [js-server-sdk/src/client.ts:170](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L170)

Get a list of all existing rooms.

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)[]\>

***

### getRecording()

> **getRecording**(`recordingId`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`Recording`, \{ `id`: [`RecordingId`](../type-aliases/RecordingId.md); `status`: [`RecordingStatus`](../type-aliases/RecordingStatus.md); \}\>\>

Defined in: [js-server-sdk/src/client.ts:404](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L404)

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

Defined in: [js-server-sdk/src/client.ts:237](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L237)

Get details about a given room.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomId` | [`RoomId`](../type-aliases/RoomId.md) |

#### Returns

`Promise`\<[`Room`](../type-aliases/Room.md)\>

***

### livestreamWhipUrl()

> **livestreamWhipUrl**(): `string`

Defined in: [js-server-sdk/src/client.ts:320](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L320)

Where to publish a livestream, paired with a token from
[FishjamClient.createLivestreamStreamerToken](#createlivestreamstreamertoken). A composition reaches viewers by
sending a WHIP output here.

#### Returns

`string`

***

### refreshPeerToken()

> **refreshPeerToken**(`roomId`, `peerId`): `Promise`\<`string`\>

Defined in: [js-server-sdk/src/client.ts:290](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L290)

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

Defined in: [js-server-sdk/src/client.ts:436](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L436)

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

Defined in: [js-server-sdk/src/client.ts:261](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L261)

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

Defined in: [js-server-sdk/src/client.ts:273](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/client.ts#L273)

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
