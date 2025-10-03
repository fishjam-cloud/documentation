# Function: useInitializeDevices()

> **useInitializeDevices**(): `object`

Defined in: [packages/react-client/src/hooks/devices/useInitializeDevices.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/47e1a8041a7e2ff70090b00d44e1873552c14cbc/packages/react-client/src/hooks/devices/useInitializeDevices.ts#L14)

Hook allows you to initialize access to the devices before joining the room.

## Returns

### initializeDevices()

> **initializeDevices**: (`settings?`) => `Promise`\<[`InitializeDevicesResult`](../type-aliases/InitializeDevicesResult.md)\>

Initialize access to the devices before joining the room

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `settings?` | [`InitializeDevicesSettings`](../type-aliases/InitializeDevicesSettings.md) |

#### Returns

`Promise`\<[`InitializeDevicesResult`](../type-aliases/InitializeDevicesResult.md)\>
