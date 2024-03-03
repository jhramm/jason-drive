import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default function FacebookFeed() {
  return (
    <div className="funfact-area overlay overlay-black overlay-70 pt-90 pb-60">
      <div className="container">
        <div className="row">
          <FacebookProvider appId="1138582067142999">
            <Page href="https://facebook.com" />
          </FacebookProvider>
          {/* <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
            <i className="icofont icofont-hat-alt"></i>
            <h1 className="counter plus">6500</h1>
            <p>graduted from here</p>
          </div>
          <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
            <i className="icofont icofont-user-suited"></i>
            <h1 className="counter">56</h1>
            <p>teachers number</p>
          </div>
          <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
            <i className="icofont icofont-history"></i>
            <h1 className="counter">11</h1>
            <p>years on market</p>
          </div>
          <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
            <i className="icofont icofont-users-social"></i>
            <h1 className="counter plus">550</h1>
            <p>present students</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
