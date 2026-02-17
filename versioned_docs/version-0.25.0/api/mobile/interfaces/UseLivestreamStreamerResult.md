# Interface: UseLivestreamStreamerResult

Defined in: packages/react-client/dist/hooks/useLivestreamStreamer.d.ts:19

## Properties

### connect()

> **connect**: (`inputs`, `urlOverride?`) => `Promise`\<`void`\>

Defined in: packages/react-client/dist/hooks/useLivestreamStreamer.d.ts:26

Callback used to start publishing the selected audio and video media streams.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `inputs` | [`ConnectStreamerConfig`](../type-aliases/ConnectStreamerConfig.md) |
| `urlOverride?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Remarks

Calling [connect](#connect) multiple times will have the effect of only publishing the **last** specified inputs.

***

### disconnect()

> **disconnect**: () => `void`

Defined in: packages/react-client/dist/hooks/useLivestreamStreamer.d.ts:28

Callback to stop publishing anything previously published with [connect](#connect)

#### Returns

`void`

***

### error

> **error**: `null` \| `LivestreamError`

Defined in: packages/react-client/dist/hooks/useLivestreamStreamer.d.ts:30

Any errors encountered in [connect](#connect) will populate this field

***

### isConnected

> **isConnected**: `boolean`

Defined in: packages/react-client/dist/hooks/useLivestreamStreamer.d.ts:32

Utility flag which indicates the current connection status
