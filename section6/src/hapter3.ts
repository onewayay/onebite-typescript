/**
 * 인터페이스와 클래스
 * implements 키워드 사용
 * 클래스명 implements 인터페이스명 으로 사용
 * 인터페이스롷 정의하는 필드들은 무조건 public이다.
 * 다른 접근 제어자를 사용하고 싶으면 따로 생성자의 매개변수에 추가해줄 것
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  mover(): void;
}

// class Character implements CharacterInterface {
//   // 필드
//   name: string;
//   moveSpeed: number;

//   // 생성자
//   constructor(name: string, moveSpeed: number) {
//     this.name = name;
//     this.moveSpeed = moveSpeed;
//   }

//   // 메서드
//   mover(): void {
//     console.log(`${this.moveSpeed} 속도로 이동!`);
//   }
// }

// 접근 제어자를 사용해서 간소화
class Character implements CharacterInterface {
  // 생성자
  // 인터페이스를 정의하는 필드들은 무조건 public이다. 다른 접근 제어자 속성 사용 불가
  //다른 접근 제어자를 사용하고 싶으면 따로 생성자의 매개변수에 추가해줄 것
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  // 메서드
  mover(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
