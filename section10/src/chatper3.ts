/**
 * 조건부 타입 기반의 유틸리티 타입들
 * Exclude<T, U>, Extract<T, U>, ReturnType<T>
 */

/**
 * Exclude<T, U>
 * -> T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>;
// string | boolean 타입에서 boolean 타입을 제거한 타입 = string 타입

// 나만의 Exclude 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type Exclude<T, U> = T extends U ? never : T;
/* 
  type A = Exclude<string | boolean, boolean>; 이렇게 썼을 때를 가정해서 단계별 동작

  1 단계
  T에 유니온 타입이 들어가므로 분산적 조건부 타입 (각 타입별로 두번 동작)
  Exclude<string, boolean> |
  Exclude<boolean, boolean> 

  2 단계
  결과
  string |
  never

  3 단계
  최종 타입
  never는 사라지고 string 타입만 남음
*/

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type B = Extract<string | boolean, boolean>;
// string | boolean 타입에서 boolean 타입만 추출한 타입 = boolean 타입

// 나만의 Extract 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type Extract<T, U> = T extends U ? T : never;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return 'hello';
}
function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// funcA의 반환값 타입을 추출해서 ReturnA에 정의 = string 타입
type ReturnB = ReturnType<typeof funcB>;
// funcA의 반환값 타입을 추출해서 ReturnB에 정의 = number 타입

// 나만의 Return 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
