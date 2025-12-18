# Function: FishjamRoom()

> **FishjamRoom**(`props`): `Element`

Defined in: [packages/react-native-client/src/components/FishjamRoom/index.tsx:39](https://github.com/fishjam-cloud/mobile-client-sdk/blob/47936f2f7cc7d0d6100314ad92f0ac25bd097980/packages/react-native-client/src/components/FishjamRoom/index.tsx#L39)

Simple component that enables your camera and show all tracks

Example usage:
```tsx
import { FishjamRoom } from '@fishjam-cloud/react-native-client';
import React from 'react';

const FISHJAM_ID = 'your-fishjam_id';
const PEER_TOKEN = 'your-peer-token';

<FishjamRoom
   fishjamId={FISHJAM_ID}
   peerToken={PEER_TOKEN}
/>
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FishjamRoomProps`](../type-aliases/FishjamRoomProps.md) |  |

## Returns

`Element`
