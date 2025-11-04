/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 방법
 * JS에서는 지원X, TS에서만 지원
 *
 * -> 하나의 함수 Func를 만들고 아래 2개의 버전으로 만들기
 * -> 모든 매개변수 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값 출력
 */

// 버전들
// 오버로드 시그니쳐 - 함수의 구현부 없이 선언식만 써놓은 것
// 아래 코드에서는 2개의 오버로드 시그니쳐를 만들었으며 각각 함수의 버전을 의미(매개변수를 1개 받는 법전, 3개 받는 버전)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    // 매개변수가 3개일 때
    console.log(a + b + c);
  } else {
    // 매개변수가 1개일 때
    console.log(a * 20);
  }
}

// func(); // 에러
func(1);
// func(1, 2); // 에러
func(1, 2, 3);
