# Type Alias: CallEndedReason

> **CallEndedReason** = `"local"` \| `"rejected"` \| `"missed"` \| `"remote"` \| `"answeredElsewhere"` \| `"failed"`

Defined in: react-native-webrtc/lib/typescript/Telecom.d.ts:28

Cross-platform reason a call ended, surfaced from both Telecom (Android) and
CallKit (iOS):
- `local` — this device hung up (or the system CallKit UI's End/Decline, which
  iOS can't distinguish from a plain hang-up).
- `rejected` — the callee actively declined a ringing incoming call (Android only
  — CallKit has no ended-reason case for a local decline, so on iOS this also
  surfaces as `local`).
- `missed` — an incoming call rang and was never answered, including the native
  ring timeout (default 45 seconds), or an Android outgoing call did not connect
  before its native timeout (default 60 seconds).
- `remote` — the other party ended the call.
- `answeredElsewhere` — answered on another of the user's devices while ringing.
- `failed` — call setup (e.g. room join) failed.
