/**
 * 맵드 타입 기반의 유틸리티 타입들
 * Partial<T>, Required<T>, Readonly<T>
 */

/**
 * Partial<T>
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 * Required와 반대
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 중간 저장 데이터 - 모든 프로퍼티가 존재하는건 아님
const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안...',
};

// 나만의 Partial 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type Partial<T> = {
  [key in keyof T]?: T[key];
};

/**
 * Required<T>
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 * Partial과 반대
 */

// 썸네일이 필수로 들어가도록...
const withThumbnailPost: Required<Post> = {
  title: '한입 타입스크립트 후기',
  tags: ['ts'],
  content: '',
  thumbnailURL: 'https://...',
};

// 나만의 Required 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type Required<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Readonly<T>
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글',
  tags: [],
  content: '',
};

// readonlyPost.title = ''; // 불가능

// 나만의 Readonly 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};
