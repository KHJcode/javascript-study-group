# 참조에 의한 객체 복사

## 객체와 원시값의 복사방식

객체와 원시값의 근본적인 차이중 하나는 복사하는 방식의 차이이다.

원시값은 값 그대로 저장과 할당을 거치지만, 객체는 참조에 의해 저장과 할당이 된다. 

```jsx
let message = "Hello!";
let phrase = message
```

다음 코드를 실행할 시 phrase 변수에는 "Hello" 라는 문자열 그 자체가 들어가 있다.

```jsx
let user = {
  name: "John"
};

let admin = user;
```

그러나 객체에서는 다음 코드를 통해 복사를 하면, admin 변수에 값 자체가 들어가는 것이 아닌, user 객체의 메모리 주소, 즉 참조값이 저장된다. 

따라서 객체를 복사한다고 해서 독립적인 객체가 만들어지는 것이 아닌 하나의 객체를 참조하게 된다. 

```jsx
admin.name = 'Pete'; // admin 의 참조 값에 의해 변경됨.

alert(user.name); // Pete 출력, user 를 통해 접근함.

// 하나의 객체를 두가지 방법으로 참조함.
```

## 참조에 의한 비교

객체는 참조에 의해 복사가 되므로, == 연산과 === 연산에서 모두 동일하게 동작한다. 

참고) === 은 값 뿐만 아니라 타입까지 비교함.

```jsx
let JSSu = {};
let hj = JSSu;

alert(JSSu == hj); // true
alert(JSSu === hj); // true
```

## 객체의 복사, 병합과 Object.assign

그렇다면 객체를 복사가 아닌 복제, 값은 모두 같지만 독립된 두 개의 객체를 만드려고 할 때는 어떻게 해야 할까?

자바스크립트는 객체 복제 내장 메서드를 제공하지 않기 때문에 for문을 통해 객체를 순회하며 프로퍼티를 하나하나 복사해야 한다. 

```jsx
let jw = {
    age: 18,
    height: 179
}

let cloneJw= {}; 

for (let key in user) {
  cloneJw[key] = jw[key];
}

cloneJw.height = 200 
alert(jw.height) // 179, 변하지 않는다. 
```

Object.assign 을 통해서도 복제할 수 있다. 

```jsx
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user); // 첫번째 매개변수로 받은 객체에 두번째로 받은 객체를 복사한다. 두번재 매개변수에는 여러개의 객체가 들어올 수 있다. 
```

## 중첩 객체 복사

객체의 모든 포로퍼티가 원시값일 때는 복제가 가능하다. 하지만 객체의 프로퍼티가 또다른 객체이면, 해당 객체는 복제가 되지 않고, 참조값이 되어 공유하게 될 것이다. 

이 문제를 해결하려면 부모 객체의 프로퍼티를 검사하면서 값이 객체인 경우 그 객체의 구조 또한 복사해주는 반복문을 사용해야 한다. 

이것을 깊은 복사라고 하는데, 자바스크립트 라이브러리 lodash의 메서드인 _.cloneDeep(obj)를 사용하면 알고리즘을 직접 구현할 필요없이 깊은 복사를 처리할 수 있다. 

## 참고 문서

- https://ko.javascript.info/object-copy#ref-1206
- https://lodash.com/docs/4.17.15#cloneDeep