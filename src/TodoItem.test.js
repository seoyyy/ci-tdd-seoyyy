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
    

    it('calls onToggle', () => {
        //onToggle이라는 함수가 호출이 됐나 안됐나 확인
        const onToggle = jest.fn();
        const {span} =setup({onToggle});
        //span태그가 클릭됬는지 확인. 클릭이 되었을때 onToggle이라는 함수가 호출되도록 체크하기전에
        fireEvent.click(span);
        expect(onToggle).toBeCalledWith(sampleTodo.id); //onToggle이 호출이 됫을때 id가 1이라는 애로 호출이 됐니?
    });

    //삭제 버튼 눌럿을때 삭제 되도록
    it('calls onRemove', () => {
        const onRemove = jest.fn();
        const {button} =setup({onRemove});  //버튼이 넘어와서
        fireEvent.click(button); //버튼을 클릭하면
        expect(onRemove).toBeCalledWith(sampleTodo.id); //onRemove 함수가 호출이 되느냐
    });
});