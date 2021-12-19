import { toast } from "react-toastify";

const initialState = {
  todoList: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const checkTodoLength = action.payload.inputValue.length > 5;
      const checkTodoExits = state.todoList?.find(
        (e) => e.inputValue === action.payload.inputValue
      );

      if (checkTodoExits) {
        toast.error("Todo is already present!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });

        return {
          todoList: [...state.todoList],
        };
      } else if (!checkTodoLength) {
        toast.error("Todo should have minimum 5 characters!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });

        return {
          todoList: [...state.todoList],
        };
      }

      toast.success("Todo added successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

      console.log(state.todoList);

      return {
        todoList: [...state.todoList, action.payload],
      };

    case "DELETE_TODO":
      toast.success("Todo Deleted successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

      return {
        todoList: [...state.todoList.filter((e) => e.id !== action.payload)],
      };

    case "EDIT_TODO":
      toast.success("Todo updated successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

      return {
        todoList: [
          ...state.todoList,
          {
            ...state.todoList.filter((e) => e.id === action.payload.id),
            inputValue: action.payload.newInputValue,
          },
        ],
      };

    case "EMPTY_TODO":
      toast.success("Your Todo List is Empty Now!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

      return {
        todoList: [],
      };

    default:
      return state;
  }
};

export default TodoReducer;
