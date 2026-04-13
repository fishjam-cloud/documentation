# Function: useCameraPermissions()

> **useCameraPermissions**(): \[() => `Promise`\<[`PermissionStatus`](../type-aliases/PermissionStatus.md)\>, () => `Promise`\<[`PermissionStatus`](../type-aliases/PermissionStatus.md)\>\]

Defined in: [packages/mobile-client/src/hooks/usePermissions.ts:47](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/mobile-client/src/hooks/usePermissions.ts#L47)

Hook for querying and requesting camera permission on the device.

## Returns

\[() => `Promise`\<[`PermissionStatus`](../type-aliases/PermissionStatus.md)\>, () => `Promise`\<[`PermissionStatus`](../type-aliases/PermissionStatus.md)\>\]

A tuple of `[query, request]`:
- `query` – checks the current camera permission status without prompting the user.
- `request` – triggers the native permission dialog and returns the resulting status.

## Example

```tsx
import { useCameraPermissions } from "@fishjam-cloud/react-native-client";
// ---cut---
const [queryCameraPermission, requestCameraPermission] = useCameraPermissions();

const status = await queryCameraPermission();
if (status !== 'granted') {
  await requestCameraPermission();
}
```
