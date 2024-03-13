import React from "react";

export default function BookOnline() {
  return (
    <div className="demo-content bg-white pt-90 pb-60">
      <div className="container">
        <div className="row">
          <div className="section-title text-center col-12 mb-45">
            <h3 className="heading">BOOK ONLINE</h3>
            <div className="excerpt">
              <p>
                Book your first lesson online
              </p>
            </div>
            <i className="icofont icofont-traffic-light"></i>
          </div>
            <br></br>
            <iframe
              title="Online Booking"
              id="zino_iframe"
              width="100%"
              height="600px"
              src="https://drivinginstructorsdiary.com/app/online-booking/865278"
            ></iframe>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
            var zino_resize = function (event) {
              var zino_iframe = document.getElementById('zino_iframe');
              if (zino_iframe) {
                zino_iframe.style.height = event.data + "px";
              }
            };
            if (window.addEventListener) {
              window.addEventListener("message", zino_resize, false);
            } else if (window.attachEvent) {
              window.attachEvent("onmessage", zino_resize);
            }
          `,
              }}
            ></script>
          </div>
        </div>
      </div>
   
  );
}
