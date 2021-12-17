import React, { useRef, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  emptyTodo,
} from "./actions/TodoActions";

const App = () => {
  const value = useSelector((state) => state.TodoReducer.todoList);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="bg-gradient-to-r from-gray-400 to-gray-200 font-semibold h-screen font-nunito">
      <div className="w-1/4 mobile:w-full tablet:w-3/4 mx-auto mobile:mx-0">
        <h1 className="text-5xl font-bold text-center py-20 mobile:text-4xl mobile:py-16">
          TODO react-redux
        </h1>

        <div className="flex flex-col justify-center">
          <input
            type="text"
            placeholder="type here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="rounded-md border-b-2 border-black text-2xl outline-none py-2 px-5 my-5 mobile:mx-2"
          />

          <div className="flex justify-evenly my-5">
            <button
              onClick={() => {
                dispatch(
                  addTodo({
                    id: new Date().getTime().toString(),
                    inputValue,
                  })
                );
                setInputValue("");
              }}
              className="px-4 py-2 text-2xl rounded-lg shadow-xl bg-green-800 text-white hover:bg-green-900"
            >
              ADD
            </button>
            <button
              onClick={() => dispatch(emptyTodo())}
              className="px-4 py-2 text-2xl rounded-lg shadow-xl bg-red-800 text-white hover:bg-red-900"
            >
              Empty
            </button>
          </div>
        </div>

        {value?.map((curElem) => {
          return (
            <ul key={curElem.id}>
              <li className="flex justify-between items-center bg-gray-600 px-5 py-3 border rounded-lg my-10">
                <div className="flex gap-2">
                  <button
                    onClick={() => dispatch(editTodo())}
                    className="text-2xl p-2 rounded-full shadow border bg-gray-200 hover:bg-blue-500 hover:text-white"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => dispatch(deleteTodo(curElem.id))}
                    className="text-2xl p-2 rounded-full shadow border bg-red-300 hover:bg-red-500 hover:text-white"
                  >
                    <FiTrash />
                  </button>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
