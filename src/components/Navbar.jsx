import React from "react";
import { routes } from "../constants/routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row">
        {routes.map((routes, index) => (
          <li key={index}>
            <Link to={routes.path}>{routes.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
