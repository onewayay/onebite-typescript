/**
 * 타입스크립트의 클래스
 * 자바스크립트의 클래스로 취급이 되면서, 하나의 타입으로 취급되기도 한다.
 */

// 이런 직장인 객체를 만들거다.
const employee = {
  name: '임한길',
  age: 35,
  position: 'developer',
  work() {
    console.log('일하는 중');
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일하는 중');
  }
}

const employeeB = new Employee('임한길', 35, '개발자');
console.log(employeeB); // Employee { name: '임한길', age: 35, position: '개발자' }

// 선언한 클래스는 타입으로도 활용할 수 있다.
const employeeC: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {},
};

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
}

const employeeD = new Excutiveofficer('홍길동', 50, '대표이사', 301);
