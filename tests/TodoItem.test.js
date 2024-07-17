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

    expect(liElement.className).toBe(
      'todo-item animate__animated animate__fadeInDown'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('todo-item-text ');
    expect(spanElement.className).not.toContain('todo-item-done');
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
    expect(spanElement.className).toContain('todo-item-text todo-item-done');
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

    const btnElement = screen.getByLabelText('deleteBtn');
    fireEvent.click(btnElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
