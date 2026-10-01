# Function: reportOutgoingCallConnected()

> **reportOutgoingCallConnected**(): `Promise`\<`void`\>

Defined in: react-native-webrtc/lib/typescript/VoIP.d.ts:30

Reports that an outgoing call's media is connected — the remote party answered.
Until this is called, the OS shows the call as "Calling…" / "Dialing…" and no
call timer runs. No-op for incoming calls, or when there is no active outgoing
call.

## Returns

`Promise`\<`void`\>
