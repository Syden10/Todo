import { TodoItem } from './';
import PropTypes from 'prop-types';

export const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
  onUpdateTodo,
}) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onEditTodo={onEditTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func,
  onUpdateTodo: PropTypes.func,
};
