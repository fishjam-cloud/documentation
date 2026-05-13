# Type Alias: PermissionStatus

> **PermissionStatus** = `"granted"` \| `"denied"` \| `"prompt"`

Defined in: [packages/mobile-client/src/hooks/usePermissions.ts:11](https://github.com/fishjam-cloud/web-client-sdk/blob/30f99e0d93a92f6cdd572bab746cc8ce0c853a22/packages/mobile-client/src/hooks/usePermissions.ts#L11)

The current status of a device permission.

- `'granted'` – the user has granted the permission.
- `'denied'` – the user has denied the permission.
- `'prompt'` – the user has not yet been asked (or the permission can be requested again).
