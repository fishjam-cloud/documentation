# Function: useScreenShare()

> **useScreenShare**(): `object`

Defined in: [packages/react-native-client/src/hooks/useScreenShare.ts:35](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useScreenShare.ts#L35)

This hook can toggle screen sharing on/off and provides current screen share state.

## Returns

An object with functions to manage screen share.

### handleScreenSharePermission()

> **handleScreenSharePermission**: () => `Promise`\<`"granted"` \| `"denied"`\>

#### Returns

`Promise`\<`"granted"` \| `"denied"`\>

### isScreenShareOn

> **isScreenShareOn**: `boolean`

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
