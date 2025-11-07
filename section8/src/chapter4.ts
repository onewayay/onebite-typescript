/**
 * 템플릿 리터럴 타입
 * 템플릿 리터럴을 이용해 특정 패턴을 갖는 String 타입을 만드는 기능
 */

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat' | 'chicken';

// 이렇게 하나씩 써서 만들면 비효율적이다
// type ColoredAnimal =
//   | 'red-dog'
//   | 'red-cat'
//   | 'red-chicken'
//   | 'black-dog'
//   | 'black-cat'
//   | 'black-chicken'
//   | 'green-dog'
//   | 'green-cat'
//   | 'green-chicken';

// 템플릿 리터럴을 이용해서 조합
type ColoredAnimal = `${Color}-${Animal}`;
