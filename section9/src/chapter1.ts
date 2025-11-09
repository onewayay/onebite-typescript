/**
 * 분산적인 조건부 타입
 * 조건부 타입을 유니온과 사용할 때 조건부 타입이 분산적으로 동작하도록 업그레이드 되는 것.
 */

// 그냥 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // string 타입
let b: StringNumberSwitch<string>; // number 타입

// 분산적인 조건부 타입
let c: StringNumberSwitch<number | string>; // string | number 타입
// 한번은 StringNumberSwitch<number>
// 다른 한번은 StringNumberSwitch<string>;
// 으로 분산되어 동작하고 그 두개의 결과 타입이 유니온으로 묶인 타입이 된다.

let d: StringNumberSwitch<boolean | number | string>; // string | number 타입
/* 
1 단계 - 동작
StringNumberSwitch<boolean> |
StringNumberSwitch<number> |
StringNumberSwitch<string>

2 단계 - 타입 결과
number |
string |
number

최종 결과
number | string
*/

/**
 * 실용적인 예제 1
 * 유니온에서 특정 타입만 제거하는 기능
 */

// 타입변수 U에 해당하는 타입(아래는 string)만 빼는 동작
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
/* 
1 단계
Exclude<number, string> |
Exclude<string, string> |
Exclude<boolean, string> 

2 단계
number |
never |
boolean |

최종 결과
number | never | boolean

근데! 유니온 타입에 never 타입이 포함되어 있으면 never 타입은 사라진다.

최최종 결과
number | boolean
*/

/**
 * 실용적인 예제 2
 * 유니온에서 특정 타입만 남기는 기능
 */

// 타입변수 U에 해당하는 타입(아래는 string)만 남기는 동작
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
