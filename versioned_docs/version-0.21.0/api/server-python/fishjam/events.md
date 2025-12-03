---
title: events
sidebar_label: events
custom_edit_url: null
---

# events



## ServerMessageRoomCreated
```python
class ServerMessageRoomCreated(betterproto.Message):
```
Notification sent when a room is created

### __init__
```python
def __init__(room_id: str = <object object>)
```


### room_id
```python
room_id: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageRoomDeleted
```python
class ServerMessageRoomDeleted(betterproto.Message):
```
Notification sent when a room is deleted

### __init__
```python
def __init__(room_id: str = <object object>)
```


### room_id
```python
room_id: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageRoomCrashed
```python
class ServerMessageRoomCrashed(betterproto.Message):
```
Notification sent when a room crashes

### __init__
```python
def __init__(room_id: str = <object object>)
```


### room_id
```python
room_id: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessagePeerAdded
```python
class ServerMessagePeerAdded(betterproto.Message):
```
Notification sent when a peer is added

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    peer_type: fishjam.events._protos.fishjam.ServerMessagePeerType = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### peer_type
```python
peer_type: : fishjam.events._protos.fishjam.ServerMessagePeerType
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessagePeerConnected
```python
class ServerMessagePeerConnected(betterproto.Message):
```
Notification sent when a peer connects

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    peer_type: fishjam.events._protos.fishjam.ServerMessagePeerType = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### peer_type
```python
peer_type: : fishjam.events._protos.fishjam.ServerMessagePeerType
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessagePeerDeleted
```python
class ServerMessagePeerDeleted(betterproto.Message):
```
Notification sent when a peer is removed

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    peer_type: fishjam.events._protos.fishjam.ServerMessagePeerType = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### peer_type
```python
peer_type: : fishjam.events._protos.fishjam.ServerMessagePeerType
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessagePeerDisconnected
```python
class ServerMessagePeerDisconnected(betterproto.Message):
```
Notification sent when a peer disconnects from FJ

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    peer_type: fishjam.events._protos.fishjam.ServerMessagePeerType = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### peer_type
```python
peer_type: : fishjam.events._protos.fishjam.ServerMessagePeerType
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessagePeerMetadataUpdated
```python
class ServerMessagePeerMetadataUpdated(betterproto.Message):
```
Notification sent when peer updates its metadata

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    metadata: str = <object object>,
    peer_type: fishjam.events._protos.fishjam.ServerMessagePeerType = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### metadata
```python
metadata: : str
```


### peer_type
```python
peer_type: : fishjam.events._protos.fishjam.ServerMessagePeerType
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessagePeerCrashed
```python
class ServerMessagePeerCrashed(betterproto.Message):
```
Notification sent when a peer crashes

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    reason: str = <object object>,
    peer_type: fishjam.events._protos.fishjam.ServerMessagePeerType = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### reason
```python
reason: : str
```


### peer_type
```python
peer_type: : fishjam.events._protos.fishjam.ServerMessagePeerType
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageStreamConnected
```python
class ServerMessageStreamConnected(betterproto.Message):
```
Notification sent when streamer successfully connects

### __init__
```python
def __init__(stream_id: str = <object object>)
```


### stream_id
```python
stream_id: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageStreamDisconnected
```python
class ServerMessageStreamDisconnected(betterproto.Message):
```
Notification sent when streamer disconnects

### __init__
```python
def __init__(stream_id: str = <object object>)
```


### stream_id
```python
stream_id: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageTrackAdded
```python
class ServerMessageTrackAdded(betterproto.Message):
```
Notification sent when peer or component adds new track

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    component_id: str = <object object>,
    track: fishjam.events._protos.fishjam.notifications.Track = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### component_id
```python
component_id: : str
```


### track
```python
track: : fishjam.events._protos.fishjam.notifications.Track
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageTrackMetadataUpdated
```python
class ServerMessageTrackMetadataUpdated(betterproto.Message):
```
Notification sent when metadata of a multimedia track is updated

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    component_id: str = <object object>,
    track: fishjam.events._protos.fishjam.notifications.Track = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### component_id
```python
component_id: : str
```


### track
```python
track: : fishjam.events._protos.fishjam.notifications.Track
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageTrackRemoved
```python
class ServerMessageTrackRemoved(betterproto.Message):
```
Notification sent when a track is removed

### __init__
```python
def __init__(
    room_id: str = <object object>,
    peer_id: str = <object object>,
    component_id: str = <object object>,
    track: fishjam.events._protos.fishjam.notifications.Track = <object object>
)
```


### room_id
```python
room_id: : str
```


### peer_id
```python
peer_id: : str
```


### component_id
```python
component_id: : str
```


### track
```python
track: : fishjam.events._protos.fishjam.notifications.Track
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageViewerConnected
```python
class ServerMessageViewerConnected(betterproto.Message):
```
Notification sent when viewer successfully connects

### __init__
```python
def __init__(stream_id: str = <object object>, viewer_id: str = <object object>)
```


### stream_id
```python
stream_id: : str
```


### viewer_id
```python
viewer_id: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## ServerMessageViewerDisconnected
```python
class ServerMessageViewerDisconnected(betterproto.Message):
```
Notification sent when viewer disconnects

### __init__
```python
def __init__(stream_id: str = <object object>, viewer_id: str = <object object>)
```


### stream_id
```python
stream_id: : str
```


### viewer_id
```python
viewer_id: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## Track
```python
class Track(betterproto.Message):
```
Describes a media track

### __init__
```python
def __init__(
    id: str = <object object>,
    type: fishjam.events._protos.fishjam.notifications.TrackType = <object object>,
    metadata: str = <object object>
)
```


### id
```python
id: : str
```


### type
```python
type: : fishjam.events._protos.fishjam.notifications.TrackType
```


### metadata
```python
metadata: : str
```


#### Inherited Members
* **Message**:
    * `SerializeToString`
    * `parse`
    * `FromString`
    * `to_dict`
    * `from_dict`
    * `to_json`
    * `from_json`
    * `to_pydict`
    * `from_pydict`
    * `is_set`
---
## TrackEncoding
```python
class TrackEncoding(betterproto.Enum):
```
The base class for protobuf enumerations, all generated enumerations will inherit
from this. Bases :class:`enum.IntEnum`.

### TRACK_ENCODING_UNSPECIFIED
```python
TRACK_ENCODING_UNSPECIFIED         = <TrackEncoding.TRACK_ENCODING_UNSPECIFIED: 0>

```


### TRACK_ENCODING_PCM16
```python
TRACK_ENCODING_PCM16         = <TrackEncoding.TRACK_ENCODING_PCM16: 1>

```


### TRACK_ENCODING_OPUS
```python
TRACK_ENCODING_OPUS         = <TrackEncoding.TRACK_ENCODING_OPUS: 2>

```


#### Inherited Members
* **Enum**:
    * `from_string`





* **Enum**:
    * `name`
    * `value`
---
## TrackType
```python
class TrackType(betterproto.Enum):
```
Defines types of tracks being published by peers and component

### TRACK_TYPE_UNSPECIFIED
```python
TRACK_TYPE_UNSPECIFIED         = <TrackType.TRACK_TYPE_UNSPECIFIED: 0>

```


### TRACK_TYPE_VIDEO
```python
TRACK_TYPE_VIDEO         = <TrackType.TRACK_TYPE_VIDEO: 1>

```


### TRACK_TYPE_AUDIO
```python
TRACK_TYPE_AUDIO         = <TrackType.TRACK_TYPE_AUDIO: 2>

```


#### Inherited Members
* **Enum**:
    * `from_string`





* **Enum**:
    * `name`
    * `value`
---
## ServerMessagePeerType
```python
class ServerMessagePeerType(betterproto.Enum):
```
The base class for protobuf enumerations, all generated enumerations will inherit
from this. Bases :class:`enum.IntEnum`.

### PEER_TYPE_UNSPECIFIED
```python
PEER_TYPE_UNSPECIFIED         = <ServerMessagePeerType.PEER_TYPE_UNSPECIFIED: 0>

```


### PEER_TYPE_WEBRTC
```python
PEER_TYPE_WEBRTC         = <ServerMessagePeerType.PEER_TYPE_WEBRTC: 1>

```


### PEER_TYPE_AGENT
```python
PEER_TYPE_AGENT         = <ServerMessagePeerType.PEER_TYPE_AGENT: 2>

```


#### Inherited Members
* **Enum**:
    * `from_string`





* **Enum**:
    * `name`
    * `value`
---
