# Variable: useMicrophonePermissions()

> `const` **useMicrophonePermissions**: (`options?`) => \[`null` \| `PermissionResponse`, `RequestPermissionMethod`\<`PermissionResponse`\>, `GetPermissionMethod`\<`PermissionResponse`\>\]

Defined in: [packages/react-native-client/src/hooks/usePermissions.ts:63](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/usePermissions.ts#L63)

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
