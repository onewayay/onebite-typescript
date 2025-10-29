// 아래처럼 변수명 뒤에 :타입명 의 형태로 타입을 정의하는 문법을 타입주석(type annotation)이라고 한다.
// 타입을 정의하는 가장 기본적인 방법

// <number>
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = 'hello'; // 타입에러
// num1.toUpperCase(); // 타입에러. 문자열에만 사용가능한 메서드
num1.toFixed(); // 넘버에서만 사용가능한 메서드는 당연히 사용 가능

// <string>
let str1: string = 'hello'; // 따옴표, 쌍따옴표 모두 가능
let str2: string = `hello`; // 백틱 가능
let str3: string = `hello ${num1}`; // 템플릿 리터럴 가능

// str1 = 123; // 타입에러
// str1.toFixed(); // 타입에러. 숫자 사용가능한 메서드
str1.toUpperCase(); // 문자열에서만 사용가능한 메서드는 당연히 사용 가능

// <boolean>
let bool1: boolean = true;
let bool2: boolean = false;

// <null>
let null1: null = null;

// <undefined>
let unde1: undefined = undefined;

// <임시로 null 값을 넣어놓아야 할때>
// 타입스크립트에서는 기본적으로 불가능.
// tsconfig.json에서 "strictNullChecks": false 옵션(엄격한 null 검사)을 넣어주면 가능하다.
// let numA: number = null;

// 리터럴 타입
// -> 값 자체가 타입이 되는 것
let numA: 10 = 10;
// numA = 11; // 10이라는 값을 타입으로 정했기 때문에 다른 값은 할당 불가

let strA: 'hello' = 'hello';
let boolA: true = true;
