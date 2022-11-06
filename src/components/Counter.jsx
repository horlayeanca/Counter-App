import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

function countReducer(initialState = 0, action) {
  if (action === "increment") {
    return initialState + 1;
  } else if (action === "decrement" && initialState > 0) {
    return initialState - 1;
  } else if (action === "reset") {
    return 0;
  } else if (action === "setValue") {
    return;
  } else {
    return initialState;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="bg-neutral-200">
      <Helmet
        title={`Counter is ${count}`}
        description="This is a simple counter app with useReducer."
      />
      <div className="flex gap-5 justify-center items-center h-20 mx-auto pt-5">
        <Link
          to="/"
          className="bg-teal-600 px-12 py-4 rounded-xl text-white font-bold hover:bg-teal-800 hover:scale-105 duration-300"
        >
          useReducer
        </Link>
        <Link
          to="/counter2"
          className="bg-teal-600 px-12 py-4 rounded-xl text-white font-bold hover:bg-teal-800 hover:scale-105 duration-300"
        >
          customHook
        </Link>
        <Outlet />
      </div>
      <div className="bg-neutral-200 w-full h-screen flex items-center">
        <div></div>
        <div className="flex flex-col p-4 max-w-lg h-96 mx-auto rounded-xl w-full justify-center items-center bg-gradient-to-bl from-red-700 via-pink-500 to-slate-500 shadow-xl">
          <h1 className="text-3xl pb-3">Count: {count}</h1>
          <div className="flex flex-row flex-wrap flex-initial p-4 justify-around">
            <button
              className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
              onClick={() => dispatch("increment")}
            >
              increment
            </button>
            <button
              className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
              onClick={() => dispatch("decrement")}
            >
              decrement
            </button>
            <button
              className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
              onClick={() => dispatch("reset")}
            >
              reset
            </button>
            <div className="mt-8">
              <input
                className="p-3 rounded-lg mx-3"
                type="number"
                onChange={(e) => dispatch("setValue")}
              />
              <button
                className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
                onClick={(e) => dispatch()}
              >
                setValue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
