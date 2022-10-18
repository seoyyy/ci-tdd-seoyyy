import React from "react";
import {render, fireEvent, getByText} from '@testing-library/react';
import TodoApp_seoyyy from "./TodoApp_seoyyy";

describe('<TodoApp_seoyyy />', () => {
    it('renders TodoForm TodoList', () => {
            const {getByText, getByTestId} = render(<TodoApp_seoyyy />);
            getByText('등록'); //TodoFrom 화면에 있는지 확인
            getByTestId('TodoList'); //TodoList 화면에 있는지 확인
    });
    it('renders two defaults todos', () => {
        const {getByText} = render(<TodoApp_seoyyy />);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    });
    it('creates new todo', () =>{
        const { getByPlaceholderText, getByText} = render(<TodoApp_seoyyy />);
        //브라우저에서 인풋박스에서 타이핑 치는 효과 확인
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'), 
        {target: {value: '새 항목 추가하기'}}
        );
        //얘가 등록이 되려면 등록버튼 
        fireEvent.click(getByText('등록'));
        getByText('새 항목 추가하기');
    });
    it('toggles todo', ()=> {
        const {getByText} =render(<TodoApp_seoyyy />);
        const todoText = getByText('TDD 배우기');
        expect(todoText).not.toHaveStyle('text-decoration: line-through;');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through;');
    });

    it('remove todo', () => {
        const {getByText} = render(<TodoApp_seoyyy />);
        const todoText =getByText('TDD 배우기');
        const removeButton = todoText.nextSibling;
        fireEvent.click(removeButton);
        //TDD배우기 글씨 화면에 없는거 테스트
        expect(todoText).not.toBeInTheDocument();
    });
});