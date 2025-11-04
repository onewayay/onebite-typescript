/**
 * 인터페이스 확장
 * extends 키워드 사용.
 * interface 타입이름 extends 확장할 타입이름
 */

// 중복된 프로퍼티들...
// 이럴때 인터페이스 확장하면 된다.
interface Animal {
  name: string;
  color: string;
}

// 이렇게 타입 별칭이였어도 다른 interface에서 가져다가 확장할 수 있다.
type Animal1 = {
  name: string;
  color: string;
};

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

// 인터페이스 확장
interface Dog extends Animal {
  // 동일한 프로퍼티를 다시 정의하면 덮어씌워진다. 다시 정의하려는 타입이 원본타입의 서브타입일 경우에만 가능
  name: '반죽이'; // 스트링 리터럴 타입으로 덮어 씌운다.
  // name: number; // 불가
  isBark: boolean;
}

const dog: Dog = {
  name: '반죽이',
  color: 'white',
  isBark: false,
};

interface Cat extends Animal {
  isScratch: boolean;
}

const cat: Cat = {
  name: '춘봉이',
  color: 'black',
  isScratch: true,
};

interface Chicken extends Animal {
  isFly: boolean;
}

const chicken: Chicken = {
  name: '꼬꼬',
  color: 'brown',
  isFly: false,
};

// 다중확장
// 한번에 여러 타입을 확장하면 여러 타입의 프로퍼티를 모두 다 가진 타입이 된다.
interface CatChicken extends Cat, Chicken {}

const catChicken: CatChicken = {
  name: '냥닭',
  color: '삼색이',
  isScratch: false,
  isFly: false,
};
