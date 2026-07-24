# Interface: CustomAudioSink

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:39

The native per-track push channel handed back on a track handle's `sink`.

Backed by a JSI host object, so it is shared *by reference* into a worklet —
calling `push` there dispatches synchronously on the worklet thread with no
hop. You normally don't call this directly; use [pushAudioSamples](../functions/pushAudioSamples.md).

Push from the *same* worklet runtime the sink was captured into: `push` binds
lazily to whichever runtime first resolves it. Each access to `sink.push`
returns a fresh (functionally identical) function, so a hot loop should hoist
it once (`const push = track.sink.push`) and reuse it, which also skips a
small per-access allocation.

## Methods

### push()

> **push**(`samples`): `void`

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `samples` | `Float32Array`\<`ArrayBufferLike`\> \| `Int16Array`\<`ArrayBufferLike`\> |

#### Returns

`void`
