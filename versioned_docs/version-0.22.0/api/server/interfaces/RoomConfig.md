# Interface: RoomConfig

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:414

Room configuration

## Export

RoomConfig

## Properties

### maxPeers?

> `optional` **maxPeers**: `null` \| `number`

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:420

Maximum amount of peers allowed into the room

#### Memberof

RoomConfig

***

### public?

> `optional` **public**: `boolean`

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:426

True if livestream viewers can omit specifying a token.

#### Memberof

RoomConfig

***

### roomType?

> `optional` **roomType**: [`RoomConfigRoomTypeEnum`](../type-aliases/RoomConfigRoomTypeEnum.md)

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:432

The use-case of the room. If not provided, this defaults to conference.

#### Memberof

RoomConfig

***

### videoCodec?

> `optional` **videoCodec**: [`RoomConfigVideoCodecEnum`](../type-aliases/RoomConfigVideoCodecEnum.md)

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:438

Enforces video codec for each peer in the room

#### Memberof

RoomConfig

***

### webhookUrl?

> `optional` **webhookUrl**: `null` \| `string`

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:444

URL where Fishjam notifications will be sent

#### Memberof

RoomConfig
