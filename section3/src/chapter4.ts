/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 * -> |를 사용해서 정의. 갯수 제한 없이 원하는 타입들을 모두 |를 이용해서 써주면 된다.
 */

let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// 에러
// let union4: Union1 = {
//   name: '',
// };

/**
 * 2. 교집합 - Intersection 타입
 * -> &를 사용해서 정의. 객체 타입에 주로 사용한다.
 */

// let variable: number & string; // 보통 기본 타입들을 교집합으로 만들면 never 타입이 된다. 겹칠 수 없으니까..

type Intersection = Dog & Person;

// Dog, Person 타입의 모든 프로퍼티가 다 있어야 한다. 하나라도 부족하면 에러.
let intersection: Intersection = {
  name: '',
  color: '',
  language: '',
};
