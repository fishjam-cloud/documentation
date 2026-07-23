# Function: useCustomAudioSource()

> **useCustomAudioSource**(`options?`): [`UseCustomAudioSourceResult`](../interfaces/UseCustomAudioSourceResult.md)

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:129](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L129)

Publish your own audio to Fishjam.

Creates a custom audio track, publishes it, and cleans it up — you supply
the PCM from any source (a synthesizer, a decoder, an audio pipeline) via
`pushAudioSamples`. The published track behaves like a live microphone:
pauses in pushing are fine and play as silence. It is independent of
[useMicrophone](useMicrophone.md) and does not involve the device microphone in any way —
publishing it does not trigger the recording permission.

Remote peers receive the track with metadata type `"customAudio"`
(`usePeers` exposes it under `customAudioTracks`).

Push PCM with `pushAudioSamples` (from `@fishjam-cloud/react-native-client`)
and the returned [track](../interfaces/UseCustomAudioSourceResult.md#track) handle —
from the JS thread or from inside a worklet, with any chunk size. The track
re-paces pushes into a continuous stream, filling gaps with silence like a
live microphone. `Float32Array` samples are expected in `[-1, 1]`;
`Int16Array` is taken as-is.

```tsx
const { startStreaming, stopStreaming, track } = useCustomAudioSource();

// e.g. from react-native-audio-api's AudioRecorder:
recorder.onAudioReady({ sampleRate: 48000, bufferLength: 4800, channelCount: 1 },
    ({ buffer }) => track && pushAudioSamples(track, buffer.getChannelData(0)));
```

Requires the New Architecture; `startStreaming` reports an error on the old
architecture.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`UseCustomAudioSourceOptions`](../interfaces/UseCustomAudioSourceOptions.md) |

## Returns

[`UseCustomAudioSourceResult`](../interfaces/UseCustomAudioSourceResult.md)
