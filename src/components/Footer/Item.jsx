import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <ul className="mr-5">
      <h1 className="mb-1 font-semibold text-md md:text-xl mr-4 ">
        {props.title}
      </h1>

      {props.Links.map((link) =>
        user.isAuthenticated & !user.userData?.isAdmin ? (
          <li key={link.name}>
            <Link
              to={link.link}
              className="text-gray-400 text-xs md:text-lg hover:text-red-400 duration-300
           cursor-pointer leading-6"
            >
              {link.name}
            </Link>
          </li>
        ) : (
          <li key={link.name}>
            <Link
              to="/auth/consumerLogin"
              className="text-gray-400 text-xs md:text-lg hover:text-red-400 duration-300
           cursor-pointer leading-6"
            >
              {link.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Item;
