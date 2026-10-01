---
title: fishjam
sidebar_label: fishjam
custom_edit_url: null
---

# fishjam


## Submodules
- [events](fishjam/events)
- [errors](fishjam/errors)
- [room](fishjam/room)
- [peer](fishjam/peer)
- [recording](fishjam/recording)
- [agent](fishjam/agent)
- [integrations](fishjam/integrations)
- [composition](fishjam/composition)

## FishjamClient
```python
class FishjamClient(Client):
```
Allows for managing rooms.

### __init__
```python
def __init__(fishjam_id: str, management_token: str)
```
Create a FishjamClient instance.

Does not contact the Fishjam backend — use :meth:`create_and_verify`
or :meth:`check_credentials` to verify credentials live.

Args:
- fishjam_id: The unique identifier for the Fishjam instance.
- management_token: The token used for authenticating management operations.

### create_and_verify
```python
def create_and_verify(
    cls,
    *,
    fishjam_id: str,
    management_token: str
) -> FishjamClient
```
Construct a FishjamClient and verify its credentials against the backend.

Args:
- fishjam_id: The unique identifier for the Fishjam instance.
- management_token: The token used for authenticating management operations.

Returns:
- FishjamClient: A client whose credentials have been verified.

Raises:
- InvalidFishjamCredentialsError: If the token is rejected.

### check_credentials
```python
def check_credentials(self) -> None
```
Verify the management token via a single ``/validate`` call.

Raises:
- InvalidFishjamCredentialsError: If the token is rejected.

### create_peer
```python
def create_peer(
    self,
    room_id: str,
    options: PeerOptions | None = None
) -> tuple[Peer, str]
```
Creates a peer in the room.

Args:
- room_id: The ID of the room where the peer will be created.
- options: Configuration options for the peer. Defaults to None.

Returns:
- A tuple containing:
  - Peer: The created peer object.
  - str: The peer token needed to authenticate to Fishjam.

### create_agent
```python
def create_agent(
    self,
    room_id: str,
    options: AgentOptions | None = None
)
```
Creates an agent in the room.

Args:
- room_id: The ID of the room where the agent will be created.
- options: Configuration options for the agent. Defaults to None.

Returns:
- Agent: The created agent instance initialized with peer ID, room ID, token,
  and Fishjam URL.

### create_vapi_agent
```python
def create_vapi_agent(
    self,
    room_id: str,
    options: PeerOptionsVapi
) -> Peer
```
Creates a vapi agent in the room.

Args:
- room_id: The ID of the room where the vapi agent will be created.
- options: Configuration options for the vapi peer.

Returns:
- - Peer: The created peer object.

### create_room
```python
def create_room(
    self,
    options: RoomOptions | None = None
) -> Room
```
Creates a new room.

Args:
- options: Configuration options for the room. Defaults to None.

Returns:
- Room: The created Room object.

### get_all_rooms
```python
def get_all_rooms(self) -> list[Room]
```
Returns list of all rooms.

Returns:
- list[Room]: A list of all available Room objects.

### get_room
```python
def get_room(self, room_id: str) -> Room
```
Returns room with the given id.

Args:
- room_id: The ID of the room to retrieve.

Returns:
- Room: The Room object corresponding to the given ID.

### delete_peer
```python
def delete_peer(self, room_id: str, peer_id: str) -> None
```
Deletes a peer from a room.

Args:
- room_id: The ID of the room the peer belongs to.
- peer_id: The ID of the peer to delete.

### delete_room
```python
def delete_room(self, room_id: str) -> None
```
Deletes a room.

Args:
- room_id: The ID of the room to delete.

### refresh_peer_token
```python
def refresh_peer_token(self, room_id: str, peer_id: str) -> str
```
Refreshes a peer token.

Args:
- room_id: The ID of the room.
- peer_id: The ID of the peer whose token needs refreshing.

Returns:
- str: The new peer token.

### forward_room_tracks
```python
def forward_room_tracks(self, room_id: str, composition_url: str) -> None
```
Forwards every track published in the room into a composition.

The composition composes them into its outputs. Pass the composition's
address, as returned by
`fishjam.CompositionClient.composition_url`.

Args:
- room_id: The ID of the room to forward tracks from.
- composition_url: The address of the composition to forward tracks to.

### livestream_whip_url
```python
def livestream_whip_url(self) -> str
```
Where to publish a livestream.

Pair it with a token from
`fishjam.FishjamClient.create_livestream_streamer_token`. A composition
reaches viewers by sending a WHIP output here.

Returns:
- str: The address a WHIP publisher sends the livestream to.

### livestream_whep_url
```python
def livestream_whep_url(self) -> str
```
Where to watch a livestream.

Pair it with a token from
`fishjam.FishjamClient.create_livestream_viewer_token`, sent as a bearer
token by the WHEP player.

Returns:
- str: The address a WHEP viewer plays the livestream from.

### create_livestream_viewer_token
```python
def create_livestream_viewer_token(self, room_id: str) -> str
```
Generates a viewer token for livestream rooms.

Args:
- room_id: The ID of the livestream room.

Returns:
- str: The generated viewer token.

### create_livestream_streamer_token
```python
def create_livestream_streamer_token(self, room_id: str) -> str
```
Generates a streamer token for livestream rooms.

Args:
- room_id: The ID of the livestream room.

Returns:
- str: The generated streamer token.

### create_moq_access
```python
def create_moq_access(
    self,
    publish_path: str | None = None,
    subscribe_path: str | None = None,
    ttl: int | None = None
) -> MoqAccess
```
Generates MoQ relay connection details.

Args:
- publish_path: Path the access grants publish access to.
- subscribe_path: Path the access grants subscribe access to.
- ttl: Token time to live in seconds. Defaults to 3600 (1 hour),
  maximum is 604800 (7 days).

Returns:
- MoqAccess: The relay connection details, containing the
- ``connection_url`` (with the JWT embedded as a ``?jwt=`` query
- parameter) and the ``token`` itself.

### create_recording
```python
def create_recording(
    self,
    source: CompositionSource,
    metadata: dict[str, typing.Any] | None = None
) -> Recording
```
Creates a new recording.

Capturing starts synchronously, so the returned recording is `active`.

Args:
- source: The source of the recording.
- metadata: Free-form metadata used to organize and filter recordings.

Returns:
- Recording: The started recording details.

### create_composition_recording
```python
def create_composition_recording(
    self,
    source: CompositionSource,
    metadata: dict[str, typing.Any] | None = None
) -> Recording
```
Creates a new recording.

Capturing starts synchronously, so the returned recording is `active`.

Args:
- source: The source of the recording.
- metadata: Free-form metadata used to organize and filter recordings.

Returns:
- Recording: The started recording details.

### create_template_recording
```python
def create_template_recording(
    self,
    source: TemplateSource,
    template: bytes | str | pathlib._local.Path,
    metadata: dict[str, typing.Any] | None = None
) -> Recording
```
Starts a new recording that renders its own scene from a template.

The template bundle can weigh at most 1 MiB; only valid template
bundles are accepted.

Args:
- source: The source of the recording.
- template: The bundle to render, as bytes or a path to read them from.
- metadata: Free-form metadata used to organize and filter recordings.

Returns:
- Recording: The created recording.

### get_recording
```python
def get_recording(
    self,
    recording_id: str
) -> Recording
```
Returns the recording with the given id.

Args:
- recording_id: The ID of the recording to retrieve.

Returns:
- Recording: The recording corresponding to the given ID.

### get_all_recordings
```python
def get_all_recordings(
    self,
    metadata: dict[str, typing.Any] | None = None
) -> list[Recording]
```
Returns a list of all recordings, optionally filtered by metadata.

Args:
- metadata: If given, only recordings whose metadata contains all
  the given key-value pairs are returned. Nested dicts match
  nested metadata keys.

Returns:
- list[Recording]: A list of all matching recordings.

### stop_recording
```python
def stop_recording(
    self,
    recording_id: str
) -> Recording
```
Stops an active recording.

Finalization is asynchronous: the recording stays `active` until the
capture is finalized, then becomes `finished`. Stopping a recording
that is no longer active is a no-op.

Args:
- recording_id: The ID of the recording to stop.

Returns:
- Recording: The stopped recording.

### delete_recording
```python
def delete_recording(self, recording_id: str) -> None
```
Deletes a recording. Its stored media is removed asynchronously.

A recording that is still `active` cannot be deleted — stop it first
or wait for it to finish.

Args:
- recording_id: The ID of the recording to delete.

### subscribe_peer
```python
def subscribe_peer(self, room_id: str, peer_id: str, target_peer_id: str)
```
Subscribes a peer to all tracks of another peer.

Args:
- room_id: The ID of the room.
- peer_id: The ID of the subscribing peer.
- target_peer_id: The ID of the peer to subscribe to.

### subscribe_tracks
```python
def subscribe_tracks(self, room_id: str, peer_id: str, track_ids: list[str])
```
Subscribes a peer to specific tracks of another peer.

Args:
- room_id: The ID of the room.
- peer_id: The ID of the subscribing peer.
- track_ids: A list of track IDs to subscribe to.

#### Inherited Members
* **Client**:
    * `client`
    * `warnings_shown`
---
## CompositionClient
```python
class CompositionClient:
```
Client class that allows to manage compositions.

A composition is a real-time video compositing session of a Fishjam App. It
requires the management token that can be retrieved from the Fishjam Dashboard,
the same one used by `fishjam.FishjamClient`.

Example usage:
```python
client = CompositionClient(management_token="your-management-token")
```

### __init__
```python
def __init__(management_token: str, composition_url: str | None = None)
```
Create a client talking to the Composition API.

Args:
- management_token: Secret token authorizing to perform actions on your
  account. It is the same token `fishjam.FishjamClient` is configured
  with. Never share this token with anyone.
- composition_url: Address of the Composition API. Only needs setting when
  running against a deployment other than production.

### client
```python
client
```


### composition_url
```python
def composition_url(self, composition_id: str) -> str
```
The address of a composition, as other services refer to it.

Fishjam needs it to forward a room's tracks with
`fishjam.FishjamClient.forward_room_tracks`.

Args:
- composition_id: ID of the composition.

Returns:
- The address of the composition.

### create_composition
```python
def create_composition(
    self,
    config: CreateCompositionRequest | None = None
) -> CompositionCreatedResponse
```
Create a new composition.

Inputs registered on it are composed into the scenes its outputs render.

Args:
- config: Configuration of the composition.

Returns:
- The created composition.

### start_composition
```python
def start_composition(self, composition_id: str) -> None
```
Start a composition created with `autostart` disabled.

Its outputs begin producing audio and video.

Args:
- composition_id: ID of the composition.

### reset_composition
```python
def reset_composition(self, composition_id: str) -> None
```
Reset a composition, tearing down its scene but keeping it alive.

Args:
- composition_id: ID of the composition.

### delete_composition
```python
def delete_composition(self, composition_id: str) -> None
```
Delete an existing composition. Its inputs and outputs are torn down with it.

Args:
- composition_id: ID of the composition.

### register_input
```python
def register_input(
    self,
    composition_id: str,
    input_id: str,
    input_: Mp4Input | RtmpInput | WhepInput | WhipInput
) -> RegisterInputResponse
```
Register a media source on a composition.

Prefer the variant methods, such as
`CompositionClient.register_whip_input`, which return what that input
type produces.

Args:
- composition_id: ID of the composition.
- input_id: ID to register the input under.
- input_: Configuration of the input.

Returns:
- Whatever the input type produces on registration.

### register_whip_input
```python
def register_whip_input(
    self,
    composition_id: str,
    input_id: str,
    *,
    bearer_token: str | None = None,
    video: bool | None = None
) -> WhipInputTarget
```
Register an input that a WHIP publisher pushes media into.

Args:
- composition_id: ID of the composition.
- input_id: ID to register the input under.
- bearer_token: Token the publisher authenticates with. The server picks one
  when it is not given.
- video: Whether the input accepts an h264-encoded video track.

Returns:
- The address and token to publish with.

Raises:
- InternalServerError: When neither the caller nor the server provides a
  token, leaving the input impossible to publish to.

### register_whep_input
```python
def register_whep_input(
    self,
    composition_id: str,
    input_id: str,
    *,
    endpoint_url: str,
    bearer_token: str | None = None,
    video: bool | None = None
) -> None
```
Register an input that pulls media from a WHEP endpoint.

Args:
- composition_id: ID of the composition.
- input_id: ID to register the input under.
- endpoint_url: Address of the WHEP endpoint to pull from.
- bearer_token: Token to authenticate with.
- video: Whether the input accepts an h264-encoded video track.

### register_mp4_input
```python
def register_mp4_input(
    self,
    composition_id: str,
    input_id: str,
    *,
    url: str,
    loop: bool | None = None
) -> Mp4InputDurations
```
Register an input that plays an MP4 file.

Args:
- composition_id: ID of the composition.
- input_id: ID to register the input under.
- url: Address of the file to play.
- loop: Whether the file restarts when it ends.

Returns:
- How much media the file holds.

### register_rtmp_input
```python
def register_rtmp_input(self, composition_id: str, input_id: str, *, stream_key: str) -> str
```
Register an input that an RTMP publisher pushes media into.

The stream key identifies the input and is carried in the returned address.

Args:
- composition_id: ID of the composition.
- input_id: ID to register the input under.
- stream_key: Key the publisher identifies the input with.

Returns:
- The address to publish the RTMP stream to.

Raises:
- InternalServerError: When the server reports no address, leaving the input
  impossible to publish to.

### unregister_input
```python
def unregister_input(
    self,
    composition_id: str,
    input_id: str,
    options: UnregisterInput | None = None
) -> None
```
Unregister an input. Scenes referencing it stop receiving its media.

Args:
- composition_id: ID of the composition.
- input_id: ID of the input.
- options: When to unregister the input.

### register_output
```python
def register_output(
    self,
    composition_id: str,
    output_id: str,
    output: RtmpOutput | WhipOutput
) -> None
```
Register an output, the destination the composed result is sent to.

Args:
- composition_id: ID of the composition.
- output_id: ID to register the output under.
- output: Configuration of the output, carrying the scene to render.

### register_template_output
```python
def register_template_output(
    self,
    composition_id: str,
    output_id: str,
    config: RtmpOutput | WhipOutput,
    template: bytes | str | pathlib._local.Path
) -> None
```
Register an output rendering a template bundle.

The bundle is built by `@fishjam-cloud/composition-cli`. Never pass a path taken
from untrusted input, since its contents are uploaded.

A template rebuilds both scenes from React, so `video.initial` and
`audio.initial` are ignored. Omitting `audio` entirely still means no audio
track at all, so pass an audio option with an empty scene when the output
should carry audio.

Args:
- composition_id: ID of the composition.
- output_id: ID to register the output under.
- config: Configuration of the output.
- template: The bundle to render, as bytes or a path to read them from.

### register_whip_output
```python
def register_whip_output(
    self,
    composition_id: str,
    output_id: str,
    *,
    endpoint_url: str,
    bearer_token: str | None = None,
    video: OutputWhipVideoOptions | None = None,
    audio: OutputWhipAudioOptions | None = None
) -> None
```
Register an output sending the composed result to a WHIP endpoint.

Args:
- composition_id: ID of the composition.
- output_id: ID to register the output under.
- endpoint_url: Address of the WHIP endpoint to publish to.
- bearer_token: Token to authenticate with.
- video: Video options, carrying the scene to render.
- audio: Audio options, carrying the scene to mix.

### register_rtmp_output
```python
def register_rtmp_output(
    self,
    composition_id: str,
    output_id: str,
    *,
    url: str,
    video: OutputRtmpClientVideoOptions | None = None,
    audio: OutputRtmpClientAudioOptions | None = None
) -> None
```
Register an output sending the composed result to an RTMP endpoint.

Args:
- composition_id: ID of the composition.
- output_id: ID to register the output under.
- url: Address of the RTMP endpoint to publish to.
- video: Video options, carrying the scene to render.
- audio: Audio options, carrying the scene to mix.

### unregister_output
```python
def unregister_output(
    self,
    composition_id: str,
    output_id: str,
    options: UnregisterOutput | None = None
) -> None
```
Unregister an output. It stops producing audio and video.

Args:
- composition_id: ID of the composition.
- output_id: ID of the output.
- options: When to unregister the output.

### update_output
```python
def update_output(
    self,
    composition_id: str,
    output_id: str,
    update: UpdateOutputRequest | None = None,
    *,
    video: VideoScene | None = None,
    audio: AudioScene | None = None
) -> None
```
Replace the scenes an output renders.

An update has to mirror the registration: whatever the output was
registered with, video, audio or both, has to be given here too, and
whatever it was registered without cannot be.

Args:
- composition_id: ID of the composition.
- output_id: ID of the output.
- update: The update to apply.
- video: The video scene to render, when no full update is given.
- audio: The audio scene to mix, when no full update is given.

### request_keyframe
```python
def request_keyframe(self, composition_id: str, output_id: str) -> None
```
Ask an output to emit a keyframe.

A viewer joining mid-stream then renders a full picture sooner.

Args:
- composition_id: ID of the composition.
- output_id: ID of the output.

### register_image
```python
def register_image(
    self,
    composition_id: str,
    image_id: str,
    image: ImageSpecAuto | ImageSpecGif | ImageSpecJpeg | ImageSpecPng | ImageSpecSvg
) -> None
```
Register an image that scenes can reference by its renderer ID.

Args:
- composition_id: ID of the composition.
- image_id: ID to register the image under.
- image: Where to fetch the image from and how to decode it.

### register_font
```python
def register_font(
    self,
    composition_id: str,
    font: bytes | str | pathlib._local.Path
) -> None
```
Register a font that scenes can render text with.

Never pass a path taken from untrusted input, since its contents are uploaded.

Args:
- composition_id: ID of the composition.
- font: The font to upload, as bytes or a path to read them from.

### unregister_image
```python
def unregister_image(
    self,
    composition_id: str,
    image_id: str,
    options: UnregisterRenderer | None = None
) -> None
```
Unregister a previously registered image.

Args:
- composition_id: ID of the composition.
- image_id: ID of the image.
- options: When to unregister the image.

### send_event
```python
def send_event(self, composition_id: str, event_name: str, data: Any = None) -> None
```
Deliver an event to the templates rendered by the composition's outputs.

Args:
- composition_id: ID of the composition.
- event_name: Name the template listens for.
- data: Payload the template receives with the event.

---
## WhipInputTarget
```python
class WhipInputTarget:
```
Where to publish a WHIP input.

The input is registered with `CompositionClient.register_whip_input`. Hand
these to a WHIP publisher, such as `useLivestreamStreamer` in the React
client SDK.

Attributes:
- url: Address to publish to.
- bearer_token: Token authorizing the publisher.

### __init__
```python
def __init__(url: str, bearer_token: str)
```


### url
```python
url: str
```
Address to publish to

### bearer_token
```python
bearer_token: str
```
Token authorizing the publisher

---
## Mp4InputDurations
```python
class Mp4InputDurations:
```
How much media an MP4 input holds.

The input is registered with `CompositionClient.register_mp4_input`.

Attributes:
- video_duration_ms: Length of the video track, when the file has one.
- audio_duration_ms: Length of the audio track, when the file has one.

### __init__
```python
def __init__(video_duration_ms: int | None, audio_duration_ms: int | None)
```


### video_duration_ms
```python
video_duration_ms: int | None
```
Length of the video track, when the file has one

### audio_duration_ms
```python
audio_duration_ms: int | None
```
Length of the audio track, when the file has one

---
## FishjamNotifier
```python
class FishjamNotifier:
```
Allows for receiving WebSocket messages from Fishjam.

### __init__
```python
def __init__(fishjam_id: str, management_token: str)
```
Create a FishjamNotifier instance with an ID and management token.

### on_server_notification
```python
def on_server_notification(
    self,
    handler: Union[Callable[[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamerConnected, ServerMessageStreamerDisconnected, ServerMessageChannelAdded, ServerMessageChannelRemoved, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated, ServerMessageRecordingStatusChanged]], NoneType], Callable[[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamerConnected, ServerMessageStreamerDisconnected, ServerMessageChannelAdded, ServerMessageChannelRemoved, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated, ServerMessageRecordingStatusChanged]], Coroutine[Any, Any, None]]]
)
```
Decorator for defining a handler for Fishjam notifications.

Args:
- handler: The function to be registered as the notification handler.

Returns:
- NotificationHandler: The original handler function (unmodified).

### connect
```python
def connect(self)
```
Connects to Fishjam and listens for all incoming messages.

It runs until the connection isn't closed.

The incoming messages are handled by the functions defined using the
`on_server_notification` decorator.

The handler have to be defined before calling `connect`,
otherwise the messages won't be received.

### wait_ready
```python
def wait_ready(self) -> None
```
Waits until the notifier is connected and authenticated to Fishjam.

If already connected, returns immediately.

---
## decode_server_notifications
```python
def decode_server_notifications(
    binary: bytes
) -> List[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamerConnected, ServerMessageStreamerDisconnected, ServerMessageChannelAdded, ServerMessageChannelRemoved, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated, ServerMessageRecordingStatusChanged]]
```
Decode a received protobuf payload into a list of notifications.

Handles both single notifications and batches transparently: a single
notification is returned as a one-element list, a batch is unpacked into
its members (in order), and anything unsupported yields an empty list.

The available notifications are listed in the `fishjam.events` module.

Args:
- binary: The raw binary data received from the webhook.

Returns:
- list[AllowedNotification]: The decoded notifications, in order. Empty
  when the payload carries no supported notification.

Raises:
- fishjam.errors.StaleSdkError: When a notification carries a value this
  SDK cannot parse, which likely means the SDK is outdated.

---
## receive_binary
```python
def receive_binary(
    binary: bytes
) -> Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamerConnected, ServerMessageStreamerDisconnected, ServerMessageChannelAdded, ServerMessageChannelRemoved, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated, ServerMessageRecordingStatusChanged, List[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamerConnected, ServerMessageStreamerDisconnected, ServerMessageChannelAdded, ServerMessageChannelRemoved, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated, ServerMessageRecordingStatusChanged]], NoneType]
```
Transforms a received protobuf notification into a notification instance.

.. deprecated::
- Use `decode_server_notifications` instead, which always returns a list
- and handles batched payloads with a single, consistent return type.

The available notifications are listed in `fishjam.events` module.

Args:
- binary: The raw binary data received from the webhook.

Returns:
- AllowedNotification: A single notification when the payload carries one.
- list[AllowedNotification]: The unpacked notifications, in order, when the
  payload is a batch (webhook batching enabled).
- None: When the payload is not a supported notification.

---
## verify_webhook_signature
```python
def verify_webhook_signature(body: bytes, signature: str, secret: str) -> bool
```
Verify the `x-fishjam-signature-256` header of a raw webhook body.

Accepts the `sha256=<hex>` format sent by Fishjam (the prefix is
optional) and compares in constant time. Call this with the raw request
body before passing it to `decode_server_notifications`.

Args:
- body: The raw binary body of the webhook request.
- signature: The value of the `x-fishjam-signature-256` header.
- secret: The webhook secret configured in Fishjam.

Returns:
- bool: True when the signature matches the body, False otherwise.

---
## PeerMetadata
```python
class PeerMetadata:
```
Custom metadata set by the peer

Example:
- \{'name': 'FishjamUser'\}

### __init__
```python
def __init__()
```
Method generated by attrs for class PeerMetadata.

### additional_properties
```python
additional_properties: dict[str, typing.Any]
```


### to_dict
```python
def to_dict(self) -> dict[str, typing.Any]
```


### from_dict
```python
def from_dict(cls: type[~T], src_dict: Mapping[str, typing.Any]) -> ~T
```


### additional_keys
```python
additional_keys: list[str]
```


---
## PeerOptions
```python
class PeerOptions:
```
Options specific to a WebRTC Peer.

Attributes:
- metadata: Peer metadata.
- subscribe_mode: Configuration of peer's subscribing policy.

### __init__
```python
def __init__(
    metadata: dict[str, typing.Any] | None = None,
    subscribe_mode: Literal['auto', 'manual'] = 'auto'
)
```


### metadata
```python
metadata: dict[str, typing.Any] | None = None

```
Peer metadata

### subscribe_mode
```python
subscribe_mode: Literal['auto', 'manual'] = 'auto'

```
Configuration of peer's subscribing policy

---
## PeerOptionsVapi
```python
class PeerOptionsVapi:
```
Options specific to the VAPI peer

Attributes:
- api_key (str): VAPI API key
- call_id (str): VAPI call ID
- auto_close (bool | Unset): Ends the VAPI call when the last participant leaves the room Default: False.
- subscribe_mode (SubscribeMode | Unset): Configuration of peer's subscribing policy

### __init__
```python
def __init__(
    api_key: str,
    call_id: str,
    auto_close: bool | Unset = False,
    subscribe_mode: SubscribeMode | Unset = <Unset object>
)
```
Method generated by attrs for class PeerOptionsVapi.

### api_key
```python
api_key: str
```


### call_id
```python
call_id: str
```


### auto_close
```python
auto_close: bool | Unset
```


### subscribe_mode
```python
subscribe_mode: SubscribeMode | Unset
```


### to_dict
```python
def to_dict(self) -> dict[str, typing.Any]
```


### from_dict
```python
def from_dict(cls: type[~T], src_dict: Mapping[str, typing.Any]) -> ~T
```


---
## RoomOptions
```python
class RoomOptions:
```
Description of a room options.

Attributes:
- max_peers: Maximum amount of peers allowed into the room.
- video_codec: Enforces video codec for each peer in the room.
- webhook_url: URL where Fishjam notifications will be sent.
- room_type: The use-case of the room. If not provided, this defaults
  to conference.
- public: True if livestream viewers can omit specifying a token.
- batch_webhook_notifications: If true, webhook notifications for this room
  are coalesced into a single NotificationBatch per HTTP send instead
  of one request per notification.

### __init__
```python
def __init__(
    max_peers: int | None = None,
    video_codec: Optional[Literal['h264', 'vp8']] = None,
    webhook_url: str | None = None,
    room_type: Literal['conference', 'audio_only', 'livestream', 'full_feature', 'broadcaster', 'audio_only_livestream'] = 'conference',
    public: bool = False,
    batch_webhook_notifications: bool = False
)
```


### max_peers
```python
max_peers: int | None = None

```
Maximum amount of peers allowed into the room

### video_codec
```python
video_codec: Optional[Literal['h264', 'vp8']] = None

```
Enforces video codec for each peer in the room

### webhook_url
```python
webhook_url: str | None = None

```
URL where Fishjam notifications will be sent

### room_type
```python
room_type: Literal['conference', 'audio_only', 'livestream', 'full_feature', 'broadcaster', 'audio_only_livestream'] = 'conference'

```
The use-case of the room. If not provided, this defaults to conference.

### public
```python
public: bool = False

```
True if livestream viewers can omit specifying a token.

### batch_webhook_notifications
```python
batch_webhook_notifications: bool = False

```
Coalesce webhook notifications into a single NotificationBatch per send.

---
## AgentOptions
```python
class AgentOptions:
```
Options specific to an Agent Peer.

Attributes:
- output: Configuration for the agent's output options.
- subscribe_mode: Configuration of peer's subscribing policy.

### __init__
```python
def __init__(
    output: AgentOutputOptions = <factory>,
    subscribe_mode: Literal['auto', 'manual'] = 'auto'
)
```


### output
```python
output: AgentOutputOptions
```


### subscribe_mode
```python
subscribe_mode: Literal['auto', 'manual'] = 'auto'

```


---
## AgentOutputOptions
```python
class AgentOutputOptions:
```
Options of the desired format of audio tracks going from Fishjam to the agent.

Attributes:
- audio_format: The format of the audio stream (e.g., 'pcm16').
- audio_sample_rate: The sample rate of the audio stream.

### __init__
```python
def __init__(
    audio_format: Literal['pcm16'] = 'pcm16',
    audio_sample_rate: Literal[16000, 24000] = 16000
)
```


### audio_format
```python
audio_format: Literal['pcm16'] = 'pcm16'

```


### audio_sample_rate
```python
audio_sample_rate: Literal[16000, 24000] = 16000

```


---
## Room
```python
class Room:
```
Description of the room state.

Attributes:
- config: Room configuration.
- id: Room ID.
- peers: List of all peers.
- composition_info: The composition the room's tracks are forwarded into,
  when `FishjamClient.forward_room_tracks` has linked one.

### __init__
```python
def __init__(
    config: RoomConfig,
    id: str,
    peers: list[Peer],
    composition_info: CompositionInfo | None = None
)
```


### config
```python
config: RoomConfig
```
Room configuration

### id
```python
id: str
```
Room ID

### peers
```python
peers: list[Peer]
```
List of all peers

### composition_info
```python
composition_info: CompositionInfo | None = None

```
The composition the room's tracks are forwarded into

---
## Peer
```python
class Peer:
```
Describes peer status

Attributes:
- id (str): Assigned peer id Example: 4a1c1164-5fb7-425d-89d7-24cdb8fff1cf.
- metadata (None | PeerMetadata): Custom metadata set by the peer Example: \{'name': 'FishjamUser'\}.
- status (PeerStatus): Informs about the peer status Example: disconnected.
- subscribe_mode (SubscribeMode): Configuration of peer's subscribing policy
- subscriptions (Subscriptions): Describes peer's subscriptions in manual mode
- tracks (list[Track]): List of all peer's tracks
- type_ (PeerType): Peer type Example: webrtc.

### __init__
```python
def __init__(
    id: str,
    metadata: None | PeerMetadata,
    status: PeerStatus,
    subscribe_mode: SubscribeMode,
    subscriptions: Subscriptions,
    tracks: list[Track],
    type_: PeerType
)
```
Method generated by attrs for class Peer.

### id
```python
id: str
```


### metadata
```python
metadata: None | PeerMetadata
```


### status
```python
status: PeerStatus
```


### subscribe_mode
```python
subscribe_mode: SubscribeMode
```


### subscriptions
```python
subscriptions: Subscriptions
```


### tracks
```python
tracks: list[Track]
```


### type_
```python
type_: PeerType
```


### additional_properties
```python
additional_properties: dict[str, typing.Any]
```


### to_dict
```python
def to_dict(self) -> dict[str, typing.Any]
```


### from_dict
```python
def from_dict(cls: type[~T], src_dict: Mapping[str, typing.Any]) -> ~T
```


### additional_keys
```python
additional_keys: list[str]
```


---
## Recording
```python
class Recording:
```
A recording and its current lifecycle status

Attributes:
- files (list[RecordingFile]): Media files of the recording, in playback order. Empty until the recording is
  `available`.
- id (str): Assigned recording id
- source (CompositionSource | TemplateSource): The source for the recording
- status (RecordingStatus): Lifecycle status of a recording
- metadata (None | RecordingMetadataType0 | Unset): Free-form, user-supplied metadata used to organize and filter
  recordings

### __init__
```python
def __init__(
    files: list[RecordingFile],
    id: str,
    source: CompositionSource | TemplateSource,
    status: RecordingStatus,
    metadata: None | RecordingMetadataType0 | Unset = <Unset object>
)
```
Method generated by attrs for class Recording.

### files
```python
files: list[RecordingFile]
```


### id
```python
id: str
```


### source
```python
source: CompositionSource | TemplateSource
```


### status
```python
status: RecordingStatus
```


### metadata
```python
metadata: None | RecordingMetadataType0 | Unset
```


### additional_properties
```python
additional_properties: dict[str, typing.Any]
```


### to_dict
```python
def to_dict(self) -> dict[str, typing.Any]
```


### from_dict
```python
def from_dict(cls: type[~T], src_dict: Mapping[str, typing.Any]) -> ~T
```


### additional_keys
```python
additional_keys: list[str]
```


---
## MoqAccess
```python
class MoqAccess:
```
Connection details for a MoQ relay client

Attributes:
- connection_url (str): Relay connection URL with the JWT embedded as a `?jwt=` query parameter. Pass directly to
  a MoQ client SDK. Example: https://relay.fishjam.io/abc123?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
- token (str): JWT authorizing the MoQ relay connection, also embedded in `connection_url` Example: eyJhbGciOiJIUz
  I1NiIsInR5cCI6IkpXVCJ9.eyJyb290IjoiZmlzaGphbSIsInB1dCI6WyJteS1zdHJlYW0iXSwiZ2V0IjpbXSwiaWF0IjoxNzEzMzYwMDAwLCJle
  HAiOjE3MTMzNjM2MDB9.abc123.

### __init__
```python
def __init__(connection_url: str, token: str)
```
Method generated by attrs for class MoqAccess.

### connection_url
```python
connection_url: str
```


### token
```python
token: str
```


### additional_properties
```python
additional_properties: dict[str, typing.Any]
```


### to_dict
```python
def to_dict(self) -> dict[str, typing.Any]
```


### from_dict
```python
def from_dict(cls: type[~T], src_dict: Mapping[str, typing.Any]) -> ~T
```


### additional_keys
```python
additional_keys: list[str]
```


---
## MissingFishjamIdError
```python
class MissingFishjamIdError(ValueError):
```
Inappropriate argument value (of correct type).

---
## InvalidFishjamCredentialsError
```python
class InvalidFishjamCredentialsError(fishjam.errors.HTTPError):
```


---
## StaleSdkError
```python
class StaleSdkError(Exception):
```
Common base class for all non-exit exceptions.

### __init__
```python
def __init__(status: int)
```


### status
```python
status
```
Raw wire value received from the server.

---
