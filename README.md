# capacitor-sim-card

A Capacitor plugin to retrieve SIM card information.

## Install

```bash
npm install capacitor-sim-card
npx cap sync
```

## API

<docgen-index>

* [`getSimCards()`](#getsimcards)
* [`echo(...)`](#echo)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSimCards()

```typescript
getSimCards() => Promise<{ simCards: SimCardInfo[]; }>
```

**Returns:** <code>Promise&lt;{ simCards: SimCardInfo[]; }&gt;</code>

--------------------


### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### Interfaces


#### SimCardInfo

| Prop                    | Type                 | Description                                                                                       |
| ----------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| **`number`**            | <code>string</code>  | Android only: Phone number.                                                                       |
| **`allowsVOIP`**        | <code>boolean</code> | iOS only: If this carrier allows VOIP calls to be made on its network.                            |
| **`carrierName`**       | <code>string</code>  | The name of the cellular service provider.                                                        |
| **`isoCountryCode`**    | <code>string</code>  | Country code for the cellular service provider, represented as an ISO 3166-1 country code string. |
| **`mobileCountryCode`** | <code>string</code>  | Mobile country code (MCC) for the cellular service provider, in its numeric representation.       |
| **`mobileNetworkCode`** | <code>string</code>  | Mobile network code (MNC) for the cellular service provider, in its numeric representation.       |

</docgen-api>
