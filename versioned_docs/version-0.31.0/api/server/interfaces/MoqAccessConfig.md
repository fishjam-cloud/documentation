# Interface: MoqAccessConfig

Defined in: fishjam-openapi/dist/index.d.ts:273

MoQ access configuration

## Export

MoqAccessConfig

## Properties

### publishPath?

> `optional` **publishPath**: `null` \| `string`

Defined in: fishjam-openapi/dist/index.d.ts:279

Path under the root the token grants publish access to

#### Memberof

MoqAccessConfig

***

### subscribePath?

> `optional` **subscribePath**: `null` \| `string`

Defined in: fishjam-openapi/dist/index.d.ts:285

Path under the root the token grants subscribe access to

#### Memberof

MoqAccessConfig

***

### ttl?

> `optional` **ttl**: `null` \| `number`

Defined in: fishjam-openapi/dist/index.d.ts:291

Token time to live in seconds. Defaults to 3600 (1 hour), maximum is 604800 (7 days).

#### Memberof

MoqAccessConfig
