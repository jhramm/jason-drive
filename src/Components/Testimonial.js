import React from 'react'

export default function Testimonial() {
  return (
    <div id="testimonial-area" className="testimonial-area overlay overlay-white overlay-80 text-center pt-90 pb-90">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 col-12 mx-auto">
			
				<div className="ti-slider mb-40">
					<div className="single-slide"><div className="image fix"><img src="img/testimonial/1.jpg" alt="" /></div></div>
					<div className="single-slide"><div className="image fix"><img src="img/testimonial/2.jpg" alt="" /></div></div>
					<div className="single-slide"><div className="image fix"><img src="img/testimonial/3.jpg" alt="" /></div></div>
					<div className="single-slide"><div className="image fix"><img src="img/testimonial/4.jpg" alt="" /></div></div>
				</div>
				
				<div className="tc-slider">
					<div className="single-slide">
						<p>There are many many variations of passages of Lorem Ipsum available, but the majority have suffered   alteration in some form, by hum domised words which is don't look believable.</p>
						<h5>momen bhuiyan</h5>
						<span>Graphic Designer</span>
					</div>
					<div className="single-slide">
						<p>There are many many variations of passages of Lorem Ipsum available, but the majority have suffered   alteration in some form, by hum domised words which is don't look believable.</p>
						<h5>Tasnim Akter</h5>
						<span>Graphic Designer</span>
					</div>
					<div className="single-slide">
						<p>There are many many variations of passages of Lorem Ipsum available, but the majority have suffered   alteration in some form, by hum domised words which is don't look believable.</p>
						<h5>momen bhuiyan</h5>
						<span>Graphic Designer</span>
					</div>
					<div className="single-slide">
						<p>There are many many variations of passages of Lorem Ipsum available, but the majority have suffered   alteration in some form, by hum domised words which is don't look believable.</p>
						<h5>Tasnim Akter</h5>
						<span>Graphic Designer</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<button className="ts-arrows ts-prev"><i className="icofont icofont-caret-left"></i></button>
	<button className="ts-arrows ts-next"><i className="icofont icofont-caret-right"></i></button>
</div>
  )
}
