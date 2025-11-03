/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

// tag 프로퍼티가 string 리터럴 타입으로 정의되기에 서로 겹칠수 없는 서로소 집합의 관계가 된다.
type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}포인트 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  // if (user.tag === 'ADMIN') {
  //   // Admin 타입
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if (user.tag === 'MEMBER') {
  //   // Member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
  // } else {
  //   // Guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  // }

  // 이렇게 switch를 사용해서도 가능
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
      break;
    }
    case 'GUEST': {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
}

/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// type AsyncTask = {
//   state: 'LOADING' | 'FAILED' | 'SUCCESS';
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메세지 출력
// 성공 -> 성공: 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩중');
      break;
    }
    // 서로소 유니온 타입을 만들어 타입을 좁히지 않으면 FAILED와 SUCCESS에는 옵셔널 ?이 붙는다.
    // error와 response가 선택적 프로퍼티이기 때문에 FAILED여도 error를 가지는지 확신할 수 없고, SUCCESS여도 response를 가지는지 확신할 수 없다.
    // 이런 문제를 해결하기 위해 위에서 서로소 유니온 타입을 생성하여 해결
    case 'FAILED': {
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case 'SUCCESS': {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: 'LOADING',
};
const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은 ~',
  },
};
const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터 내용',
  },
};
