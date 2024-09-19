---
sidebar_position: 1
---

# Integration

Let's get familiar with how to integrate with Fishjam Cloud services.

### Architecture diagram

![Fishjam Cloud Data Flow](@site/static/img/architecture.svg)

### Room manager

To get you prototyping as fast as possible, the sandbox project comes with a HTTP server called **Room Manager**.  
It allows you to start working on the Client App without having to setup an actual backend.  
However, for production purposes, we recommend bringing your on backend and using our Server SDKs.

#### How do I use it?

Simply take the Fishjam instance url of your `sandbox` app, e.g. `https://fishjam.io/api/v1/connect/***`, append a
`/room-manager` path and use `roomName` and `participantName` query params to build an url for the GET request.

##### Example url

```
https://fishjam.io/api/v1/connect/*YOUR_APP_UUID*/room-manager?roomName=foo&userName=bar
```

##### Response

```json
{
  "participantToken": "*YOUR PARTICIPANT TOKEN*",
  "url": "wss://cloud.fishjam.work/api/v1/connect/*YOUR_APP_UUID*",
  "room": {
    "id": "fa02-4462-893d-eb3a4add40bb-6a656c6c79666973684031302e302e312e3338",
    "name": "foo"
  },
  "participant": {
    "id": "30b9642c-332f-493b-814a-536a4f4c63b2",
    "name": "bar"
  }
}
```

:::danger ROOM MANAGER IS NOT SAFE FOR PRODUCTION Room Manager doesn't implement any participant authentication. Anyone
using the same room name and user name will receive **the same Participant Token!**

For production, make sure to set up your own backend using our Server SDKs and authenticate the client on your own! :::

### How do I integrate my backend then?

:::warning LINKS UNDER CONSTRUCTION Follow the links to see how to setup our SDK in **Python** or **NodeJS**. :::

:::tip The Room Manager source code is available as an
[example app in the js-server-sdk repository](https://github.com/fishjam-cloud/js-server-sdk/tree/main/examples/room-manager).
It can be used as a reference for building your backend. :::