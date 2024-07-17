import { useTodos, useDate, useTime } from './hooks';
import { TodoList, TodoAdd } from './components';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    doneTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleClearList,
    handleToggleAll,
    handleNewTodo,
    allMarkedDone,
    handleEditTodo,
    handleUpdateTodo,
  } = useTodos();

  const { dateNoYear } = useDate();

  const { time } = useTime();

  return (
    <>
      <small className='animate__animated animate__fadeInDown todo-count'>
        {doneTodosCount} of {todosCount} done
      </small>
      <header className='animate__animated animate__fadeInDown'>
        <div className='container title-box'>
          <h1>todo</h1>
          <div className='date'>{dateNoYear}</div>
          <div className='time'>{time}</div>
        </div>
      </header>
      <main>
        <section className='container'>
          <div className='row'>
            <div className='col-12 toggle-all-box animate__animated animate__fadeInDown'>
              <span
                className='toggle-all'
                onClick={() => {
                  handleToggleAll();
                }}
              >
                {allMarkedDone ? <>Mark all undone</> : <>Mark all done</>}
              </span>
              {/* <span onClick={() => {}}>Mark all undone</span> */}
              <span className='clear-list' onClick={() => handleClearList()}>
                Clear list
              </span>
            </div>
          </div>
        </section>
        <section className='container content-box'>
          <div className='row'>
            <div className='col-12'>
              <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
                onEditTodo={handleEditTodo}
                onUpdateTodo={handleUpdateTodo}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='animate__animated animate__fadeInUp'>
        <section className='container add-todo-box'>
          <div className='row'>
            <div className='col-12'>
              <TodoAdd onNewTodo={handleNewTodo} />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
