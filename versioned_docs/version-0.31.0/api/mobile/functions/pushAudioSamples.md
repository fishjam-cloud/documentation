# Function: pushAudioSamples()

> **pushAudioSamples**(`track`, `samples`): `void`

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:91

Hand PCM to a custom audio track.

Call whenever your source produces audio, with any chunk size — the native
layer re-frames and paces it. `Float32Array` samples are expected in
`[-1, 1]` (values outside are clamped); `Int16Array` is taken as-is. Stereo
tracks take interleaved samples in whole frames — a push with an odd sample
count has its trailing sample dropped to keep the channels aligned.
Worklet-safe: it dispatches synchronously to
native on whatever thread you call it from. The samples are copied before the
call returns, so the array may be reused immediately.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `track` | [`CustomAudioTrack`](../interfaces/CustomAudioTrack.md) |
| `samples` | `Float32Array`\<`ArrayBufferLike`\> \| `Int16Array`\<`ArrayBufferLike`\> |

## Returns

`void`
