import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../img/logo2.png";

export default function NavBar() {
const { isActive, setIsActive } = useState("home");
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
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="#">
                    features<i className="icofont icofont-simple-down"></i>
                  </Link>
                  {/* <ul>
									<li><Link to="#">Header<i className="icofont icofont-simple-right"></i></Link>
										<ul>
											<li><Link to="header-1.html">Header One</Link></li>
											<li><Link to="header-2.html">Header Two</Link></li>
											<li><Link to="header-3.html">Header Three</Link></li>
											<li><Link to="header-4.html">Header Four</Link></li>
											<li><Link to="header-5.html">Header Five</Link></li>
											<li><Link to="header-6.html">Header Six</Link></li>
											<li><Link to="header-7.html">Header Seven</Link></li>
											<li><Link to="header-8.html">Header Eight</Link></li>
										</ul>
									</li>
									<li><Link to="#">Footer<i className="icofont icofont-simple-right"></i></Link>
										<ul>
											<li><Link to="footer-1.html">Footer One</Link></li>
											<li><Link to="footer-2.html">Footer Two</Link></li>
											<li><Link to="footer-3.html">Footer Three</Link></li>
											<li><Link to="footer-4.html">Footer Four</Link></li>
											<li><Link to="footer-5.html">Footer Five</Link></li>
										</ul>
									</li>
									<li><Link to="#">Slider Style<i className="icofont icofont-simple-right"></i></Link>
										<ul>
											<li><Link to="hero-slider.html">Nivo Slider</Link></li>
											<li><Link to="hero-parallax.html">Parallax</Link></li>
											<li><Link to="hero-slideshow.html">BG Slideshow</Link></li>
											<li><Link to="hero-kenburne.html">BG Kenburne</Link></li>
											<li><Link to="hero-video.html">BG Video</Link></li>
											<li><Link to="hero-text.html">Text Effect</Link></li>
										</ul>
									</li>
									<li><Link to="#">Page Title<i className="icofont icofont-simple-right"></i></Link>
										<ul>
											<li><Link to="page-title-default.html">Page Title Default</Link></li>
											<li><Link to="page-title-parallax.html">Page Title Parallax</Link></li>
											<li><Link to="page-title-fixed-bg.html">Page Title Fixed BG</Link></li>
											<li><Link to="page-title-left.html">Page Title Left</Link></li>
											<li><Link to="page-title-right.html">Page Title Right</Link></li>
										</ul>
									</li>
								</ul> */}
                </li>
                <li>
                  <Link to="#">
                    shortcode<i className="icofont icofont-simple-down"></i>
                  </Link>
                  {/* <ul>
									<li><Link to="shortcode-alert.html">Alert</Link></li>
									<li><Link to="shortcode-button.html">Button</Link></li>
									<li><Link to="shortcode-course.html">Course</Link></li>
									<li><Link to="shortcode-feature.html">Feature</Link></li>
									<li><Link to="shortcode-funfact.html">Funfact</Link></li>
									<li><Link to="shortcode-map.html">Map</Link></li>
									<li><Link to="shortcode-pricing-table.html">Pricing Table</Link></li>
									<li><Link to="shortcode-progress-bar.html">Progress Bar</Link></li>
									<li><Link to="shortcode-tabs.html">Tabs</Link></li>
									<li><Link to="shortcode-testimonial.html">Testimonial</Link></li>
									<li><Link to="shortcode-toggles-accordions.html">Toggles Accordions</Link></li>
								</ul> */}
                </li>
                <li>
                  <Link to="/gallery">
                    gallery<i className="icofont icofont-simple-down"></i>
                  </Link>
                  {/* <ul>
									<li><Link to="gallery-2-column.html">Gallary 2 Column</Link></li>
									<li><Link to="gallery-3-column.html">Gallary 3 Column</Link></li>
									<li><Link to="gallery.html">Gallary 4 Column</Link></li>
								</ul> */}
                </li>
                <li>
                  <Link to="/service">services</Link>
                </li>
                <li>
                  <Link to="/blog">
                    blog<i className="icofont icofont-simple-down"></i>
                  </Link>
                  {/* <ul>
									<li><Link to="blog.html">Blog</Link></li>
									<li><Link to="blog-details.html">Blog Details</Link></li>
								</ul> */}
                </li>
                <li>
                  <Link to="/contact">contact</Link>
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
