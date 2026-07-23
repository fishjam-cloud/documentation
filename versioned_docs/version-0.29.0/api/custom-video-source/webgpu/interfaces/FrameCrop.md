# Interface: FrameCrop

Defined in: [src/webgpu/cropUtilities.ts:30](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L30)

A center-crop of a source frame plus a UV-space orientation transform, in source pixels.
Produce one with [computeAspectFillCrop](../functions/computeAspectFillCrop.md) or [computeSquareCrop](../functions/computeSquareCrop.md).

## Properties

### cropOriginX

> **cropOriginX**: `number`

Defined in: [src/webgpu/cropUtilities.ts:33](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L33)

***

### cropOriginY

> **cropOriginY**: `number`

Defined in: [src/webgpu/cropUtilities.ts:34](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L34)

***

### cropSizeX

> **cropSizeX**: `number`

Defined in: [src/webgpu/cropUtilities.ts:35](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L35)

***

### cropSizeY

> **cropSizeY**: `number`

Defined in: [src/webgpu/cropUtilities.ts:36](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L36)

***

### sourceHeight

> **sourceHeight**: `number`

Defined in: [src/webgpu/cropUtilities.ts:32](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L32)

***

### sourceWidth

> **sourceWidth**: `number`

Defined in: [src/webgpu/cropUtilities.ts:31](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L31)

***

### uv00

> **uv00**: `number`

Defined in: [src/webgpu/cropUtilities.ts:38](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L38)

uvTransform matrix scalars in (m00, m01, m10, m11) order; identity when omitted at compute time.

***

### uv01

> **uv01**: `number`

Defined in: [src/webgpu/cropUtilities.ts:39](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L39)

***

### uv10

> **uv10**: `number`

Defined in: [src/webgpu/cropUtilities.ts:40](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L40)

***

### uv11

> **uv11**: `number`

Defined in: [src/webgpu/cropUtilities.ts:41](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L41)
