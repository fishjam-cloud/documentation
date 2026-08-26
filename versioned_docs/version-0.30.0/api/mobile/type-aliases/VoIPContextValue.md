# Type Alias: VoIPContextValue

> **VoIPContextValue** = `object`

Defined in: [mobile-client/src/voip/VoIPContext.ts:41](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L41)

Value returned from [useVoIP](../functions/useVoIP.md).

## Properties

### callStatus

> **callStatus**: [`VoIPCallStatus`](VoIPCallStatus.md)

Defined in: [mobile-client/src/voip/VoIPContext.ts:43](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L43)

Current call lifecycle status.

***

### clearCallIntent()

> **clearCallIntent**: () => `void`

Defined in: [mobile-client/src/voip/VoIPContext.ts:69](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L69)

Discards [VoIPContextValue.pendingCallIntent](#pendingcallintent) once you have acted on it.

#### Returns

`void`

***

### currentCall

> **currentCall**: [`CurrentCall`](CurrentCall.md) \| `null`

Defined in: [mobile-client/src/voip/VoIPContext.ts:47](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L47)

The call currently being handled, or `null` when `callStatus` is `available`.

***

### endCall()

> **endCall**: (`reason?`) => `Promise`\<`void`\>

Defined in: [mobile-client/src/voip/VoIPContext.ts:91](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L91)

Ends or rejects the current call. Dismisses CallKit/Telecom and resets state back
to `available`; leaving the room is up to you. `reason` (defaults to `local`) is
surfaced to the system call UI/log and to `lastEndedReason`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`CallEndedReason`](CallEndedReason.md) |

#### Returns

`Promise`\<`void`\>

***

### isMuted

> **isMuted**: `boolean`

Defined in: [mobile-client/src/voip/VoIPContext.ts:60](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L60)

Whether the system call UI has the call muted. Reported only, as with [VoIPContextValue.isOnHold](#isonhold).

***

### isOnHold

> **isOnHold**: `boolean`

Defined in: [mobile-client/src/voip/VoIPContext.ts:58](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L58)

Whether the native CallKit/Core-Telecom session is currently held. Reported only —
apply it to your own tracks.

***

### lastEndedReason

> **lastEndedReason**: [`CallEndedReason`](CallEndedReason.md) \| `null`

Defined in: [mobile-client/src/voip/VoIPContext.ts:53](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L53)

Why the most recently handled call ended. `null` until a call has ended at
least once. Surfaced so a consumer can react to `missed`/`rejected`/etc., e.g.
showing a "missed call" notification.

***

### pendingCallIntent

> **pendingCallIntent**: [`VoIPCallIntent`](VoIPCallIntent.md) \| `null`

Defined in: [mobile-client/src/voip/VoIPContext.ts:67](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L67)

A redial requested from the iOS **Recents** list, or `null` when there is none.
It carries only the handle to call, never a room, so mint a room name yourself.
Held until [VoIPContextValue.clearCallIntent](#clearcallintent), so one arriving before your
app has restored its session is not lost.

***

### reportConnected()

> **reportConnected**: () => `Promise`\<`void`\>

Defined in: [mobile-client/src/voip/VoIPContext.ts:83](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L83)

Report that the room join succeeded and media is flowing. Fulfills CallKit's answer
action (or reports the outgoing call as connected) and moves the call to `active`.

An answered incoming call must be fulfilled within `VoIPFulfillAnswerTimeout`
(10s by default) or the native side ends it and `onEnded` fires.

#### Returns

`Promise`\<`void`\>

***

### reportConnectFailed()

> **reportConnectFailed**: () => `Promise`\<`void`\>

Defined in: [mobile-client/src/voip/VoIPContext.ts:85](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L85)

Tell the SDK your room join failed. Ends the call with reason `failed`.

#### Returns

`Promise`\<`void`\>

***

### setCallHeld()

> **setCallHeld**: (`onHold`) => `Promise`\<`void`\>

Defined in: [mobile-client/src/voip/VoIPContext.ts:93](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L93)

Requests that the native CallKit/Core-Telecom session be held or resumed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `onHold` | `boolean` |

#### Returns

`Promise`\<`void`\>

***

### startCall()

> **startCall**: (`to`, `roomName`) => `Promise`\<`void`\>

Defined in: [mobile-client/src/voip/VoIPContext.ts:75](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L75)

Reports an outgoing call to `to` in `roomName` to CallKit/Core-Telecom and moves
to `connecting`. Run your own signaling (ringing the callee) *before* calling this.
It does **not** join the room — react to `callStatus` becoming `connecting` for that.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `to` | `string` |
| `roomName` | `string` |

#### Returns

`Promise`\<`void`\>

***

### voipToken

> **voipToken**: `string` \| `null`

Defined in: [mobile-client/src/voip/VoIPContext.ts:45](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L45)

This device's VoIP push token, or `null` until APNs has issued one.
