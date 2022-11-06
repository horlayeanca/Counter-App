import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-600 flex w-full mt-16 items-center justify-center m-auto">
        Error 404 - Page Not Found.
      </h1>
      <p className="flex w-full justify-center mt-5 text-lg">
        Click &nbsp;{" "}
        <Link
          to="/"
          className="cursor-pointer text-red-500 italic hover:text-blue-600"
        >
          here &nbsp;
        </Link>{" "}
        to go back.
      </p>
    </div>
  );
}

export default Error;
