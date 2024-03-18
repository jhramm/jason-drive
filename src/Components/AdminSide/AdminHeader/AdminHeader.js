import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../../img/logo2.png";
import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import SideNavbar from "../AdminPanel/SideNavbar";


export default function NavBar() {
  const [isActive, setIsActive] = useState("home");
 

  function handleTabClick(tab) {
    setIsActive(tab);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  

  

  return (
    <div className="header-area header-absolute header-transparent header-full-width">
      <div className="header-top d-none d-md-block">
        <div className="container">
          <div className="header-top-wrapper row">
            <div className="header-top-left text-left col-md-6 col-12">
              <p>
                <i className="icofont icofont-envelope"></i>
                <span>admin@onlyessexdriving.co.uk</span>
              </p>
              <p>
                <i className="icofont icofont-ui-call"></i>
                <span>0330 0883 795</span>
              </p>
            </div>
            <div className="header-top-right text-right col-md-6 col-12">
              <p>
                <i className="icofont icofont-clock-time"></i>
                <span>Mon - Sat : 8am - 9pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom sticky">
        <div className="container">
          <div className="row justify-content-between">
            <div className="navbar-header col-auto">
              <Button
                ref={btnRef}
                colorScheme="yellow"
                onClick={onOpen}
              >
                <HamburgerIcon />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent bg="gray.700">
                  <DrawerCloseButton color={"white"} />
                  <DrawerHeader>
                    <img src={Logo2} alt="" />
                  </DrawerHeader>
                  <SideNavbar />

                  <DrawerFooter>
                    <Button
                      color={"white"}
                      variant="outline"
                      mr={3}
                      onClick={onClose}
                      _hover={{ color: "red.500" }}
                    >
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
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
                      Location list
                      <i className="icofont icofont-simple-down"></i>
                    </Link>
                  </li>

                  <li
                    className={isActive === "contact" ? "active" : ""}
                    onClick={() => handleTabClick("contact")}
                  ></li>
                </ul>
              </nav>
            </div>
            <div className="mobile-menu col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
