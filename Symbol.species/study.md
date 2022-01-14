# Symbol.species

이 속성은 **생성자** 함수의 파생 객체를 만드는 것에 사용하는 함수 값 속성을 지정합니다.

<br/>

# 어디에 쓰는데?

상속 받은 클래스에서 부모 객체를 반환할 수 있습니다.

아래 코드처럼 `map()` 과 같은 메서드에서는 기본 값으로 파생된 클래스(`Array1`)를 가져오지만 이를 변형해서 부모 객체(`Array`)를 반환하고 싶을 때 사용할 수 있습니다.

```js
class Array1 extends Array {
  static get [Symbol.species]() { return Array; }
}

const a = new Array1(1, 2, 3);
const mapped = a.map(x => x * x);

console.log(mapped instanceof Array1);
console.log(mapped instanceof Array);
```

실행 결과
```
false
true
```

<br/>

# 뭐가 좋은데?

자바스크립트 엔진에서는 더 빠른 속도를 위해 C++ 과 같은 호스트 언어로 메소드(사용자가 정의한 것이 아닌 내장된 것)를 구현하기도 합니다.

만약, 사용자가 내장된 객체를 상속 받아 재정의할 때 `Symbol.species`를 사용하여 타 메소드에서 부모 객체에 접근할 수 있게 한다면 이론적으로 자바스크립트가 아닌 호스트 언어의 속도를 얻을 수 있습니다.

<br/>

# 참고 문서

- https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies
- https://devdocs.io/javascript/global_objects/array/@@species
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species
