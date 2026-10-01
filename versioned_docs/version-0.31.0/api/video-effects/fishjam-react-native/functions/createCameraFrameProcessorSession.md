# Function: createCameraFrameProcessorSession()

> **createCameraFrameProcessorSession**(`options`): `Promise`\<[`CameraFrameProcessorSession`](../interfaces/CameraFrameProcessorSession.md)\>

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:153](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L153)

Runs a WebGPU effect on Fishjam's own camera track and republishes the result as a pooled
video track. Hand the raw camera track in from a camera track middleware and return
`session.track`; the returned frames go out as the peer's camera track.

The effect drawing lives in your `frameKernel`, a worklet run on the camera frame runtime for
every frame. The session owns everything else: the output surface pool, the native camera tap,
GPU synchronization with the encoder, and frame lifetimes (a frame is released for you once the
kernel returns).

```ts
setCameraTrackMiddleware(async (rawTrack) => {
  const session = await createCameraFrameProcessorSession({
    track: rawTrack, device, width: 720, height: 1280, frameKernel,
  });
  return { track: session.track, onClear: () => void session.dispose() };
});
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateCameraFrameProcessorSessionOptions`](../interfaces/CreateCameraFrameProcessorSessionOptions.md) |

## Returns

`Promise`\<[`CameraFrameProcessorSession`](../interfaces/CameraFrameProcessorSession.md)\>
