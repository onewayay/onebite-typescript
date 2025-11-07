/**
 * 인덱스드 엑세스 타입
 * 인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입
 * 객체, 배열, 튜플에 모두 사용 가능하다.
 * 원본 타입이 수정되어도 별도로 수정하지 않아도 되는 편리함이 있다.
 */

// 1. 객체 예시
// 주의할 점 1) 인덱스([])에는 값이 아니라 타입만 들어갈 수 있다.
// 주의할 점 2) 인덱스에 존재하지 않는 프로퍼티 이름을 쓰면 오류가 발생
// 프로퍼티 안에 있는 프로퍼티를 가져오고 싶다면 중첩 대괄호를 사용해서 가져올 수 있다.
// 예) Post[`author`]['id']

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// 작성자의 id와 name을 붙여서 반환
// [](인덱스) 안에 스트링 리터럴 타입으로 원하는 프로퍼티를 써주면 해당 프로퍼티의 타입을 추출해서 사용 가능
function printAuthorInfo(author: Post[`author`]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '임한길',
    age: 35,
  },
};

printAuthorInfo(post.author);

// 2. 배열 예시
// 대괄호안에 number 타입을 넣어주면 배열타입으로 부터 하나의 요소의 타입만 가져온다.
// [number] 타입을 넣고 그 뒤에 원하는 프로퍼티 타입을 []에 스트링 리터럴로 넣어서 추출

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 작성자의 id와 name을 붙여서 반환
function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.name} - ${author.id}`);
}

// 인덱스[] 안에 number 타입을 넣어주면 배열타입으로 부터 하나의 요소의 타입만 가져온다. (대괄호 안에 숫자를 넣어도 똑같다.)
//
const post2: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '임한길',
    age: 35,
  },
};

// 3. 튜플 예시
// 타입뒤에 []로 접근해서 인덱스번호를 이용해 해당 인덱스에 해당하는 타입 추출 가능
// [number]를 넣을 경우 튜플 타입안에 있는 모든 타입의 최적의 공통 타입을 추출

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number 타입
type Tup1 = Tup[1]; // string 타입
type Tup2 = Tup[2]; // booean 타입

// type Tup3 =Tup[3] // 에러. 없는 인덱스

type TupNum = Tup[number]; // string | number | boolean 타입
