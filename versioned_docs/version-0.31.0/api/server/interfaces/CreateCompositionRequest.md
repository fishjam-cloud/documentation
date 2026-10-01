# Interface: CreateCompositionRequest

Defined in: composition-openapi/dist/index.d.ts:242

## Export

CreateCompositionRequest

## Properties

### autostart?

> `optional` **autostart**: `boolean`

Defined in: composition-openapi/dist/index.d.ts:249

If true, outputs will immediately start producing audio and video.
If false, call `POST /api/composition/{composition_id}/start` to start the composition.

#### Memberof

CreateCompositionRequest

***

### cleanupWithoutInputs?

> `optional` **cleanupWithoutInputs**: `boolean`

Defined in: composition-openapi/dist/index.d.ts:258

If true (default), the composition will be cleaned up after 5 minutes when all **inputs**
have zero bitrate, regardless of output bitrate. This prevents circular liveness when
composition output is sent to a stream.
If false, cleanup only triggers when both inputs and outputs have zero bitrate.

#### Memberof

CreateCompositionRequest
