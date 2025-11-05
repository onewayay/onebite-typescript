/**
 * 클래스
 * 동일한 모양의 객체를 더 쉽게 생성하도록 도와주는 문법
 * 보통 이름을 파스칼 표기법(첫글자를 대문자)를 사용한다
 */

// 예) 학생을 객체로 표현
// 동일한 모양의 객체. 중복 코드가 발생
let studentA = {
  name: '임한길',
  grade: 'A+',
  age: 35,
  study() {
    console.log('열심히 공부');
  },
  introduce() {
    console.log('안녕하세요');
  },
};

let studentB = {
  name: '홍길동',
  grade: 'B-',
  age: 20,
  study() {
    console.log('열심히 공부');
  },
  introduce() {
    console.log('안녕하세요');
  },
};

// 이럴 때 자바스크립트의 클래스 문법을 사용하면 좋다. 객체를 만들어내는 틀 Class를 사용
class Student {
  // 필드 (클래스가 만들어낼 객체의 프로퍼티)
  name;
  grade;
  age;

  // 생성자 (클래스를 호출하면 실제를 객체를 생성하는 역할. 메서드 형태를 갖는다.)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // (정적)메서드
  study() {
    console.log('열심히 공부');
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 아래는 Student 클래스를 이용해서 만들었으니 스튜던트 인스턴트
let studentC = new Student('임한길', 'A+', 35);
console.log(studentC); // Student { name: '임한길', grade: 'A+', age: 35 }
studentC.study(); // 열심히 공부
studentC.introduce(); // 안녕하세요 임한길 입니다

// ---- Student 클래스의 파생 클래스들이 생긴다면?(Student 클래스를 기반으로 추가적인 필드와 메서드를 갖는 클래스)
// 상속을 이용하기.
// class StudentDeveloper {
//   // 필드
//   name;
//   grade;
//   age;
//   favoriteSkill;

//   // 생성자
//   constructor(name, grade, age, favoriteSkill) {
//     this.name = name;
//     this.grade = grade;
//     this.age = age;
//     this.favoriteSkill = favoriteSkill;
//   }

//   // 메서드
//   study() {
//     console.log('열심히 공부');
//   }
//   introduce() {
//     console.log(`안녕하세요 ${this.name} 입니다`);
//   }
//   programming() {
//     console.log(`${this.favoriteSkill}로 프로그래밍 함`);
//   }
// }

// Student 클래스를 상속받는 StudentDeveloper 클래스
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 필수! super 함수를 호출하면 부모클래스의 생성자가 호출된다.
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

let studentDeveloper = new StudentDeveloper('임한길', 'A', 35, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programming();
//StudentDeveloper {
//   name: '임한길',
//   grade: 'A',
//   age: 35,
//   favoriteSkill: 'TypeScript'
// }
// TypeScript로 프로그래밍 함
