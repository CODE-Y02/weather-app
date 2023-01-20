import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/favourite">Favourite</Link>
      </button>
    </div>
  );
};

export default Header;
