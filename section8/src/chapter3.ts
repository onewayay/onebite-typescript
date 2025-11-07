/**
 * 맵드 타입
 * 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 타입 조작 기능
 * 맵드 타입은 interface로 구현 불가. 타입 별칭으로만 가능하다.
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입은 interface로 구현 불가
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// 맵드 타입
/*
  [key in “id” | “name” | “age”] 는 이 객체 타입은 key가 한번은 id, 한번은 name, 한번은 age가 된다는 뜻 입니다. 따라서 다음과 같이 3개의 프로퍼티를 갖는 객체 타입으로 정의됩니다.
  key가 “id” 일 때 → id : User[id] → id : number
  key가 “name”일 때 → name : User[user] → name : string
  key가 “age”일 때 → age : User[age] → age : number
  여기에 대 괄호 뒤에 선택적 프로퍼티를 의미하는 물음표(?) 키워드가 붙어있으므로 모든 프로퍼티가 선택적 프로퍼티가 되어 결론적으로 이 타입은 다음과 같은 타입이 됩니다.
*/
type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
};

// keyof 연산자로 좀더 유연하게 개선
type PartialUser2 = {
  [key in keyof User]?: User[key];
};

// User의 프로퍼티 모두 boolean 타입으로 변경한 타입 생성
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 모든 프로퍼티가 readonly 속성을 갖도록 반환하는 함수의 타입 생성
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: '임한길',
    age: 35,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: '임한길',
  age: 25,
});
