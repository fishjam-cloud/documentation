# Variable: useCallKitEvent()

> `const` **useCallKitEvent**: \<`T`\>(`action`, `callback`) => `void`

Defined in: [packages/react-native-client/src/hooks/useCallKit.ts:130](https://github.com/fishjam-cloud/mobile-client-sdk/blob/76d05a6e62b137b02043a8a00ca762ff218a64b5/packages/react-native-client/src/hooks/useCallKit.ts#L130)

A hook for listening to CallKit actions on iOS. Does nothing on other platforms.
This hook allows you to respond to user interactions with the native iOS CallKit interface,
such as muting/unmuting the call, putting the call on hold, or ending the call from the
system's phone UI or lock screen controls.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`CallKitAction`](../type-aliases/CallKitAction.md) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `action` | `T` | The CallKit action to listen for. Available actions: - `'started'` - CallKit session has started - `'ended'` - User ended the call from CallKit UI - `'failed'` - CallKit session failed to start - `'muted'` - User toggled mute from CallKit UI - `'held'` - User toggled hold from CallKit UI |
| `callback` | (`event`) => `void` | Function called when the specified action occurs. |

## Returns

`void`

## Example

```typescript
import { useCallKitEvent } from '@fishjam-cloud/react-native-client';

// Listen for hold state changes
useCallKitEvent('held', (isOnHold: boolean) => {
  console.log('Call hold state:', isOnHold);
  // Handle hold state in your app
});
```
