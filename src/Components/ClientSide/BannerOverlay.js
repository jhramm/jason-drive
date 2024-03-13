import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Autoplay } from "swiper/modules";

import img1 from "../../img/driver-training.jpeg";
import img2 from "../../img/learn-to-drive.jpeg";
import img3 from "../../img/pupil1.jpeg";
import img4 from "../../img/pass1.jpeg";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper/modules";


export default function BannerOverlay() {
  SwiperCore.use([Autoplay]);
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
                    the <span>best driving school</span> in Essex
                  </h1>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay="1.6s"
                  >
                   Book your driving lessons with a friendly reliable driving instructor<br />
                   You are only one step away from gaining your driving licence
                  </p>
                  <div className="button-group">
                    <Link
                      to="/bookonline"
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
                <div
                  className="find-course-form float-left text-left wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="3s"
                >
                  <div className="swiper-container">
                    <Swiper
                      effect={"cube"}
                      grabCursor={true}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      pagination={false}
                      loop={true}
                      autoplay={{ delay: 6000 }}
                      modules={[EffectCube, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={img1} alt="image1" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img2} alt="image2" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img3} alt="image3" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img4} alt="image4" />
                      </SwiperSlide>
                    </Swiper>
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
