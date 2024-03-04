import React from 'react'
import { Link } from 'react-router-dom';

export default function BannerOverlay() {
  return (
    <div className="page-banner-area overlay overlay-black overlay-80">
      <div className="container">
        <div className="row">
          <div className="page-banner text-center col-12">
            <div className="slide-table container">
              <div className="table-cell">
                <div className="hero-slide-content float-right text-right">
                  <h3
                    className="wow fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                  >
                    welcome to Only Essex Driving
                  </h3>
                  <h1
                    className="wow fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay="1.2s"
                  >
                    the best <span>safety</span> measures
                  </h1>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay="1.6s"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    minim veniamsed sed do <br />
                    eiusmod tempor maksu rez ut labore magna do eiusmod
                  </p>
                  <div className="button-group">
                    <Link
                      to="#"
                      className="btn transparent wow fadeInLeft"
                      data-wow-duration=".9s"
                      data-wow-delay="2.4s"
                    >
                      book online
                    </Link>
                    <Link
                      to="/prices"
                      className="btn color wow fadeInLeft"
                      data-wow-duration=".9s"
                      data-wow-delay="2s"
                    >
                      lesson prices
                    </Link>
                  </div>
                </div>
                {/* <div
                  className="find-course-form float-left text-left wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="3s"
                >
                  <h5>
                    <span>find your course</span>
                    <i className="icofont icofont-police-car"></i>
                  </h5>
                  <form action="#">
                    <div className="course-input">
                      <i className="icofont icofont-user-alt-3"></i>{" "}
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="course-input">
                      <i className="icofont icofont-envelope"></i>{" "}
                      <input type="text" placeholder="Your E-mail" />
                    </div>
                    <div className="course-input">
                      <i className="icofont icofont-phone"></i>{" "}
                      <input type="text" placeholder="Phone" />
                    </div>
                    <div className="course-select">
                      <i className="icofont icofont-clock-time"></i>
                      <select className="cusselect">
                        <option>Time</option>
                        <option>9:00 AM</option>
                        <option>12:00 PM</option>
                        <option>03:00 PM</option>
                        <option>06:00 PM</option>
                      </select>
                    </div>
                    <div className="course-select course-date">
                      <i className="icofont icofont-calendar"></i>
                      <input
                        className="date-picker"
                        type="text"
                        placeholder="Date"
                      />
                    </div>
                    <div className="course-select">
                      <i className="icofont icofont-copy-alt"></i>
                      <select className="cusselect">
                        <option>Course</option>
                        <option>Course 1</option>
                        <option>Course 2</option>
                        <option>Course 3</option>
                        <option>Course 4</option>
                      </select>
                    </div>
                    <div className="course-select">
                      <i className="icofont icofont-car-alt-4"></i>
                      <select className="cusselect">
                        <option>Car Type</option>
                        <option>Car Type 1</option>
                        <option>Car Type 2</option>
                        <option>Car Type 3</option>
                        <option>Car Type 4</option>
                      </select>
                    </div>
                    <div className="course-submit">
                      <input type="submit" value="Send us" />
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
