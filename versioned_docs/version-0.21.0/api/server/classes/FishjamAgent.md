# Class: FishjamAgent

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/agent.ts:41](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/agent.ts#L41)

## Extends

- `TypedEventEmitter`\<[`AgentEvents`](../type-aliases/AgentEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamAgent**(`config`, `agentToken`, `onError`, `onClose`): `FishjamAgent`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/agent.ts:44](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/agent.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`FishjamConfig`](../type-aliases/FishjamConfig.md) |
| `agentToken` | `string` |
| `onError` | [`ErrorEventHandler`](../type-aliases/ErrorEventHandler.md) |
| `onClose` | [`CloseEventHandler`](../type-aliases/CloseEventHandler.md) |

#### Returns

`FishjamAgent`

#### Overrides

`(EventEmitter as new () => TypedEmitter<AgentEvents>).constructor`

## Methods

### addListener()

> **addListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:22

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).addListener`

***

### createTrack()

> **createTrack**(`codecParameters`, `metadata`): `Track`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/agent.ts:62](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/agent.ts#L62)

Creates an outgoing audio track for the agent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `codecParameters` | [`AudioCodecParameters`](../type-aliases/AudioCodecParameters.md) |
| `metadata` | `object` |

#### Returns

`Track`

a new audio track

***

### deleteTrack()

> **deleteTrack**(`trackId`): `void`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/agent.ts:80](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/agent.ts#L80)

Deletes an outgoing audio track for the agent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |

#### Returns

`void`

***

### emit()

> **emit**\<`E`\>(`event`, ...`args`): `boolean`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:32

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| ...`args` | `Parameters`\<[`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\]\> |

#### Returns

`boolean`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).emit`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:34

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).eventNames`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:39

#### Returns

`number`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).getMaxListeners`

***

### listenerCount()

> **listenerCount**\<`E`\>(`event`): `number`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:37

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |

#### Returns

`number`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).listenerCount`

***

### listeners()

> **listeners**\<`E`\>(`event`): [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\][]

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:36

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |

#### Returns

[`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\][]

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).listeners`

***

### off()

> **off**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:28

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).off`

***

### on()

> **on**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:23

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).on`

***

### once()

> **once**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:24

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).once`

***

### prependListener()

> **prependListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:25

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).prependListener`

***

### prependOnceListener()

> **prependOnceListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:26

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).prependOnceListener`

***

### rawListeners()

> **rawListeners**\<`E`\>(`event`): [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\][]

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:35

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |

#### Returns

[`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\][]

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).rawListeners`

***

### removeAllListeners()

> **removeAllListeners**\<`E`\>(`event?`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:29

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `E` |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).removeAllListeners`

***

### removeListener()

> **removeListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:30

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `"trackData"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`AgentEvents`](../type-aliases/AgentEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).removeListener`

***

### sendData()

> **sendData**(`trackId`, `data`): `void`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/agent.ts:89](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/agent.ts#L89)

Send audio data for the given track

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |
| `data` | `Uint8Array` |

#### Returns

`void`

***

### setMaxListeners()

> **setMaxListeners**(`maxListeners`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maxListeners` | `number` |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<AgentEvents>).setMaxListeners`
