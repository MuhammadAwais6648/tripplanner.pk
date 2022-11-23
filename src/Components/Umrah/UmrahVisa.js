import React , {useState , useEffect} from "react";
import Navbar from "../../Components/Navbar";
import '../../Components/tripplanner.css';
import '../../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";
import HomeCarousal from "../../Components/HomeCarousal";
import '../../Components/HomeCarousal.css';
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";

const UmrahVisa = () => {
useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Umrah Visa | Tripplanner ";
}, [])
return(
<div>
<BlackNavbar />


 <section className="flight-det umrah-main umrah-visa mt-5">
          <div className="container">

            <h1 className="">Umrah Visa</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                  <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-1.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">sydney <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">Australia <span className="sub-txt float-right">Visa Price</span></div>
                        <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-2.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">mumbai <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">India <span className="sub-txt float-right">Visa Price</span></div>
                        <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-3.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">istanbul <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">Turkey <span className="sub-txt float-right">Visa Price</span></div>
                        <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-4.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">pakistan <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">Islamabad <span className="sub-txt float-right">Visa Price</span></div>
                      <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-5.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">London <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">United Kingdom <span className="sub-txt float-right">Visa Price</span></div>
                        <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-6.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">Paris <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">France <span className="sub-txt float-right">Visa Price</span></div>
                       <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-7.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">Doha <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">Qatar <span className="sub-txt float-right">Visa Price</span></div>
                        <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/umrah-visa-8.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">Muscat <span className="title visa-price float-right">aed 345</span></div>
                        <div className="">Oman <span className="sub-txt float-right">Visa Price</span></div>
                        <p className="hover-1-description mb-0"><Link to="/visa-search-result"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>



      </div>

      <CompaniesLogo />
  </section>

<Footer />
</div>

)

}


export default UmrahVisa;