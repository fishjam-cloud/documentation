# Function: getWebGpuRuntime()

> **getWebGpuRuntime**(): `object`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/webGpuRuntime.d.ts:13

Returns the react-native-webgpu runtime singleton, self-healing when the `RNWebGPU` global is
missing on the calling runtime. The library binds the global once at module load, but that
binding can be absent after a crash-recovery runtime reload or an install-ordering flake;
`WebGPUModule.install()` binds it to the calling runtime and is safe to repeat.

## Returns

`object`

## Throws

When the runtime cannot be installed (react-native-webgpu missing or its native module
not linked) — returning the still-undefined global would only defer the failure to an opaque
per-frame TypeError.
