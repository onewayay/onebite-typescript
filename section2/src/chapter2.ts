// <배열>
// tip: 타입이 헷갈리면 마우스 올려보기

let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'i am', 'hangil'];

let boolArr: Array<boolean> = [true, false, true]; // 꺽쇠를 사용하는 제네릭 문법

// 배열에 들어가는 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'hello']; // |를 이용한 유니온 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// <튜플>
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 에러. 지정해놓은 타입의 길이와 다르다.
// tup1 = ['1', '2']; // 에러. 지정해놓은 타입과 다르다.

let tup2: [number, string, boolean] = [1, '2', true];
// tup2 = ['2', true, 1]; // 에러. 지정해놓은 타입의 순서(위치)와 다르다.
// tup2 = 1; // 에러. 지정해놓은 타입의 길이와 다르다.

// 배열 메서드를 사용할때는 튜플의 길이제한이 발동하지 않는다.
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 튜플 사용이 융용한 예시
// 배열의 인덱스 위치별 타입이 지정되어야 하는 경우
const users: [string, number][] = [
  ['임한길', 1],
  ['유재석', 2],
  ['정형돈', 3],
  ['노홍철', 4],
  // [5, '박명수'], // 에러. 순서가 다르다.
];
