// <객체>

// object 라고만 타입을 설정하면 그냥 객체라고만 알려주고 프로퍼티에 대한 정보는 없다.
// let user: object = {
//   id: 1,
//   name: '임한길',
// };
// user.id; // 에러.('object' 형식에 'id' 속성이 없습니다.)

// 객체 리터럴 타입
// 각 프로퍼티의 타입까지 정의해준다.
let user: { id: number; name: string } = {
  id: 1,
  name: '임한길',
};
user.id; // 에러없이 가능.

let dog: { name: string; color: string } = {
  name: '뽀숑이',
  color: 'white',
};

// 옵셔널(선택적) 프로퍼티
// id 프로퍼티가 있을수도 없을수도 있을 경우.
// 있을거면 number 타입이여야 한다고 정의.
let user1: { id?: number; name: string } = {
  id: 1,
  name: '임한길',
};

// readonly
// 읽기전용 프로퍼티
let config: { readonly apiKey: string } = {
  apiKey: 'MY API KEY',
};

// config.apiKey = 'hacked'; // 수정할 수 없다.
