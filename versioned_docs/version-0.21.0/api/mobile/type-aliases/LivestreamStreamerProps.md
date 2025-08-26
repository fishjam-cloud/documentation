# Type Alias: LivestreamStreamerProps

> **LivestreamStreamerProps** = `object`

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:16](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L16)

Props of the LivestreamView component

## Properties

### audioEnabled

> **audioEnabled**: `boolean`

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:28](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L28)

If audio track should be enabled.

***

### camera?

> `optional` **camera**: `Camera`

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:33](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L33)

Camera to use for the livestream.
Use [cameras](../variables/cameras.md) to get the list of supported cameras.

***

### preferredAudioCodecs?

> `optional` **preferredAudioCodecs**: `SenderAudioCodecName`[]

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:47](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L47)

Set the preferred audio codecs for sending the audio.
Use [WhipClient.getSupportedAudioCodecs](../classes/WhipClient.md#getsupportedaudiocodecs) to get the list of supported audio codecs.

***

### preferredVideoCodecs?

> `optional` **preferredVideoCodecs**: `SenderVideoCodecName`[]

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:42](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L42)

Set the preferred video codecs for sending the video.
Use [WhipClient.getSupportedVideoCodecs](../classes/WhipClient.md#getsupportedvideocodecs) to get the list of supported video codecs.

***

### style?

> `optional` **style**: `StyleProp`\<`ViewStyle`\>

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:20](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L20)

Styles of the LivestreamView component

***

### videoEnabled

> **videoEnabled**: `boolean`

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:24](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L24)

If video track should be enabled.

***

### videoParameters?

> `optional` **videoParameters**: [`VideoParameters`](../enumerations/VideoParameters.md)

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:37](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L37)

Set video parameters for the camera

***

### whipClientRef

> **whipClientRef**: `React.RefObject`\<[`WhipClient`](../classes/WhipClient.md) \| `null`\>

Defined in: [packages/react-native-client/src/components/LivestreamStreamer.tsx:52](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamStreamer.tsx#L52)

Reference to the WhipClient instance. Needs to be passed from the [useLivestreamStreamer](../functions/useLivestreamStreamer.md) hook.
