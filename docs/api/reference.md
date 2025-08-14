---
type: reference
---

# Reference

Describes APIs for direct interaction with Fishjam

Fishjam publishes documentation for the Sandbox API and Fishjam Server APIs

## Sandbox API

[Sandbox API](https://github.com/fishjam-cloud/documentation/tree/main/static/api/room-manager-openapi.yaml)

See also: [What is the Sandbox API?](/explanation/sandbox-api-concept)

## Server

Fishjam Server provides REST API for managing rooms and peers, and
[Protobufs](https://protobuf.dev) for
receiving structured live updates from the server.
The notifications can be configured using Websocket or Webhook.

### REST API

[Server OpenAPI](https://github.com/fishjam-cloud/documentation/tree/main/static/api/fishjam-server-openapi.yaml)

### Protobufs

[Server Protobufs](https://github.com/fishjam-cloud/documentation/tree/main/static/api/server_notifications.proto)

#### Webhook

See [server setup documentation](/how-to/backend/server-setup#webhooks)

#### Websocket

After opening the Websocket connection to
`https://fishjam.io/api/v1/connect/{fishjamId}/socket/server/websocket`,
the first message that must be sent is an `AuthRequest`,
with a valid Management Token.

Next, you can should subscribe to notifications by sending `SubscribeRequest` event with `SERVER_NOTIFICATION` event type.
