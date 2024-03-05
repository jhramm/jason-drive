import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Prices() {
  return (
   <div id="pricing-area" className="pricing-area overlay overlay-black overlay-40 pt-90 pb-60">
	<div className="container">
		
		<div className="row">
			<div className="section-title title-white text-center col-12 mb-45">
				<h3 className="heading">your pricing plan</h3>
				<div className="excerpt">
					<p>Lorem ipsum dolor sit amet, consectetur maksu rez do eiusmod tempor magna aliqua</p>
				</div>
				<i className="icofont icofont-traffic-light"></i>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-3 col-md-6 col-12 mb-30">
				<div className="single-pricing text-center">
					<div className="pricing-head">
						<h4>basic</h4>
					</div>
					<div className="pricing-price">
						<h2><span>$</span>200</h2>
					</div>
					<ul className="pricing-details">
						<li>2 Month Course</li>
						<li>3 Hours Per Day</li>
						<li>Weekly 1 Test</li>
						<li>20 Video classNamees</li>
						<li>Driving Licence</li>
					</ul>
					<Link to="#" className="pricing-action">choose plan</Link>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-12 mb-30">
				<div className="single-pricing text-center">
					<div className="pricing-head">
						<h4>upgrade</h4>
					</div>
					<div className="pricing-price">
						<h2><span>$</span>300</h2>
					</div>
					<ul className="pricing-details">
						<li>3 Month Course</li>
						<li>4 Hours Per Day</li>
						<li>Weekly 2 Test</li>
						<li>25 Video classNamees</li>
						<li>Driving Licence</li>
					</ul>
					<Link to="#" className="pricing-action">choose plan</Link>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-12 mb-30">
				<div className="single-pricing active text-center">
					<div className="pricing-head">
						<h4>smart</h4>
					</div>
					<div className="pricing-price">
						<h2><span>$</span>400</h2>
					</div>
					<ul className="pricing-details">
						<li>4 Month Course</li>
						<li>5 Hours Per Day</li>
						<li>Weekly 2 Test</li>
						<li>30 Video classNamees</li>
						<li>Driving Licence</li>
					</ul>
					<Link to="#" className="pricing-action">choose plan</Link>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-12 mb-30">
				<div className="single-pricing text-center">
					<div className="pricing-head">
						<h4>over smart</h4>
					</div>
					<div className="pricing-price">
						<h2><span>$</span>500</h2>
					</div>
					<ul className="pricing-details">
						<li>6 Month Course</li>
						<li>5 Hours Per Day</li>
						<li>Weekly 3 Test</li>
						<li>35 Video classNamees</li>
						<li>Driving Licence</li>
					</ul>
					<Link to="#" className="pricing-action">choose plan</Link>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
