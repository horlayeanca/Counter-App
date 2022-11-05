import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-600 flex w-full mt-16 items-center justify-center m-auto">
        Error 404 - Page Not Found.
      </h1>
      <p className="flex w-full justify-center mt-5 text-lg">
        oops... it seems I have brought you to where you don't know.. :)
      </p>
      <p className="flex w-full justify-center text-lg">
        click &nbsp;
        <Link
          to="/"
          className="cursor-pointer text-red-500 italic hover:text-blue-700"
        >
          here &nbsp;
        </Link>
        to go back home.
      </p>
    </div>
  );
}

export default Error;
