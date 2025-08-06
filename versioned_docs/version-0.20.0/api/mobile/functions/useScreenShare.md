# Function: useScreenShare()

> **useScreenShare**(): `object`

Defined in: [packages/react-native-client/src/hooks/useScreenShare.ts:42](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useScreenShare.ts#L42)

This hook can toggle screen sharing on/off and provides current screen share state.

## Returns

An object with functions to manage screen share.

### handleScreenSharePermission()

> **handleScreenSharePermission**: () => `Promise`\<`"granted"` \| `"denied"`\>

#### Returns

`Promise`\<`"granted"` \| `"denied"`\>

### isScreenShareOn

> **isScreenShareOn**: `boolean`

### simulcastConfig

> **simulcastConfig**: [`SimulcastConfig`](../type-aliases/SimulcastConfig.md)

### toggleScreenShare()

> **toggleScreenShare**: (`screenShareOptions`) => `Promise`\<`void`\>

Toggles the screen share on/off
Emits warning on ios when user is screensharing app screen.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenShareOptions` | `Partial`\<[`ScreenShareOptions`](../type-aliases/ScreenShareOptions.md)\> |

#### Returns

`Promise`\<`void`\>
