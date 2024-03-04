import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
const SocialIcons = () => {
  return (
    <div className="flex justify-center">
      <Link to="#">
        <i className="fab fa-facebook-f p-5" />
      </Link>
      <Link to="#">
        <i className="fab fa-instagram p-5" />
      </Link>
      <Link to="#">
        <i className="fab fa-twitter p-5" />
      </Link>
      <Link to="#">
        <i className="fab fa-linkedin-in p-5" />
      </Link>
    </div>
  );
};

export default SocialIcons;
