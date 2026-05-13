# Function: useInitializeDevices()

> **useInitializeDevices**(): `object`

Defined in: [react-client/src/hooks/devices/useInitializeDevices.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/30f99e0d93a92f6cdd572bab746cc8ce0c853a22/packages/react-client/src/hooks/devices/useInitializeDevices.ts#L14)

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
