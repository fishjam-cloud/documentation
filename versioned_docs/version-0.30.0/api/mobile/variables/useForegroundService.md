# Variable: useForegroundService()

> `const` **useForegroundService**: (`config`) => `void` = `externalUseForegroundService`

Defined in: [mobile-client/src/useForegroundService.ts:47](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/useForegroundService.ts#L47)

Hook for managing a foreground service on Android.

A hook for managing a foreground service on Android. Does nothing on other platforms.
You can use this hook to keep your app running in the background. You're also required to run a foreground service when screen sharing.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | `ForegroundServiceConfig` | Configuration options for the foreground service. |

## Returns

`void`
