---
id: 12
title: '[모던 자바스크립트] 04. 변수'
date: 'Apr 04 2022'
tags: ['test1', 'test2']
cover_image: '/image/posts/img1.jpg'
description: 'Description for Test'
---

## 04. 변수

### 1. 변수란 무엇인가

- **변수(variable)** 는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름
- 값의 위치를 가리키는 상징적인 이름

- **할당(assignment)**

  - 변수에 값을 저장

- **참조(reference)**
  - 변수의 값을 읽음

### 2. 식별자

- **식별자(identifier)** 는 어떤 값을 구별해서 식별할 수 있는 고유한 이름
- 값이 아닌 **메모리 주소**를 기억
- 선언(declaration)에 의해 존재

### 3. 변수 선언

- **변수 선언(variable declaration)** 은 변수를 생성하는 것
- 메모리 공간을 확보(allocate), 확보된 메모리 공간의 주소를 연결([name binding](https://en.wikipedia.org/wiki/Name_binding))
- 변수 선언에 의해 확보된 메모리 공간은 확보가 **해제(release)** 되기 전까지 유효, 암묵적으로 **undefined** 로 초기화

```javascript
/* 변수 선언 키워드 */
var variable1;
let variable2;  // ES6
const variable3;  // ES6
```

> Keyword: 자바스크립트 코드를 해석하고 실행하는 자바스크립트 엔진이 수행할 동작을 규정한 일종의 명령어

⭐️ **변수 선언 2단계**

☑️ 선언 단계: 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알림

☑️ 초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화

> 변수 이름은 어디에 등록되는가?

모든 식별자는 **실행 컨텍스트** 에 등록. 키/값 형식인 객체로 등록되어 관리

### 4. 변수 호이스팅

- 변수 선언은 **런타임(runtime) 이전 단계에서 먼저 실행**
- **변수 호이스팅(variable hoisting)** 으로 인해 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작
- **모든 식별자는 호이스팅됨**

```javascript
console.log(score); // undefined
var score; // 변수 선언문
```

### 5. 값의 할당

- 값의 할당은 소스코드가 순차적으로 실행되는 시점인 **런타임에 실행**

```javascript
var score; // 변수 선언
score = 80; // 값의 할당

////////////////////////////////////

console.log(score); // undefined
score = 80; // 값의 할당
var score; // 변수 선언

console.log(score); // ?? => 80
```

### 6. 값의 재할당

- 모든 변수는 선언과 동시에 undefined으로 초기화되기 때문에 처음으로 할당하는 값 역시 재할당
- 재할당은 변수에 저장된 값을 다른 값으로 변경
- 상수(constant)엔 값을 재할당할 수 없어서 변수에 저장된 값을 변경할 수 없음
  - 즉, 상수엔 단 한 번만 할당이 가능
- 재할당 시 **새로운 메모리 공간** 을 확보하고 그 메모리 공간에 값을 저장
  - 불필요한 값들은 추후 가비지 콜렉터([garbage collector](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management))에 의해 자동 해제
    - [Reference Counting](https://en.wikipedia.org/wiki/Reference_counting)

⭐️ **Unmanaged language VS Managed language**

1. 언매니지드 언어는 개발자가 명시적으로 메모리를 할당하고 해제, 메모리 제어 기능을 제공

2. 매니지드 언어는 메모리 관리 기능을 언어 차원에서 담당 직접적인 메모리 제어를 허용하지 않음

### 7. 식별자 네이밍 규칙

- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(\_), 달러 기호($)를 포함할 수 있음
- 단, 숫자로 시작하는 것은 허용하지 않음
- 예약어(reserved word)는 식별자로 사용할 수 없음
  - 예약어는 프로그래밍 언어에서 사용되고 있거나 **사용될 예정인 단어** 를 말함
- 쉼표(,)로 구분하여 여러 개를 한번에 선언 가능
- 유니코드 문자 허용 (ES5)

⭐️ **네이밍 컨벤션(naming convention)**

```javascript
// camelCase
var firstName;

// snake_cdase
var first_name;

// PascalCase
var FirstName;

// typeHungarianCase
var strFirstName;

// DOM node
var $elem = document.getElementById('myId');

// RxJS observable
var observable$ = fromEvent(document, 'click');
```
