# Interface: CameraFrame

Defined in: [index.ts:28](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L28)

A camera frame handed to a [CameraFrameCallback](../type-aliases/CameraFrameCallback.md). The native buffer is
valid only until the callback returns, or until `release()` is called.

## Properties

### height

> `readonly` **height**: `number`

Defined in: [index.ts:32](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L32)

***

### isFrontCamera

> `readonly` **isFrontCamera**: `boolean`

Defined in: [index.ts:34](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L34)

***

### isReleased

> `readonly` **isReleased**: `boolean`

Defined in: [index.ts:37](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L37)

***

### nativeBuffer

> `readonly` **nativeBuffer**: `bigint`

Defined in: [index.ts:30](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L30)

`CVPixelBufferRef` on iOS, `AHardwareBuffer*` on Android, as a pointer value.

***

### pixelFormat

> `readonly` **pixelFormat**: [`CameraFramePixelFormat`](../type-aliases/CameraFramePixelFormat.md)

Defined in: [index.ts:36](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L36)

***

### rotationDegrees

> `readonly` **rotationDegrees**: `number`

Defined in: [index.ts:33](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L33)

***

### timestampNanoseconds

> `readonly` **timestampNanoseconds**: `number`

Defined in: [index.ts:35](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L35)

***

### width

> `readonly` **width**: `number`

Defined in: [index.ts:31](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L31)

## Methods

### release()

> **release**(): `void`

Defined in: [index.ts:39](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L39)

Hands the buffer back to the camera early. Safe to repeat.

#### Returns

`void`
