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

## FishjamClient
```python
class FishjamClient(fishjam.api._client.Client):
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
    options: fishjam.api._fishjam_client.PeerOptions | None = None
) -> tuple[fishjam._openapi_client.models.peer.Peer, str]
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
    options: fishjam.api._fishjam_client.AgentOptions | None = None
)
```


### create_room
```python
def create_room(
    self,
    options: fishjam.api._fishjam_client.RoomOptions | None = None
) -> fishjam.api._fishjam_client.Room
```
Creates a new room
Returns the created `Room`

### get_all_rooms
```python
def get_all_rooms(self) -> list[fishjam.api._fishjam_client.Room]
```
Returns list of all rooms

### get_room
```python
def get_room(self, room_id: str) -> fishjam.api._fishjam_client.Room
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
    handler: Union[Callable[[Union[fishjam.events._protos.fishjam.ServerMessageRoomCreated, fishjam.events._protos.fishjam.ServerMessageRoomDeleted, fishjam.events._protos.fishjam.ServerMessageRoomCrashed, fishjam.events._protos.fishjam.ServerMessagePeerAdded, fishjam.events._protos.fishjam.ServerMessagePeerDeleted, fishjam.events._protos.fishjam.ServerMessagePeerConnected, fishjam.events._protos.fishjam.ServerMessagePeerDisconnected, fishjam.events._protos.fishjam.ServerMessagePeerMetadataUpdated, fishjam.events._protos.fishjam.ServerMessagePeerCrashed, fishjam.events._protos.fishjam.ServerMessageStreamConnected, fishjam.events._protos.fishjam.ServerMessageStreamDisconnected, fishjam.events._protos.fishjam.ServerMessageViewerConnected, fishjam.events._protos.fishjam.ServerMessageViewerDisconnected, fishjam.events._protos.fishjam.ServerMessageTrackAdded, fishjam.events._protos.fishjam.ServerMessageTrackRemoved, fishjam.events._protos.fishjam.ServerMessageTrackMetadataUpdated]], NoneType], Callable[[Union[fishjam.events._protos.fishjam.ServerMessageRoomCreated, fishjam.events._protos.fishjam.ServerMessageRoomDeleted, fishjam.events._protos.fishjam.ServerMessageRoomCrashed, fishjam.events._protos.fishjam.ServerMessagePeerAdded, fishjam.events._protos.fishjam.ServerMessagePeerDeleted, fishjam.events._protos.fishjam.ServerMessagePeerConnected, fishjam.events._protos.fishjam.ServerMessagePeerDisconnected, fishjam.events._protos.fishjam.ServerMessagePeerMetadataUpdated, fishjam.events._protos.fishjam.ServerMessagePeerCrashed, fishjam.events._protos.fishjam.ServerMessageStreamConnected, fishjam.events._protos.fishjam.ServerMessageStreamDisconnected, fishjam.events._protos.fishjam.ServerMessageViewerConnected, fishjam.events._protos.fishjam.ServerMessageViewerDisconnected, fishjam.events._protos.fishjam.ServerMessageTrackAdded, fishjam.events._protos.fishjam.ServerMessageTrackRemoved, fishjam.events._protos.fishjam.ServerMessageTrackMetadataUpdated]], Coroutine[Any, Any, None]]]
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
) -> Union[fishjam.events._protos.fishjam.ServerMessageRoomCreated, fishjam.events._protos.fishjam.ServerMessageRoomDeleted, fishjam.events._protos.fishjam.ServerMessageRoomCrashed, fishjam.events._protos.fishjam.ServerMessagePeerAdded, fishjam.events._protos.fishjam.ServerMessagePeerDeleted, fishjam.events._protos.fishjam.ServerMessagePeerConnected, fishjam.events._protos.fishjam.ServerMessagePeerDisconnected, fishjam.events._protos.fishjam.ServerMessagePeerMetadataUpdated, fishjam.events._protos.fishjam.ServerMessagePeerCrashed, fishjam.events._protos.fishjam.ServerMessageStreamConnected, fishjam.events._protos.fishjam.ServerMessageStreamDisconnected, fishjam.events._protos.fishjam.ServerMessageViewerConnected, fishjam.events._protos.fishjam.ServerMessageViewerDisconnected, fishjam.events._protos.fishjam.ServerMessageTrackAdded, fishjam.events._protos.fishjam.ServerMessageTrackRemoved, fishjam.events._protos.fishjam.ServerMessageTrackMetadataUpdated, NoneType]
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
additional_properties: : dict[str, typing.Any]
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
additional_keys: : list[str]
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
enable_simulcast: : bool         = True

```
Enables the peer to use simulcast

### metadata
```python
metadata: : dict[str, typing.Any] | None         = None

```
Peer metadata

### subscribe_mode
```python
subscribe_mode: : Literal[&#39;auto&#39;, &#39;manual&#39;]         = 'auto'

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
max_peers: : int | None         = None

```
Maximum amount of peers allowed into the room

### video_codec
```python
video_codec: : Optional[Literal[&#39;h264&#39;, &#39;vp8&#39;]]         = None

```
Enforces video codec for each peer in the room

### webhook_url
```python
webhook_url: : str | None         = None

```
URL where Fishjam notifications will be sent

### room_type
```python
room_type: : Literal[&#39;conference&#39;, &#39;audio_only&#39;, &#39;livestream&#39;, &#39;full_feature&#39;, &#39;broadcaster&#39;, &#39;audio_only_livestream&#39;]         = 'conference'

```
The use-case of the room. If not provided, this defaults to conference.

### public
```python
public: : bool         = False

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
    output: fishjam.api._fishjam_client.AgentOutputOptions = <factory>,
    subscribe_mode: Literal['auto', 'manual'] = 'auto'
)
```


### output
```python
output: : fishjam.api._fishjam_client.AgentOutputOptions
```


### subscribe_mode
```python
subscribe_mode: : Literal[&#39;auto&#39;, &#39;manual&#39;]         = 'auto'

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
audio_format: : Literal[&#39;pcm16&#39;]         = 'pcm16'

```


### audio_sample_rate
```python
audio_sample_rate: : Literal[16000, 24000]         = 16000

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
    config: fishjam._openapi_client.models.room_config.RoomConfig,
    id: str,
    peers: list[fishjam._openapi_client.models.peer.Peer]
)
```


### config
```python
config: : fishjam._openapi_client.models.room_config.RoomConfig
```
Room configuration

### id
```python
id: : str
```
Room ID

### peers
```python
peers: : list[fishjam._openapi_client.models.peer.Peer]
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
    metadata: Optional[fishjam._openapi_client.models.peer_metadata.PeerMetadata],
    status: fishjam._openapi_client.models.peer_status.PeerStatus,
    subscribe_mode: fishjam._openapi_client.models.subscribe_mode.SubscribeMode,
    subscriptions: fishjam._openapi_client.models.subscriptions.Subscriptions,
    tracks: list[fishjam._openapi_client.models.track.Track],
    type_: fishjam._openapi_client.models.peer_type.PeerType
)
```
Method generated by attrs for class Peer.

### id
```python
id: : str
```


### metadata
```python
metadata: : Optional[fishjam._openapi_client.models.peer_metadata.PeerMetadata]
```


### status
```python
status: : fishjam._openapi_client.models.peer_status.PeerStatus
```


### subscribe_mode
```python
subscribe_mode: : fishjam._openapi_client.models.subscribe_mode.SubscribeMode
```


### subscriptions
```python
subscriptions: : fishjam._openapi_client.models.subscriptions.Subscriptions
```


### tracks
```python
tracks: : list[fishjam._openapi_client.models.track.Track]
```


### type_
```python
type_: : fishjam._openapi_client.models.peer_type.PeerType
```


### additional_properties
```python
additional_properties: : dict[str, typing.Any]
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
additional_keys: : list[str]
```


---
