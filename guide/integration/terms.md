---
sidebar_position: 2
---

# Terms

Terms used in our documentation

### Room

Collection of participants that could see all videos streamed by other participants

### Participant

User that is connected to room. Each participant has associated some metadata and tracks.

### Track

Single video or audio streamed by paritcipant. It could be camera view, shared screen or microphone audio. Each
participant could stream few tracks.

### Management Token

Secret token that should be stored on your backend. It allows to create rooms and add participants.

### Participant Token

Token that your backend should pass to end client as authentication method for user to access room.

### Fishjam URL

URL to your Fishjam instance. It is used by server to adds participant to room (and create rooms). And also it is used
by client apps to join room.

### Room manager

Our test app available **only** on Sandbox environment. It allows to test Fishjam Cloud without need to add create rooms
functionality on your backend.
