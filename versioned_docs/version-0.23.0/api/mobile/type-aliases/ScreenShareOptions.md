# Type Alias: ScreenShareOptions

> **ScreenShareOptions** = `object`

Defined in: [packages/react-native-client/src/hooks/useScreenShare.ts:12](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useScreenShare.ts#L12)

## Properties

### quality

> **quality**: [`ScreenShareQuality`](ScreenShareQuality.md)

Defined in: [packages/react-native-client/src/hooks/useScreenShare.ts:19](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useScreenShare.ts#L19)

Resolution + fps of screen share track, one of: `VGA`, `HD5`, `HD15`, `FHD15`, `FHD30`.
Note that quality might be worse than specified due to device capabilities, internet
connection etc.

#### Default

`HD15`
