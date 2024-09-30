---
sidebar_position: 2
---

# Terms

Terms used in our documentation

### Room

Collection of peers that could see all videos streamed by other peers

### Peer

User that is connected to room. Each peer has associated some metadata and tracks.

### Track

Single video or audio streamed by peer. It could be camera view, shared screen or microphone audio. Each peer could
stream few tracks.

### Management Token

Secret token that should be stored on your backend. It allows to create rooms and add peers.

### Peer Token

Token that your backend should pass to end client as authentication method for user to access room.

### Fishjam URL

URL to your Fishjam instance. It is used by server to adds peer to room (and create rooms). And also it is used by
client apps to join room.

### Room Manager

Our test app available **only** on Sandbox environment. It allows to test Fishjam Cloud without need to add create rooms
functionality on your backend.
