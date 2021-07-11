import React, { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../hooks";


import { useAuthContext } from "../../Providers";

//Styles
import "./style.scss";

//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Navbar = () => {
  const { setIsLoggedIn } = useAuthContext();

  const [visible, setVisible] = useState(false);
  const sideMenuRef = useRef(null);

  useOnClickOutside(sideMenuRef, () => setVisible(false));
  return (
    <div className="navbar-container">
      <Logo />
      <div className="menu-container" ref={sideMenuRef}>
        <div
          className={`burger-menu ${visible ? "remove" : ""}`}
          onClick={() => setVisible(!visible)}
        >
          <span></span>
          <span className="middle"></span>
          <span></span>
        </div>
        <div className={`side-menu ${visible ? "active" : ""}`}>
          <Link to="/home">الكاشير</Link>
          <Link to="/statistics">الإحصائيات</Link>
          <button onClick={()=>setIsLoggedIn(false)}>تسجيل الخروج</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
