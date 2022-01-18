import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import TodoFooter from './TodoFooter'


const MockFooter = ({ numb }) => {
    return (
        <BrowserRouter>
            <TodoFooter
                numberOfIncompleteTasks={numb}
            />
        </BrowserRouter>
    )
}

describe("It is todo footer test", () => {
    test('check incompleted tasks', () => {
        render(<MockFooter numb={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i)
        expect(paragraphElement).toBeInTheDocument();
    });
    
    test('check single incompleted task', () => {
        render(<MockFooter numb={1} />);
        const paragraphElement = screen.getByText(/1 task left/i)
        expect(paragraphElement).toBeInTheDocument();
    });
})