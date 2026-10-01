# Interface: WhipAudioEncoderOptionsOpus

Defined in: composition-openapi/dist/index.d.ts:2621

## Export

WhipAudioEncoderOptionsOpus

## Properties

### forwardErrorCorrection?

> `optional` **forwardErrorCorrection**: `null` \| `boolean`

Defined in: composition-openapi/dist/index.d.ts:2639

(**default=`false`**) Specifies if forward error correction (FEC) should be used.

#### Memberof

WhipAudioEncoderOptionsOpus

***

### preset?

> `optional` **preset**: `null` \| [`OpusEncoderPreset`](../type-aliases/OpusEncoderPreset.md)

Defined in: composition-openapi/dist/index.d.ts:2627

(**default="voip"**) Specifies preset for audio output encoder.

#### Memberof

WhipAudioEncoderOptionsOpus

***

### sampleRate?

> `optional` **sampleRate**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:2633

(**default=`48000`**) Sample rate. Allowed values: [8000, 16000, 24000, 48000].

#### Memberof

WhipAudioEncoderOptionsOpus

***

### type

> **type**: `"opus"`

Defined in: composition-openapi/dist/index.d.ts:2645

#### Memberof

WhipAudioEncoderOptionsOpus
