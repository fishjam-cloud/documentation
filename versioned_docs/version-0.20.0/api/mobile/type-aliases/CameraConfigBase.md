# Type Alias: CameraConfigBase

> **CameraConfigBase** = `object`

Defined in: [packages/react-native-client/src/hooks/useCamera.ts:36](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useCamera.ts#L36)

## Properties

### cameraEnabled?

> `optional` **cameraEnabled**: `boolean`

Defined in: [packages/react-native-client/src/hooks/useCamera.ts:65](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useCamera.ts#L65)

whether the camera track is initially enabled, you can toggle it on/off later with toggleCamera method

#### Default

`true`

***

### cameraId?

> `optional` **cameraId**: [`CameraId`](CameraId.md)

Defined in: [packages/react-native-client/src/hooks/useCamera.ts:71](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useCamera.ts#L71)

id of the camera to start capture with. Get available cameras with `cameras`.
You can switch the cameras later with `switchCamera` functions.

#### Default

`the first front camera`

***

### flipDimensions?

> `optional` **flipDimensions**: `boolean`

Defined in: [packages/react-native-client/src/hooks/useCamera.ts:60](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useCamera.ts#L60)

whether to flip the dimensions of the video, that is whether to film in vertical orientation.
This basically switches width with height and is only used to select closes capture format.

To record horizontal video your phone orientation must be in landscape and your app must support this orientation.

Platform specific capture formats:

#### See

 - [iOS](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format)
 - [Android](https://github.com/webrtc-sdk/webrtc/blob/cdc3bba5aa38910a55428b919ba45aceac1ad9ad/sdk/android/api/org/webrtc/CameraEnumerationAndroid.java#L50)

WebRTC device orientation handling:
 - [iOS](https://github.com/webrtc-sdk/webrtc/blob/cdc3bba5aa38910a55428b919ba45aceac1ad9ad/sdk/objc/components/capturer/RTCCameraVideoCapturer.m#L285)
 - [Android](https://github.com/pristineio/webrtc-mirror/blob/7a5bcdffaab90a05bc1146b2b1ea71c004e54d71/webrtc/sdk/android/src/java/org/webrtc/Camera2Session.java#L347)

#### Default

`true`

***

### quality?

> `optional` **quality**: [`VideoQuality`](VideoQuality.md)

Defined in: [packages/react-native-client/src/hooks/useCamera.ts:43](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useCamera.ts#L43)

resolution + aspect ratio of local video track, one of: `QVGA_169`, `VGA_169`, `QHD_169`, `HD_169`,
`FHD_169`, `QVGA_43`, `VGA_43`, `QHD_43`, `HD_43`, `FHD_43`. Note that quality might be worse than
specified due to device capabilities, internet connection etc.

#### Default

`VGA_169`
