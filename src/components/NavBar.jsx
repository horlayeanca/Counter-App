import React from "react";

function NavBar() {
  const navigations = [
    {
      id: 1,
      link: "Counter",
    },
    {
      id: 2,
      link: "useReducer",
    },
    {
      id: 3,
      link: "products",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="bg-slate-600 h-16">
      <ul className="flex items-center justify-evenly top-0 left-0 w-full p-4 text-white">
        {navigations.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:text-rose-400 duration-300 hover:scale-105"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
