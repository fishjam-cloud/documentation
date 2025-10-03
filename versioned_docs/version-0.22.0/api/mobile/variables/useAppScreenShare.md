# Variable: useAppScreenShare()

> `const` **useAppScreenShare**: () => [`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

Defined in: [packages/react-native-client/src/hooks/useAppScreenShare.ts:80](https://github.com/fishjam-cloud/mobile-client-sdk/blob/daab5af2df6e35bf6eb77e09f0242e614359c1ec/packages/react-native-client/src/hooks/useAppScreenShare.ts#L80)

This hook can toggle client app screen sharing on/off and provides current screen share state.

It works only on iOS.

## Returns

[`AppScreenShareData`](../type-aliases/AppScreenShareData.md)

An object with functions to manage app screen share on iOS and null on android.
