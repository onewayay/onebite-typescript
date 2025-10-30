// <any>
// 특정 변수의 타입을 확실히 모를 때
let normalVar = 10;
// normalVar = 'hello'; // 에러. 초기화 한 값과 타입이 다르기 때문.

let anyVar: any = 10;
anyVar = 'hello'; // any 타입이기 때문에 가능
anyVar = true;
anyVar = () => {};

// any 타입이기 때문에 다양한 타입의 메서드 사용 가능
anyVar.toUpperCase();
anyVar.toFixed();

// any 타입의 값은 어떤 타입으로 정의된 변수던 문제 없이 다 할당할 수 있다.
let num: number = 10;
num = anyVar;

// 타입 검사를 어찌되든 다 통과되도록 하기 떄문에 타입 검사가 제대로 이루어지지 않는다.
// -> 런타임 에러 발생 가능성이 높다.
// -> 타입스크립트를 사용하는 이유가 없다.
// !!그렇기 때문에 사용하지 않는 것을 강력 권장

// <unknown>
// 변수의 타입으로 정의되면 모든 값을 할당받을 수 있게 되지만, 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없게 된다.
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

let numVar: number = 10;
// numVar = unknownVar; // 에러

// unknownVar.toUpperCase(); // 에러
// unknownVar.toFixed(); // 에러

// 타입좁히기(타입정제)과정을 거쳐야 사용이 가능하다.
if (typeof unknownVar === 'number') {
  num = unknownVar;
}
