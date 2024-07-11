import { useForm } from '../hooks';
import PropTypes from 'prop-types';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='What to do?'
        className='form-control'
        value={description}
        onChange={onInputChange}
        name='description'
      />
      <button type='submit' className='btn btn-outline-primary mt-2'>
        Add task
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
