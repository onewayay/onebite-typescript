/**
 * 조건부 타입
 * extends와 삼항 연산자를 이용해 조건에 따라 각각 다른 타입을 정의하도록 돕는 문법
 */

// number 타입이 string타입을 확장한 타입이라면 (서브 타입이라면) string, 아니라면 number
type A = number extends string ? string : number; // number 타입

type ObjA = {
  a: number;
};
type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number 타입;

/**
 * 제네릭과 조건부 타입
 * 조건부 타입은 제네릭과 사용하면 활용도가 높다.
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string 타입
let varB: StringNumberSwitch<string>; // number 타입

// 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  // return text.replaceAll(" ", "");
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi i'm oneway");
