# Type Alias: ForegroundServiceConfig

> **ForegroundServiceConfig** = `object`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:9](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useForegroundService.ts#L9)

A type representing the configuration for foreground service permissions.

## Properties

### channelId?

> `optional` **channelId**: `string`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:21](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useForegroundService.ts#L21)

The id of the channel. Must be unique per package.

***

### channelName?

> `optional` **channelName**: `string`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:25](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useForegroundService.ts#L25)

The user visible name of the channel.

***

### enableCamera?

> `optional` **enableCamera**: `boolean`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:13](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useForegroundService.ts#L13)

Indicates whether the camera is enabled for the foreground service.

***

### enableMicrophone?

> `optional` **enableMicrophone**: `boolean`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:17](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useForegroundService.ts#L17)

Indicates whether the microphone is enabled for the foreground service.

***

### notificationContent?

> `optional` **notificationContent**: `string`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:33](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useForegroundService.ts#L33)

The text (second row) of the notification, in a standard notification.

***

### notificationTitle?

> `optional` **notificationTitle**: `string`

Defined in: [packages/react-native-client/src/hooks/useForegroundService.ts:29](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useForegroundService.ts#L29)

The title (first row) of the notification, in a standard notification.
