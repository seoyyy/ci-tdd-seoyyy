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
    const onToggle = useCallback(id => {
        //데이터 세팅
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
        );
    },[todos]);

    //onRemove에 대한작업
    const onRemove = useCallback(id => {
        setTodos(
            todos.filter(todo => todo.id !== id) // 같지 않은것들을 빼는 -filter
        );
    },[todos]);

    return (<div>
        <TodoForm onInsert={onInsert}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove ={onRemove} />
    </div>);
};

export default TodoApp_seoyyy;
