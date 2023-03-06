import React from "react";
import { NavLink } from "react-router-dom";

export default function LinkComponent(props) {
  return (
    <div>
      <NavLink
        to={props.path}
        className="transition duration-300 ease-in-out hover:text-red-400 font-medium"
      >
        {props.value}
      </NavLink>
    </div>
  );
}

export function LinkComponentM(props) {
  return (
    <div>
      <NavLink
        to={props.path}
        className="block px-4 py-2 bg-white border-b border-blue-50 text-center text-lg"
      >
        {props.value}
      </NavLink>
    </div>
  );
}
