# Type Alias: VoIPIncomingPayload

> **VoIPIncomingPayload** = `object`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:3

## Properties

### avatarUrl?

> `optional` **avatarUrl**: `string`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:19

Optional URL of the caller's avatar, forwarded verbatim from the push payload.
On Android it is downloaded and shown in the incoming-call notification and
full-screen UI; on iOS CallKit cannot render it, so it is provided only for
your own in-app UI.

***

### displayName

> **displayName**: `string`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:5

***

### handle

> **handle**: `string`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:11

Stable id of the caller, taken from the push payload's `handle` (falls back to
`displayName`). On iOS this is what lands in Recents and comes back as the redial
intent's handle; on Android it is the call's Telecom address.

***

### isVideo

> **isVideo**: `boolean`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:12

***

### roomName

> **roomName**: `string`

Defined in: react-native-webrtc/lib/typescript/useVoIPEvents.d.ts:4
