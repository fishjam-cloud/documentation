# Interface: UseLivestreamStreamerResult

Defined in: [react-client/src/hooks/useLivestreamStreamer.ts:28](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/react-client/src/hooks/useLivestreamStreamer.ts#L28)

## Properties

### connect()

> **connect**: (`inputs`, `urlOverride?`) => `Promise`\<`void`\>

Defined in: [react-client/src/hooks/useLivestreamStreamer.ts:35](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/react-client/src/hooks/useLivestreamStreamer.ts#L35)

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

Defined in: [react-client/src/hooks/useLivestreamStreamer.ts:37](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/react-client/src/hooks/useLivestreamStreamer.ts#L37)

Callback to stop publishing anything previously published with [connect](#connect)

#### Returns

`void`

***

### error

> **error**: `null` \| `LivestreamError`

Defined in: [react-client/src/hooks/useLivestreamStreamer.ts:39](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/react-client/src/hooks/useLivestreamStreamer.ts#L39)

Any errors encountered in [connect](#connect) will populate this field

***

### isConnected

> **isConnected**: `boolean`

Defined in: [react-client/src/hooks/useLivestreamStreamer.ts:41](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/react-client/src/hooks/useLivestreamStreamer.ts#L41)

Utility flag which indicates the current connection status
