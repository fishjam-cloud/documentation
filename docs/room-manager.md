---
sidebar_position: 4
---

# Room Manager

The **default sandbox app** comes with an HTTP server called **Room Manager**.
It allows you to start working on the Client App without having to setup an actual backend.
However, for production purposes, you need to bring own backend using our Server SDKs. Production apps doesn't have a corresponding Room Manager.

:::danger[ROOM MANAGER IS NOT SAFE FOR PRODUCTION]

Room Manager doesn't implement any form of authentication.
Anyone using the same room name and peer name will receive **the same Peer Token!**

For production environment, make sure to [set up your own backend](/production/server.mdx) using our Server SDKs and authenticate the client on your own.

:::

## Why should I use it?

If you're a frontend developer and you want to quickly test your app, you can use the Room Manager to create a room and access it.
This way you can start building your app without having to deploy any server side logic.

:::note
When moving to production, the only change you will need to make is to retrieve the **peer token from your backend** instead of the room manager.
:::

:::tip

The Room Manager source code is available as an
[example app in the js-server-sdk repository](https://github.com/fishjam-cloud/js-server-sdk/tree/main/examples/room-manager).
It can be used as a reference for building your backend.

:::

## How do I use it?

Simply take the Fishjam instance url of your `sandbox` app, which should look like `https://fishjam.io/api/v1/connect/***`, append a
`/room-manager` path and use `roomName` and `peerName` query params to build an url for the GET request.

#### Example GET request url

```
https://fishjam.io/api/v1/connect/<YOUR_APP_UUID>/room-manager?roomName=foo&peerName=bar
```

#### Example response

```json
{
  "peerToken": "<PEER_TOKEN>",
  "url": "wss://fishjam.io/api/v1/connect/<YOUR_APP_UUID>",
  "room": {
    "id": "<SOME_ID>",
    "name": "foo"
  },
  "peer": {
    "id": "<SOME_ID>",
    "name": "bar"
  }
}
```
