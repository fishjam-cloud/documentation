---
title: agent
sidebar_label: agent
custom_edit_url: null
---

# agent



## Agent
```python
class Agent:
```
Allows for connecting to a Fishjam room as an agent peer.
Provides callbacks for receiving audio.

### __init__
```python
def __init__(id: str, room_id: str, token: str, fishjam_url: str)
```
Create Agent instance, providing the fishjam id and management token.

This constructor should not be called directly.
Instead, you should call :func:`fishjam.FishjamClient.create_agent`.

### id
```python
id
```


### room_id
```python
room_id
```


### connect
```python
def connect(self)
```
Connect the agent to Fishjam to start receiving messages.

Incoming messages from Fishjam will be routed to handlers
defined with :func:`on_track_data`.

:raises AgentAuthError: authentication failed

---
## AgentError
```python
class AgentError(builtins.Exception):
```
Base exception class for all agent exceptions

---
## AgentSession
```python
class AgentSession:
```


### __init__
```python
def __init__(
    agent: fishjam.agent.agent.Agent,
    websocket: websockets.asyncio.client.ClientConnection
)
```


### agent
```python
agent
```


### receive
```python
def receive(
    self
) -> AsyncIterator[fishjam.events._protos.fishjam.AgentResponseTrackData]
```
Returns an infinite async iterator over the incoming messages from Fishjam to
the agent.

### add_track
```python
def add_track(self, options: fishjam.agent.agent.OutgoingAudioTrackOptions)
```
Adds a track to the connected agent, with the specified options and metadata.

Returns an instance of :class:`OutgoingTrack`, which can be used to send data
over the added track.

### disconnect
```python
def disconnect(self)
```
Ends the agent session by closing the websocket connection.
Useful when you don't use the context manager to obtain the session.

---
## AgentAuthError
```python
class AgentAuthError(fishjam.agent.errors.AgentError):
```
Agent failed to authenticate properly

### __init__
```python
def __init__(reason: str)
```


### reason
```python
reason
```


---
## IncomingTrackData
```python
IncomingTrackData         = <class 'fishjam.events._protos.fishjam.AgentResponseTrackData'>

```


---
## OutgoingTrack
```python
class OutgoingTrack:
```
Represents an outgoing track of an agent connected to Fishjam,
created by :func:`Agent.add_track`.

### __init__
```python
def __init__(
    id: str,
    session: fishjam.agent.agent.AgentSession,
    options: fishjam.agent.agent.OutgoingAudioTrackOptions
)
```


### id
```python
id: : str
```
The global identifier of the track.

### session
```python
session: : fishjam.agent.agent.AgentSession
```
The agent the track belongs to.

### options
```python
options: : fishjam.agent.agent.OutgoingAudioTrackOptions
```
The parameters used to create the track.

### send_chunk
```python
def send_chunk(self, data: bytes)
```
Send a chunk of audio to Fishjam on this track.

Peers connected to the room of the agent will receive this data.

### interrupt
```python
def interrupt(self)
```
Interrupt current track.

Any audio that has been sent, but not played
will be cleared and be prevented from playing.

Audio sent after the interrupt will be played normally.

---
## OutgoingAudioTrackOptions
```python
class OutgoingAudioTrackOptions:
```
Parameters of an outgoing audio track.

### __init__
```python
def __init__(
    encoding: fishjam.events._protos.fishjam.notifications.TrackEncoding = <TrackEncoding.TRACK_ENCODING_UNSPECIFIED: 0>,
    sample_rate: Literal[16000, 24000] = 16000,
    channels: Literal[1, 2] = 1,
    metadata: dict[str, typing.Any] | None = None
)
```


### encoding
```python
encoding: : fishjam.events._protos.fishjam.notifications.TrackEncoding         = <TrackEncoding.TRACK_ENCODING_UNSPECIFIED: 0>

```
The encoding of the audio source.
Defaults to raw 16-bit PCM.

### sample_rate
```python
sample_rate: : Literal[16000, 24000]         = 16000

```
The sample rate of the audio source.
Defaults to 16000.

### channels
```python
channels: : Literal[1, 2]         = 1

```
The number of channels in the audio source.
Supported values are 1 (mono) and 2 (stereo).
Defaults to 1 (mono)

### metadata
```python
metadata: : dict[str, typing.Any] | None         = None

```
Custom metadata for the track.
Must be JSON-encodable.

---
