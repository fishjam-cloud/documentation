# Interface: OutputWhipAudioOptions

Defined in: composition-openapi/dist/index.d.ts:2703

## Export

OutputWhipAudioOptions

## Properties

### channels?

> `optional` **channels**: `null` \| [`AudioChannels`](../type-aliases/AudioChannels.md)

Defined in: composition-openapi/dist/index.d.ts:2721

Specifies channels configuration.

#### Memberof

OutputWhipAudioOptions

***

### encoderPreferences?

> `optional` **encoderPreferences**: `null` \| [`WhipAudioEncoderOptions`](../type-aliases/WhipAudioEncoderOptions.md)[]

Defined in: composition-openapi/dist/index.d.ts:2727

Codec preferences list.

#### Memberof

OutputWhipAudioOptions

***

### initial

> **initial**: [`AudioScene`](AudioScene.md)

Defined in: composition-openapi/dist/index.d.ts:2733

Initial audio mixer configuration for output.

#### Memberof

OutputWhipAudioOptions

***

### mixingStrategy?

> `optional` **mixingStrategy**: `null` \| [`AudioMixingStrategy`](../type-aliases/AudioMixingStrategy.md)

Defined in: composition-openapi/dist/index.d.ts:2709

(**default="sum_clip"**) Specifies how audio should be mixed.

#### Memberof

OutputWhipAudioOptions

***

### sendEosWhen?

> `optional` **sendEosWhen**: `null` \| [`OutputEndCondition`](OutputEndCondition.md)

Defined in: composition-openapi/dist/index.d.ts:2715

Condition for termination of output stream based on the input streams states.

#### Memberof

OutputWhipAudioOptions
