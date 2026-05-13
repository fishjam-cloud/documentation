# Variable: useForegroundService()

> `const` **useForegroundService**: (`config`) => `void` = `externalUseForegroundService`

Defined in: [packages/mobile-client/src/useForegroundService.ts:47](https://github.com/fishjam-cloud/web-client-sdk/blob/30f99e0d93a92f6cdd572bab746cc8ce0c853a22/packages/mobile-client/src/useForegroundService.ts#L47)

Hook for managing a foreground service on Android.

A hook for managing a foreground service on Android. Does nothing on other platforms.
You can use this hook to keep your app running in the background. You're also required to run a foreground service when screen sharing.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | `ForegroundServiceConfig` | Configuration options for the foreground service. |

## Returns

`void`
