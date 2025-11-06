/**
 * 제네릭 클래스
 * 제네릭 인터페이스나 제네릭 타입 별칭과는 다르게 생성자를 호출할 때 인수로 전달되는 값을 기준으로 알아서 타입을 추론한다.
 * 그래서 <>안에 타입을 명시하지 않아도 된다.
 */

class NumberList {
  // 접근 제어자 설정을 했기 떄문에 필드 생략
  constructor(private list: number[]) {
    // 접근 제어자 설정을 했기 때문에 초기화 생략
  }
  push(data: number) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1, 2, 4]

// 위 코드 제네릭으로 개선
class List<T> {
  // 접근 제어자 설정을 했기 떄문에 필드 생략
  constructor(private list: T[]) {
    // 접근 제어자 설정을 했기 때문에 초기화 생략
  }
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1, 2, 4]

const stringList = new List(['1', '2', '3']);
stringList.pop();
stringList.push('4');
stringList.print(); // ['1', '2', '4']
