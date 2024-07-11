import { todoReducer } from '../src/todoReducer';

describe('todoReudcer tests', () => {
  const initialState = [
    {
      id: 1,
      description: 'Learn React',
      done: false,
    },
    {
      id: 2,
      description: 'Learn Node',
      done: false,
    },
  ];

  test('should return default state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  test('should add a new todo item', () => {
    const action = {
      type: 'Add todo',
      payload: {
        id: 3,
        description: 'New todo item',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(3);
    expect(newState).toContain(action.payload);
  });

  test('should delete a todo', () => {
    const action = {
      type: 'Delete todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
  });

  test('should toggle todo done state', () => {
    const action = {
      type: 'Toggle todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
