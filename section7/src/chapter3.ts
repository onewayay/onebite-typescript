/**
 * 제네릭 인터페이스
 * 제네릭 인터페이스는 타입으로 사용할 때 반드시 <>의 안에 있는 타입변수에 타입을 직접 할당해야 한다.
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 타입으로 사용할 때 반드시 <>의 안에 있는 타입변수에 타입을 직접 할당해야 한다.
let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['string', 'value'],
};

// 제네릭 인터페이스는 인덱스 시그니쳐와 함께 사용하면 다음과 같이 기존보다 훨씬 더 유연한 객체 타입을 정의할 수 있다.
interface NumberMap {
  [key: string]: number;
}

let numbermap1: NumberMap = {
  key: -1234,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: 'string',
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 * 제네릭 타입 별칭도 타입으로 사용할 때 반드시 <>의 안에 있는 타입변수에 타입을 직접 할당해야 한다.
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

// interface Student {
//   type: 'student';
//   school: string;
// }

// interface Developer {
//   type: 'developer';
//   skill: string;
// }

// interface User {
//   name: string;
//   profile: Student | Developer;
// }

// function goToSchool(user: User) {
//   if (user.profile.type !== 'student') {
//     // 학생 유저가 아닌 경우
//     console.log('잘 못 오셨습니다.');
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// }

// const developerUser: User = {
//   name: '임한길',
//   profile: {
//     type: 'developer',
//     skill: 'typescript',
//   },
// };

// const studentUser: User = {
//   name: '홍길동',
//   profile: {
//     type: 'student',
//     school: '와플대학',
//   },
// };

// 위의 코드 개선
interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: '임한길',
  profile: {
    type: 'developer',
    skill: 'typescript',
  },
};

const studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '와플대학',
  },
};
