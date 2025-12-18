# Variable: useCallKitService()

> `const` **useCallKitService**: (`config`) => `void`

Defined in: [packages/react-native-client/src/hooks/useCallKit.ts:192](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useCallKit.ts#L192)

A convenience hook for automatically managing CallKit session lifecycle on iOS. Does nothing on other platforms.
This hook automatically starts a CallKit session when the component mounts and ends it when the component unmounts.
Use this hook when you want CallKit to be active for the entire lifetime of a component (e.g., during a call).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`CallKitConfig`](../type-aliases/CallKitConfig.md) | Configuration object containing: - `displayName` - The name to display in the CallKit UI (e.g., username, call title) - `isVideo` - Whether the call is video or audio only |

## Returns

`void`

## Example

```typescript
import React from 'react';
import { useCallKitService } from '@fishjam-cloud/react-native-client';

function CallScreen({ username }: { username: string }) {
  // CallKit session will automatically start when this component mounts
  // and end when it unmounts
  useCallKitService({ displayName: username, isVideo: true });

  return null;
}
```
