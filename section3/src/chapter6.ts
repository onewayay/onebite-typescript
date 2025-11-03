/**
 * 타입 단언
 * 값 뒤에 as 타입명 으로 정의
 */

type Person = {
  name: string;
  age: number;
};

// 아래처럼 일단 빈 객체로 초기화하고 나중에 프로퍼티를 넣어주고 싶다면?
// let person: Person = {}; // 에러

// 이렇게 타입 단언 해주면 된다.
let person: Person = {} as Person;
person.name = '임한길';
person.age = 27;

// ----

type Dog = {
  name: string;
  color: string;
};

// let dog: Dog = {
//   name: '반죽이',
//   color: 'brown',
//   breed: '진도', // 에러. 초과 프로퍼티 검사에 걸린다. Dog 타입에 없는 프로퍼티를 사용했기 때문
// };

// 이렇게 타입을 단언하면 초과 프로퍼티 검사에 걸리지 않는다.
// 추가로 타입을 선언하지 않아도 단언한 타입에 맞춰서 타입을 추론한다.
let dog = {
  name: '반죽이',
  color: 'brown',
  breed: '진도',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// 10(number 타입)이 never의 슈퍼타입이기 때문에 타입 단언 가능
let num1 = 10 as never;

// unknown이 10(number 타입)의 슈퍼타입이기 때문에 타입 단언 가능
let num2 = 10 as unknown;

// 10(number 타입)과 string 타입이 서로 호환되지 않기 때문에 타입 단언 불가능
// let num3 = 10 as string; // 에러

// 이렇게 하면 에러가 사라진다.
// 모든 타입에 슈퍼타입이 되는 unknown으로 중간에 단언을 거쳐 다중 단언을 하면 단언이 안되는 타입으로 단언 가능.
// 하지만 좋은 방법이 아니니 권장하지 않는다.
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

// as const 로 단언하면 const 로 변수를 선언 및 할당한 것처럼 리터럴 방식으로 타입을 정의한 효과를 낸다.
let num4 = 10 as const; // let num4 :10 = 10;

// as const로 초기화한 객체는 모든 프로퍼티가 readonly 속성을 가진다.
let cat = {
  name: '춘봉이',
  color: 'black',
} as const;

/**
 * Non Null 단언
 * 어떤 값이 Null 이거나 Undefined가 아니라고 단언하는 것.
 * ! 사용해서 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '임한길',
};

// ?. -> 옵셔널 체이닝
// 앞의 값이 null이나 undefined이면 undefined 반환
// 여기서는 author가 null이나 undefined이면 undefined이 반환된다.
// 그래서 length에 오류가 생긴다. length는 number 타입이 들어가야 하는데 number 혹은 undefined이 들어올 수 있기 때문
// const length: number = post.author?.length; // 오류

const length: number = post.author!.length; // 무조건 있다는 단언.
