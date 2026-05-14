# Function: useInitializeDevices()

> **useInitializeDevices**(): `object`

Defined in: [react-client/src/hooks/devices/useInitializeDevices.ts:14](https://github.com/fishjam-cloud/web-client-sdk/blob/9a4ad3270ef2456354c48b507c3cc9c08d58a0c7/packages/react-client/src/hooks/devices/useInitializeDevices.ts#L14)

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
