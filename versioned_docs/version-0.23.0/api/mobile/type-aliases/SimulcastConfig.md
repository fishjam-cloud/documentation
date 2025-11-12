# Type Alias: SimulcastConfig

> **SimulcastConfig** = `object`

Defined in: [packages/react-native-client/src/types.ts:15](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/types.ts#L15)

A type describing simulcast configuration.

At the moment, simulcast track is initialized in three versions - low, medium and high.
High resolution is the original track resolution, while medium and low resolutions are
the original track resolution scaled down by 2 and 4 respectively.

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [packages/react-native-client/src/types.ts:19](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/types.ts#L19)

whether to simulcast track or not. By default simulcast is disabled.
