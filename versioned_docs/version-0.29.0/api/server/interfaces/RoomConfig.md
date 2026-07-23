# Interface: RoomConfig

Defined in: fishjam-openapi/dist/index.d.ts:1524

Room configuration

## Export

RoomConfig

## Properties

### batchWebhookNotifications?

> `optional` **batchWebhookNotifications**: `boolean`

Defined in: fishjam-openapi/dist/index.d.ts:1530

If true, webhook notifications for this room are coalesced into a single NotificationBatch per HTTP send instead of one request per notification. VAD notifications are unaffected.

#### Memberof

RoomConfig

***

### maxPeers?

> `optional` **maxPeers**: `null` \| `number`

Defined in: fishjam-openapi/dist/index.d.ts:1536

Maximum amount of peers allowed into the room

#### Memberof

RoomConfig

***

### public?

> `optional` **public**: `boolean`

Defined in: fishjam-openapi/dist/index.d.ts:1542

True if livestream viewers can omit specifying a token.

#### Memberof

RoomConfig

***

### roomType?

> `optional` **roomType**: [`RoomType`](../type-aliases/RoomType.md)

Defined in: fishjam-openapi/dist/index.d.ts:1548

#### Memberof

RoomConfig

***

### videoCodec?

> `optional` **videoCodec**: [`VideoCodec`](../type-aliases/VideoCodec.md)

Defined in: fishjam-openapi/dist/index.d.ts:1554

#### Memberof

RoomConfig

***

### ~~webhookUrl?~~

> `optional` **webhookUrl**: `null` \| `string`

Defined in: fishjam-openapi/dist/index.d.ts:1561

Deprecated: configure the webhook in the Dashboard instead. URL where Fishjam notifications will be sent; overrides the Dashboard-configured webhook URL

#### Memberof

RoomConfig

#### Deprecated
