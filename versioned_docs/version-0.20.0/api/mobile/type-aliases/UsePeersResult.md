# Type Alias: UsePeersResult\<PeerMetadata, ServerMetadata\>

> **UsePeersResult**\<`PeerMetadata`, `ServerMetadata`\> = `object`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:168](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/usePeers.ts#L168)

Result type for the usePeers hook.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `PeerMetadata` *extends* [`GenericMetadata`](GenericMetadata.md) | [`GenericMetadata`](GenericMetadata.md) | Type for peer-specific metadata |
| `ServerMetadata` *extends* [`GenericMetadata`](GenericMetadata.md) | [`GenericMetadata`](GenericMetadata.md) | Type for server-specific metadata |

## Properties

### localPeer

> **localPeer**: [`PeerWithTracks`](PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`\> \| `null`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:172](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/usePeers.ts#L172)

***

### peers

> **peers**: [`Peer`](Peer.md)\<`PeerMetadata`, `ServerMetadata`\>[]

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:176](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/usePeers.ts#L176)

***

### remotePeers

> **remotePeers**: [`PeerWithTracks`](PeerWithTracks.md)\<`PeerMetadata`, `ServerMetadata`\>[]

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:174](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/usePeers.ts#L174)
