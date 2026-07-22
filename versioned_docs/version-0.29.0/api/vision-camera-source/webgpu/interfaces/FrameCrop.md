# Interface: FrameCrop

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:27

A center-crop of a source frame plus a UV-space orientation transform, in source pixels.
Produce one with [computeAspectFillCrop](../functions/computeAspectFillCrop.md) or [computeSquareCrop](../functions/computeSquareCrop.md).

## Properties

### cropOriginX

> **cropOriginX**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:30

***

### cropOriginY

> **cropOriginY**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:31

***

### cropSizeX

> **cropSizeX**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:32

***

### cropSizeY

> **cropSizeY**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:33

***

### sourceHeight

> **sourceHeight**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:29

***

### sourceWidth

> **sourceWidth**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:28

***

### uv00

> **uv00**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:35

uvTransform matrix scalars in (m00, m01, m10, m11) order; identity when omitted at compute time.

***

### uv01

> **uv01**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:36

***

### uv10

> **uv10**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:37

***

### uv11

> **uv11**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:38
