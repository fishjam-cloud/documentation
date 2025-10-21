# Class: FishjamWSNotifier

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/ws\_notifier.ts:76](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/ws_notifier.ts#L76)

Notifier object that can be used to get notified about various events related to the Fishjam App.

## Extends

- `TypedEventEmitter`\<[`NotificationEvents`](../type-aliases/NotificationEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamWSNotifier**(`config`, `onError`, `onClose`): `FishjamWSNotifier`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/ws\_notifier.ts:79](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/ws_notifier.ts#L79)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`FishjamConfig`](../type-aliases/FishjamConfig.md) |
| `onError` | [`ErrorEventHandler`](../type-aliases/ErrorEventHandler.md) |
| `onClose` | [`CloseEventHandler`](../type-aliases/CloseEventHandler.md) |

#### Returns

`FishjamWSNotifier`

#### Overrides

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).constructor`

## Methods

### addListener()

> **addListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:22

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).addListener`

***

### emit()

> **emit**\<`E`\>(`event`, ...`args`): `boolean`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:32

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| ...`args` | `Parameters`\<[`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\]\> |

#### Returns

`boolean`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).emit`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:34

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).eventNames`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:39

#### Returns

`number`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).getMaxListeners`

***

### listenerCount()

> **listenerCount**\<`E`\>(`event`): `number`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:37

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |

#### Returns

`number`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).listenerCount`

***

### listeners()

> **listeners**\<`E`\>(`event`): [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\][]

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:36

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |

#### Returns

[`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\][]

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).listeners`

***

### off()

> **off**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:28

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).off`

***

### on()

> **on**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:23

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).on`

***

### once()

> **once**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:24

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).once`

***

### prependListener()

> **prependListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:25

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).prependListener`

***

### prependOnceListener()

> **prependOnceListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:26

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).prependOnceListener`

***

### rawListeners()

> **rawListeners**\<`E`\>(`event`): [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\][]

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:35

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |

#### Returns

[`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\][]

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).rawListeners`

***

### removeAllListeners()

> **removeAllListeners**\<`E`\>(`event?`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:29

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `E` |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).removeAllListeners`

***

### removeListener()

> **removeListener**\<`E`\>(`event`, `listener`): `this`

Defined in: packages/js-server-sdk/node\_modules/typed-emitter/index.d.ts:30

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* [`ExpectedEvents`](../type-aliases/ExpectedEvents.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `E` |
| `listener` | [`NotificationEvents`](../type-aliases/NotificationEvents.md)\[`E`\] |

#### Returns

`this`

#### Inherited from

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).removeListener`

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

`(EventEmitter as new () => TypedEmitter<NotificationEvents>).setMaxListeners`
