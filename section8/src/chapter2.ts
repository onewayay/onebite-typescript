/**
 * keyof 연산자
 * 객체 타입으로부터 프로퍼티의 모든 key들을 String Literal Union 타입으로 추출하는 연산자
 * 갯수에 상관없이, 프로퍼티의 수정에 상관없이 안전하게 추출 가능
 */

interface Person {
  name: string;
  age: number;
}

// 가능은 하지만 바람직하지 않은 key의 타입
// function getPropertyKey(person: Person, key: 'name' | 'age') {
//   return person[key];
// }

// Person 객체 타입의 모든 프로프로퍼티의 키를 유니온 타입으로 추출
// keyof Person -> 'name' | 'age' 와 같다
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: '임한길',
  age: 35,
};

getPropertyKey(person, 'name'); // 임한길

// keyof 연산자는 typeof 연산자와 함께 사용 가능하다.
/*
 알아서 이런 모양으로 추론해서 타입 별칭에 정의해준다.
  type Person2 {
    name: string;
    age: number;
  }
 */
type Person2 = typeof person;

// function getPropertyKey2(person: Person2, key: keyof Person2) {
//   return person[key];
// }

// 아래처럼 keyof typeof person 이렇게도 사용 가능
function getPropertyKey2(person: Person2, key: keyof typeof person) {
  return person[key];
}

const person2 = {
  name: '임한길',
  age: 35,
};
