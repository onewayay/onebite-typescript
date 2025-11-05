/**
 * 접근 제어자
 * access modifier
 * 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능
 * => public, private, proteced
 *
 * 접근 제어자는 생성자의 매개변수에 설정하는 것이 가능하다.
 * -> 이럴 경우 필드에서 정의는 생략해주어야 한다.
 * -> 이럴 경우 초기화 부분도 생략이 가능하다
 */

// public
// 프로퍼티 앞에 아무것도 붙이지 않은 것과 같다.
// 자유롭게 인스턴스의 프로퍼티에 접근 가능

// private
// 인스턴스 외부에서 수정 및 접근 불가
// 인스턴스 내부에서 접근은 가능 (메서드 안에서의 참조)
// 파생 클래스에서도 접근이 불가능

// proteced
// 외부에서의 수정 및 접근은 불가하지만 파생 클래스에서는 접근 가능
// 파생 클래스에서는 접근 가능

class Employee {
  // 필드 - 현재는 생성자의 매개변수에 접근 제어자를 써놓았기 때문에 생략.
  // private name: string;
  // protected age: number;
  // public position: string;

  // 프로퍼티 앞에 아무것도 안 써 있으면 public이 붙어 있는 것과 같다.

  // 생성자
  constructor(
    // 접근 제어자는 생성자의 매개변수에 설정하는 것이 가능하다.
    // 이럴 경우 위의 필드에서 정의는 생략해주어야 한다.
    // 초기화 부분도 생략가능.
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 현재는 생성자의 매개변수에 접근 제어자를 써놓았기 때문에 생략. (초기화 생략)
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log('일하는 중');
  }
}

// Employee를 확장한 Excutiveofficer 클래스
class Excutiveofficer extends Employee {
  // 필드
  officeNumber: number;
  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  // 메서드 추가
  func() {
    // this.name; // 에러. private 속성이 있기에 접근 불가
    this.age; // 허용. proteced 속성이 있기에 파생 클래스에서 접근 가능
  }
}

const employee = new Employee('임한길', 35, '개발자');

// 아래처럼 객체의 프로퍼티를 수정할 수 있다.
// employee.name = '홍길동'; // 에러. private 속성이 있기에 외부에서 수정 불가
// employee.age = 30; // 에러. proteced 속성이 있기에 외부에서 수정 불가
employee.position = '디자이너';
console.log(employee); // Employee { name: '임한길', age: 35, position: '디자이너' }
