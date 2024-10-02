---
sidebar_position: 1
---

# Integration

Let's get familiar with how to integrate our application with Fishjam Cloud.

### Architecture diagram

![Fishjam Cloud Data Flow](@site/static/img/architecture.svg)

### Room manager

To get you prototyping as fast as possible, the sandbox project comes with an HTTP server called **Room Manager**.  
It allows you to start working on the Client App without having to setup an actual backend.  
However, for production purposes, we recommend bringing your own backend and using our Server SDKs.

#### How do I use it?

Simply take the Fishjam instance url of your `sandbox` app, which should look like
`https://fishjam.io/api/v1/connect/***`, append a `/room-manager` path and use `roomName` and `peerName` query params to
build an url for the GET request.

##### Example url

```
https://fishjam.io/api/v1/connect/<YOUR_APP_UUID>/room-manager?roomName=foo&userName=bar
```

##### Response

```json
{
  "peerToken": "<YOUR_PEER_TOKEN>",
  "url": "wss://fishjam.io/api/v1/connect/*YOUR_APP_UUID*",
  "room": {
    "id": "fa02-4462-893d-eb3a4add40bb-6a656c6c79666973684031302e302e312e3338",
    "name": "foo"
  },
  "peer": {
    "id": "30b9642c-332f-493b-814a-536a4f4c63b2",
    "name": "bar"
  }
}
```

:::danger[Room Manager is not safe for production]

Room Manager doesn't implement any peer authentication. Anyone using the same room name and user name will receive **the
same Peer Token!**

For production environment, make sure to [set up your own backend](../server.mdx) using our Server SDKs and authenticate
the client on your own.

:::

:::tip

The Room Manager source code is available as an
[example app in the js-server-sdk repository](https://github.com/fishjam-cloud/js-server-sdk/tree/main/examples/room-manager).
It can be used as a reference for building your backend.

:::
