# Type Alias: JoinRoomConfig\<PeerMetadata\>

> **JoinRoomConfig**\<`PeerMetadata`\> = `object` & \{ `fishjamId`: `string`; `url?`: `never`; \} \| \{ `fishjamId?`: `never`; `url`: `string`; \}

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:47](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useConnection.ts#L47)

## Type declaration

### config?

> `optional` **config**: [`ConnectionConfig`](ConnectionConfig.md)

Additional connection configuration

### peerMetadata?

> `optional` **peerMetadata**: `PeerMetadata`

String indexed record with metadata, that will be available to all other peers

### peerToken

> **peerToken**: `string`

Token received from server (or Room Manager)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* [`GenericMetadata`](GenericMetadata.md) | [`GenericMetadata`](GenericMetadata.md) |
