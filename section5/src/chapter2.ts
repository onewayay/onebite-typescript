/**
 * 선언 합침
 */

// 같은 이름의 인터페이스가 있어도 에러가 나지 않는다.
// -> 중복된 이름의 인터페이스 선언은 결국 모두 하나로 합쳐지기 때문
interface Person {
  name: string;
}

interface Person {
  // 충돌
  // 동일한 이름의 프로퍼티는 동일한 타입이여야 한다.
  // 타입이 다를 경우 허용되지 않고 에러가 난다.
  // name: number;
  age: number;
}

const person: Person = {
  name: '임한길',
  age: 27,
};

/**
 * 사용하는 경우 - 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
