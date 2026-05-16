# Interface: RoomConfig

Defined in: fishjam-openapi/dist/index.d.ts:491

Room configuration

## Export

RoomConfig

## Properties

### batchWebhookNotifications?

> `optional` **batchWebhookNotifications**: `boolean`

Defined in: fishjam-openapi/dist/index.d.ts:497

If true, webhook notifications for this room are coalesced into a single NotificationBatch per HTTP send instead of one request per notification. VAD notifications are unaffected.

#### Memberof

RoomConfig

***

### maxPeers?

> `optional` **maxPeers**: `null` \| `number`

Defined in: fishjam-openapi/dist/index.d.ts:503

Maximum amount of peers allowed into the room

#### Memberof

RoomConfig

***

### public?

> `optional` **public**: `boolean`

Defined in: fishjam-openapi/dist/index.d.ts:509

True if livestream viewers can omit specifying a token.

#### Memberof

RoomConfig

***

### roomType?

> `optional` **roomType**: [`RoomType`](../enumerations/RoomType.md)

Defined in: fishjam-openapi/dist/index.d.ts:515

#### Memberof

RoomConfig

***

### videoCodec?

> `optional` **videoCodec**: [`VideoCodec`](../enumerations/VideoCodec.md)

Defined in: fishjam-openapi/dist/index.d.ts:521

#### Memberof

RoomConfig

***

### webhookUrl?

> `optional` **webhookUrl**: `null` \| `string`

Defined in: fishjam-openapi/dist/index.d.ts:527

URL where Fishjam notifications will be sent

#### Memberof

RoomConfig
