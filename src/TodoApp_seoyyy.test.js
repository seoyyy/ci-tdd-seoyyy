import React from "react";
import {render, fireEvent} from '@testing-library/react';
import TodoApp_seoyyy from "./TodoApp_seoyyy";

describe('<TodoApp_seoyyy />', () => {
    it('renders TodoForm TodoList', () => {
            const {getByText, getByTestId} = render(<TodoApp_seoyyy />);
            getByText('등록'); //TodoFrom 화면에 있는지 확인
            getByTestId('TodoList'); //TodoList 화면에 있는지 확인
    });
});