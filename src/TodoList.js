import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({todos}) => {
    return (
    <ul>
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />   //넣어논 todos만큼 처리될거임
        ))}
    </ul>
    );
};
export default TodoList;