import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';




export default function Prices() {
	const [packages, setPackages] = useState([]);

	 useEffect(() => {
     async function getData() {
       var res = await fetch("http://localhost:8080/packages");
       var data = await res.json();
       console.log(data);
       setPackages(data);
     }

     getData();
   }, []);
  return (
    
   <div id="pricing-area" className="pricing-area overlay overlay-black overlay-40 pt-90 pb-60">
	<div className="container">
		
		<div className="row">
			<div className="section-title title-white text-center col-12 mb-45">
				<h3 className="heading">Lesson Prices</h3>
				<div className="excerpt">
					<p>Choose one of our great deals today</p>
				</div>
				<i className="icofont icofont-traffic-light"></i>
			</div>
		</div>
		<div className="row">
			{packages.map((item) => {
				return (
          <div className="col-lg-4 col-md-6 col-12 mb-30">
            <div className="single-pricing text-center">
              <div className="pricing-head">
                <h4>{item.packageName}</h4>
              </div>
              <div>
                <select name="transmission" id="transmission">
                  <option value="transmission">Choose Transmission</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </select>
              </div>
              <div className="pricing-price">
                <h2>
                  <span>£</span>
                  {item.packagePrice}
                </h2>
              </div>
              <ul className="pricing-details">
                {item.features?.map((feature) => {
                  return <li>{feature}</li>;
                })}
              </ul>
              <Link to="#" className="pricing-action">
                choose plan
              </Link>
            </div>
          </div>
        );

			})}
			
		</div>
	</div>
</div>
  )
}
