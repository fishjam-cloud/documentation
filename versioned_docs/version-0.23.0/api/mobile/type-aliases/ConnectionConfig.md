# Type Alias: ConnectionConfig

> **ConnectionConfig** = `object`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:63](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useConnection.ts#L63)

## Properties

### reconnectConfig?

> `optional` **reconnectConfig**: `object`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:72](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useConnection.ts#L72)

Configuration for automatic reconnection
sdk uses a linear backoff algorithm, that is the formula
for the delay of the nth attempt is
n * delayMs + initialDelayMs

Pass 0 for maxAttempts to disable automatic reconnection

| Name | Type |
| ------ | ------ |
| `delayMs?` | `number` |
| `initialDelayMs?` | `number` |
| `maxAttempts?` | `number` |
