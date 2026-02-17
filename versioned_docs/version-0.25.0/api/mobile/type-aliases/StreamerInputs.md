# Type Alias: StreamerInputs

> **StreamerInputs** = \{ `audio?`: `MediaStream` \| `null`; `video`: `MediaStream`; \} \| \{ `audio`: `MediaStream`; `video?`: `null`; \}

Defined in: packages/react-client/dist/hooks/useLivestreamStreamer.d.ts:3

## Type declaration

\{ `audio?`: `MediaStream` \| `null`; `video`: `MediaStream`; \}

### audio?

> `optional` **audio**: `MediaStream` \| `null`

The audio source to publish. e.g. `microphoneStream` from [useMicrophone](../variables/useMicrophone.md) or `stream` from [useScreenShare](../variables/useScreenShare.md)

### video

> **video**: `MediaStream`

The video source to publish. e.g. `cameraStream` from [useCamera](../functions/useCamera.md) or `stream` from [useScreenShare](../variables/useScreenShare.md)

\{ `audio`: `MediaStream`; `video?`: `null`; \}

### audio

> **audio**: `MediaStream`

### video?

> `optional` **video**: `null`
