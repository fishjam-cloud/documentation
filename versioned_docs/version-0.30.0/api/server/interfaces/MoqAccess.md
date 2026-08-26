# Interface: MoqAccess

Defined in: fishjam-openapi/dist/index.d.ts:234

Connection details for a MoQ relay client

## Export

MoqAccess

## Properties

### connection\_url

> **connection\_url**: `string`

Defined in: fishjam-openapi/dist/index.d.ts:240

Relay connection URL with the JWT embedded as a `?jwt=` query parameter. Pass directly to a MoQ client SDK.

#### Memberof

MoqAccess

***

### token

> **token**: `string`

Defined in: fishjam-openapi/dist/index.d.ts:246

JWT authorizing the MoQ relay connection, also embedded in `connection_url`

#### Memberof

MoqAccess
