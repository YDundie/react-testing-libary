import { render, screen } from '@testing-library/react';
import ToDoFooter from '../ToDoFooter';
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from '../ToDoFooter';
const MockToDoFooter = ({ numberOfIncompleteTasks }) => {

    return <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}></TodoFooter>
    </BrowserRouter>

}

it('should render correct number of incomplete tasks', () => {
    render(<MockToDoFooter numberOfIncompleteTasks={2} />);
    const paragraph = screen.getByText(/2 tasks left/i)
    expect(paragraph).toBeInTheDocument();
});


it('should render "task" when number of incomplete tasks is one', () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paragraph = screen.getByText(/1 task left/i)
    expect(paragraph).toBeInTheDocument();
});

it('should render "task" when number of incomplete tasks is one', () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paragraph = screen.getByText(/1 task left/i)
    expect(paragraph).toBeVisible()
});
