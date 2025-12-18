# Function: usePeers()

> **usePeers**\<`PeerMetadata`, `ServerMetadata`\>(): `object`

Defined in: [react-client/src/hooks/usePeers.ts:67](https://github.com/fishjam-cloud/web-client-sdk/blob/107b6ffadabe4f3f1c2f36f2cea7ac93db908c8c/packages/react-client/src/hooks/usePeers.ts#L67)

Hook allows to access id, tracks and metadata of the local and remote peers.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `PeerMetadata` | `Record`\<`string`, `unknown`\> | Type of metadata set by peer while connecting to a room. |
| `ServerMetadata` | `Record`\<`string`, `unknown`\> | Type of metadata set by the server while creating a peer. |

## Returns

### localPeer

> **localPeer**: `null` \| [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`\>

The local peer with distinguished tracks (camera, microphone, screen share).
Will be null if the local peer is not found.

### ~~peers~~

> **peers**: [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`\>[] = `remotePeers`

#### Deprecated

Use remotePeers instead
Legacy array containing remote peers.
This property will be removed in future versions.

### remotePeers

> **remotePeers**: [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`\>[]

Array of remote peers with distinguished tracks (camera, microphone, screen share).
