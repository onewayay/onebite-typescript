// <타입 별칭>
// 타입을 마치 변수처럼 정의해서 사용

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
  extra?: string;
};

// 타입도 스코프가 있다. 같은 스코프에서 같은 식별자 사용할 수 없다.
// type User = {}; //에러

function func() {
  type User = {}; // 가능
}

let user1: User = {
  id: 1,
  name: '임한길',
  nickname: 'oneway',
  birth: '1991.11.15',
  bio: '안녕하세요',
  location: '서울시 영등포구',
  extra: '우수회원',
};

let user2: User = {
  id: 2,
  name: '홍길동',
  nickname: 'hong',
  birth: '1234.56.78',
  bio: '동해번쩍 서해번쩍',
  location: '한국',
};

// 인덱스 시그니처
// 객체타입의 정의를 더 유연하게 도와주는 문법
// key와 value의 타입을 기준으로 규칙을 이용해서 유연하게 객체의 타입을 정의

type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;

  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;

  // 반드시 들어가야하는 프로퍼티는 따로 적어준다. (아래의 Korea)
  // 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 한다.
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
