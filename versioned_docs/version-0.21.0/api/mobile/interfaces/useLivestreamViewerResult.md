# Interface: useLivestreamViewerResult

Defined in: [packages/react-native-client/src/hooks/useLivestreamViewer.ts:17](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamViewer.ts#L17)

## Properties

### connect()

> **connect**: (`config`, `url?`) => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useLivestreamViewer.ts:23](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamViewer.ts#L23)

Callback to start receiving a livestream.
If the livestream is private, provide `token`.
If the livestream is public, provide `streamId`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ConnectViewerConfig`](../type-aliases/ConnectViewerConfig.md) |
| `url?` | `string` |

#### Returns

`Promise`\<`void`\>

***

### disconnect()

> **disconnect**: () => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useLivestreamViewer.ts:25](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamViewer.ts#L25)

Disconnect from a stream previously connected to with [connect](#connect)

#### Returns

`Promise`\<`void`\>

***

### isConnected

> **isConnected**: `boolean`

Defined in: [packages/react-native-client/src/hooks/useLivestreamViewer.ts:27](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamViewer.ts#L27)

Utility flag which indicates the current connection status
