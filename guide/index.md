---
sidebar_position: 1
---

# Quick Setup

Integrate Fishjam Cloud into your React Native application.

:::info
This guide assumes you're using Expo Bare Workflow
:::

### Install package

```bash npm2yarn
npm install @fishjam-cloud/react-native-client
```

### Build native dependencies

```bash
npx expo prebuild --clean
```

### Fetch peer token

Login to [Fishjam Cloud Dashboard](https://fishjam.io/app) and get your Room Manager URL. Next, use it to fetch
peer token for new room:

```ts
const response = await fetch(
  `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager/*roomName*/users/*username*`,
);

const { url, peerToken } = await response.json();
```

### Join Room and start streaming

:::danger

If you want to use a device camera, you must first request permission. Keep in mind that this won't work on iOS Simulator.
Check [this `guide`](./react-native/installation#step-2-configure-app-permissions) for more information.

:::

To start streaming, you have to prepare your camera and join the room:

```tsx
import { joinRoom, useCamera } from "@fishjam-cloud/react-native-client";

function StartStreamingButton({ roomName, userName }) {
  const { prepareCamera } = useCamera();

  const startStreaming = useCallback(async () => {
    const response = await fetch(
      `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager/*roomName*/users/*username*`,
    );
    const { url, peerToken } = await response.json();

    await prepareCamera({ cameraEnabled: true });

    await joinRoom(url, peerToken);
  });

  return <Button title={"Start Streaming"} onPress={startStreaming} />;
}
```

### Show other peers

:::note
In order to get peers, you must first join a room. See steps above.
:::

Fetching other peers in your room can be done with `usePeers` hook. To display their video stream,
you can use `VideoRendererView` component. Example code could look like this:

```tsx
import {
  usePeers,
  VideoRendererView,
} from "@fishjam-cloud/react-native-client";

function Component() {
  const { peers } = usePeers();

  const videoTracks = peers.flatMap((peer) =>
    peer.tracks.filter((track) => track.type === "Video" && track.isActive),
  );

  return (
    <View style={styles.container}>
      {videoTracks.map((track) => (
        <VideoRendererView
          style={styles.videoElement}
          key={track.id}
          trackId={track.id}
          videoLayout="FIT"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  videoElement: {
    width: "85%",
    aspectRatio: 1,
    backgroundColor: "gray",
    marginVertical: 16,
  },
});
```

### More

Check out our [full documentation](/guide/category/react-native-integration) for more details.
