export const addTodo = (message) => {
  return {
    type: "ADD_TODO",
    payload: message,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const editTodo = (message) => {
  return {
    type: "EDIT_TODO",
    payload: message,
  };
};

export const emptyTodo = () => {
  return {
    type: "EMPTY_TODO",
  };
};
