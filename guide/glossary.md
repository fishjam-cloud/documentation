---
sidebar_position: 8
---

# Glossary

Terms used in our documentation

### Room

Collection of peers that can send and receive video/audio to and from other peers

### Peer

User that is connected to a room. Each peer has some associated metadata and tracks.

### Track

Single stream of video or audio of a peer. It could be a camera view, shared screen or microphone audio. Each peer can  
stream multiple tracks.

### Management Token

Secret token that should be stored on your backend. It allows to create rooms and add peers.

### Peer Token

Token that your backend should pass to end clients to allow access to a specific room.

### Fishjam URL

URL to your Fishjam instance. It is used by your backend server to add peers to rooms (and create rooms). It is also
used by  
end client apps to join rooms.

### Room Manager

Our test app available **only** on Sandbox environment. It allows to test Fishjam Cloud without need to add create rooms
functionality on your backend.
