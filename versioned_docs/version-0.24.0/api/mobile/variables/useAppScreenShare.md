# Variable: useAppScreenShare()

> `const` **useAppScreenShare**: () => [`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

Defined in: [packages/react-native-client/src/hooks/useAppScreenShare.ts:63](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useAppScreenShare.ts#L63)

This hook can toggle client app screen sharing on/off and provides current screen share state.

It works only on iOS.

## Returns

[`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

An object with functions to manage app screen share on iOS and null on android.
