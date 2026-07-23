# Interface: UseCustomAudioSourceOptions

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:20](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L20)

Settings for [useCustomAudioSource](../functions/useCustomAudioSource.md), fixed for the lifetime of a
streaming session (a `startStreaming`/`stopStreaming` pair).

## Properties

### channelCount?

> `optional` **channelCount**: `1` \| `2`

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:37](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L37)

`1` for mono or `2` for interleaved stereo. Defaults to `1`.

***

### maxBufferedDurationMs?

> `optional` **maxBufferedDurationMs**: `number`

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:45](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L45)

How much pushed-but-not-yet-sent audio to hold, in milliseconds, before
the oldest is dropped. The buffer drains in real time, so this is the
furthest you can push ahead — for example a long text-to-speech utterance
handed over in one call. Must be at least `10`. Defaults to `60000` (one
minute).

***

### sampleRateHz?

> `optional` **sampleRateHz**: `number`

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:33](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L33)

Sample rate of the PCM you will push, in hertz. Must be a positive
multiple of `100`. Push whatever your source produces natively — it is
resampled downstream. Defaults to `48000`.

***

### sourceId?

> `optional` **sourceId**: `string`

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:27](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L27)

Stable id identifying this custom source. Defaults to
`"customAudioSource"`. Every hook instance that streams at the same time
needs its own id — two instances sharing one silently replace each
other's published track.
