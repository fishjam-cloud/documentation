# Type Alias: VoIPEventHandlers

> **VoIPEventHandlers** = `object`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:21

## Properties

### onAnswered()?

> `optional` **onAnswered**: (`requestId`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### onCallIntent()?

> `optional` **onCallIntent**: (`intent`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`VoIPCallIntent`](VoIPCallIntent.md) |

#### Returns

`void`

***

### onEnded()?

> `optional` **onEnded**: (`reason?`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`CallEndedReason`](CallEndedReason.md) |

#### Returns

`void`

***

### onHeldChanged()?

> `optional` **onHeldChanged**: (`onHold`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `onHold` | `boolean` |

#### Returns

`void`

***

### onIncoming()?

> `optional` **onIncoming**: (`payload`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`VoIPIncomingPayload`](VoIPIncomingPayload.md) |

#### Returns

`void`

***

### onMuteChanged()?

> `optional` **onMuteChanged**: (`muted`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `muted` | `boolean` |

#### Returns

`void`

***

### onRegistered()?

> `optional` **onRegistered**: (`token`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `string` |

#### Returns

`void`

***

### onWaitingCallDeclined()?

> `optional` **onWaitingCallDeclined**: (`payload`) => `void`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`VoIPIncomingPayload`](VoIPIncomingPayload.md) |

#### Returns

`void`
