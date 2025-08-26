# Variable: VideoRendererView

> `const` **VideoRendererView**: `ForwardRefExoticComponent`\<[`VideoRendererProps`](../type-aliases/VideoRendererProps.md) & `RefAttributes`\<`ComponentType`\<[`VideoRendererProps`](../type-aliases/VideoRendererProps.md)\>\>\>

Defined in: [packages/react-native-client/src/components/VideoRendererView.tsx:45](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/VideoRendererView.tsx#L45)

Render video track received from [usePeers](../functions/usePeers.md) hook

Example usage:
```js
 <VideoRendererView
     trackId={peer.cameraTrack?.id}
     videoLayout="FIT"
     style={styles.videoContent}
 />
 ```

## Param

## Param
