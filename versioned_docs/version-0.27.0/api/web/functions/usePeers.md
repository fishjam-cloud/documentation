# Function: usePeers()

> **usePeers**\<`PeerMetadata`, `ServerMetadata`\>(): `object`

Defined in: [react-client/src/hooks/usePeers.ts:103](https://github.com/fishjam-cloud/web-client-sdk/blob/30f99e0d93a92f6cdd572bab746cc8ce0c853a22/packages/react-client/src/hooks/usePeers.ts#L103)

Hook allows to access id, tracks and metadata of the local and remote peers.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `PeerMetadata` | `Record`\<`string`, `unknown`\> | Type of metadata set by peer while connecting to a room. |
| `ServerMetadata` | `Record`\<`string`, `unknown`\> | Type of metadata set by the server while creating a peer. |

## Returns

### localPeer

> **localPeer**: `null` \| [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`, [`Track`](../type-aliases/Track.md)\>

The local peer with distinguished tracks (camera, microphone, screen share).
Will be null if the local peer is not found.

### ~~peers~~

> **peers**: [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`, [`RemoteTrack`](../type-aliases/RemoteTrack.md)\>[] = `remotePeers`

#### Deprecated

Use remotePeers instead
Legacy array containing remote peers.
This property will be removed in future versions.

### remotePeers

> **remotePeers**: [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`, [`RemoteTrack`](../type-aliases/RemoteTrack.md)\>[]

Array of remote peers with distinguished tracks (camera, microphone, screen share).

### setReceivedTracksQuality()

> **setReceivedTracksQuality**: (`trackIds`, `quality`) => `void`

This function allows to set the quality of tracks received from remote peers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `trackIds` | `string`[] | The array of the track ids to set the quality for. |
| `quality` | [`Variant`](../enumerations/Variant.md) | The quality to set for the track. |

#### Returns

`void`
