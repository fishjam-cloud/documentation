# Function: FishjamRoom()

> **FishjamRoom**(`props`): `Element`

Defined in: [packages/react-native-client/src/components/FishjamRoom/index.tsx:39](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/components/FishjamRoom/index.tsx#L39)

Simple component that enables your camera and show all tracks

Example usage:
```tsx
import { FishjamRoom } from '@fishjam-cloud/react-native-client';
import React from 'react';

const FISHJAM_URL = 'https://fishjam.io/your_fishjam';
const PEER_TOKEN = 'your-peer-token';

<FishjamRoom
   fishjamUrl={FISHJAM_URL}
   peerToken={PEER_TOKEN}
/>
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FishjamRoomProps`](../type-aliases/FishjamRoomProps.md) |  |

## Returns

`Element`
