import React from "react";
import Slider from "react-slick";
import Female from "../../img/female.png";
import Male from "../../img/male.png";

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div
      id="testimonial-area"
      className="testimonial-area overlay overlay-white overlay-80 text-center pt-90 pb-90"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            
            <Slider {...settings} className="ti-slider mb-40">
              
              <div className="single-slide">
                <div className="image fix">
                  <img src={Male} alt="male" />
                </div>
                <p>
                  There are many many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by hum domised words which is don't look believable.
                </p>
                <h5>momen bhuiyan</h5>
                <span>Graphic Designer</span>
              </div>
             
              <div className="single-slide">
                <div className="image fix">
                  <img src={Female} alt="Female" />
                </div>
                <p>
                  There are many many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by hum domised words which is don't look believable.
                </p>
                <h5>Tasnim Akter</h5>
                <span>Graphic Designer</span>
              </div>
              
              <div className="single-slide">
                <div className="image fix">
                  <img src={Male} alt="Male" />
                </div>
                <p>
                  There are many many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by hum domised words which is don't look believable.
                </p>
                <h5>momen bhuiyan</h5>
                <span>Graphic Designer</span>
              </div>
            
              <div className="single-slide">
                <div className="image fix">
                  <img src={Female} alt="Female" />
                </div>
                <p>
                  There are many many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by hum domised words which is don't look believable.
                </p>
                <h5>Tasnim Akter</h5>
                <span>Graphic Designer</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
