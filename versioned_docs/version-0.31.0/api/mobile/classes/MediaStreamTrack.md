# Class: MediaStreamTrack

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:27

## Extends

- `unknown`\<`MediaStreamTrackEventMap`\>

## Constructors

### Constructor

> **new MediaStreamTrack**(`info`): `MediaStreamTrack`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | `MediaStreamTrackInfo` |

#### Returns

`MediaStreamTrack`

#### Overrides

`EventTarget<MediaStreamTrackEventMap>.constructor`

## Properties

### \_constraints

> **\_constraints**: `MediaTrackConstraints`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:28

***

### \_enabled

> **\_enabled**: `boolean`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:29

***

### \_muted

> **\_muted**: `boolean`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:31

***

### \_peerConnectionId

> **\_peerConnectionId**: `number`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:32

***

### \_readyState

> **\_readyState**: `MediaStreamTrackState`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:33

***

### \_settings

> **\_settings**: `MediaTrackSettings`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:30

***

### id

> `readonly` **id**: `string`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:34

***

### kind

> `readonly` **kind**: `string`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:35

***

### label

> `readonly` **label**: `string`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:36

***

### remote

> `readonly` **remote**: `boolean`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:37

## Accessors

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:45

##### Returns

`boolean`

#### Set Signature

> **set** **enabled**(`enabled`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:46

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

##### Returns

`void`

***

### muted

#### Get Signature

> **get** **muted**(): `boolean`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:47

##### Returns

`boolean`

***

### onended

#### Get Signature

> **get** **onended**(): `any`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:39

##### Returns

`any`

#### Set Signature

> **set** **onended**(`value`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:40

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

***

### onmute

#### Get Signature

> **get** **onmute**(): `any`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:41

##### Returns

`any`

#### Set Signature

> **set** **onmute**(`value`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:42

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

***

### onunmute

#### Get Signature

> **get** **onunmute**(): `any`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:43

##### Returns

`any`

#### Set Signature

> **set** **onunmute**(`value`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:44

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

***

### readyState

#### Get Signature

> **get** **readyState**(): `string`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:48

##### Returns

`string`

## Methods

### \_registerEvents()

> **\_registerEvents**(): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:90

#### Returns

`void`

***

### \_setMutedInternal()

> **\_setMutedInternal**(`muted`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:68

Internal function which is used to set the muted state on remote tracks and
emit the mute / unmute event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `muted` | `boolean` | Whether the track should be marked as muted / unmuted. |

#### Returns

`void`

***

### \_setVideoEffect()

> **\_setVideoEffect**(`name`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

***

### \_setVideoEffects()

> **\_setVideoEffects**(`names`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `names` | `string`[] |

#### Returns

`void`

***

### \_setVolume()

> **\_setVolume**(`volume`): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:74

Custom API for setting the volume on an individual audio track.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `volume` | `number` | a gain value in the range of 0-10. defaults to 1.0 |

#### Returns

`void`

***

### ~~\_switchCamera()~~

> **\_switchCamera**(): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:59

Private / custom API for switching the cameras on the fly, without the
need for adding / removing tracks or doing any SDP renegotiation.

This is how the reference application (AppRTCMobile) implements camera
switching.

#### Returns

`void`

#### Deprecated

Use applyConstraints instead.

***

### applyConstraints()

> **applyConstraints**(`constraints?`): `Promise`\<`void`\>

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:85

Applies a new set of constraints to the track.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints?` | `MediaTrackConstraints` | An object listing the constraints to apply to the track's constrainable properties; any existing constraints are replaced with the new values specified, and any constrainable properties not included are restored to their default constraints. If this parameter is omitted, all currently set custom constraints are cleared. |

#### Returns

`Promise`\<`void`\>

***

### clone()

> **clone**(): `never`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:86

#### Returns

`never`

***

### getCapabilities()

> **getCapabilities**(): `never`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:87

#### Returns

`never`

***

### getConstraints()

> **getConstraints**(): `MediaTrackConstraints`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:88

#### Returns

`MediaTrackConstraints`

***

### getSettings()

> **getSettings**(): `MediaTrackSettings`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:89

#### Returns

`MediaTrackSettings`

***

### release()

> **release**(): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:91

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: react-native-webrtc/lib/typescript/MediaStreamTrack.d.ts:49

#### Returns

`void`
