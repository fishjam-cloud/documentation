---
sidebar_position: 0
---

# Getting started

Welcome to Fishjam Cloud documentation!  
Here you will find everything you need to start building your multimedia streaming applications using Fishjam Cloud.

## What is Fishjam Cloud?

Fishjam Cloud is a multimedia streaming toolkit that allows you to build real-time video and audio streaming applications using [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API).
We provide the infrastructure, media server and client SDKs so you can focus on building your apps.

**No WebRTC knowledge is required!**

## How can I try it out?

1. To get started with Fishjam Cloud, you need to create an account on our [developer panel](https://fishjam.io/app).
2. Once you have an account, Fishjam Cloud will assign you a sandbox instance automatically. Sandbox instances come with [**Room Manager**](/guide/room-manager.md) - a simple backend for creating test rooms. Copy the *Fishjam URL* and *Management Token* from the developer panel.
3. Pick a client SDK that you want to use and follow the Quick Start guide. We provide SDKs for [React Native](/guide/react-native/quick-setup.md) and [React](/guide/react/installation.mdx).

## Do you have any running examples?

We are maintaining a simple videoconferencing app called [Videoroom](https://room.fishjam.io/).
It is a publicly accessible app where you can see Fishjam Cloud in action.

You can access it at [room.fishjam.io](https://room.fishjam.io/) - just pick a room name and username and you can start a video call between any two devices.

## Any examples I can run locally?

Yes! You can find examples in our GitHub repositories that you can run locally. Examples are usually available under the `examples` directory in the relevant repository.

- [Fishjam Chat](https://github.com/fishjam-cloud/web-client-sdk/tree/main/examples/react-client/fishjam-chat) - Web client SDK - simple videoconferencing app
- [Videoroom](https://github.com/fishjam-cloud/fishjam-videoroom) - Web client SDK - a more advanced video conferencing example

## What does Fishjam Cloud consist of?

Fishjam Cloud consists of several components that work together to provide a seamless multimedia streaming experience.
Below is a list of components that you will need to get started:

| Component | Description | Link |
| --- | --- | --- |
| Developer panel | Developer panel for setting up your own Fishjam Media Server. | [fishjam.io/app](https://fishjam.io/app) |
| Fishjam Media Server | A media server that will route your multimedia traffic. | — |
| Fishjam Client SDKs | Toolkit used for multimedia integration on endpoint devices. | [React Native](/guide/react-native/quick-setup.md), [React](/guide/react/installation.mdx) |
| Fishjam Server SDKs | Toolkit for integrating your backend with Fishjam. We support Python and NodeJS as well as REST API. | [Python, NodeJS, and REST](/guide/production/server.mdx) |
| Room Manager | Simple backend for creating test rooms. You no longer need to bring your own backend to develop frontend apps. | [Repository](<https://github.com/fishjam-cloud/js-server-sdk/tree/main/examples/room-manager>) |

## How does it work?

![Fishjam Cloud Data Flow](@site/static/img/architecture.svg)
