# Variable: useCallKit()

> `const` **useCallKit**: () => [`UseCallKitResult`](../type-aliases/UseCallKitResult.md)

Defined in: [packages/react-native-client/src/hooks/useCallKit.ts:161](https://github.com/fishjam-cloud/mobile-client-sdk/blob/76d05a6e62b137b02043a8a00ca762ff218a64b5/packages/react-native-client/src/hooks/useCallKit.ts#L161)

A hook for managing CallKit sessions on iOS. Does nothing on other platforms.
CallKit provides a native iOS interface for managing VoIP calls, integrating with the system's
phone UI and controls. Use this hook when you need fine-grained control over the CallKit session lifecycle.

## Returns

[`UseCallKitResult`](../type-aliases/UseCallKitResult.md)

An object containing methods to manage CallKit sessions:
 - `startCallKitSession(config: CallKitConfig)` - Starts a CallKit session with the given configuration
 - `endCallKitSession()` - Ends the current CallKit session
 - `getCallKitSessionStatus()` - Returns whether there is currently an active CallKit session

## Example

```typescript
import { useCallKit } from '@fishjam-cloud/react-native-client';

const { startCallKitSession, endCallKitSession } = useCallKit();

// Start a CallKit session
await startCallKitSession({ displayName: 'John Doe', isVideo: true });

// Later, end the session
await endCallKitSession();
```
