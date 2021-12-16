import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec } from "./actions";

const MainIncDec = () => {
  const value = useSelector((state) => state.IncDec);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-5xl font-bold text-center py-20">
        IncDec react-redux
      </h1>

      <div className="flex justify-center gap-4 bg-gray-600 rounded-lg p-10 ">
        <button
          title="INC"
          onClick={() => dispatch(Inc(5))}
          className="px-4 py-2 rounded-lg shadow-lg text-2xl bg-white"
        >
          Add
        </button>

        <p className="p-5 text-3xl text-white">{value}</p>

        <button
          title="DEC"
          onClick={() => dispatch(Dec(5))}
          className="px-4 py-2 rounded-lg shadow-lg text-2xl bg-white"
        >
          Del
        </button>
      </div>
    </>
  );
};

export default MainIncDec;
