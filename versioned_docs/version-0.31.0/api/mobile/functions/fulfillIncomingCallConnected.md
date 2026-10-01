# Function: fulfillIncomingCallConnected()

> **fulfillIncomingCallConnected**(`requestId`): `Promise`\<`boolean`\>

Defined in: react-native-webrtc/lib/typescript/VoIP.d.ts:17

Resolves the parked native answer action once incoming-call media is live.
Returns false when the request has already timed out or been resolved.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

## Returns

`Promise`\<`boolean`\>
