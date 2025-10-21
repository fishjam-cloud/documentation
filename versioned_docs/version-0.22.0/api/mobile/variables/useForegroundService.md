# Variable: useForegroundService()

> `const` **useForegroundService**: (`config`) => `void`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:109](https://github.com/fishjam-cloud/mobile-client-sdk/blob/76d05a6e62b137b02043a8a00ca762ff218a64b5/packages/react-native-client/src/hooks/useForegroundService.ts#L109)

A hook for managing a foreground service on Android. Does nothing on other platforms.
You can use this hook to keep your app running in the background. You're also required to run a foreground service when screen sharing.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`ForegroundServiceConfig`](../type-aliases/ForegroundServiceConfig.md) | Configuration options for the foreground service. |

## Returns

`void`
