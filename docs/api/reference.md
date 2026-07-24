---
type: reference
---

# Reference

Describes APIs for direct interaction with Fishjam.

Fishjam publishes documentation for the Sandbox API, Fishjam Server APIs, and the Smelter Cloud API.

## Sandbox API

[Sandbox API OpenAPI](https://github.com/fishjam-cloud/documentation/tree/main/static/api/room-manager-openapi.yaml)

See also: [What is the Sandbox API?](../explanation/sandbox-api-concept)

## Server

Fishjam Server provides a REST API for managing rooms and peers, and
[Protobufs](https://protobuf.dev) for
receiving structured live updates from the server.
The notifications can be configured using Webhook or Websocket.

### REST API

[Server REST API Reference](/api/rest)

### Protobufs

- [Server Notification Protobufs](https://github.com/fishjam-cloud/documentation/tree/main/static/api/protobuf/server_notifications.proto)
- [Agent Message Protobufs](https://github.com/fishjam-cloud/documentation/tree/main/static/api/protobuf/agent_notifications.proto)

#### Webhook

When using webhooks for receiving notifications, configure your webhook URL in
the **Webhooks** tab of the [Fishjam Dashboard](https://fishjam.io/app).
Fishjam then delivers all notifications to that URL.

The HTTP POST to your webhook URL uses "application/x-protobuf" content type.
The body is binary data, that represents encoded `ServerMessage`.

Setting `batchWebhookNotifications` to `true` in the `RoomConfig` is recommended. Fishjam then coalesces several notifications into one POST: the body is still a single `ServerMessage`, but its `notification_batch` field holds a `NotificationBatch`, which carries the individual notifications as a repeated list of `ServerMessage`s (see `server_notifications.proto`). This delivers notifications faster and with fewer requests. The SDK decoders unwrap the batch for you.

For more information see also [server setup documentation](../how-to/backend/server-setup#webhooks)

#### Websocket

After opening the Websocket connection to
`https://fishjam.io/api/v1/connect/{fishjamId}/socket/server/websocket`,
the first message that must be sent is an `AuthRequest`,
with a valid Management Token.

Next, you can should subscribe to notifications by sending `SubscribeRequest` event with `SERVER_NOTIFICATION` event type.

## Smelter Cloud

[Smelter Cloud](../smelter/what-is-smelter-cloud) (beta) exposes a REST API for managing compositions and a WebSocket stream for engine events.

- [Smelter Cloud API](./smelter-cloud): authentication, the WebSocket event stream, and errors.
- [Smelter Cloud REST API Reference](/api/smelter-cloud/rest)
