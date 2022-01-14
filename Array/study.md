# Array

## 배열 만들기

대괄호 안에 요소를 쉼표로 구분해 쓴다.

```jsx
// 변수, 상수  = ['요소1', '요소2']
let books = ['Harry Potter', 'Node.js 교과서']
```

인덱스를 통해 접근할 수 있다. 

```jsx
books[0] // 'Harry Potter'
books[books.length - 1] // 'Node.js 교과서'
```

## 배열 순회하기

arr.forEach() 메소드로 배열을 순회하며 매개변수로 받은 콜백함수를 실행한다. 

기본적인 매개변수는 다음과 같이 아이템, 인덱스, 배열 세 개이다. 

```jsx
books.forEach((items, index, array)=>{
	console.log(`${items}은 내가 읽은 책이다.`)
}

```

## 요소 추가, 제거하기

### 1. 마지막 요소 추가, 제거하기

```jsx
let lastElemAdded = books.push('시발점') // 요소 맨 뒤에 추가
let lastElemRemoved = books.pop() // 맨 뒤 요소 제거
```

### 2. 처음 요소 추가, 제거하기

```jsx
let firstElemRemoved = books.shift() // 맨 앞 요소 제거
let firstElemAdded = books.unshift('맨발의 청춘') // 맨 앞에 요소에 추가
```

## 요소 인덱스 반환

첫 번째 매개변수를 두 번째 매개변수로 받은 위치부터 탐색하여 있다면 인덱스를 반환하고, 없다면 -1을 반환한다. 

```jsx
books.indexOf('Harry Potter') // 0
books.indexOF('김형진, 그는 누구인가') // -1
```

## 범위 내의 요소 삭제하기

첫번째 매개변수로 시작 위치 인덱스를 받고, 두 번째로 삭제할 요소의 개수를 받는다.

세번째 매개변수로 새로 추가할 배열을 받을 수 있다.

기존 배열이 변하지 않으며, 새로운 배열을 반환한다.

```jsx
let newBooks = books.splice(1, 1) // 1번 인덱스에서 1개를 삭제한다.
let newBooks2 = books.splice(2, 3, 5, 4) // 2번 인덱스에서 요소 3개를 삭제하고 5, 4를 추가한다.
```

## 배열 복사하기

```jsx
let copyedBooks = [...books]
```

## 배열의 요소 접근하기

자바스크립트의 배열은 zero-indexed 이기 때문에 시작점은 0, 끝점은 배열의 길이에서 1을 빼준 값이 된다. 

배열의 요소들은 객체의 속성이지만 다음과 같은 방법으로는 접근할 수 없다. 

```jsx
let arr = [1, 2, 3, 4]
arr.0 // syntax error
```

그 이유는 자바스크립트에서 숫자로 시작하는 값으로 객체(배열도 일종의 객체)에 접근할 경우 점 표기법은 사용할 수 없고, 대괄호 표기법만이 유효하기 때문이다.

```jsx
let firstVal = arr[0] 
```

이 말은, 객체에 접근할 때, 숫자로 시작하는 속성이라면 반드시 대괄호를 사용해야 한다. 

자바스크립트는 대괄호 안에 있는 숫자를 문자로 변환시켜 인식하기 때문에

```jsx
arr[1] != arr[01]
```

는 참이 된다. 

## 자바스크립트에서의 배열의 길이

자바스크립트의 배열은 매우 유연하므로, 범위 밖에 있는 인덱스에 요소를 지정해도 배열의 길이가 늘어나며 업데이트 된다.

```jsx
arrOfNum = []
arrOfNum.push(1, 2, 3)
console.log(arrOfNum.length) // 3

arrOfNum[5] = 5
console.log(arrOfNum) // 1, 2, 3, 비어있음, 5
console.log(arrOfNum.length) // 5
```

배열의 길이는 먼저 늘리거나 줄인다면, 이에 맞춰 빈공간이 생기거나 요소가 삭제된다.

