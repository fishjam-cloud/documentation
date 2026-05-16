# Type Alias: StreamerInputs

> **StreamerInputs** = \{ `audio?`: `MediaStream` \| `null`; `video`: `MediaStream`; \} \| \{ `audio`: `MediaStream`; `video?`: `null`; \}

Defined in: [react-client/src/hooks/useLivestreamStreamer.ts:8](https://github.com/fishjam-cloud/web-client-sdk/blob/9a4ad3270ef2456354c48b507c3cc9c08d58a0c7/packages/react-client/src/hooks/useLivestreamStreamer.ts#L8)

## Type declaration

\{ `audio?`: `MediaStream` \| `null`; `video`: `MediaStream`; \}

### audio?

> `optional` **audio**: `MediaStream` \| `null`

The audio source to publish. e.g. `microphoneStream` from [useMicrophone](../functions/useMicrophone.md) or `stream` from [useScreenShare](../functions/useScreenShare.md)

### video

> **video**: `MediaStream`

The video source to publish. e.g. `cameraStream` from [useCamera](../functions/useCamera.md) or `stream` from [useScreenShare](../functions/useScreenShare.md)

\{ `audio`: `MediaStream`; `video?`: `null`; \}

### audio

> **audio**: `MediaStream`

### video?

> `optional` **video**: `null`
