import { useTodoDispatch } from '../hooks/useTodoDispatch';
import type { Todo } from '../type';

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(todo.id);
  };
  return (
    <div>
      {todo.id}번 : {todo.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
