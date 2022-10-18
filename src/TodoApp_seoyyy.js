import React,{useCallback, useRef, useState} from "react";
import TodoForm from './TodoForm';
import TodoList from "./TodoList";



const TodoApp_seoyyy = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        }
    ]);
    const nextId = useRef(3);
    //todoList.js에서 호출되어 사용될 함수 구현
    const onInsert = useCallback(text => {
        setTodos(
            todos.concat({
                id: nextId.current,
                text,
                done: false,
            })
        );
        nextId.current += 1;
    }, [todos]);
    return (<div>
        <TodoForm onInsert={onInsert}/>
        <TodoList todos={todos} />
    </div>);
};

export default TodoApp_seoyyy;