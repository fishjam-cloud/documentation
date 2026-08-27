# Type Alias: PermissionStatus

> **PermissionStatus** = `"granted"` \| `"denied"` \| `"prompt"`

Defined in: [mobile-client/src/hooks/usePermissions.ts:11](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/hooks/usePermissions.ts#L11)

The current status of a device permission.

- `'granted'` – the user has granted the permission.
- `'denied'` – the user has denied the permission.
- `'prompt'` – the user has not yet been asked (or the permission can be requested again).
