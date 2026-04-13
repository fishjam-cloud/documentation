# Class: FishjamWSNotifier

Defined in: [js-server-sdk/src/ws\_notifier.ts:76](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/ws_notifier.ts#L76)

Notifier object that can be used to get notified about various events related to the Fishjam App.

## Extends

- `TypedEventEmitter`\<[`NotificationEvents`](../type-aliases/NotificationEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamWSNotifier**(`config`, `onError`, `onClose`): `FishjamWSNotifier`

Defined in: [js-server-sdk/src/ws\_notifier.ts:79](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/ws_notifier.ts#L79)

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
