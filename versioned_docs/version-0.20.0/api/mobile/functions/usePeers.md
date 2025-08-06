# Function: usePeers()

> **usePeers**\<`PeerMetadata`, `ServerMetadata`\>(): `object`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:186](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/usePeers.ts#L186)

Hook that provides live updates of room peers.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `PeerMetadata` *extends* [`GenericMetadata`](../type-aliases/GenericMetadata.md) | [`GenericMetadata`](../type-aliases/GenericMetadata.md) | Type for peer-specific metadata |
| `ServerMetadata` *extends* [`GenericMetadata`](../type-aliases/GenericMetadata.md) | [`GenericMetadata`](../type-aliases/GenericMetadata.md) | Type for server-specific metadata |

## Returns

### localPeer

> **localPeer**: `null` \| [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`\>

The local peer with distinguished tracks (camera, microphone, screen share).
Will be null if the local peer is not found.

### ~~peers~~

> **peers**: [`Peer`](../type-aliases/Peer.md)\<`PeerMetadata`, `ServerMetadata`\>[]

#### Deprecated

Use localPeer and remotePeers instead
Legacy array containing all peers (both local and remote) without distinguished tracks.
This property will be removed in future versions.

### remotePeers

> **remotePeers**: [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`\>[]

Array of remote peers with distinguished tracks (camera, microphone, screen share).
