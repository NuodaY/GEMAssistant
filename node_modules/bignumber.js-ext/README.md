# bignumber-ext

BigNumber.js的扩展，精简了一些写法

用法如下:

1. 安装

```
npm install bignumber.js-ext
```

或

```
yarn add bignumber.js-ext
```

2. 引入

Nodejs环境

```
const BN = require('bignumber.js-ext')
```

浏览器环境

```
import BN from 'bignumber.js-ext';
```

3. 使用

- 加法(add)

```
BN(4).add(5).toString(10)  // 9
```

- 减法(sub)

```
BN(4).sub(5).toString(10)  // -1
```

- 乘法(mul)

```
BN(4).mul(5).toString(10)  // 20
```

- 除法(div)

```
BN(4).div(5).toString(10)  // 0.8
```

- 大于(gt)

```
BN(4).gt(5)  // false
```

- 大于或等于(gte)

```
BN(4).gte(5)  // false
BN(4).gte(4)  // true
```

- 小于(lt)

```
BN(4).lt(5)  // true
BN(4).lt(4)  // false
```

- 小于或等于(lte)

```
BN(4).lte(5)  // true
BN(4).lte(4)  // true
```

- 取反(neg)

```
BN(4).sub(5).toString(10)  // -1
BN(4).sub(5).neg().toString(10)  // 1
```

- 取绝对值(abs)

```
BN(4).sub(5).toString(10)  // -1
BN(4).sub(5).abs().toString(10)  // 1
```

- 取整(int)

```
BN(12.5).div(5).toString(10)  // 2.5
BN(12.5).div(5).int().toString(10)  // 3

// 向下取整
BN(12.5).div(5).int(BN.ROUND_DOWN).toString(10)  // 2
// 向上取整
BN(12.5).div(5).int(BN.ROUND_UP).toString(10)    // 3
```

- 是否为NaN(isNaN)  

```
BN(NaN).isNaN()  // true
```

- 是否为0(isZero)  

```
BN(0).isZero()  // true
```

- 指数运算(pow)  

```
// 2 ** 3 = 8
BN(2).pow(3).toString(10)  // 8
```

- 截取精度(toFixed) 注: 会四舍五入  

```
BN(12.58).div(5).toString(10)  // 2.516
BN(12.58).div(5).toFixed(1).toString(10)  // 2.5
BN(12.58).div(5).toFixed(2).toString(10)  // 2.52
```

- 格式化(fmt)

```
BN('123456789.123456789').fmt()  // 123,456,789.123456789
BN('123456789.123456789').fmt(1) // 123,456,789.1
```

## 舍入模式

```
//取值范围：
BN.ROUND_UP = 0;         //远离0方向舍入
BN.ROUND_DOWN = 1;       //向0方向舍入
BN.ROUND_CEIL = 2;       //向正无限大舍入
BN.ROUND_FLOOR = 3;      //向负无限大舍入
BN.ROUND_HALF_UP = 4;    //四舍五入：向最接近的数字方向舍入，如果与两个相邻数字的距离相等，则向上舍入。
BN.ROUND_HALF_DOWN = 5;  //向最接近的数字方向舍入，如果与两个相邻数字的距离相等，则向下舍入。
BN.ROUND_HALF_EVEN = 6;  //向最接近数字方向舍入，如果与两个相邻数字的距离相等，则向相邻的偶数舍入
BN.ROUND_HALF_CEIL = 7;
BN.ROUND_HALF_FLOOR = 8;
```


更多用法参考: [bignumber.js](https://github.com/MikeMcl/bignumber.js/)

推荐库

- [bignumber.js](https://github.com/MikeMcl/bignumber.js/)
- [jsbi](https://github.com/GoogleChromeLabs/jsbi)
- [bn.js](https://github.com/indutny/bn.js/)