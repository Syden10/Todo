import { useReducer, useEffect, useState } from 'react';
import { todoReducer } from '../todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [allMarkedDone, setAllMarkedDone] = useState();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    if (todos.length > 0) {
      const allDone = todos.every((todo) => todo.done);
      setAllMarkedDone(allDone);
    }
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

  const handleClearList = () => {
    const action = {
      type: 'Clear list',
    };
    dispatch(action);
    setAllMarkedDone(false);
  };

  const handleMarkAllDone = () => {
    const action = {
      type: 'Mark all done',
    };
    dispatch(action);
  };

  const handleMarkAllUndone = () => {
    const action = {
      type: 'Mark all undone',
    };
    dispatch(action);
  };

  const handleToggleAll = () => {
    if (allMarkedDone) {
      handleMarkAllUndone();
    } else {
      handleMarkAllDone();
    }
    setAllMarkedDone(!allMarkedDone);
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'Toggle todo',
      payload: id,
    });
  };

  const handleEditTodo = (id) => {
    dispatch({
      type: 'Trigger todo edit',
      payload: id,
    });
  };

  const handleUpdateTodo = (id, text) => {
    dispatch({
      type: 'Update edited todo',
      payload: { id, text },
    });
  };

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleClearList,
    handleToggleAll,
    allMarkedDone,
    handleNewTodo,
    todosCount,
    pendingTodosCount: pendingTodosCount,
    handleEditTodo,
    handleUpdateTodo,
  };
};
