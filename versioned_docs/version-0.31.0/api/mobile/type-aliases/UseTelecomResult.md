# Type Alias: UseTelecomResult

> **UseTelecomResult** = `object`

Defined in: react-native-webrtc/lib/typescript/useTelecom.d.ts:2

## Properties

### endCall()

> **endCall**: (`reason?`) => `Promise`\<`void`\>

Defined in: react-native-webrtc/lib/typescript/useTelecom.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`CallEndedReason`](CallEndedReason.md) |

#### Returns

`Promise`\<`void`\>

***

### hasActiveCall()

> **hasActiveCall**: () => `boolean`

Defined in: react-native-webrtc/lib/typescript/useTelecom.d.ts:5

#### Returns

`boolean`

***

### isAnswered()

> **isAnswered**: () => `boolean`

Defined in: react-native-webrtc/lib/typescript/useTelecom.d.ts:6

#### Returns

`boolean`

***

### isHeld()

> **isHeld**: () => `boolean`

Defined in: react-native-webrtc/lib/typescript/useTelecom.d.ts:8

#### Returns

`boolean`

***

### setCallHeld()

> **setCallHeld**: (`onHold`) => `Promise`\<`void`\>

Defined in: react-native-webrtc/lib/typescript/useTelecom.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `onHold` | `boolean` |

#### Returns

`Promise`\<`void`\>

***

### startCall()

> **startCall**: (`config`) => `Promise`\<`void`\>

Defined in: react-native-webrtc/lib/typescript/useTelecom.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`TelecomConfig`](TelecomConfig.md) |

#### Returns

`Promise`\<`void`\>
