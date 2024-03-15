import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo2 from "../../img/logo2.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Flex
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


export default function NavBar() {
const [ isActive, setIsActive ] = useState("home");
const isLogin = JSON.parse(localStorage.getItem("signin"));
const firstName = localStorage.getItem("firstName");
const email = localStorage.getItem("email");
const navigate = useNavigate();

function handleTabClick(tab) {
    setIsActive(tab);
}

function handleLogout() {
  localStorage.removeItem("signin");
  localStorage.removeItem("firstName");
  localStorage.removeItem("email");
  navigate("/signin");
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
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link>
                    services<i className="icofont icofont-simple-down"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    blog<i className="icofont"></i>
                  </Link>
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
                </li>
                {isLogin ? (
                  <>
                    <li
                      className={isActive === "contact" ? "active" : ""}
                      onClick={() => handleTabClick("contact")}
                    >
                      <Menu>
                        <MenuButton
                          as={Button}
                          rightIcon={<ChevronDownIcon />}
                          marginTop={-3}
                          background={"transparent"}
                          color="yellow"
                          _active={{
                            backgroundColor: "teal.200",
                            color: "black",
                            border: "2px solid #dec839",
                          }}
                        >
                          <Flex alignItems={"center"} gap={2}>
                            <Avatar
                              style={{ width: "30px", height: "30px" }}
                              bg="teal.500"
                            />
                            <span className="logout-btn"> {firstName}</span>
                          </Flex>
                        </MenuButton>
                        <MenuList>
                          <MenuItem>{email}</MenuItem>
                          <MenuItem onClick={handleLogout}>
                            <button>Logout</button>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </li>
                  </>
                ) : (
                  <li
                    className={isActive === "Signin" ? "active" : ""}
                    onClick={() => handleTabClick("signin")}
                  >
                    <Link to="/signin">
                      <button className="btn btn-warning signin-btn">
                        Login
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          <div className="mobile-menu col-12"></div>
        </div>
      </div>
    </div>
  );
}
