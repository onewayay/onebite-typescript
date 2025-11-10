/**
 * 맵드 타입 기반의 유틸리티 타입들
 * Pick<T, K>, Omit<T, K>, Record<V, K>
 */

/**
 * Pick<T, K>
 * -> 객체 타입으로부터 특정 프로퍼티를 골라내는 타입
 * -> K에는 원본 객체 타입의 프로퍼티만 넣을 수 있다.
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// tag나 thumbnail이 없던 때 만들어진 게시글
// title과 contet 프로퍼티만 있는 타입으로 새롭게 정의
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠',
};

// 나만의 Pick 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type Pick<T, K extends keyof T> = {
  // K extends keyof T 이 문법은 아래와 같이 해석하면 된다. (Pick<Post, 'title' | 'content' 이렇게 썻다는 가정)
  // -> K extends 'title' | 'content' | 'tags' | 'thumbnailURL'
  // -> 'title' | 'content' extends 'title' | 'content' | 'tags' | 'thumbnailURL'

  [key in K]: T[key];
};

/**
 * Omit<T, K>
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// 제목이 없는 게시글
const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

// 나만의 Omit 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

/**
 * Record<V, K>
 * -> 동일한 패턴을 가지는 객체타입 정의 가능
 */

// 썸네일 만을 위한 타임. + 디바이스별 사이즈 제공하도록 업그레이드
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// Record 타입을 이용해서 중복 코드 개선
type Thumbnail = Record<
  'large' | 'medium' | 'samll' | 'watch',
  { url: string; size: number }
>;

// 나만의 Omit 타입 직접 구현해보기
// -> 이런식으로 구현된다고 알아보기만 하면 됨. 실제로는 그냥 위에처럼 쓰면 됨
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
