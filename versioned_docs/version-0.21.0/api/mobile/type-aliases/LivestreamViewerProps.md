# Type Alias: LivestreamViewerProps

> **LivestreamViewerProps** = `object`

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:10](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L10)

Props of the LivestreamView component

## Properties

### autoStartPip?

> `optional` **autoStartPip**: `boolean`

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:29](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L29)

A variable deciding whether the Picture-in-Picture mode should be started automatically after the app is backgrounded.
Defaults to false.

***

### autoStopPip?

> `optional` **autoStopPip**: `boolean`

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:35](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L35)

A variable deciding whether the Picture-in-Picture mode should be stopped automatically on iOS after the app is foregrounded.
Always enabled on Android as PiP is not supported in foreground.
Defaults to false.

***

### orientation?

> `optional` **orientation**: `"landscape"` \| `"portrait"`

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:19](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L19)

Used to override the orientation of the video (from metadata).
Defaults to "portrait".

***

### pipEnabled?

> `optional` **pipEnabled**: `boolean`

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:24](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L24)

A variable deciding whether the Picture-in-Picture is enabled.
Defaults to true.

***

### pipSize?

> `optional` **pipSize**: `object`

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:39](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L39)

A variable deciding the size of the Picture-in-Picture mode.

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

***

### ref?

> `optional` **ref**: `Ref`\<[`LivestreamViewerRef`](LivestreamViewerRef.md)\>

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:44](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L44)

***

### style?

> `optional` **style**: `StyleProp`\<`ViewStyle`\>

Defined in: [packages/react-native-client/src/components/LivestreamViewer.tsx:14](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/LivestreamViewer.tsx#L14)

Styles of the LivestreamView component
