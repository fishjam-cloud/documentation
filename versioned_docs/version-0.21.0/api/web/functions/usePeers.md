# Function: usePeers()

> **usePeers**\<`PeerMetadata`, `ServerMetadata`\>(): `object`

Defined in: [packages/react-client/src/hooks/usePeers.ts:67](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/hooks/usePeers.ts#L67)

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
