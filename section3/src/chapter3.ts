/**
 * 기본 타입간의 호환성
 */

// 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅. 가능
// num2 = num1; // 다운 캐스팅. 불가능

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

// 객체 타입은 프로퍼티를 기준으로 슈퍼/서브 타입이 된다.
// Animal은 Dog의 슈퍼타입, Dog는 Animal의 서브타입
// Dog가 더 많은 프로퍼티를 가지고 있는 더 좁은 집합이다.

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog; // 업 캐스팅
// dog = animal; // 에러. 다운 캐스팅

// ----

// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'react.js',
};

book = programmingBook; // 업 캐스팅
// programmingBook = book; // 에러. 다운 캐스팅

/**
 * 초과 프로퍼티 검사
 * 변수를 객체 리터럴로 초기화 할 때 타입에 정의된 프로퍼티만 넣어야 한다. 정의되지 않은 프로퍼티가 있을 경우 에러.
 */
let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'react.js', // 오류. 업 캐스팅의 개념처럼 가능할 것 같은데..? -> 초과 프로퍼티 검사 때문에 안된다.
};

let book3: Book = programmingBook; // 객체 리터럴이 아니기 떄문에 초과 프로퍼티 검사가 발동되지 않아 가능하다.

function func(book: Book) {}

func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'react.js', // 이 때도 초과 프로퍼티 검사 발동.
});

func(programmingBook); // 이렇게 변수로 전달하면 가능
