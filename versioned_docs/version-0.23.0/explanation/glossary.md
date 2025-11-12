---
type: reference
---

# Glossary

A brief walk-through of the terms we use in the documentation.

### Room

A collection of peers that can send and receive video/audio to and from other peers.

### Peer

A user that is connected to a room. Each peer has some associated metadata and tracks.

### Agent

A program connected to a room using the Fishjam server SDK; a programmatic peer.

### Track

A single stream of video or audio from a peer. It could be a camera view, shared screen, or microphone audio. Each peer can stream multiple tracks.

### Management Token

A secret token that should be stored on your backend. It allows you to create rooms and add peers.

### Peer Token

A token that your backend should pass to end clients to allow access to a specific room.

### Fishjam ID

The ID of your Fishjam instance. It is used by your backend server to add peers to rooms (and create rooms). It is also used by end client apps to join rooms.

### Sandbox API

A simple testing API allowing you to test Fishjam features without requiring you to add any functionalities to your backend. As the name suggests, it's available **only** in the Sandbox environment. You can find more details [here](/how-to/features/sandbox-api-testing).
