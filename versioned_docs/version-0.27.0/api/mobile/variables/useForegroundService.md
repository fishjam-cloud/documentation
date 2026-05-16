# Variable: useForegroundService()

> `const` **useForegroundService**: (`config`) => `void` = `externalUseForegroundService`

Defined in: [packages/mobile-client/src/useForegroundService.ts:47](https://github.com/fishjam-cloud/web-client-sdk/blob/9a4ad3270ef2456354c48b507c3cc9c08d58a0c7/packages/mobile-client/src/useForegroundService.ts#L47)

Hook for managing a foreground service on Android.

A hook for managing a foreground service on Android. Does nothing on other platforms.
You can use this hook to keep your app running in the background. You're also required to run a foreground service when screen sharing.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | `ForegroundServiceConfig` | Configuration options for the foreground service. |

## Returns

`void`
