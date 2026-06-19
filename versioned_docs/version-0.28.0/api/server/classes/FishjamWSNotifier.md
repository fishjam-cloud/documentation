# Class: FishjamWSNotifier

Defined in: [js-server-sdk/src/ws\_notifier.ts:12](https://github.com/fishjam-cloud/js-server-sdk/blob/d70af8c6517be3f35a70de3a0c4ad33de743db55/packages/js-server-sdk/src/ws_notifier.ts#L12)

Notifier object that can be used to get notified about various events related to the Fishjam App.

## Extends

- `TypedEventEmitter`\<[`NotificationEvents`](../type-aliases/NotificationEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamWSNotifier**(`config`, `onError`, `onClose`): `FishjamWSNotifier`

Defined in: [js-server-sdk/src/ws\_notifier.ts:15](https://github.com/fishjam-cloud/js-server-sdk/blob/d70af8c6517be3f35a70de3a0c4ad33de743db55/packages/js-server-sdk/src/ws_notifier.ts#L15)

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
