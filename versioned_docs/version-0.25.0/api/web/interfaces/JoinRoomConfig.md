# Interface: JoinRoomConfig\<PeerMetadata\>

Defined in: [react-client/src/hooks/useConnection.ts:10](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useConnection.ts#L10)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* `GenericMetadata` | `GenericMetadata` |

## Properties

### peerMetadata?

> `optional` **peerMetadata**: `PeerMetadata`

Defined in: [react-client/src/hooks/useConnection.ts:18](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useConnection.ts#L18)

String indexed record with metadata, that will be available to all other peers

***

### peerToken

> **peerToken**: `string`

Defined in: [react-client/src/hooks/useConnection.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useConnection.ts#L14)

Token received from server (or Room Manager)
