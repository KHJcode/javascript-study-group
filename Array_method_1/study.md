# Array_method_1

## array.concat

배열의 뒤에 매개변수로 받은 또다른 배열을 이어 붙여 새 배열을 반환한다.

```jsx
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // Array ["a", "b", "c", "d", "e", "f"]
```

## array.copyWithin

배열의 특정부분을 얕게 복사하여 특정 위치에 복사한 것을 덮어쓴다.

매개변수로 target, start, end 를 받으며 target 만이 필수이다.

target 은 배열을 덮어쓸 시작 위치를 지정한다. 

start 는 복사를 시작할 위치, end 는 복사를 끝낼 인덱스이다.

복사는 start 에서 end - 1 까지 진행된다.

```jsx
const array1 = ['a', 'b', 'c', 'd', 'e'];

console.log(array1.copyWithin(0, 3, 4));
// 3번 인덱스를 복사하여 0번 인덱스에 덮어쓴다.
// expected output: Array ["d", "b", "c", "d", "e"]

console.log(array1.copyWithin(1, 3));
// 3번 인덱스부터 끝까지 복사하고, 1번 인덱스부터 덮어쓴다.
// expected output: Array ["d", "d", "e", "d", "e"]
```

## array.find

해당 배열에서 매개변수로 받은 콜백함수를 만족시키는 첫번째 요소를 반환한다.
만족시키는 값이 없을 경우 undefined 를 반환한다.

```jsx
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )
```

다음과 같이 새 개의 매개변수를 받을 수 있으며, 배열을 순회하며 해당 값을 매개변수로 넘겨준다. 

```jsx
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found); // 12
```
