# Type Alias: Peer\<PeerMetadata, ServerMetadata\>

> **Peer**\<`PeerMetadata`, `ServerMetadata`\> = `object`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:66](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/usePeers.ts#L66)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* [`GenericMetadata`](GenericMetadata.md) | [`GenericMetadata`](GenericMetadata.md) |
| `ServerMetadata` *extends* [`GenericMetadata`](GenericMetadata.md) | [`GenericMetadata`](GenericMetadata.md) |

## Properties

### id

> **id**: [`PeerId`](PeerId.md)

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:73](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/usePeers.ts#L73)

id used to identify a peer

***

### isLocal

> **isLocal**: `boolean`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:77](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/usePeers.ts#L77)

whether the peer is local or remote

***

### metadata

> **metadata**: [`PeerTrackMetadata`](PeerTrackMetadata.md)\<`PeerMetadata`, `ServerMetadata`\>

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:81](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/usePeers.ts#L81)

a type containing peer and server metadata

***

### tracks

> **tracks**: [`Track`](Track.md)[]

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:85](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/usePeers.ts#L85)

a list of peer's video and audio tracks
