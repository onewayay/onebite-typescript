/**
 * 함수 타입 표현식
 * 타입 별칭을 이용해 함수의 타입을 정의
 * 여러개의 함수가 동일한 타입을 갖는 경우 유용하다.
 */

// const add = (a: number, b: number): number => a + b; // 이전 시간까지 함수의 타입을 지정하는 법

// 타입 별칭으로 별도의 함수 타입 정의
type Operation = (a: number, b: number) => number;

// 타입 별칭 Operation 를 이용한 함수의 타입 정의
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 이런식으로도 가능하다.
const add1: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니쳐 (콜 시그니쳐)
 * 함수 타입 표현식과 동일한 기능.
 */

type Operation2 = {
  (a: number, b: number): number;
  // 하이브리드 타입
  // 호출 시그니쳐 아래에 프로퍼티를 추가 정의하는 것도 가능.
  // 이럴 경우 이 타입을 갖는 변수는 함수로도, 객체로도 사용 가능하다.
  name: string;
};

const add2: Operation2 = (a, b) => a + b;

const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2); // 함수로 사용
add2.name; // 객체로 사용
