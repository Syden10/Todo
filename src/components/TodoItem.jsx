import PropTypes from 'prop-types';
import { CheckIcon, EditIcon, TrashIcon } from './';
import { useState } from 'react';

export const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
  onUpdateTodo,
}) => {
  const [editText, setEditText] = useState(todo.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    onEditTodo(todo.id);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onUpdateTodo(todo.id, editText);
    setIsEditing(false);
  };
  return (
    <li
      onClick={() => onToggleTodo(todo.id)}
      className='todo-item animate__animated animate__fadeInDown'
    >
      <form id='edit-form' onSubmit={(e) => handleSave(e)}>
        {isEditing ? (
          <input
            type='text'
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSave(e);
              }
            }}
            autoFocus
          />
        ) : (
          <span
            className={`todo-item-text ${todo.done ? 'todo-item-done' : ''}`}
            aria-label='span'
          >
            {todo.description}
          </span>
        )}
        <div className='status-bar'>
          <div
            className='check-icon-box'
            style={{
              color: todo.done && 'lightgray',
            }}
          >
            {todo.done ? <CheckIcon /> : ''}
          </div>
          <button
            type='submit'
            className={`edit-btn-box ${isEditing ? 'show' : 'hidden'}`}
            onClick={(e) => {
              e.stopPropagation();
              isEditing && handleSave(e);
            }}
          >
            <CheckIcon style={{ svg: { width: '24px' } }} />
          </button>
          <div
            className={`edit-btn-box ${isEditing ? 'hidden' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              !isEditing && handleEdit();
            }}
          >
            <EditIcon />
          </div>
          <div
            aria-label='deleteBtn'
            className='delete-btn-box'
            onClick={() => onDeleteTodo(todo.id)}
          >
            <TrashIcon />
          </div>
        </div>
      </form>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func,
  onUpdateTodo: PropTypes.func,
};
