# Interface: JoinRoomConfig\<PeerMetadata\>

Defined in: [packages/react-client/src/hooks/useConnection.ts:10](https://github.com/fishjam-cloud/web-client-sdk/blob/00cc23b021c6e87a4a0f647ceccc9acb897b5a38/packages/react-client/src/hooks/useConnection.ts#L10)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* `GenericMetadata` | `GenericMetadata` |

## Properties

### peerMetadata?

> `optional` **peerMetadata**: `PeerMetadata`

Defined in: [packages/react-client/src/hooks/useConnection.ts:22](https://github.com/fishjam-cloud/web-client-sdk/blob/00cc23b021c6e87a4a0f647ceccc9acb897b5a38/packages/react-client/src/hooks/useConnection.ts#L22)

String indexed record with metadata, that will be available to all other peers

***

### peerToken

> **peerToken**: `string`

Defined in: [packages/react-client/src/hooks/useConnection.ts:18](https://github.com/fishjam-cloud/web-client-sdk/blob/00cc23b021c6e87a4a0f647ceccc9acb897b5a38/packages/react-client/src/hooks/useConnection.ts#L18)

Token received from server (or Room Manager)

***

### url?

> `optional` **url**: `string`

Defined in: [packages/react-client/src/hooks/useConnection.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/00cc23b021c6e87a4a0f647ceccc9acb897b5a38/packages/react-client/src/hooks/useConnection.ts#L14)

Overrides the default url derived from the Fishjam ID passed to FishjamProvider
