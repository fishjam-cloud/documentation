# Function: useInitializeDevices()

> **useInitializeDevices**(): `object`

Defined in: [react-client/src/hooks/devices/useInitializeDevices.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-client/src/hooks/devices/useInitializeDevices.ts#L14)

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
