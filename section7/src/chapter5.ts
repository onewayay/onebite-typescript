// /**
//  * 프로미스
//  */

// // 기본으로 unknown으로 추론
// // 성공: 새로운 Promise를 생성할 때 비동기 결과값(resolve)의 타입을 제네릭으로 설정
// // 실패: reject 함수에 인수로 전달하는 값 즉 실패의 결과값 타입은 정의할 수 없다.
// // ->  catch 메서드에서 사용하려면 타입 좁히기를 통해 안전하게 사용하는 것을 권장

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject('~~ 때문에 실패');
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 200
});

promise.catch((err) => {
  if (typeof err === 'string') {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

// 게시글을 불러오는 함수의 타입을 정의하는 예시

interface PostType {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<PostType> {
  // 서버나 데이터가 없으니 임시로 promise 객체를 반환. 3초 뒤에 임시 게시물 객체 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '1번 게시물 제목',
        content: '1번 게시물 내용',
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log(post.id, post.title, post.content);
});
