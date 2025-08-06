# Type Alias: ConnectionConfig

> **ConnectionConfig** = `object`

Defined in: [packages/react-native-client/src/common/client.ts:4](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/common/client.ts#L4)

## Properties

### reconnectConfig?

> `optional` **reconnectConfig**: `object`

Defined in: [packages/react-native-client/src/common/client.ts:13](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/common/client.ts#L13)

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
