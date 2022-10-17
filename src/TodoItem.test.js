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

    //done한 할일 줄긋기 - 줄긋는 효과 속성이 있으면 true
    it('shows line-through on span when done is true', () => {
        const{span} = setup({todo: {...sampleTodo, done: true } });
        expect(span).toHaveStyle('text-decoration: line-through;');
    });
    it('shows line-through on span when done is false', () => {
        const{span} = setup({todo: {...sampleTodo, done: false } });
        expect(span).not.toHaveStyle('text-decoration: line-through;');
    });



});