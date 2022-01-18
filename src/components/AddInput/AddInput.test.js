import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from './AddInput';

const mockedSetTodo = jest.fn()

describe("Header test", () => {
    test('should check the prop', () => {
      render(
        <AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />
      )
      const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
      expect(inputElement).toBeTruthy();
    });

    test('should be able to type in input', () => {
        render(
          <AddInput
              todos={[]}
              setTodos={mockedSetTodo}
          />
        )
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        fireEvent.change(inputElement, { target: { value: "Doing smth"} })
        expect(inputElement.value).toBe("Doing smth");
    });

    test('should have empty input when click btn', () => {
        render(
          <AddInput
              todos={[]}
              setTodos={mockedSetTodo}
          />
        )
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        const addBtn = screen.getByRole('button', {name: /add/i})
        fireEvent.change(inputElement, { target: { value: "Doing smth"} })
        fireEvent.click(addBtn)
        expect(inputElement.value).toBe("");
    });
})
