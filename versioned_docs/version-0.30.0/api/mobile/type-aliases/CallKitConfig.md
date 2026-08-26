# Type Alias: CallKitConfig

> **CallKitConfig** = `object`

Defined in: react-native-webrtc/lib/typescript/CallKit.d.ts:2

## Properties

### displayName

> **displayName**: `string`

Defined in: react-native-webrtc/lib/typescript/CallKit.d.ts:4

Label shown in the system call UI and in Recents.

***

### handle?

> `optional` **handle**: `string`

Defined in: react-native-webrtc/lib/typescript/CallKit.d.ts:11

Stable identifier for the remote party (e.g. a user id). It is what iOS persists
in Recents and hands back in the redial intent, so it must be something your app
can resolve - `displayName` alone is ambiguous when two users share a name.
Defaults to `displayName`.

***

### isVideo

> **isVideo**: `boolean`

Defined in: react-native-webrtc/lib/typescript/CallKit.d.ts:12
