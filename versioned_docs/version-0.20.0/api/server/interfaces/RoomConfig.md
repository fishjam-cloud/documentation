# Interface: RoomConfig

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:958

Room configuration

## Export

RoomConfig

## Properties

### maxPeers?

> `optional` **maxPeers**: `null` \| `number`

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:964

Maximum amount of peers allowed into the room

#### Memberof

RoomConfig

***

### public?

> `optional` **public**: `boolean`

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:970

True if livestream viewers can omit specifying a token.

#### Memberof

RoomConfig

***

### roomType?

> `optional` **roomType**: [`RoomConfigRoomTypeEnum`](../type-aliases/RoomConfigRoomTypeEnum.md)

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:976

The use-case of the room. If not provided, this defaults to conference.

#### Memberof

RoomConfig

***

### videoCodec?

> `optional` **videoCodec**: `null` \| [`RoomConfigVideoCodecEnum`](../type-aliases/RoomConfigVideoCodecEnum.md)

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:982

Enforces video codec for each peer in the room

#### Memberof

RoomConfig

***

### webhookUrl?

> `optional` **webhookUrl**: `null` \| `string`

Defined in: packages/js-server-sdk/packages/fishjam-openapi/dist/index.d.ts:988

URL where Fishjam notifications will be sent

#### Memberof

RoomConfig
