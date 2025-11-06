/**
 * map 메서드 타입 정의하기
 * 자바스크립트의 배열 메서드 Map은 원본 배열의 각 요소에 콜백함수를 수행하고 반환된 값들을 모아 새로운 배열로 만들어 반환
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6]. it을 number 타입으로 추론해준다

// 나만의 map 함수 만들어보기
// 들어온 값이 다른 타입으로 바뀌어서 반환될 수 있기에 U까지 선언해줌
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => it.toUpperCase());
map(['hi', 'hello'], (it) => parseInt(it));

/**
 * forEach 메서드 타입 정의하기
 * forEach 메서드는 배열의 모든 요소에 콜백함수를 한번씩 수행해주는 메서드
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

// 나만의 forEach 함수 만들어보기
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(['123', '456'], (it) => {
  it;
});
