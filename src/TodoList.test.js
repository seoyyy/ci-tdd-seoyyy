import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe('<TodoList />', () => {
    const sampleTodos = [{
        id: 1,
        text: 'TDD 배우기',
        done: false,
    },
    {
        id: 2,
        text: 'react-testing-library',
        done: true,
    }
    ];
    it('has two todos', () => {
        const {getByText} = render(<TodoList todos ={sampleTodos} />);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[0].text);
    });
  
    it('calls onToggle and onRemove', () =>{
        const onToggle = jest.fn();
        const onRemove = jest.fn();
        const { getByText,getAllByText } = render(<TodoList todos={sampleTodos}
            onToggle ={onToggle} onRemove={onRemove} />);
        //클릭이벤트가 주어졌는지
        fireEvent.click(getByText(sampleTodos[0].text));
        //함수가 호출이됐었는지 확인
        expect(onToggle).toBeCalledWith(sampleTodos[0].id);
        fireEvent.click(getAllByText('삭제')[0]);
        expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    });

});