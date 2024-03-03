import React from 'react'
import LearnerPupil from '../img/learner-pupil.jpeg';

export default function Features() {
  return (
    <div id="feature-area" className="feature-area bg-gray pt-90 pb-90">
	<div className="container">
		<div className="row">
			<div className="section-title text-center col-12 mb-45">
				<h3 className="heading">our features</h3>
				<div className="excerpt">
					<p>Lorem ipsum dolor sit amet, consectetur maksu rez do eiusmod tempor magna aliqua</p>
				</div>
				<i className="icofont icofont-traffic-light"></i>
			</div>
		</div>
		<div className="row">
			<div className="feature-wrapper feature-left text-right col-lg-4 col-12">
				<div className="single-feature">
					<div className="icon"><i className="icofont icofont-file-spreadsheet"></i></div>
					<div className="text fix">
						<h4>Quick License</h4>
						<p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
				<div className="single-feature">
					<div className="icon"><i className="icofont icofont-car-alt-4"></i></div>
					<div className="text fix">
						<h4>Unlimited Car Support</h4>
						<p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
				<div className="single-feature">
					<div className="icon"><i className="icofont icofont-video-alt"></i></div>
					<div className="text fix">
						<h4>Video classNamees</h4>
						<p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</div>
			
			<div className="feature-image text-center col-lg-4 col-12">
				<img src={LearnerPupil} alt="feature" />
			</div>
			
			<div className="feature-wrapper feature-right text-left col-lg-4 col-12">
				<div className="single-feature">
					<div className="icon"><i className="icofont icofont-man-in-glasses"></i></div>
					<div className="text fix">
						<h4>Experience Instructors</h4>
						<p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
				<div className="single-feature">
					<div className="icon"><i className="icofont icofont-clock-time"></i></div>
					<div className="text fix">
						<h4>Any Time Any Place</h4>
						<p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
				<div className="single-feature">
					<div className="icon"><i className="icofont icofont-direction-sign"></i></div>
					<div className="text fix">
						<h4>Learning Roads</h4>
						<p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
