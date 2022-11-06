import React, { useState } from "react";

function Counter2() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
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

  const setValue = (event) => {
    event.preventDefault();
    setCounter(this.state.value);
  };
  return (
    <div className="bg-neutral-200 w-full h-screen flex items-center">
      <div className="flex flex-col p-4 max-w-lg h-96 mx-auto rounded-xl w-full justify-center items-center bg-sky-500 shadow-xl">
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
            <input className="p-3 rounded-lg mx-3" type="number" />
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
