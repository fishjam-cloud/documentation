# Function: useUpdatePeerMetadata()

> **useUpdatePeerMetadata**\<`PeerMetadata`\>(): `object`

Defined in: [packages/react-native-client/src/hooks/useUpdatePeerMetadata.ts:10](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useUpdatePeerMetadata.ts#L10)

This hook provides method to update peer metadata

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PeerMetadata` *extends* [`GenericMetadata`](../type-aliases/GenericMetadata.md) | [`GenericMetadata`](../type-aliases/GenericMetadata.md) |

## Returns

### updatePeerMetadata()

> **updatePeerMetadata**: (`peerMetadata`) => `Promise`\<`void`\>

Updates metadata send to other peers

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `peerMetadata` | `PeerMetadata` | string indexed record with metadata, that will be available to all other peers |

#### Returns

`Promise`\<`void`\>
