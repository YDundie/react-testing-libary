import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom'

const mockedSetTodo = jest.fn()
const MockTodo = () => {
    return (

        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

describe("Add Todo", () => {
    it('should render Todo', () => {
        render(<MockTodo></MockTodo>);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        const addButton = screen.getByRole("button", { name: /Add/i })
        fireEvent.change(inputElement, { target: { value: "Go shopping" } })
        fireEvent.click(addButton)
        const divElement = screen.getByText(/Go shopping/i)
        expect(divElement).toBeInTheDocument();
    });

    const addTask = (tasks) => {
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        const addButton = screen.getByRole("button", { name: /Add/i })
        tasks.forEach(task => {
            fireEvent.change(inputElement, { target: { value: task } })
            fireEvent.click(addButton)
        })
    }

    it('should render Todos', () => {
        render(<MockTodo></MockTodo>);

        addTask(["Go shopping", "Go walking", "Go work out"])

        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3)
    });


    it('should render default not active', () => {
        render(<MockTodo></MockTodo>);

        addTask(["Go shopping"])

        const divElement = screen.getByText("Go shopping")
        expect(divElement).not.toHaveClass('todo-item-active')
    });

    it('should render default not active', () => {
        render(<MockTodo></MockTodo>);

        addTask(["Go shopping"])

        const divElement = screen.getByText("Go shopping")
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')
    });
})

