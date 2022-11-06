import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="bg-neutral-200 h-screen">
      {" "}
      <div className="flex gap-5 justify-center items-center h-20 mx-auto pt-5">
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
    </div>
  );
}

export default Home;
