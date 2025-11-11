import { useContext } from 'react';
import { TodoDispatchContext } from '../contexts/TodoContext';

// TodoDispatchContext에 값들이 null이 아니면 그대로 값들을 반환하고 null이면 에러를 던지는 커스텀훅
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) {
    throw new Error('TodoDispatchContext에 문제가 있다.');
  }
  return dispatch;
}
