import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../src/components';

describe('<TodoItem /> tests', () => {
  const todo = {
    id: 1,
    description: 'Learn React',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render pending todo', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const liElement = screen.getByRole('listitem');
    // console.log(liElement.innerHTML);

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    // console.log(spanElement.className);
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should render completed todo', () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    // console.log(spanElement.className);
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('span should trigger onToggleTodo state change', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('span should trigger onDeleteTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    // screen.debug();
    const btnElement = screen.getByLabelText('deleteBtn');
    fireEvent.click(btnElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
