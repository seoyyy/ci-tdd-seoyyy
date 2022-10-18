import React from "react";
import TodoItem from "./TodoItem";


                //props로 받아주기
const TodoList = ({todos, onToggle, onRemove}) => {
    return (
    <ul data-testid="TodoList">
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id}
            onToggle={onToggle} onRemove={onRemove} />   //넣어논 todos만큼 처리될거임
            //onToggle이라는 pros에 넘어온 onToggle넘겨주기
        ))}
    </ul>
    );
};
export default TodoList;