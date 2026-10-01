# Function: setCallHeld()

> **setCallHeld**(`onHold`): `Promise`\<`void`\>

Defined in: react-native-webrtc/lib/typescript/VoIP.d.ts:36

Asks the OS to hold or resume the current call. The system decides and reports back
through `onHeldChanged`, so treat that event — not this call returning — as the point
the call is actually held. No-op when there is no active call.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `onHold` | `boolean` |

## Returns

`Promise`\<`void`\>
