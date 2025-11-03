// !!참고!! 각 변수들의 스코프를 조정하기 위해 각 타입별로 함수로 감싸서 실습함.

/**
 * Unknown 타입
 */

// 모든 타입들의 최상위 타입. 전체 집합

function unknownExam() {
  // 업 캐스팅으로 모든 타입 가능
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운 캐스팅으로 모든 타입 불가능
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

// 모든 타입들의 최하위 타입. 공집합
// 그 어떤 값도 저장되어서는 안 되는 타입에 활용하면 좋다.

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 다운 캐스팅으로 모든 타입 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 업 캐스팅으로 모든 타입 불가능
  // let never1: never = 10;
  // let never2: never = 'string';
  // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log('hi');
    return undefined; // undefined 타입의 슈퍼 타입이다. (업캐스팅)
  }

  // undefined 타입의 슈퍼 타입이다. (업캐스팅)
  let voidVar: void = undefined;
}

/**
 * Any 타입
 */

// 치트키 타입. 타입 계층도를 그냥 무시한다. -> 위험. 사용하지 않는 것이 좋다.
// 모든 타입의 슈퍼 타입으로 위치하기도하고 모든 타입의 서브 타입(never 제외)으로 위치하기도 한다.
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운 캐스팅이 허용된다.

  undefinedVar = anyVar; // 다운 캐스팅이 허용된다.

  // neverVar = anyVar; // 오류. 다운 캐스팅이 허용되지 않는다.
}
