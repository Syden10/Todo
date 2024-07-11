import { useReducer, useEffect } from 'react';
import { todoReducer } from '../todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: 'Delete todo',
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'Toggle todo',
      payload: id,
    });
  };

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount,
    pendingTodosCount,
  };
};
