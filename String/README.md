# 문자열

자바스크립트에는 한 글자만 저장할 수 있는 별도의 자료형이 없습니다.

텍스트 형식의 데이터는 길이에 상관없이 문자열 형태로 저장됩니다.

자바스크립트에서 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF-16 형식을 따릅니다.

<br/>

## 따옴표

문자열은 작은따옴표, 큰따옴표, 백틱으로 감쌀 수 있습니다.

```js
console.log('hello');  // 작음따옴표
console.log("hello");  // 큰따옴표

console.log(`hello ${1 + 2}`);  // 백틱
```

백틱은 표현식을 `${}`로 감쌀 수 있으며 이 방식을 **템플릿 리터럴**이라고 합니다.

<br/>

백틱은 따옴표와 달리 코드에서 문자열을 여러 줄에 걸쳐 작성할 수 있습니다.

```js
let hello = `
  hello
  world
`;
```

<br/>

## 특수 기호

따옴표도 특수기호 `\n`을 사용하면 여러 줄 문자열을 만들 수 있습니다.

```js
let hello = "hello\nworld";
```

### 유니코드

```js
// UTF-16 인코딩 규칙을 사용하는 16진수 코드 XXXX로 표현한 유니코드 기호
console.log( "\u00A9" ); // ©

// UTF-32로 표현한 유니코드 기호
console.log( "\u{20331}" ); // 佫
console.log( "\u{1F60D}" ); // 😍
```

### 따옴표

문자열 내에 따옴표를 넣을 때 `\`를 활용합니다.

```js
console.log('I\'m Iron man.');  // I'm Iron man.
```

### 역슬래시

`\`를 문자열 내에 넣을 때에는 두 개를 붙여서 사용합니다.

```js
console.log("hello\\");  // hello\
```

<br/>

## 문자열의 길이

`length` 속성에 문자열의 길이가 저장됩니다.

```js
console.log('junha'.length);  // 5
```

다른 언어와 달리 자바스크립트에서 `length`는 함수가 아니라는 것에 주의해야 합니다.

<br/>

## 특정 글자에 접근하기

대괄호를 이용하거나 `charAt`라는 메서드를 사용합니다.

```js
const str = "cute cat";

console.log(str[0]);  // c
console.log(str.charAt(0));  // c
console.log(str[str.length - 1]);  // t
```

<br/>

접근하려는 위치에 글자가 없는 경우 `[]`는 `undefined`를, `charAt`은 빈 문자열을 반환합니다.

```js
const str = "cat";

console.log(str[100]);  // undefined
console.log(str.charAt(1000)); // '' (빈 문자열)
```

<br/>

## 불변성

문자열은 수정할 수 없습니다.

```js
const str = "boat";

str[0] = "g";  // 에러
```

<br/>

따라서 수정할 때는 새로운 문자열을 하나 만들고 다시 할당하는 방법을 사용해야 합니다.

```js
let str = 'Hi';

str = 'h' + str[1];
console.log(str);  // hi
```

<br/>

## 참고 문서

- https://ko.javascript.info/string#ref-374
