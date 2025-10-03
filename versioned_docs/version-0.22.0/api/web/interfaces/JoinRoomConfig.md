# Interface: JoinRoomConfig\<PeerMetadata\>

Defined in: [packages/react-client/src/hooks/useConnection.ts:10](https://github.com/fishjam-cloud/web-client-sdk/blob/47e1a8041a7e2ff70090b00d44e1873552c14cbc/packages/react-client/src/hooks/useConnection.ts#L10)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* `GenericMetadata` | `GenericMetadata` |

## Properties

### peerMetadata?

> `optional` **peerMetadata**: `PeerMetadata`

Defined in: [packages/react-client/src/hooks/useConnection.ts:18](https://github.com/fishjam-cloud/web-client-sdk/blob/47e1a8041a7e2ff70090b00d44e1873552c14cbc/packages/react-client/src/hooks/useConnection.ts#L18)

String indexed record with metadata, that will be available to all other peers

***

### peerToken

> **peerToken**: `string`

Defined in: [packages/react-client/src/hooks/useConnection.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/47e1a8041a7e2ff70090b00d44e1873552c14cbc/packages/react-client/src/hooks/useConnection.ts#L14)

Token received from server (or Room Manager)
