import React, { useEffect } from "react";
import BlackNavbar from "../Components/BlackNavbar";
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";


const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Tripplanner ";

  }, []);

  return (
    <div>

      <BlackNavbar />


      <section className="about-us mt-5">
        <div className="container">
          <div className="nav mb-4">
            <Link to="/">Home</Link><span><i className="fa fa-angle-right"></i></span>
            <a href="about-us.html" className="pl-3 gand-exce">About Us</a>
          </div>
          <h1 className="mt-5 mb-4">About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-12">
              <h2 className="mt-5 mb-4">World Best Travel Agency</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas</p>
            </div>
            <div className="col-lg-6 col-md-6 mt-4 d-none d-lg-block">
              <img className="" src="assets/img/about-us-img-1.png" />
            </div>
          </div>
          <h3 className="mt-5 mb-4">Why Choose Us</h3>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-12">
              <div className="reason-1 p-4">
                <div className="icon-bg p-1">
                  <img className="" src="assets/img/about-usicon-1.png" />
                </div>
                <div className="sub-title text-center mt-3">Handpicked hotels</div>
                <p className="text-center mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-lg-0 mt-md-4 mt-4">
              <div className="reason-1 p-4">
                <div className="icon-bg p-1">
                  <img className="" src="assets/img/about-usicon-2.png" />
                </div>
                <div className="sub-title text-center mt-3">World ClassName Service</div>
                <p className="text-center mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-lg-0 mt-md-4 mt-4">
              <div className="reason-1 p-4">
                <div className="icon-bg p-1">
                  <img className="" src="assets/img/about-usicon-3.png" />
                </div>
                <div className="sub-title text-center mt-3">Best Price Guarantee</div>
                <p className="text-center mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis.</p>
              </div>
            </div>
          </div>



          <CompaniesLogo />
        </div>
      </section>

      <Footer />
    </div>
  )

}

export default AboutUs;