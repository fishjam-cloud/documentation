# Interface: UseCustomAudioSourceResult

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:48](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L48)

## Properties

### error

> **error**: `null` \| `Error`

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:70](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L70)

The error that failed the last `startStreaming` or `stopStreaming` call, if any.

***

### isStreaming

> **isStreaming**: `boolean`

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:50](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L50)

Whether the custom audio track is currently published.

***

### startStreaming()

> **startStreaming**: () => `Promise`\<`void`\>

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:64](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L64)

Create the custom audio track and publish it. Once this resolves the
track is registered — pushed samples are streamed to the room right away
when the peer is connected, or automatically once it connects. No-op when
already streaming.

#### Returns

`Promise`\<`void`\>

***

### stopStreaming()

> **stopStreaming**: () => `Promise`\<`void`\>

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:68](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L68)

Unpublish and release the custom audio track. No-op when not streaming.

#### Returns

`Promise`\<`void`\>

***

### track

> **track**: `null` \| [`CustomAudioTrack`](CustomAudioTrack.md)

Defined in: [mobile-client/src/hooks/useCustomAudioSource.ts:57](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/hooks/useCustomAudioSource.ts#L57)

Push handle for the published track; `null` until streaming starts. Hand
it to `pushAudioSamples` whenever your source produces audio. The handle
is plain and worklet-serializable, so it can be shared into a worklet and
pushed from there directly — no thread hop.
