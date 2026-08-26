# Type Alias: UseAudioOutputResult

> **UseAudioOutputResult** = `object`

Defined in: react-native-webrtc/lib/typescript/useAudioOutput.d.ts:2

## Properties

### android

> **android**: *typeof* `AudioOutputManager.android`

Defined in: react-native-webrtc/lib/typescript/useAudioOutput.d.ts:10

Android-only controls. Throws on other platforms.

***

### availableAudioOutputs

> **availableAudioOutputs**: [`AudioDevice`](AudioDevice.md)[]

Defined in: react-native-webrtc/lib/typescript/useAudioOutput.d.ts:6

All output devices currently reachable.

***

### currentAudioOutput

> **currentAudioOutput**: [`AudioDevice`](AudioDevice.md) \| `null`

Defined in: react-native-webrtc/lib/typescript/useAudioOutput.d.ts:4

Active output device, or `null` if not yet known.

***

### ios

> **ios**: *typeof* `AudioOutputManager.ios`

Defined in: react-native-webrtc/lib/typescript/useAudioOutput.d.ts:8

iOS-only controls. Throws on other platforms.
