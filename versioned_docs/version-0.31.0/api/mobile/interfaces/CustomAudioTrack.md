# Interface: CustomAudioTrack

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:47

Handle for a custom audio track. Plain and worklet-serializable — store it
(not the [MediaStream](../classes/MediaStream.md)) in the ref/shared value your audio-producing
code reads, and pass it to [pushAudioSamples](../functions/pushAudioSamples.md).

## Properties

### channelCount

> `readonly` **channelCount**: `1` \| `2`

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:53

The channel count this track was created with.

***

### sampleRateHz

> `readonly` **sampleRateHz**: `number`

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:51

The sample rate this track was created with.

***

### sink

> `readonly` **sink**: [`CustomAudioSink`](CustomAudioSink.md)

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:55

Native push channel; use [pushAudioSamples](../functions/pushAudioSamples.md) rather than calling it directly.

***

### trackId

> `readonly` **trackId**: `string`

Defined in: react-native-webrtc/lib/typescript/createCustomAudioTrack.d.ts:49

Id of the underlying audio track.
