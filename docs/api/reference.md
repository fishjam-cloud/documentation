---
type: reference
---

# Reference

Describes APIs for direct interaction with Fishjam.

Fishjam publishes documentation for the Sandbox API and Fishjam Server APIs.

## Sandbox API

[Sandbox API OpenAPI](https://github.com/fishjam-cloud/documentation/tree/main/static/api/room-manager-openapi.yaml)

See also: [What is the Sandbox API?](/explanation/sandbox-api-concept)

## Server

Fishjam Server provides a REST API for managing rooms and peers, and
[Protobufs](https://protobuf.dev) for
receiving structured live updates from the server.
The notifications can be configured using Webhook or Websocket.

### REST API

[Server OpenAPI](https://github.com/fishjam-cloud/documentation/tree/main/static/api/fishjam-server-openapi.yaml)

### Protobufs

[Server Protobufs](https://github.com/fishjam-cloud/documentation/tree/main/static/api/server_notifications.proto)

#### Webhook

When using webhooks for receiving notifications, the `webhookUrl` must be passed
in the `RoomConfig` options when creating a room.

The HTTP POST to the `webhookUrl` uses "application/x-protobuf" content type.
The body is binary data, that represents encoded `ServerMessage`.

For more information see also [server setup documentation](/how-to/backend/server-setup#webhooks)

#### Websocket

After opening the Websocket connection to
`https://fishjam.io/api/v1/connect/{fishjamId}/socket/server/websocket`,
the first message that must be sent is an `AuthRequest`,
with a valid Management Token.

Next, you can should subscribe to notifications by sending `SubscribeRequest` event with `SERVER_NOTIFICATION` event type.
