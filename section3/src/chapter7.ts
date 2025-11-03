/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // value의 타입은 number | string
  // value.toUpperCase(); // 에러. number, string 중에 어떤게 올지 모른다.
  // value.toFixed(); // 에러. number, string 중에 어떤게 올지 모른다.

  // if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 이런 표현들을 “타입 가드”라고 부른다.
  // 타입 가드를 통한 타입 좁히기
  if (typeof value === 'number') {
    // value의 타입은 number
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    // value의 타입은 string
    console.log(value.toUpperCase());
  }
  // else if (typeof value === 'object') {
  //   // value의 타입은 Date | null
  //   // null도 object 이다. 이런경우 Date가 아닐 가능성이 생겨서 오류가 생긴다.
  //   console.log(value.getTime());
  // }
  else if (value instanceof Date) {
    // value의 타입은 Date
    console.log(value.getTime());
  }
  // else if (value instatnceof Person){
  //   // instanceof 연산자는 우측항에 type이 들어올 수 없다. 값이 들어와야 한다.
  // }
  else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}

/**
 * 타입 가드 종류
 * 1) typeof
 * 2) instanceof
 * 3) in
 */
