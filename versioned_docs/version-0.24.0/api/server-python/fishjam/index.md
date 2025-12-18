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
- [agent](fishjam/agent)
- [integrations](fishjam/integrations)

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

Args:
- fishjam_id: The unique identifier for the Fishjam instance.
- management_token: The token used for authenticating management operations.

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
    handler: Union[Callable[[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamConnected, ServerMessageStreamDisconnected, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated]], NoneType], Callable[[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamConnected, ServerMessageStreamDisconnected, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated]], Coroutine[Any, Any, None]]]
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
## receive_binary
```python
def receive_binary(
    binary: bytes
) -> Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamConnected, ServerMessageStreamDisconnected, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated, NoneType]
```
Transforms a received protobuf notification into a notification instance.

The available notifications are listed in `fishjam.events` module.

Args:
- binary: The raw binary data received from the webhook.

Returns:
- AllowedNotification | None: The parsed notification object, or None if
  the message type is not supported.

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

### __init__
```python
def __init__(
    max_peers: int | None = None,
    video_codec: Optional[Literal['h264', 'vp8']] = None,
    webhook_url: str | None = None,
    room_type: Literal['conference', 'audio_only', 'livestream', 'full_feature', 'broadcaster', 'audio_only_livestream'] = 'conference',
    public: bool = False
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

---
## AgentOptions
```python
class AgentOptions:
```
Options specific to a WebRTC Peer.

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

### __init__
```python
def __init__(
    config: RoomConfig,
    id: str,
    peers: list[Peer]
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

---
## Peer
```python
class Peer:
```
Describes peer status

Attributes:
- id (str): Assigned peer id Example: 4a1c1164-5fb7-425d-89d7-24cdb8fff1cf.
- metadata (Union['PeerMetadata', None]): Custom metadata set by the peer Example: \{'name': 'FishjamUser'\}.
- status (PeerStatus): Informs about the peer status Example: disconnected.
- subscribe_mode (SubscribeMode): Configuration of peer's subscribing policy
- subscriptions (Subscriptions): Describes peer's subscriptions in manual mode
- tracks (list['Track']): List of all peer's tracks
- type_ (PeerType): Peer type Example: webrtc.

### __init__
```python
def __init__(
    id: str,
    metadata: Optional[PeerMetadata],
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
metadata: Optional[PeerMetadata]
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
