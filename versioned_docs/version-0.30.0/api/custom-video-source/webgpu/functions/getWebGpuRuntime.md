# Function: getWebGpuRuntime()

> **getWebGpuRuntime**(): `object`

Defined in: [src/webgpu/webGpuRuntime.ts:16](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/webGpuRuntime.ts#L16)

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
