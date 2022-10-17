import React from "react";

const TodoItem = ({todo , onToggle, onRemove}) =>{
    const {id, text, done} = todo;
    return (
    <li>
        <span style={{ // 삼항연산자를 이용해 done이라는 변수가 들어오며 줄을 그어서 출력하고 아니면 아무것도하지마라
            textDecoration: done ? 'line-through' : 'none'
        }}
        onClick={() => onToggle(id)}>{text}</span>
        <button onClick={() => onRemove(id)}>삭제</button>
    </li>);
};
export default TodoItem;