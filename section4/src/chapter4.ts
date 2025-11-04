/**
 * 사용자 정의 타입 가드
 * 참 또는 거짓을 반환하는 함수를 이용해 사용자가 원하는대로 타입 가드를 만듦
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

//:animal is Dog -> 함수가 참이면(true를 반환하면) animal은 Dog 타입이라고 보장
function isDog(animal: Animal): animal is Dog {
  // 매개변수 animal이 Dog 타입이라면 true, Cat 타입이라면 false를 반환하는 함수
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // if ('isBark' in animal) {
  //   // 강아지
  // } else if ('isScratch' in animal) {
  //   // 고양이
  // }
  if (isDog(animal)) {
    // 강아지
    animal;
  } else if (isCat(animal)) {
    // 고양이
    animal;
  }
}
