/**
 * 제네릭의 타입변수 활용
 *
 * 사례1)
 * 타입 변수 선언 여러개도 가능
 */

// function swap<T>(a: T, b: T) {
//   return [b, a];
// }

// // 오류. 먼저있는 string 값('1')이 T가 되면서 값 모두가 string 타입으로 되어버리기 때문.
// const [a, b] = swap('1', 2);

// 위의 제네릭 코드를 개선
function swap2<T, U>(a: T, b: U) {
  return [b, a];
}

// a에 들어가는 값이 string 타입이기에 T는 strinig 타입, b에 들어가는 값이 number 타입이기에 U는 number 타입.
const [a, b] = swap2('1', 2);

/**
 * 사례2) 다양한 배열 타입을 인수로 받는 제네릭 함수
 */

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0

let str = returnFirstValue(['hello', 'mynameis']); // 'hello'

// 1이 반환되기에 number 타입을 기대했지만 string | number 유니온타입이 된다.
let strNum = returnFirstValue([1, 'hello', 'mynameis']); // 1

// 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면?
// 필요한 첫번째 요쇼의 타입만 T로 타입변수를 지정하고 뒤의 값들은 타입이나 갯수 정보가 필요 없기에 ... unknown[] 으로 지정
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

// number 타입
let strNum2 = returnFirstValue2([1, 'hello', 'mynameis']); // 1

/**
 * 사례3) 타입 변수를 제한하는 사례
 * -> 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 두는 것
 */

// T를 extends를 통해 number타입의 length 프로퍼티가 있는 객체 타입으로 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 배열. 3
let var2 = getLength('string'); // 문자열. 6
let var3 = getLength({ length: 10 }); // length라는 프로퍼티를 가진 객체. 10

// let var4 = getLength(10); // 에러
// let var5 = getLength(null); // 에러
// let var6 = getLength(undefined); // 에러
