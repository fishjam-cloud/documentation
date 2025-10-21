# Variable: useAppScreenShare()

> `const` **useAppScreenShare**: () => [`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

Defined in: [packages/react-native-client/src/hooks/useAppScreenShare.ts:80](https://github.com/fishjam-cloud/mobile-client-sdk/blob/76d05a6e62b137b02043a8a00ca762ff218a64b5/packages/react-native-client/src/hooks/useAppScreenShare.ts#L80)

This hook can toggle client app screen sharing on/off and provides current screen share state.

It works only on iOS.

## Returns

[`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

An object with functions to manage app screen share on iOS and null on android.
