# 메서드와 this

## 메서드 만들기

객체는 특정한 데이터를 담는 프로퍼티뿐만 아니라, 특정 동작을 수행하는 프로퍼티도 만들 수 있는데, 이를 메서드라고 한다. 

메서드는 다음과 같이 만들 수 있다.

```jsx
let user = {
    name: "hyungjin",
    age: "48",
};

user.sayHi = function() {
    console.log("안녕하세요");
};
```

함수 표현식으로 함수를 만들어서, 이 함수를 객체의 프로퍼티에 할당해 줄 수 있다.

이미 정의된 함수를 대입하는 것도 가능하다.

```jsx
let student = {

}

function sayHi() {
    console.log("hi");
};

student.sayHi = sayHi;

user.sayHi(); // hi
```

하지만 위 같은 방식은 코드가 길어지므로 단축 구문을 이용하여 짧게 표현한다.

```jsx
user = {
  sayHi: function() {
    alert("Hello");
  }
};

user = {
  sayHi() { 
    alert("Hello");
  }
};
```

위 같이 function 키워드를 생략해도 문제가 발생하지 않는다. 

또한 두 개의 구문의 실행 결과는 모두 동일하다.

## 메서드와 this

메서드는 객체에 속해 있으므로, 객체의 프로퍼티에 접근할 수 있어야 제 역할을 할 수 있다. 

이때 자신의 객체를 this 키워드로 접근할 수 있다.

```jsx
let student = {
    name: "jewon",
    class: 4,

    moveClass() {
        this.class++;
    }
}

student.moveClass();
console.log(student.class);
```

this를 사용하지 않고, 객체의 이름으로 접근하는 것도 가능하다. 하지만 같은 이름의 객체가 존재하거나, 객체 참조 변수가 달라진다면, 예상치 못한 에러가 발생할 수 있다. 

```jsx
let user = {
  name: "hyungjin",
  age: 18,

  sayHi() {
    alert( user.name ); 
  }

};

let admin = user;
user = null; // user를 null로 덮어쓰기

admin.sayHi(); // sayHi()가 복사됐음에도 여전히 user 객체를 참조하면서 오류가 난다. 
```

자바스크립트의 this의 참조값은 런타임에 결정된다. 따라서 하나의 메서드를 다른 객체에서 호출했다면, this의 참조 역시 달라지게 된다. 

```jsx
let user1 = { name: "Jewon" };
let user2 = { name: "Hyungjin" };

function sayHi() {
  alert( this.name );
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

user1.f(); // Jewon  (this == user1)
user2.f(); // Hyungjin (this == user2)
```

이러한 특성으로, 다른 언어의 비해 this 키워드 사용은 상당히 자유롭다. 

심지어, 다음과 같은 코드도 오류를 뱉지 않는다. 

```jsx
function sayHi() {
  alert(this);
}

sayHi(); // 엄격 모드가 아닐 시 전역 객체를 참조한다. 브라우저 환경에서는 window 를 참조한다. 
```

## this가 없는 화살표 함수

화살표 함수는 고유의 this 를 가지지 않으며, 사용시 외부의 객체를 참조하게 된다.

```jsx
let user = {
  firstName: "Na",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Na
```
