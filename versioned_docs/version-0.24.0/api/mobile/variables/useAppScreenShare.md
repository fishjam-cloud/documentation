# Variable: useAppScreenShare()

> `const` **useAppScreenShare**: () => [`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

Defined in: [packages/react-native-client/src/hooks/useAppScreenShare.ts:63](https://github.com/fishjam-cloud/mobile-client-sdk/blob/47936f2f7cc7d0d6100314ad92f0ac25bd097980/packages/react-native-client/src/hooks/useAppScreenShare.ts#L63)

This hook can toggle client app screen sharing on/off and provides current screen share state.

It works only on iOS.

## Returns

[`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

An object with functions to manage app screen share on iOS and null on android.
