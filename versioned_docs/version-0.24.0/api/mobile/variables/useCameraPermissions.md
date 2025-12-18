# Variable: useCameraPermissions()

> `const` **useCameraPermissions**: (`options?`) => \[`null` \| `PermissionResponse`, `RequestPermissionMethod`\<`PermissionResponse`\>, `GetPermissionMethod`\<`PermissionResponse`\>\]

Defined in: [packages/react-native-client/src/hooks/usePermissions.ts:31](https://github.com/fishjam-cloud/mobile-client-sdk/blob/47936f2f7cc7d0d6100314ad92f0ac25bd097980/packages/react-native-client/src/hooks/usePermissions.ts#L31)

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
