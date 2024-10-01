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

### Get Room Manager URL

Login to [Fishjam Cloud Dashboard](https://fishjam.io/app) and get your Room Manager URL.

## TLDR

Checkout [complete example below:](#full-example)

## Step by step instructions

### 1. Fetch peer token

Use your room manager URL to fetch peer token to get a new room:

```ts
const response = await fetch(
  `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager/?roomName=*roomName*&participantName=*username*`,
);

const { url, peerToken } = await response.json();
```

### 2. Join Room and start streaming

:::danger

If you want to use the camera, you must first request permission.
Check [this `guide`](/guide/react-native/installation#step-2-configure-app-permissions) for more information.

:::

:::warning

Keep in mind that this won't work on iOS Simulator.
:::

To start streaming, you have to prepare your camera and join the room:

```tsx
function StartStreamingButton({
  roomName,
  userName,
}: {
  roomName: string;
  userName: string;
}) {
  const { prepareCamera } = useCamera();

  const startStreaming = useCallback(async () => {
    const response = await fetch(
      `https://cloud.fishjam.work/api/v1/connect/*YOUR_ID*/room-manager/${roomName}/users/${userName}`,
    );
    const { url, peerToken } = await response.json();

    await prepareCamera({ cameraEnabled: true });

    await joinRoom(url, peerToken);
  }, []);

  return <Button title="Start Streaming" onPress={startStreaming} />;
}
```

### 3. Show other peers

:::note
In order to get peers, you must first join a room. See steps above.
:::

Fetching other peers in your room can be done with `usePeers` hook. To display their video stream,
you can use `VideoRendererView` component. Example code could look like this:

```tsx
function TracksView() {
  const { peers } = usePeers();

  const videoTracks = peers.flatMap((peer) =>
    peer.tracks.filter((track) => track.type === "Video" && track.isActive),
  );

  return (
    <View style={styles.tracksContainer}>
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
  tracksContainer: {
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

### Full example

Here is how it all could work together:

:::info
We are using expo-camera to request camera permissions. You can install and build it using the following command:

```bash
npx expo install expo-camera && npx expo prebuild
```

:::

```tsx
import { useCallback, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import {
  joinRoom,
  useCamera,
  usePeers,
  VideoRendererView,
} from "@fishjam-cloud/react-native-client";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermissions } from "expo-camera";

function TracksView() {
  const { peers } = usePeers();

  const videoTracks = peers.flatMap((peer) =>
    peer.tracks.filter((track) => track.type === "Video" && track.isActive),
  );

  return (
    <View style={styles.tracksContainer}>
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

function StartStreamingButton({
  roomName,
  userName,
}: {
  roomName: string;
  userName: string;
}) {
  const { prepareCamera } = useCamera();

  const startStreaming = useCallback(async () => {
    const response = await fetch(
      `https://cloud.fishjam.work/api/v1/connect/*YOUR_ID*/room-manager?roomName=${roomName}&peerName=${userName}`,
    );
    const { url, peerToken } = await response.json();

    await prepareCamera({ cameraEnabled: true });

    await joinRoom(url, peerToken);
  }, []);

  return <Button title="Start Streaming" onPress={startStreaming} />;
}

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StartStreamingButton roomName={"*roomName*"} userName={"*username*"} />
      <TracksView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tracksContainer: {
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
