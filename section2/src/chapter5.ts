// <Enum(열거형) 타입>
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// Enum은 컴파일 후에 사라지지 않는다

// 숫자형 Enum: 숫자가 할당되는 Enum
enum Role {
  // ADMIN = 0,
  // USER = 1,
  // GUEST = 2,

  // 위처럼 숫자 할당을 안해도 알아서 숫자가 차례대로 들어간다.
  // ADMIN ,
  // USER,
  // GUEST,

  // 숫자 시작을 다르게 하고 싶은 경우 맨 처음 숫자를 지정해주면 된다.
  // ADMIN = 10 ,
  // USER, // 11
  // GUEST, // 12

  // 중간부터 숫자를 다르게 하고 싶은 경우 원하는 곳 숫자를 지정해주면 된다.
  ADMIN,
  USER = 10,
  GUEST, // 11
}

// 문자형 Enum
enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '임한길',
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: '홍길동',
  role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
  name: '아무개',
  role: Role.USER, // 2 <- 게스트
};

console.log(user1, user2, user3);
//{ name: '임한길', role: 0, language: 'ko' } { name: '홍길동', role: 10 } { name: '아무개', role: 10 }
