import React, { useEffect } from "react";
import BlackNavbar from "../Components/BlackNavbar";
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";



const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Tripplanner ";

  }, []);

  return (
    <div>

      <BlackNavbar />


      <section className="complaints contact-us">
        <div className="container">
          <div className="nav mb-4">
            <a href="index.html">Home</a><span><i className="fa fa-angle-right"></i></span>
            <a href="contact-us.html" className="pl-3 gand-exce">Contact US</a>
          </div>
          <h1 className="mt-5 mb-4">Contact US</h1>


          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="mapouter w-100">
                <div className="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-5 mb-4">leave your message and we will get back to you shortly</h2>
          <div className="row mt-5 pl-3 pr-lg-0 pr-md-0 pr-3">
            <div className="col-lg-7 col-md-7">
              <div className="row">
                <div className="col-lg-6 col-md-6 p-0">
                  <input type="text" name="" className="form-control-comp" value="" placeholder="First and surname" />
                </div>
                <div className="col-lg-6 col-md-6 pr-0 pl-lg-3 pl-md-3 pl-0 pt-lg-0 pt-md-0 pt-4">
                  <input type="text" name="" className="form-control-comp" value="" placeholder="Phone" />
                </div>
                <input type="text" name="" className="form-control-comp mt-4" value="" placeholder="Email" />
                <textarea className="form-control-comp mt-4"> How can we help you? </textarea>
                <div className="book-now pl-lg-2 pl-md-2 pl-3">
                  <button className="view-btn mt-4" type="submit">send</button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5"></div>
          </div>
          <div className="customer-services p-4 mt-5">
            <div className="sub-title">Customer service:</div>
            <div className="row mt-3">
              <div className="col-lg-3 col-md-5">
                <div className="sub-txt address">K.S.A. - Holy Makkah - Al Shawqiyah Ben Jubair Street - Hemmah Building First Floor - Office No. (1)</div>
              </div>
              <div className="col-lg-2 col-md-1"></div>
              <div className="col-lg-5 col-md-6 mt-lg-0 mt-md-0 mt-3">
                <div className="contact-info">
                  <div className="sub-txt pb-2"> <img className="" src="assets/img/contact-us-call-icon.png" /> 00966 12535 5589 </div>
                  <div className="sub-txt pb-2"> <img className="" src="assets/img/contact-us-mail-icon.png" /> admin.furasmakkah@gmail.com </div>
                  <div className="sub-txt pb-2"> <img className="" src="assets/img/contact-us-web-icon.png" /> www.tripplanner.com </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2"></div>
            </div>
          </div>


          <CompaniesLogo />

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactUs;