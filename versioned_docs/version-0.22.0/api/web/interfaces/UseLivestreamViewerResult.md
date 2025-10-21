# Interface: UseLivestreamViewerResult

Defined in: [packages/react-client/src/hooks/useLivestreamViewer.ts:11](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/useLivestreamViewer.ts#L11)

## Properties

### connect()

> **connect**: (`config`, `url?`) => `Promise`\<`void`\>

Defined in: [packages/react-client/src/hooks/useLivestreamViewer.ts:19](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/useLivestreamViewer.ts#L19)

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

Defined in: [packages/react-client/src/hooks/useLivestreamViewer.ts:21](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/useLivestreamViewer.ts#L21)

Callback used to disconnect from a stream previously connected to with [connect](#connect)

#### Returns

`void`

***

### error

> **error**: `null` \| `LivestreamError`

Defined in: [packages/react-client/src/hooks/useLivestreamViewer.ts:23](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/useLivestreamViewer.ts#L23)

Any errors encountered in [connect](#connect) will be present in this field.

***

### isConnected

> **isConnected**: `boolean`

Defined in: [packages/react-client/src/hooks/useLivestreamViewer.ts:25](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/useLivestreamViewer.ts#L25)

Utility flag which indicates the current connection status

***

### stream

> **stream**: `null` \| `MediaStream`

Defined in: [packages/react-client/src/hooks/useLivestreamViewer.ts:13](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/useLivestreamViewer.ts#L13)

The received livestream media
