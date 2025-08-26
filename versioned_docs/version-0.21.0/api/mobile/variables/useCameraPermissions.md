# Variable: useCameraPermissions()

> `const` **useCameraPermissions**: (`options?`) => \[`null` \| `PermissionResponse`, `RequestPermissionMethod`\<`PermissionResponse`\>, `GetPermissionMethod`\<`PermissionResponse`\>\]

Defined in: [packages/react-native-client/src/hooks/usePermissions.ts:31](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/usePermissions.ts#L31)

Check or request permissions to access the camera.
This uses both `requestCameraPermissionsAsync` and `getCameraPermissionsAsync` to interact with the permissions.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | `PermissionHookOptions`\<`object`\> |

## Returns

\[`null` \| `PermissionResponse`, `RequestPermissionMethod`\<`PermissionResponse`\>, `GetPermissionMethod`\<`PermissionResponse`\>\]

## Example

```ts
import { useCameraPermissions } from '@fishjam-cloud/react-native-client';
const [status, requestPermission] = useCameraPermissions();
```
