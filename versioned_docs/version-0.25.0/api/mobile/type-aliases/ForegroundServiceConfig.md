# Type Alias: ForegroundServiceConfig

> **ForegroundServiceConfig** = `object`

Defined in: [packages/mobile-client/src/useForegroundService.ts:8](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L8)

Configuration options for foreground service permissions.

A type representing the configuration for foreground service permissions.

## Properties

### channelId?

> `optional` **channelId**: `string`

Defined in: [packages/mobile-client/src/useForegroundService.ts:24](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L24)

The id of the channel. Must be unique per package.

***

### channelName?

> `optional` **channelName**: `string`

Defined in: [packages/mobile-client/src/useForegroundService.ts:28](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L28)

The user visible name of the channel.

***

### enableCamera?

> `optional` **enableCamera**: `boolean`

Defined in: [packages/mobile-client/src/useForegroundService.ts:12](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L12)

Indicates whether the camera is enabled for the foreground service.

***

### enableMicrophone?

> `optional` **enableMicrophone**: `boolean`

Defined in: [packages/mobile-client/src/useForegroundService.ts:16](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L16)

Indicates whether the microphone is enabled for the foreground service.

***

### enableScreenSharing?

> `optional` **enableScreenSharing**: `boolean`

Defined in: [packages/mobile-client/src/useForegroundService.ts:20](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L20)

Indicates whether screen sharing is enabled for the foreground service.

***

### notificationContent?

> `optional` **notificationContent**: `string`

Defined in: [packages/mobile-client/src/useForegroundService.ts:36](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L36)

The text (second row) of the notification, in a standard notification.

***

### notificationTitle?

> `optional` **notificationTitle**: `string`

Defined in: [packages/mobile-client/src/useForegroundService.ts:32](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/mobile-client/src/useForegroundService.ts#L32)

The title (first row) of the notification, in a standard notification.
