// 변수, 상수  = ['요소1', '요소2']
let books = ['Harry Potter', 'Node.js 교과서']

books[0] // 'Harry Potter'
books[books.length - 1] // 'Node.js 교과서'

books.forEach((items, index, array)=>{
    console.log(`${items}은 내가 읽은 책이다.`)
})

let lastElemAdded = books.push('시발점') // 요소 맨 뒤에 추가
let lastElemRemoved = books.pop() // 맨 뒤 요소 제거

let firstElemRemoved = books.shift() // 맨 앞 요소 제거
let firstElemAdded = books.unshift('맨발의 청춘') // 맨 앞에 요소에 추가

books.indexOf('Harry Potter') // 0
books.indexOf('김형진, 그는 누구인가') // -1

let newBooks = books.splice(1, 1) // 1번 인덱스에서 1개를 삭제한다.
let newBooks2 = books.splice(2, 3, 5, 4) // 2번 인덱스에서 요소 3개를 삭제하고 5, 4를 추가한다.

let copyedBooks = [...books]

let arr = [1, 2, 3, 4]
// arr.0 -> syntax error

let firstVal = arr[0] 

arr[1] != arr[01]

arrOfNum = []
arrOfNum.push(1, 2, 3)
console.log(arrOfNum.length) // 3

arrOfNum[5] = 5
console.log(arrOfNum) // 1, 2, 3, 비어있음, 5
console.log(arrOfNum.length) // 5