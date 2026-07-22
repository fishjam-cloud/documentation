# Class: MediaStream

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:8

## Extends

- `unknown`\<`MediaStreamEventMap`\>

## Constructors

### Constructor

> **new MediaStream**(`arg?`): `MediaStream`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:31

A MediaStream can be constructed in several ways, depending on the parameters
that are passed here.

- undefined: just a new stream, with no tracks.
- MediaStream instance: a new stream, with a copy of the tracks of the passed stream.
- Array of MediaStreamTrack: a new stream with a copy of the tracks in the array.
- object: a new stream instance, represented by the passed info object, this is always
  done internally, when the stream is first created in native and the JS wrapper is
  built afterwards.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arg?` | `MediaStream` \| [`MediaStreamTrack`](MediaStreamTrack.md)[] \| \{ `streamId`: `string`; `streamReactTag`: `string`; `tracks`: `MediaStreamTrackInfo`[]; \} |

#### Returns

`MediaStream`

#### Overrides

`EventTarget<MediaStreamEventMap>.constructor`

## Properties

### \_id

> **\_id**: `string`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:10

***

### \_reactTag

> **\_reactTag**: `string`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:19

The identifier of this MediaStream unique within the associated
WebRTCModule instance. As the id of a remote MediaStream instance is unique
only within the associated RTCPeerConnection, it is not sufficiently unique
to identify this MediaStream across multiple RTCPeerConnections and to
unambiguously differentiate it from a local MediaStream instance not added
to an RTCPeerConnection.

***

### \_tracks

> **\_tracks**: [`MediaStreamTrack`](MediaStreamTrack.md)[]

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:9

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:41

##### Returns

`boolean`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:40

##### Returns

`string`

***

### onaddtrack

#### Get Signature

> **get** **onaddtrack**(): `any`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:36

##### Returns

`any`

#### Set Signature

> **set** **onaddtrack**(`value`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:37

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

***

### onremovetrack

#### Get Signature

> **get** **onremovetrack**(): `any`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:38

##### Returns

`any`

#### Set Signature

> **set** **onremovetrack**(`value`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:39

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

## Methods

### addTrack()

> **addTrack**(`track`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `track` | [`MediaStreamTrack`](MediaStreamTrack.md) |

#### Returns

`void`

***

### clone()

> **clone**(): `never`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:48

#### Returns

`never`

***

### getAudioTracks()

> **getAudioTracks**(): [`MediaStreamTrack`](MediaStreamTrack.md)[]

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:46

#### Returns

[`MediaStreamTrack`](MediaStreamTrack.md)[]

***

### getTrackById()

> **getTrackById**(`trackId`): `undefined` \| [`MediaStreamTrack`](MediaStreamTrack.md)

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | `any` |

#### Returns

`undefined` \| [`MediaStreamTrack`](MediaStreamTrack.md)

***

### getTracks()

> **getTracks**(): [`MediaStreamTrack`](MediaStreamTrack.md)[]

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:44

#### Returns

[`MediaStreamTrack`](MediaStreamTrack.md)[]

***

### getVideoTracks()

> **getVideoTracks**(): [`MediaStreamTrack`](MediaStreamTrack.md)[]

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:47

#### Returns

[`MediaStreamTrack`](MediaStreamTrack.md)[]

***

### release()

> **release**(`releaseTracks?`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:50

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `releaseTracks?` | `boolean` |

#### Returns

`void`

***

### removeTrack()

> **removeTrack**(`track`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `track` | [`MediaStreamTrack`](MediaStreamTrack.md) |

#### Returns

`void`

***

### toURL()

> **toURL**(): `string`

Defined in: react-native-webrtc/lib/typescript/MediaStream.d.ts:49

#### Returns

`string`
