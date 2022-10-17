import React from "react";
import {render, fireEvent} from '@testing-library/react';
import TodoItem from "./TodoItem";

describe('<TodoItem />', () => {
    const sampleTodo ={
        id: 1,
        text: 'TDD 배우기',
        done: false,
    };
    const setup = (props = {}) => {
        const utils = render(<TodoItem todo={sampleTodo} {...props} />);
        const { getByText } = utils;
        const todo = sampleTodo;
        const span = getByText(todo.text);
        const button = getByText('삭제');
        return{
            ...utils,
            span,
            button,
        };
    };

    //필요한 UI구성 요소가 있는지 확인하는 테스트 로직
    it('has span and button', () => {
        const{span, button} = setup();
        expect(span).toBeTruthy();   //span이 있냐
        expect(button).toBeTruthy(); //버튼이 있냐 
    });
});