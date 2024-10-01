---
sidebar_position: 0
---

# Getting started

Welcome to Fishjam Cloud documentation!

Here you will find everything you need to start building your multimedia streaming applications using Fishjam Cloud.

## What is Fishjam Cloud?

Fishjam Cloud is a multimedia streaming toolkit that allows you to build real-time video and audio streaming applications using WebRTC.  
We provide the infrastructure, media server and client SDKs so you can focus on building your apps.

**No WebRTC knowledge is required!**

## Fishjam Cloud components

Fishjam Cloud consists of several components that work together to provide a seamless multimedia streaming experience.
Below is a list of components that you will need to get started:


| Component | Description | Link |
| --- | --- | --- |
| Developer panel | Developer panel for setting up your own Fishjam Media Server. | [fishjam.io/app](https://fishjam.io/app) |
| Fishjam Media Server | A media server that will route your multimedia traffic. | — |
| Fishjam Server SDKs | Toolkit for integrating your backend with Fishjam. We support Python and NodeJS as well as REST API. | [Python, NodeJS, and REST](/guide/server.mdx) |
| Fishjam Client SDKs | Toolkit used for multimedia integration on endpoint devices. | [React Native](/guide/react-native/quick-setup.md), [React](/guide/react/installation.mdx) |
| Room Manager | Simple backend for creating test rooms. You no longer need to bring your own backend to develop frontend apps. | [Repository](<https://github.com/fishjam-cloud/js-server-sdk/tree/main/examples/room-manager>) |

### Developer panel

Visit [**Developer panel**](https://fishjam.io) to setup your account, get required credentials and monitor the usage.  

### Fishjam Media Server

A media server that will route your multimedia traffic.

### Client SDKs

### Server SDKs

![Fishjam Cloud Data Flow](@site/static/img/architecture.svg)

## TLDR

Checkout [complete example below](#full-example)

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
