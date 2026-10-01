# Interface: OutputRtmpClientAudioOptions

Defined in: composition-openapi/dist/index.d.ts:2397

## Export

OutputRtmpClientAudioOptions

## Properties

### channels?

> `optional` **channels**: `null` \| [`AudioChannels`](../type-aliases/AudioChannels.md)

Defined in: composition-openapi/dist/index.d.ts:2415

Channels configuration.

#### Memberof

OutputRtmpClientAudioOptions

***

### initial

> **initial**: [`AudioScene`](AudioScene.md)

Defined in: composition-openapi/dist/index.d.ts:2421

Initial audio mixer configuration for output.

#### Memberof

OutputRtmpClientAudioOptions

***

### mixingStrategy?

> `optional` **mixingStrategy**: `null` \| [`AudioMixingStrategy`](../type-aliases/AudioMixingStrategy.md)

Defined in: composition-openapi/dist/index.d.ts:2403

(**default="sum_clip"**) Specifies how audio should be mixed.

#### Memberof

OutputRtmpClientAudioOptions

***

### sendEosWhen?

> `optional` **sendEosWhen**: `null` \| [`OutputEndCondition`](OutputEndCondition.md)

Defined in: composition-openapi/dist/index.d.ts:2409

Condition for termination of the output stream based on the input streams states. If output includes both audio and video streams, then EOS needs to be sent for every type.

#### Memberof

OutputRtmpClientAudioOptions
