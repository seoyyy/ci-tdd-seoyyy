import React,{useState} from "react";
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
    return (<div>
        <TodoForm />
        <TodoList todos={todos} />
    </div>);
};

export default TodoApp_seoyyy;
