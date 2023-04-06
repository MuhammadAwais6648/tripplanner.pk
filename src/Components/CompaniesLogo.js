import React from "react";

const CompaniesLogo = () => {
  return (
    <div>

      <div className="container mt-5">
        <h3 className="text-center flight-booking-heading">We Are Certified Company</h3>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-6 mb-lg-0 mb-md-0 mb-4">
            <div className="comp-name p-3 text-center">
              <img className="" src="assets/img/certified-logo-1.jpg" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="comp-name p-3 text-center">
              <img className="" src="assets/img/certified-logo-2.jpg" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="comp-name p-3 text-center">
              <img className="" src="assets/img/certified-logo-3.jpg" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="comp-name p-3 text-center">
              <img className="" src="assets/img/certified-logo-4.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="stay-us">
        <div className="container">
          <h3 className="text-center mt-5 pt-3">Stay With Us</h3>
          <div className="row">
            <div className="col-md-12 col-sm-12 center-col text-center mt-3">
              <a href="#" className="social-btn fb-btn button mr-1"><i className="fa fa-facebook"></i></a>
              <a href="#" className="social-btn whats-btn button mr-1"><i className="fa fa-whatsapp"></i></a>
              <a href="#" className="social-btn twitter-btn button mr-1"><i className="fa fa-twitter"></i></a>
              <a href="#" className="social-btn google-btn button mr-1"><i className="fa fa-google"></i></a>
              <a href="#" className="social-btn linked-btn button mr-1"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CompaniesLogo;