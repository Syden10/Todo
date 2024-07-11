import { useTodos } from './hooks';
import { TodoList, TodoAdd } from './components';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();

  return (
    <>
      <h1>
        Tasks: {todosCount}, <small>pending: {pendingTodosCount} </small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className='col-5'>
          <h4>Add todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
