/**
 * infer
 * inference(추론)
 * 조건부 타입 내에서 특정 타입을 추론하는 문법
 * 조건식 T extends () => infer R에서 infer R은 이 조건식을 참이 되도록 만들 수 있는 최적의 R 타입을 추론하라는 의미
 * 추론이 불가능하다면 조건식을 거짓으로 판단
 */

type Func = () => string;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<Func>; // string 타입

// infer를 사용하여 반환값의 타입 그대로 가져오도록 만듦
type FuncB = () => string;
type FuncC = () => number;

type ReturnType2<T> = T extends () => infer R ? R : never;
// 조건식 T extends () => infer R에서 infer R은 이 조건식을 참이 되도록 만들 수 있는 최적의 R 타입을 추론하라는 의미
// 추론이 불가능하다면 조건식을 거짓으로 판단

type B = ReturnType2<FuncB>; // string 타입
/*
  1. 타입 변수 T에 함수 타입 FuncA가 할당됩니다.
  2. T는 () ⇒ string 이 됩니다.
  3. 조건부 타입의 조건식은 다음 형태가 됩니다  () ⇒ string extends () ⇒ infer R ? R : never
  4. 조건식을 참으로 만드는 R 타입을 추론 합니다 그 결과 R은 string이 됩니다.
  5. 추론이 가능하면 이 조건식을 참으로 판단합니다 따라서 결과는 string이 됩니다.
*/

type C = ReturnType2<FuncC>; // number 타입

type D = ReturnType<number>; // never 타입
// 추론이 불가능하여 조건식을 거짓으로 판단

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 Promise 타입이어야 한다.
// 2. 프로미스 타입의 겨리과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string
