/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// -> 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// 매개변수의 기본값을 토대로 타입추론
// ?로 선택적 매개변수를 만들어주면 함수를 사용할 때 인수를 생략 가능
// 선택적 매개변수는 필수 매개변수 앞에 둘 수 없다. 맨 뒤로 미뤄야 한다.
function introduce(name = '임한길', age: number, tall?: number) {
  console.log(`name: ${name}`);
  // console.log(`tall: ${tall + 10}`);// 에러. tall이 undefined 일 수 있기 때문

  // 이렇게 타입가드를 이용해 타입을 좁혀서 사용하면 에러 없이 가능
  if (typeof tall === 'number') {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce('임한길', 35, 182);
introduce('임한길', 35);

/**
 * 나머지 매개변수(Rest Parameter)
 */
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15

// 매개변수의 숫자를 정하고 싶다면 튜플 타입으로 넣으면 된다.
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum2(1, 2, 3); // 6
// getSum2(1, 2, 3, 4, 5); // 에러. 인수가 3개가 넘어간다.
