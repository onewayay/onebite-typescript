/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 객체의 구조를 정의하는데 특화된 문법이다. (상속, 합침 등의 특수한 기능을 제공)
 */

// 선택적 프로퍼티, readonly 등의 속성 등등 똑같이 사용 가능
interface Person {
  readonly name: string;
  age?: number;

  //메서드도 타입 정의 가능
  // sayHi?: () => void; // 함수 타입 표현식

  // 아래 처럼 호출 시그니쳐로 메서드 타입을 정의하면 메서드 오버로딩 작성 가능 (함수 타입 표현식으로는 메서드 오버로딩 불가능)
  sayHi(): void; // 호출 시그니쳐
  sayHi(a: number, b: number): void; // 호출 시그니쳐
}

const person: Person = {
  name: '임한길',
  age: 35,
  sayHi: function () {
    console.log('hi');
  },
};

person.sayHi();
person.sayHi(1, 2);

// 타입 별칭에서는 아래처럼 유니온타입, 인터섹션 타입 정의 가능
// 인터페이스에서는 불가능
type Type1 = number | string; // 유니온 타입
type Type2 = number & string; // 인터섹션 타입

// 필요한 경우 타입 별칭을 사용하거나 아래처럼 타입 주석에 직접 사용해주어야 한다

const person2: Person | string = {
  name: '임한길',
  age: 35,
  sayHi: function () {
    console.log('hi');
  },
};
