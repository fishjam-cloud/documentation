# Interface: UseLivestreamViewerResult

Defined in: packages/react-client/dist/hooks/useLivestreamViewer.d.ts:12

## Properties

### connect()

> **connect**: (`config`, `url?`) => `Promise`\<`void`\>

Defined in: packages/react-client/dist/hooks/useLivestreamViewer.d.ts:20

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

Defined in: packages/react-client/dist/hooks/useLivestreamViewer.d.ts:22

Callback used to disconnect from a stream previously connected to with [connect](#connect)

#### Returns

`void`

***

### error

> **error**: `null` \| `LivestreamError`

Defined in: packages/react-client/dist/hooks/useLivestreamViewer.d.ts:24

Any errors encountered in [connect](#connect) will be present in this field.

***

### isConnected

> **isConnected**: `boolean`

Defined in: packages/react-client/dist/hooks/useLivestreamViewer.d.ts:26

Utility flag which indicates the current connection status

***

### stream

> **stream**: `null` \| `MediaStream`

Defined in: packages/react-client/dist/hooks/useLivestreamViewer.d.ts:14

The received livestream media
