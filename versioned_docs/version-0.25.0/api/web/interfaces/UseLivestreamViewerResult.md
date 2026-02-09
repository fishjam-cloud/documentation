# Interface: UseLivestreamViewerResult

Defined in: [react-client/src/hooks/useLivestreamViewer.ts:12](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useLivestreamViewer.ts#L12)

## Properties

### connect()

> **connect**: (`config`, `url?`) => `Promise`\<`void`\>

Defined in: [react-client/src/hooks/useLivestreamViewer.ts:20](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useLivestreamViewer.ts#L20)

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

Defined in: [react-client/src/hooks/useLivestreamViewer.ts:22](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useLivestreamViewer.ts#L22)

Callback used to disconnect from a stream previously connected to with [connect](#connect)

#### Returns

`void`

***

### error

> **error**: `null` \| `LivestreamError`

Defined in: [react-client/src/hooks/useLivestreamViewer.ts:24](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useLivestreamViewer.ts#L24)

Any errors encountered in [connect](#connect) will be present in this field.

***

### isConnected

> **isConnected**: `boolean`

Defined in: [react-client/src/hooks/useLivestreamViewer.ts:26](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useLivestreamViewer.ts#L26)

Utility flag which indicates the current connection status

***

### stream

> **stream**: `null` \| `MediaStream`

Defined in: [react-client/src/hooks/useLivestreamViewer.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useLivestreamViewer.ts#L14)

The received livestream media
