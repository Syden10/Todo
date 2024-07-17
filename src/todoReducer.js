export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'Add todo':
      return [action.payload, ...initialState];
    case 'Delete todo':
      return initialState.filter((todo) => todo.id !== action.payload);
    case 'Clear list':
      return (initialState = []);
    case 'Mark all done':
      return initialState.map((todo) => ({ ...todo, done: true }));
    case 'Mark all undone':
      return initialState.map((todo) => ({ ...todo, done: false }));
    case 'Toggle todo': {
      // Step 1: Toggle the `done` status of the targeted item.
      let toggledTodo;
      const updatedTodos = initialState.map((todo) => {
        if (todo.id === action.payload) {
          toggledTodo = { ...todo, done: !todo.done };
          return toggledTodo;
        }
        return todo;
      });

      // Step 2: Separate the todos into "done" and "undone", excluding the toggled item.
      const doneTodos = updatedTodos.filter(
        (todo) => todo.id !== action.payload && todo.done
      );
      const undoneTodos = updatedTodos.filter(
        (todo) => todo.id !== action.payload && !todo.done
      );

      // Step 3: Insert the toggled todo item into the appropriate position.
      if (toggledTodo && toggledTodo.done) {
        // If the item is now done, move it to the top of the done items.
        doneTodos.unshift(toggledTodo);
      } else if (toggledTodo) {
        // If the item is now undone, move it to the last of the undone items.
        undoneTodos.push(toggledTodo);
      }

      // Concatenate the "undone" and "done" lists back together.
      return [...undoneTodos, ...doneTodos];
    }
    case 'Trigger todo edit':
      return initialState.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: true }
          : { ...todo, isEditing: false }
      );
    case 'Update edited todo':
      return initialState.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.text, isEditing: false }
          : todo
      );
    default:
      return initialState;
  }
};
