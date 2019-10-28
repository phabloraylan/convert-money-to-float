# convert-money-to-float
Convert money to float.

## Install


```sh
npm install convert-money-to-float
```

## Usage

```javascript
import moneyToFloat from 'convert-money-to-float';

moneyToFloat("R$ 1.000,00")
// ---> 1000.00

moneyToFloat("US$ 1,000.00")
// ---> 1000.00

//No coins with symbols do not yet work in the end
```
