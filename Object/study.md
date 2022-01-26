# Object

## 객체란?

자바스크립트의 자료형 중 하나로, 키와 값 구조로 다양한 데이터를 담을 수 있는 자료형이다.

객체는 중괄호 {...} 를 통해 만들 수 있으며, 이 안에 '키(key) : 값(value)' 형태로 구성된 프로퍼티를 쉼표로 구분하여 넣을 수 있다. 

이때 키는 문자형만이 허용되고, 값에는 모든 자료형이 허용된다. 

## 객체의 사용

```jsx
let student1 = new Object();
let student2 = {};
```

객체는 다음과 같이 두가지 방법으로 생성할 수 있으며, 주로 아래의 방법을 사용한다.

```jsx
let student = {
    name: "jewon", // 키 : name, 값 : "jewon"
    age: 18, // 키 : age, 값 : 18
}
```

키와 값은 콜론을 기준으로 각각 좌우에 위치하며, 이 둘을 프로퍼티라고 부른다. 

```jsx
console.log(student.name)
console.log(student.age)
```

점 표기법을 통해 프로퍼티의 값에 접근할 수 있다. 

```jsx
student.name = "hyungjin"
student.isAlive = "false"
delete student.isAlive
```

기존 프로퍼티를 점 표기법을 이용하여 수정할 수 있으며, 새로운 프로퍼티를 추가해 줄 수 있다.

delete 연산자로 프로퍼티를 삭제할 수 있다. 

## 상수 객체

객체를 상수로 정의했을 때에도, 프로퍼티를 변경할 수 있다. const 로 정의된 객체는 user=... 처럼 객체 전체에 접근하려고 할 때에만 오류를 발생시키고, 프로퍼티 수정, 생성, 삭제 등의 동작은 정상적으로 실행 가능하다.

```jsx
const user = {
  name: "John"
};

user.name = "Pete"; // 수정 가능
user.age = 18 // 생성 가능

console.log(user.age)// 18

delete user.age // 삭제 가능
```

## 프로퍼티의 이름

### 1. 프로퍼티 이름의 형변환

프로퍼티의 이름, 즉 키에는 문자형만이 허용되지만, 다른 형태의 값이 와도 자동으로 형을 변환한다.

특히 변수에 예약어를 사용할 수 없는 것과 대비되게 객체에서는 예약어를 키로 사용할 수 있다. 

단 예상치 못한 에러가 발생할 위험이 있으므로 예약어 사용은 지양하는 것이 좋다.

```jsx 
let obj = {
  for: 1,
  let: 2,
  return: 3
};

console.log( obj.for + obj.let + obj.return );  // 6
```

숫자형으로 프로퍼티의 이름을 설정할 경우 자동으로 문자형으로 형변환되며, 문자형으로 접근하는 것과 숫자형으로 접근하는 것 모두 동일한 코드로 이해된다.

```jsx
let obj = {
  0: "test" // "0": "test"와 동일
};

console.log( obj["0"] ); // test
console.log( obj[0] ); // test, 위와 동일한 프로퍼티를 가리킨다.
```

### 2. 프로퍼티 이름과 대괄호 표기법

프로퍼티의 이름이 공백이 있거나, $ 와 _ 을 제외한 특수문자가 있을 경우 점 표기법으로는 인식할 수 없다. 

이때 대괄호 표기법으로 표현해야 자바스크립트가 인식할 수 있다.

대괄호 표기법은 어떤 문자열이든지 상관없이 동작한다.

```jsx
let obj = {};

obj["hello world"] = true;

console.log(obj["hello world"]);
```

추가로, 대괄호 표기법은 특정 문자열을 먼저 변수에 받아 이 변수를 사용하여 프로퍼티에 접근하는 가능하다.

```jsx 
let key = "hello world"

obj[key] = true;
```

위와 같은 방식은 점 표기법에서는 불가능하다. 

## 참고 문서

- https://ko.javascript.info/object#ref-807