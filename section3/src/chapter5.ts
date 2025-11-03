/**
 * 타입 추론
 */

// 타입 추론이 가능한 상황 - 일반적인 변수를 선언하는 상황
// 변수의 초기값을 기준으로 타입을 추론.
// 타입 넓히기 -> 변수를 범용적으로 사용할 수 있도록 추론

let a = 10;
let b = 'hello';

let c = {
  id: 1,
  name: '임한길',
  profile: {
    nickname: 'onewayay',
  },
  urls: ['https://~~'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];

// 함수의 반환값 타입을 추론할 떄는 초기화하는 값이 아니라 return문 다음에 오는 반환값을 기준으로 추론한다.
// 매개변수에 기본값이 있다면 기본값을 기준으로 타입을 추론한다.
function func(message = 'hello') {
  return 'hello';
}

// 타입 추론이 가능한 상황 - 암묵적 any 타입 (이런 상황을 두는 것은 권장하지 않음)

// 아래와 같은 일련의 과정을 any 타입의 진화 라고 한다.
// 변수를 선언하고 초기값을 지정하지 않으면 암묵적 any 타입으로 추론된다.
// 암묵적 any 타입의 경우에는 할당되는 값에 따라 타입이 계속 진화한다.

let d; // 아무 값으로도 초기화 하지 않고 선언만 한 상황. any 타입으로 추론
d = 10; // 숫자 10을 할당
d.toFixed(); // 여기서부터는 number로 추론.
// d.toUpperCase(); // number 타입으로 추론되기 때문에 string의 메서드 사용 불가

d = 'hello'; // 문자열 'hello'를 할당해도 문제가 되지 않는다.
d.toUpperCase(); // string 타입으로 추론
// d.toFixed(); // string 타입으로 추론되기 때문에 number의 메서드 사용 불가

// 타입 추론이 가능한 상황 - const로 변수 선언 및 할당 -> 리터럴 타입으로 정의한 것과 같이 됨.
// const로 변수를 선언하고 초기화 하는경우 리터럴 타입으로 타입을 정의 한 것과 같다.
// -> const는 재할당이 불가능 하기 때문

const num = 10; // const num :10 = 10;
const str = 'hello'; // const str: 'hello' = 'hello';

// 타입 추론이 가능한 상황 - 최적의 공통 타입 추론
let arr = [1, 'string']; // let arr: (number | string) = [1, 'string'];
