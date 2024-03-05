import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../img/logo2.png";

export default function NavBar() {
const [ isActive, setIsActive ] = useState("home");
function handleTabClick(tab) {
    setIsActive(tab);
}

  return (
    <div className="header-bottom sticky">
      <div className="container">
        <div className="row justify-content-between">
          <div className="navbar-header col-auto">
            <Link to="/" className="logo navbar-brand">
              <img id="logo_img" src={Logo2} alt="logo" />
            </Link>
          </div>
          <div className="main-menu mean-menu col-auto">
            <nav>
              <ul>
                <li
                  className={isActive === "home" ? "active" : ""}
                  onClick={() => handleTabClick("home")}
                >
                  <Link to="/">home</Link>
                </li>
                <li
                  className={isActive === "about" ? "active" : ""}
                  onClick={() => handleTabClick("about")}
                >
                  <Link>about</Link>
                </li>
                <li>
                  <Link>
                    services<i className="icofont icofont-simple-down"></i>
                  </Link>
                </li>
                {/* <li
                  className={isActive === "prices" ? "active" : ""}
                  onClick={() => handleTabClick("prices")}
                >
                  <Link to="/prices">
                    Prices<i className="icofont"></i>
                  </Link>
                </li> */}
                <li>
                  <Link>
                    blog<i className="icofont"></i>
                  </Link>
                  {/* <ul>
									<li><Link to="blog.html">Blog</Link></li>
									<li><Link to="blog-details.html">Blog Details</Link></li>
								</ul> */}
                </li>
                <li
                  className={isActive === "contact" ? "active" : ""}
                  onClick={() => handleTabClick("contact")}
                >
                  <Link to="/contact">contact</Link>
                </li>
                <li>
                  <Link>
                    Location list<i className="icofont icofont-simple-down"></i>
                  </Link>
                  {/* <ul>
									<li><Link to="gallery-2-column.html">Gallary 2 Column</Link></li>
									<li><Link to="gallery-3-column.html">Gallary 3 Column</Link></li>
									<li><Link to="gallery.html">Gallary 4 Column</Link></li>
								</ul> */}
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-menu col-12"></div>
        </div>
      </div>
    </div>
  );
}
