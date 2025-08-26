# Interface: useLivestreamStreamerResult

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:8](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L8)

## Properties

### connect()

> **connect**: (`token`, `urlOverride?`) => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:15](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L15)

Callback used to start publishing the selected audio and video media streams.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `string` |
| `urlOverride?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Remarks

Calling [connect](#connect) multiple times will have the effect of only publishing the **last** specified inputs.

***

### disconnect()

> **disconnect**: () => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:17](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L17)

Callback to stop publishing anything previously published with [connect](#connect)

#### Returns

`Promise`\<`void`\>

***

### isConnected

> **isConnected**: `boolean`

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:19](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L19)

Utility flag which indicates the current connection status

***

### whipClientRef

> **whipClientRef**: `RefObject`\<`null` \| [`WhipClient`](../classes/WhipClient.md)\>

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:23](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L23)

Reference to the WhipClient instance. Needs to be passed to the [LivestreamStreamer](../functions/LivestreamStreamer.md) component.
