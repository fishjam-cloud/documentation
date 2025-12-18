# Type Alias: JoinRoomConfig\<PeerMetadata\>

> **JoinRoomConfig**\<`PeerMetadata`\> = `object`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:41](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useConnection.ts#L41)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* [`GenericMetadata`](GenericMetadata.md) | [`GenericMetadata`](GenericMetadata.md) |

## Properties

### config?

> `optional` **config**: [`ConnectionConfig`](ConnectionConfig.md)

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:60](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useConnection.ts#L60)

Additional connection configuration

***

### fishjamId

> **fishjamId**: `string`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:48](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useConnection.ts#L48)

Fishjam ID, which is used to connect to the room.
You can get it at https://fishjam.io/app

***

### peerMetadata?

> `optional` **peerMetadata**: `PeerMetadata`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:56](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useConnection.ts#L56)

String indexed record with metadata, that will be available to all other peers

***

### peerToken

> **peerToken**: `string`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:52](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useConnection.ts#L52)

Token received from server (or Room Manager)
