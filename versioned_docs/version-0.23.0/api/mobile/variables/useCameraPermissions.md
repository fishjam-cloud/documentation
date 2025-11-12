# Variable: useCameraPermissions()

> `const` **useCameraPermissions**: (`options?`) => \[`null` \| `PermissionResponse`, `RequestPermissionMethod`\<`PermissionResponse`\>, `GetPermissionMethod`\<`PermissionResponse`\>\]

Defined in: [packages/react-native-client/src/hooks/usePermissions.ts:31](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/usePermissions.ts#L31)

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
