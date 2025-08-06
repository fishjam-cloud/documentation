# Interface: useLivestreamStreamerResult

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:14](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L14)

## Properties

### connect()

> **connect**: (`token`, `urlOverride?`) => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:21](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L21)

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

> **disconnect**: () => `void`

Defined in: [packages/react-native-client/src/hooks/useLivestreamStreamer.ts:23](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useLivestreamStreamer.ts#L23)

Callback to stop publishing anything previously published with [connect](#connect)

#### Returns

`void`
