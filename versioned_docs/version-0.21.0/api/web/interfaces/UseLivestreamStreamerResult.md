# Interface: UseLivestreamStreamerResult

Defined in: [packages/react-client/src/hooks/useLivestreamStreamer.ts:27](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/hooks/useLivestreamStreamer.ts#L27)

## Properties

### connect()

> **connect**: (`inputs`, `urlOverride?`) => `Promise`\<`void`\>

Defined in: [packages/react-client/src/hooks/useLivestreamStreamer.ts:34](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/hooks/useLivestreamStreamer.ts#L34)

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

Defined in: [packages/react-client/src/hooks/useLivestreamStreamer.ts:36](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/hooks/useLivestreamStreamer.ts#L36)

Callback to stop publishing anything previously published with [connect](#connect)

#### Returns

`void`

***

### error

> **error**: `null` \| `LivestreamError`

Defined in: [packages/react-client/src/hooks/useLivestreamStreamer.ts:38](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/hooks/useLivestreamStreamer.ts#L38)

Any errors encounterd in [connect](#connect) will populate this field

***

### isConnected

> **isConnected**: `boolean`

Defined in: [packages/react-client/src/hooks/useLivestreamStreamer.ts:40](https://github.com/fishjam-cloud/web-client-sdk/blob/8be0da3efcdce0dec0a98faf77f65b941d4a7757/packages/react-client/src/hooks/useLivestreamStreamer.ts#L40)

Utility flag which indicates the current connection status
