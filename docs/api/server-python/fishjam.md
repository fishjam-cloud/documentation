---
title: fishjam
sidebar_label: fishjam
custom_edit_url: null
---

# fishjam


## Submodules
- [events](submodules/events)
- [errors](submodules/errors)
- [room](submodules/room)
- [peer](submodules/peer)
- [agent](submodules/agent)

## FishjamClient
```python
class FishjamClient(Client):
```
Allows for managing rooms

### __init__
```python
def __init__(fishjam_id: str, management_token: str)
```
Create a FishjamClient instance, providing the fishjam id and management token.

### create_peer
```python
def create_peer(
    self,
    room_id: str,
    options: PeerOptions | None = None
) -> tuple[Peer, str]
```
Creates peer in the room

Returns a tuple (`Peer`, `PeerToken`) - the token is needed by Peer
to authenticate to Fishjam.

The possible options to pass for peer are `PeerOptions`.

### create_agent
```python
def create_agent(
    self,
    room_id: str,
    options: AgentOptions | None = None
)
```


### create_room
```python
def create_room(
    self,
    options: RoomOptions | None = None
) -> Room
```
Creates a new room
Returns the created `Room`

### get_all_rooms
```python
def get_all_rooms(self) -> list[Room]
```
Returns list of all rooms

### get_room
```python
def get_room(self, room_id: str) -> Room
```
Returns room with the given id

### delete_peer
```python
def delete_peer(self, room_id: str, peer_id: str) -> None
```
Deletes peer

### delete_room
```python
def delete_room(self, room_id: str) -> None
```
Deletes a room

### refresh_peer_token
```python
def refresh_peer_token(self, room_id: str, peer_id: str) -> str
```
Refreshes peer token

### create_livestream_viewer_token
```python
def create_livestream_viewer_token(self, room_id: str) -> str
```
Generates viewer token for livestream rooms

### create_livestream_streamer_token
```python
def create_livestream_streamer_token(self, room_id: str) -> str
```
Generates streamer token for livestream rooms

### subscribe_peer
```python
def subscribe_peer(self, room_id: str, peer_id: str, target_peer_id: str)
```
Subscribe a peer to all tracks of another peer.

### subscribe_tracks
```python
def subscribe_tracks(self, room_id: str, peer_id: str, track_ids: list[str])
```
Subscribe a peer to specific tracks of another peer.

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
Create FishjamNotifier instance, providing the fishjam id and management token.

### on_server_notification
```python
def on_server_notification(
    self,
    handler: Union[Callable[[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamConnected, ServerMessageStreamDisconnected, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated]], NoneType], Callable[[Union[ServerMessageRoomCreated, ServerMessageRoomDeleted, ServerMessageRoomCrashed, ServerMessagePeerAdded, ServerMessagePeerDeleted, ServerMessagePeerConnected, ServerMessagePeerDisconnected, ServerMessagePeerMetadataUpdated, ServerMessagePeerCrashed, ServerMessageStreamConnected, ServerMessageStreamDisconnected, ServerMessageViewerConnected, ServerMessageViewerDisconnected, ServerMessageTrackAdded, ServerMessageTrackRemoved, ServerMessageTrackMetadataUpdated]], Coroutine[Any, Any, None]]]
)
```
Decorator used for defining handler for Fishjam Notifications

### connect
```python
def connect(self)
```
A coroutine which connects FishjamNotifier to Fishjam and listens for
all incoming messages from the Fishjam.

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
Transform received protobuf notification to adequate notification instance.
The available notifications are listed in `fishjam.events` module.

---
## PeerMetadata
```python
class PeerMetadata:
```
Custom metadata set by the peer

Example:
    \{'name': 'FishjamUser'\}

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
Options specific to a WebRTC Peer

### __init__
```python
def __init__(
    enable_simulcast: bool = True,
    metadata: dict[str, typing.Any] | None = None,
    subscribe_mode: Literal['auto', 'manual'] = 'auto'
)
```


### enable_simulcast
```python
enable_simulcast: bool = True

```
Enables the peer to use simulcast

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
Description of a room options

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
Options specific to a WebRTC Peer

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
Description of the room state

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
    id (str): Assigned peer id Example: 4a1c1164-5fb7-425d-89d7-24cdb8fff1cf.
    metadata (Union['PeerMetadata', None]): Custom metadata set by the peer Example: \{'name': 'FishjamUser'\}.
    status (PeerStatus): Informs about the peer status Example: disconnected.
    subscribe_mode (SubscribeMode): Configuration of peer's subscribing policy
    subscriptions (Subscriptions): Describes peer's subscriptions in manual mode
    tracks (list['Track']): List of all peer's tracks
    type_ (PeerType): Peer type Example: webrtc.

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
