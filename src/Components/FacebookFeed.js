import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";

export default function FacebookFeed() {
  return (
    <div className="funfact-area overlay overlay-black overlay-90 pt-90 pb-60">
      <div className="section-title text-center col-12 mb-45">
        <h3 className="heading">Facebook Feed</h3>
        <div className="excerpt">
          <p>
            See the latest posts from Only Essex Driving School
          </p>
        </div>
        <i className="icofont icofont-traffic-light"></i>
      </div>
      <div className="container">
        {/* <div className="row"> */}
        <ElfsightWidget
          widgetId={"1962f133-6f43-4c6f-84da-5af9c7a42794"}
          lazy
          modern
        />
      </div>
    </div>
    // </div>
  );
}
