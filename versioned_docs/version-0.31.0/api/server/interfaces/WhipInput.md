# Interface: WhipInput

Defined in: composition-openapi/dist/index.d.ts:595

## Export

WhipInput

## Properties

### bearerToken?

> `optional` **bearerToken**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:602

Token used for authentication in WHIP protocol. If not provided, the random value
will be generated and returned in the response.

#### Memberof

WhipInput

***

### type

> **type**: `"whip_server"`

Defined in: composition-openapi/dist/index.d.ts:615

#### Memberof

WhipInput

***

### video?

> `optional` **video**: `null` \| `boolean`

Defined in: composition-openapi/dist/index.d.ts:609

If `true`, accepts a h264-encoded video track.
If not provided, it defaults to `true`

#### Memberof

WhipInput
