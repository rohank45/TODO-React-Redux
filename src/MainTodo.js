import React, { useRef, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  emptyTodo,
} from "./actions/TodoActions";

const MainTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef("");

  const value = useSelector((state) => state.TodoReducer.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gradient-to-r from-gray-400 to-gray-200 font-semibold h-screen font-nunito">
        <div className="w-1/4 mobile:w-full tablet:w-3/4 mx-auto mobile:mx-0">
          <h1 className="text-5xl font-bold text-center py-20 mobile:text-4xl mobile:py-16">
            TODO react-redux
          </h1>

          <div className="flex flex-col justify-center">
            <input
              type="text"
              value={inputValue}
              placeholder="type here"
              onChange={(e) => setInputValue(e.target.value)}
              className="rounded-md border-b-2 border-black text-2xl outline-none py-2 px-5 my-5 mobile:mx-2"
            />

            <div className="flex justify-evenly my-5">
              <button
                onClick={() => {
                  dispatch(
                    addTodo({
                      id: new Date().getTime().toString(),
                      inputValue: inputValue,
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
              <div
                key={curElem.id}
                className="flex justify-between items-center bg-gray-600 px-5 py-3 border rounded-lg my-10"
              >
                {isEdit ? (
                  <div>
                    <input
                      ref={inputRef}
                      type="text"
                      className="bg-gray-200 text-black rounded-lg text-xl py-2 px-2"
                      defaultValue={curElem.inputValue}
                    />

                    <button
                      onClick={() => {
                        inputRef.current = "";
                        setIsEdit(false);
                      }}
                      className="text-lg text-white p-2"
                    >
                      save edit
                    </button>
                  </div>
                ) : (
                  <p className="text-xl text-white">{curElem.inputValue}</p>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      dispatch(
                        editTodo({
                          id: curElem.id,
                          newInputValue: inputRef.current.value,
                        })
                      );

                      setIsEdit(true);
                    }}
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainTodo;
