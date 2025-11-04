/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단
 * 두 가지의 기준
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가?
// 반환값 타입을 기준으로 업 캐스팅은 가능, 다운 캐스팅은 불가능
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 가능. 업 캐스팅
// b = a; // 에러. 다운 캐스팅

// 기준2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
// 매개변수 타입을 기준으로 다운 캐스팅은 가능, 업 캐스팅은 불가능
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 에러. 업 캐스팅
d = c; // 가능. 다운 캐스팅

// Dog의 슈퍼 타입
type Animal = {
  name: string;
};

// Animal의 서브 타입
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 에러. 업 캐스팅
// 위의 코드는 이런 모습. 이런 이유로 안된다.
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // 여기서 에러. 없으니까.
};

dogFunc = animalFunc; // 가능. 다운 캐스팅
// 위의 코드는 이런 모습. 이런 이유로 가능하다.
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// 매개변수가 많은 적은 쪽이 많은 쪽으로 취급되는 것은 가능, 매개변수가 적은 쪽이 많은 쪽으로 취급되는 것은 불가능
// 매개변수 타입이 다르면 호환 불가능
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 가능
// func2 = func1; // 에러
