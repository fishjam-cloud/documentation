---
sidebar_position: 1
---

# Quick Setup

Integrate Fishjam Cloud into your React Native application.

### Install package

```bash npm2yarn
npm install @fishjam-cloud/react-native-client
```

### Fetch participant token

Login to [Fishjam Cloud Dashboard](https://fishjam.io/app) and get your Room Manager url. Next, use it to fetch
participant token for new room:

```ts
const response = await fetch(
  `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager/?room=ROOM_NAME&user=USER_NAME`,
);

const { fishjamUrl, participantToken } = await response.json();
```

### Join Room and start streaming

To start streaming, you have to prepare your camera and join room:

```ts
import { joinRoom, useCamera } from "@fishjam-cloud/react-native-client";


function StartStreamingButton({ roomName, userName }) {

  const { prepareCamera } = useCamera();


  const startStreaming = useCallback(async () => {
    const response = await fetch(
      `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager/?room=${roomName}&user=${userName}`
    );
    const { fishjamUrl, participantToken } = await response.json();

    await prepareCamera({ enableCamera: true });

    await joinRoom(fishjamUrl, participantToken);

  });

  return <Button onPress={startStreaming}>Start Streaming</Button>
}
```

### Show other participants

Fetching other participants of your room, can be done with `useParticipants` hook. And to display their video stream,
you can use `VideoRendererView` component. Example code could look like this:

```ts
import { useParticipants, VideoRendererView } from '@fishjam-cloud/react-native-client';

function Component() {
  const { participants } = useParticipants();

  const videoTracks = participants.flatMap((participant) =>
    participant.tracks.filter(
      (track) => track.type === 'Video' && track.isActive,
    ),
  );

  return (
    <View>
      {videoTracks.map((track) => (
        <VideoRendererView key={track.id} trackId={track.id} videoLayout="FIT" />
      ))}
    </View>
  );
}
```

### More

Checkout our [full documentation](/guide/category/react-native-integration) for more details.
