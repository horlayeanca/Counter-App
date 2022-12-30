import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

function Counter2() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);

    if (counter < 1) {
      setCounter(0);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setCounter(0);
  };

  const [newCount, setNewCount] = useState(0);

  const handleChange = (event) => {
    event.preventDefault();
    setNewCount(Number(event.target.value));
  };
  const setValue = (event) => {
    event.preventDefault();
    setCounter(newCount);
    setNewCount("");
  };
  return (
    <div className="bg-neutral-200 h-screen">
      <Helmet
        title={`Counter is ${counter}`}
        description="This is a simple counter app."
      />
      <div className="flex gap-5 justify-center items-center h-20 mx-auto py-5">
        <Link
          to="/counter"
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
      <div className="flex flex-col p-4 max-w-lg h-96 mx-auto rounded-xl w-full justify-center items-center bg-gradient-to-bl from-rose-700 via-violet-800 to-purple-800 shadow-xl">
        <h1 className="text-3xl pb-3">Count: {counter}</h1>
        <div className="flex flex-row flex-wrap flex-initial p-4 justify-around">
          <button
            className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
            onClick={handleIncrement}
          >
            increment
          </button>
          <button
            className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
            onClick={handleDecrement}
          >
            decrement
          </button>
          <button
            className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
            onClick={handleReset}
          >
            reset
          </button>
          <div className="mt-8">
            <input
              onChange={handleChange}
              value={newCount}
              className="p-3 rounded-lg mx-3"
              type="number"
            />
            <button
              onClick={setValue}
              className="bg-gradient-to-tr from-lime-500 to-rose-300 p-3 rounded-lg shadow-md hover:bg-slate-600 duration-300 hover:scale-105"
            >
              setValue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter2;
