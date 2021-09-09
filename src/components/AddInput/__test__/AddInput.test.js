import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe("Add input", () => {
    it('should render input', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        expect(inputElement).toBeInTheDocument();
    });


    it('should be able to type into input', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        fireEvent.change(inputElement, { target: { value: "Go shopping" } })
        expect(inputElement.value).toBe("Go shopping");

    });

    it('should have empty input when button is clicked', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        const addButton = screen.getByRole("button", { name: /Add/i })
        fireEvent.change(inputElement, { target: { value: "Go shopping" } })
        fireEvent.click(addButton)
        expect(inputElement.value).toBe("");

    });
})

