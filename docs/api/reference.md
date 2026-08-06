---
type: reference
---

# Reference

Describes APIs for direct interaction with Fishjam.

Fishjam publishes documentation for the Sandbox API, Fishjam Server APIs, and the Composition API.

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

## Compositions

[Compositions](../explanation/compositions) are managed through the Composition API: a REST API plus a WebSocket stream for engine events. All requests go to `https://rtc.fishjam.io`.

### REST API

[Composition REST API Reference](/api/compositions)

The [OpenAPI document](https://github.com/fishjam-cloud/documentation/blob/main/static/api/composition-openapi.json) is generated from the service's source code and republished together with documentation updates.

Alongside the input, output, and renderer endpoints, the API exposes three lifecycle calls: `POST …/start` starts a composition created with `autostart` off, `POST …/reset` tears down every registered input, output, and renderer and returns the composition to an empty, unstarted state, and `DELETE /api/composition/{composition_id}` destroys it.

### WebSocket event stream

Some engine events (for example, an output finishing) are delivered over a WebSocket rather than HTTP. Connect to:

```
GET wss://rtc.fishjam.io/api/composition/{composition_id}/ws
```

Because browsers cannot set an `Authorization` header on a WebSocket, authentication rides on the `Sec-WebSocket-Protocol` header, which must carry **two** subprotocols (order does not matter):

- `json.fishjam.io`: selects the JSON wire format.
- `bearer.auth.fishjam.io.<token>`: your token, appended to the literal prefix.

```js
const ws = new WebSocket(
  `wss://rtc.fishjam.io/api/composition/${compositionId}/ws`,
  ["json.fishjam.io", `bearer.auth.fishjam.io.${token}`],
);
```

Messages are JSON text frames, each with a `type` field identifying the event.

### Composition authentication

| What you're calling                                                         | How it authenticates                                                                                                                                    |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Control-plane calls (composition, inputs, outputs, renderers, events, room) | `Authorization: Bearer <token>`: your Fishjam **Management Token**, the same token used across Fishjam.                                                 |
| Publishing to an input (`/whip/{input_id}`)                                 | The **input's** own bearer token, returned when you register a `whip_server` input (or the one you supplied). This is distinct from your account token. |
| The WebSocket event stream                                                  | The subprotocol scheme described above.                                                                                                                 |

Get your Management Token from the [**Fishjam developer panel**](https://fishjam.io/app).

Compositions are not played back from the Composition API itself: outputs push to the destination you register, so viewers connect to that destination instead. A `whip_client` output pointed at a [livestream](../explanation/livestreams), for example, is watched through the livestream's own WHEP endpoint.

### Errors

Every non-2xx response of the Composition API is a JSON object:

```json
{ "message": "Composition not found", "http_status_code": 404 }
```

Common statuses are `400` (bad request), `401` (unauthorized), `404` (not found), `500` (server error), and `503` (no capacity, returned by composition creation, templated output registration, events, and the WebSocket stream).
