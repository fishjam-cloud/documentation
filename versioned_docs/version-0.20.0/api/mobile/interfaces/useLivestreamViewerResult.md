# Interface: useLivestreamViewerResult

Defined in: [packages/react-native-client/src/hooks/useLivestreamViewer.ts:21](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useLivestreamViewer.ts#L21)

## Properties

### connect()

> **connect**: (`config`, `url?`) => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useLivestreamViewer.ts:27](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useLivestreamViewer.ts#L27)

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

> **disconnect**: () => `void`

Defined in: [packages/react-native-client/src/hooks/useLivestreamViewer.ts:29](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useLivestreamViewer.ts#L29)

Disconnect from a stream previously connected to with [connect](#connect)

#### Returns

`void`
