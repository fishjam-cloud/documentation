# Variable: PipContainerView

> `const` **PipContainerView**: `ForwardRefExoticComponent`\<[`PipContainerViewProps`](../interfaces/PipContainerViewProps.md) & `RefAttributes`\<[`PipContainerViewRef`](../interfaces/PipContainerViewRef.md)\>\>

Defined in: [packages/react-native-client/src/components/PipContainerView.tsx:55](https://github.com/fishjam-cloud/mobile-client-sdk/blob/47936f2f7cc7d0d6100314ad92f0ac25bd097980/packages/react-native-client/src/components/PipContainerView.tsx#L55)

A view component for Picture-in-Picture functionality with split-screen layout.

Automatically displays:
- Primary view (left): Local camera track or placeholder text
- Secondary view (right): Remote track with active VAD (voice activity) or placeholder text

Use a ref to call methods on this component:
```js
const pipRef = useRef<PipContainerViewRef>(null);

// Start PiP manually (if startAutomatically is false)
await pipRef.current?.startPictureInPicture();

// Stop PiP manually
await pipRef.current?.stopPictureInPicture();
```

## Param

Whether to start PiP automatically when app goes to background (default: true)

## Param

Whether to stop PiP automatically when app comes to foreground (default: true)

## Param

Whether to allow camera to continue running in PiP mode (default: false, iOS only)

## Param

Text to display when local camera is unavailable (default: "No camera")

## Param

Text to display when no remote speaker is active (default: "No active speaker")
