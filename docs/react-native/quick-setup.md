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
npx expo prebuild
```

### Get Room Manager URL

Login to [Fishjam Cloud Dashboard](https://fishjam.io/app) and get your Room Manager URL.

## TL;DR;

Checkout [complete example below:](#full-example)

## Step by step instructions

### 1. Fetch peer token

Use your room manager URL to fetch peer token to get a new room:

```ts
const response = await fetch(
  `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager/?roomName=*roomName*&peerName=*username*`,
);

const { url, peerToken } = await response.json();
```

### 2. Join Room and start streaming

:::warning

If you want to use the camera, you must first request permission. Check
[permission guide](/react-native/installation#step-2-configure-app-permissions) for more information.

:::

:::warning

Keep in mind that this won't work on iOS Simulator, as Simulator can't access the camera.

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
      `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager/?roomName=*roomName*&peerName=*username*`,
    );
    const { url, peerToken } = await response.json();

    await prepareCamera({ cameraEnabled: true });

    await joinRoom(url, peerToken);
  }, []);

  return <Button title="Start Streaming" onPress={startStreaming} />;
}
```

### 3. Check if you are connected

Once you are connected, you can check connection status with `usePeerStatus` hook

```ts
const { peerStatus } = usePeerStatus();
```

### 4. Show other peers

:::note

In order to get peers, you must first join a room. See the steps above.

:::

Fetching other peers in your room can be done with the `usePeers` hook. To display their video stream, you can use the
`VideoRendererView` component. Example code could look like this:

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

## Full example

Here is how it all could work together:

:::info

We are using `expo-camera` to request camera permissions in example app. You can install and build it using the
following command:

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
  const { peerStatus } = usePeerStatus();

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
      `https://fishjam.io/api/v1/connect/*YOUR_ID*/room-manager?roomName=${roomName}&peerName=${userName}`,
    );
    const { url, peerToken } = await response.json();

    await prepareCamera({ cameraEnabled: true });

    await joinRoom(url, peerToken);
  }, []);

  return <Button title="Start Streaming" onPress={startStreaming} />;
}

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const { peerStatus } = usePeerStatus();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {peerStatus !== "connected" && (
        <StartStreamingButton roomName="*roomName*" userName="*username*" />
      )}
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
