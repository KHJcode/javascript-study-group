# 숫자형

모던 자바스크립트는 숫자를 나타내는 두 가지 자료형을 지원합니다.

- `배정밀도 부동소수점 숫자`로 알려진 64비트 형식의 [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754-2008_revision)에 저장됩니다.
- `BigInt`: 일반적인 숫자는 2<sup>53</sup> 이상이거나 -2<sup>53</sup> 이하일 수 없다는 제약 때문에 새로운 자료형이 만들어졌습니다. 이는 특별한 경우에만 사용되므로 다른 글에서 다루겠습니다.

<br/>

## 숫자를 입력하는 방법

10억을 입력하는 다양한 방법을 알아봅시다.

아래처럼 직접 입력하는 방법은 가장 분명하지만 0을 많이 입력하는 것이 귀찮습니다.

```js
let billion = 1000000000;
```

<br/>

따라서 숫자 옆에 `e`를 붙이고 그 옆에 0의 개수를 붙이면 숫자를 줄일 수 있습니다.

```js
let billion = 1e9;  // 10억

console.log(1.7e9);  // 17억 (1700000000)
```

즉, `e`를 기준으로 좌측의 수에 우측의 수만큼의 10의 거듭제곱을 곱하는 효과가 있습니다.

<br/>

만약 `e`의 우측에 음수가 있다면 그 절대값 만큼 10을 거듭제곱한 수로 나누는 것을 의미합니다.

```js
console.log(1e-6 === 0.000001)  // true
```

<br/>

### 2진수, 8진수, 16진수

2진수는 `0b`, 8진수는 `0o`, 16진수는 `0x`를 사용하여 나타낼 수 있습니다.

```js
console.log(0b11111111);  // 255의 2진수
console.log(0o377);  // 255의 8진수
console.log(0xff);  // 255의 16진수
```

<br/>

## 어림수 구하기

- **Math.floor:**  소숫점 첫째 자리에서 내림 (버림)
- **Math.ceil:** 소숫점 첫째 자리에서 올림
- **Math.round:**  소숫점 첫째 자리에서 반올림
- **Math.trunc:** 소수부를 무시. (3.2 → 3)

### 소숫점 n번째 수를 기준으로 구하기

`1.2345`를 소수점 두 번째 자릿수까지만 남겨 `1.23`을 만들고 싶은 경우, 아래처럼 10<sup>2</sup>를 곱한 후에 함수를 호출하고 처음 곱한 수를 다시 나누면 됩니다.

```js
let num = 1.23456;

console.log(Math.floor(num * 100) / 100 );  // 1.23456 -> 123.456 -> 123 -> 1.23
```

<br/>

## 부정확한 계산

숫자는 내부적으로 64비트 형식 [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754-2008_revision)으로 표현되기 때문에 숫자를 저장하려면 정확히 64비트가 필요합니다.

그러나 숫자가 너무 커질 경우 64비트 공간이 넘쳐서 **Infinity**로 처리됩니다.

```js
console.log(1e500);  // Infinity
```

### 정밀도 손실

아래 코드처럼 부정확한 연산이 발생합니다!

```js
console.log(0.1 + 0.2);  // 0.30000000000000004
```

<br/>

**Q. 왜 이런 일이 발생할까요?**

숫자는 이진수로 변환되어 연속된 메모리 공간에 저장됩니다.
그러나 `0.1`, `0,2` 같은 분수는 이진법으로 표현하면 무한 소수가 되기 때문에 이를 정확하게 저장하는 방법은 없습니다.

따라서 `IEEE-754` 에서는 가능한 가장 가까운 숫자로 반올림하는 방법을 이용하여 이런 문제를 해결합니다. 그러나 이 방법도 아주 작은 손실이 발생합니다.

```js
console.log(0.1.toFixed(20));  // 0.10000000000000000555
```

물론 동일한 숫자 형식을 사용하는 `PHP, Java, C, Ruby` 등의 언어에서도 같은 이슈가 있습니다.

<br/>

이를 해결하기 위한 가장 신뢰할만한 방법은 `toFixed` 메서드를 사용하여 어림수를 만드는 것입니다.

```js
const sum = 0.1 + 0.2;
console.log(sum.toFixed(2));  // 0.3
```

<br/>

## NaN, Infinity

**NaN**: 에러를 나타내는 값.

`NaN`은 `NaN` 자기 자신을 포함하여 그 어떤 값과도 같지 않습니다.

```js
console.log(NaN === NaN);  // false
```

`isNaN` 메소드는 인수를 숫자로 변환한 다음 `NaN` 인지 판단합니다.

```js
console.log(isNaN(NaN));  // true
console.log(isNaN("str"));  // true
```

<br/>

**Infinity, -Infinity**: 그 어떤 숫자보다 큰 혹은 작은 특수 숫자 값.

`isFinite` 메소드는 인수를 숫자로 변환하고 변환한 숫자가 `NaN / (-)Infinity`가 아닌 일반 숫자인 경우 `true` 를 반환합니다.

```js
console.log(isFinite("15"));  // true
console.log(isFinite("str"));  // false
console.log(isFinite(Infinity));  // false
```

<br/>

## parseInt, parseFloat

**숫자형 변환**

```js
console.log(Number("100px"));  // NaN
console.log(+"100px");  // NaN
console.log(parseInt("100px"));  // 100
```

**실수형 변환**

두 번째 점에서 숫자 읽기를 멈춥니다.

```js
console.log(parseFloat('12.3.4'));  // 12.3
```

<br/>

## 참고 문서

- https://ko.javascript.info/number

