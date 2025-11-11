import { useState } from 'react';
import { useTodoDispatch } from '../hooks/useTodoDispatch';

export default function Editor() {
  const [text, setText] = useState(''); // 초기값의 타입에 따라 text, setText의 타입을 추론해준다.
  const dispatch = useTodoDispatch();

  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e의 타입이 헷갈리면 input에 onChage 이벤트에서 동작을 정의후 e에 마우스 올려보면 타입을 알려준다.
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText('');
  };
  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
