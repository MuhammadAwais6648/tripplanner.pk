import React from "react";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="footer bg-footer small text-center d-none d-lg-block d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
              <div className="title text-left pb-2 " style={{color: "#155088"}}>Trip Planner</div>
              <ul className="text-left pl-0 pt-3">
                <li className="pb-2"><Link to="/">Home</Link></li>
                <li className="pb-2"><Link to="/about-us">About Company</Link></li>
                <li className="pb-2"><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                <li className="pb-2"><Link to="/faq's">Faq's</Link></li>
                <li className="pb-2"><Link to="/complaints">Complaints</Link></li>
                <li className="pb-2"><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="title text-left pb-2">Contact Now</div>
              <ul className="text-left pl-0 pt-3">
                <li className="number-details pb-2"><img className="pr-2" src="assets/img/footer-cal-icon-1.png" />00966 12535 5589</li>
                <li className="number-details"><img className="pr-2" src="assets/img/footer-whattsapp-icon-1.png" />00966 55 5670699</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="title text-left pb-2">Subscribe newsletter</div>
              <div className="sub-detail pl-0 text-left pt-3">
                <label>Name</label>
                <input className="w-100 p-2" type="text" id="fname" name="fname" />
                <label className="pt-3">Email</label>
                <input className="w-100 p-2" type="text" id="fname" name="fname" />
                <div className="sub-btn mt-4 float-right"><button>Subscribe</button></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="container">
        <div className="copy-right text-center p-3 mb-lg-0 mb-md-0 mb-5">
          <div className="row">
            <div className="col-12 mb-lg-0 mb-md-0 mb-sm-4 mb-4">© Copyright 2021 Trip Planner. All Rights Reserved.</div>
          </div>
        </div>
      </div>


      <div className="mobile-sticky-note d-lg-none d-md-none">
        <div className="container1">
          <div className="mobile-stricky-nav col-lg-none p-3 text-center">
            <div className="row">
              <div className="col-6 br-right-mob-stric">
                <div className="number-details"><img className="pr-2" src="assets/img/footer-cal-icon.png" /><span className="pt-2">00966 12535 5589</span></div>
              </div>
              <div className="col-6">
                <div className="number-details"><img className="pr-2" src="assets/img/footer-whattsapp-icon.png" /><span>00966 55 5670699</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Footer;