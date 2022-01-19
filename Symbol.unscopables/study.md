# Symbol.unscopables

이 속성은 어떤 객체의 속성 값이 환경 바인딩과 함께 지역 변수로 노출되지 않도록 정의할 수 있습니다.

<br/>

## 어디에 쓰는데?

아래 코드처럼 `with` 환경 바인딩에서 객체의 속성을 제외시킬 수 있습니다.

```js
let egg = {
  yellow: '노른 자',
  white: '흰 자',
};

egg[Symbol.unscopables] = {
  yellow: false,
  white: true,
};

with (egg) {
  console.log(yellow);
  console.log(white);
}
```

실행 결과
```
노른 자
ReferenceError: white is not defined
```

그러나 Strict 모드에서는 `with` 를 사용할 수 없기 때문에 `Symbol.unscopables` 도 필요하지 않을 수 있습니다.

<br/>

## 뭐가 좋은데?

권장하지 않기 때문에 사용하지 않는 것이 좋습니다.

<br/>

## 참고 문서

- https://www.geeksforgeeks.org/javascript-symbol-unscopables-properties
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/with
