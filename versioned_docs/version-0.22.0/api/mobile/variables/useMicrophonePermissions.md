# Variable: useMicrophonePermissions()

> `const` **useMicrophonePermissions**: (`options?`) => \[`null` \| `PermissionResponse`, `RequestPermissionMethod`\<`PermissionResponse`\>, `GetPermissionMethod`\<`PermissionResponse`\>\]

Defined in: [packages/react-native-client/src/hooks/usePermissions.ts:63](https://github.com/fishjam-cloud/mobile-client-sdk/blob/daab5af2df6e35bf6eb77e09f0242e614359c1ec/packages/react-native-client/src/hooks/usePermissions.ts#L63)

Check or request permissions to access the microphone.
This uses both `requestMicrophonePermissionsAsync` and `getMicrophonePermissionsAsync` to interact with the permissions.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | `PermissionHookOptions`\<`object`\> |

## Returns

\[`null` \| `PermissionResponse`, `RequestPermissionMethod`\<`PermissionResponse`\>, `GetPermissionMethod`\<`PermissionResponse`\>\]

## Example

```ts
import { useMicrophonePermissions } from '@fishjam-cloud/react-native-client';
const [status, requestPermission] = useMicrophonePermissions();
```
