---
title: agent
sidebar_label: agent
custom_edit_url: null
---

# fishjam.agent



## Agent
```python
class Agent:
```
Allows for connecting to a Fishjam room as an agent peer.

Provides callbacks for receiving audio.

Attributes:
- id: The unique identifier of the agent.
- room_id: The ID of the room the agent is connecting to.

### __init__
```python
def __init__(id: str, room_id: str, token: str, fishjam_url: str)
```
Creates an Agent instance.

This constructor should not be called directly.
Instead, you should call :func:`fishjam.FishjamClient.create_agent`.

Args:
- id: The unique identifier for the agent.
- room_id: The ID of the room the agent will join.
- token: The authentication token for the agent.
- fishjam_url: The URL of the Fishjam instance.

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
Connects the agent to Fishjam to start receiving messages.

Incoming messages from Fishjam will be routed to handlers
defined with :func:`on_track_data`.

Yields:
- AgentSession: An active session for sending media and handling events.

Raises:
- AgentAuthError: If authentication with the Fishjam server fails.

---
## AgentError
```python
class AgentError(Exception):
```
Base exception class for all agent exceptions.

---
## AgentSession
```python
class AgentSession:
```
Represents an active connection session for an Agent.

### __init__
```python
def __init__(
    agent: fishjam.agent.agent.Agent,
    websocket: websockets.asyncio.client.ClientConnection
)
```
Initializes the AgentSession.

Args:
- agent: The Agent instance owning this session.
- websocket: The active websocket connection.

### agent
```python
agent
```


### receive
```python
def receive(
    self
) -> AsyncIterator[AgentResponseTrackData]
```
Returns an async iterator over incoming messages from Fishjam.

Yields:
- IncomingAgentMessage: The next message received from the server.

### add_track
```python
def add_track(
    self,
    options: fishjam.agent.agent.OutgoingAudioTrackOptions
) -> fishjam.agent.agent.OutgoingTrack
```
Adds a track to the connected agent with the specified options.

Args:
- options: Configuration options and metadata for the new track.

Returns:
- OutgoingTrack: An object used to send data over the added track.

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
Agent failed to authenticate properly.

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
IncomingTrackData = <class 'AgentResponseTrackData'>

```


---
## OutgoingTrack
```python
class OutgoingTrack:
```
Represents an outgoing track of an agent connected to Fishjam.

This is created by :func:`Agent.add_track`.

Attributes:
- id: The global identifier of the track.
- session: The agent the track belongs to.
- options: The parameters used to create the track.

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
id: str
```


### session
```python
session: fishjam.agent.agent.AgentSession
```


### options
```python
options: fishjam.agent.agent.OutgoingAudioTrackOptions
```


### send_chunk
```python
def send_chunk(self, data: bytes)
```
Sends a chunk of audio to Fishjam on this track.

Peers connected to the room of the agent will receive this data.

Args:
- data: The raw audio bytes to send.

### interrupt
```python
def interrupt(self)
```
Interrupts the current track.

Any audio that has been sent, but not played, will be cleared and
prevented from playing. Audio sent after the interrupt will be played
normally.

---
## OutgoingAudioTrackOptions
```python
class OutgoingAudioTrackOptions:
```
Parameters of an outgoing audio track.

Attributes:
- encoding: The encoding of the audio source. Defaults to raw 16-bit PCM.
- sample_rate: The sample rate of the audio source. Defaults to 16000.
- channels: The number of channels in the audio source. Supported values are
  1 (mono) and 2 (stereo). Defaults to 1 (mono).
- metadata: Custom metadata for the track. Must be JSON-encodable.

### __init__
```python
def __init__(
    encoding: TrackEncoding = <TrackEncoding.TRACK_ENCODING_UNSPECIFIED: 0>,
    sample_rate: Literal[16000, 24000] = 16000,
    channels: Literal[1, 2] = 1,
    metadata: dict[str, typing.Any] | None = None
)
```


### encoding
```python
encoding: TrackEncoding = <TrackEncoding.TRACK_ENCODING_UNSPECIFIED: 0>

```


### sample_rate
```python
sample_rate: Literal[16000, 24000] = 16000

```


### channels
```python
channels: Literal[1, 2] = 1

```


### metadata
```python
metadata: dict[str, typing.Any] | None = None

```


---
