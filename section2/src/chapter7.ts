// <void>
// void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 의미하는 타입

// 함수의 반환값 타입은 ()뒤에 타입을 써주면 된다.
function func1(): string {
  return 'hello';
}

// 함수가 아무것도 반환하지 않기 때문에 void 타입을 반환
function func2(): void {
  console.log('hello');
}

// 왜 undefined나 null을 사용하지 않을까?
// undefined나 null을 주면 오류가 나기 때문 -> 꼭 undefined나 null을 반환하도록 해줘야한다.

// <never>
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  //무한 루프를 도는 함수
  while (true) {}
}

function func4(): never {
  throw new Error();
}
