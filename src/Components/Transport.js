import React , {useState , useEffect} from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import $ from 'jquery';
import FavouriteDestinations from "../Components/Deals/FavouriteDestinations";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Transport = () => {

useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Transport | Tripplanner ";
}, [])



return(
<div>
<Navbar />


  <header className="masthead main-header transport-header mob-header-transport">
            <div className="container d-flex h-100 align-items-center">

            <div className="search-form w-100 transport-search-res umrah-search-frm">
              <div className="container">
                <div className="row pb-2">
                  <div className="col-lg-6 col-md-6 col-12">
                      <div className="umrah-pack-type">
                          <ul className="nav nav-pills umrah-nav-pills ml-0 ">
                              <li className="search-btn nav-item t-white" >
                                  <a className="nav-link search-btn tab-nav-link tab-pad active t-white" data-toggle="pill" href="#home">Car Hire</a>
                              </li>
                              <li className="nav-item tab-nav-item t-white">
                                  <a className="nav-link tab-nav-link tab-pad " data-toggle="pill" href="#menu1">Airport Transfer
                                      </a>
                              </li>
                          </ul>

                      </div>

                    </div>
                     <div className="col-lg-6 col-md-6 col-12"></div>
                    </div>
                       <div className="tab-content">
                         <div id="home" className="tab-pane active">
                          <div className="row">
                              <div className="col-lg-12 col-md-12 col-12">
                                <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                   <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                    <label className="form-label pl-3">Choose Transport</label>
                                    <select className="form-control option">
                                      <option>Transport Type</option>
                                      <option>Transport Type</option>
                                      <option>Transport Type</option>
                                    </select>
                                    </div>
                                     <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                      <label className="form-label pl-3">Choose Vehicle</label>
                                      <select className="form-control option">
                                        <option>Vehicle Type</option>
                                        <option>Vehicle Type</option>
                                        <option>Vehicle Type</option>
                                      </select>
                                      </div>
                                      <div className="col-xl-2 col-lg-2 col-md-2 col-12 pt-lg-0 pt-4">
                                      <label className="form-label pl-3">Pick Up</label>
                                      <select className="form-control option">
                                        <option>Jed</option>
                                        <option>Mak</option>
                                        <option>Yanbu</option>
                                      </select>
                                      </div>

                                       <div className="col-xl-2 col-lg-2 col-md-2 col-12 pt-lg-0 pt-4">
                                                                            <label className="form-label pl-3">Drop Off</label>
                                                                            <select className="form-control option">
                                                                              <option>Jed</option>
                                                                              <option>Mak</option>
                                                                              <option>Yanbu</option>
                                                                            </select>
                                                                            </div>

                                       <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 mt-1">
                                          <Link to="/transport-search-result"><button className="search-btn btn-primary w-100" type="submit">SEARCH</button></Link>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          <div id="menu1" className="tab-pane fade">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                  <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                     <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                      <label className="form-label pl-3">Choose Transport</label>
                                      <select className="form-control option">
                                        <option>Transport Type</option>
                                        <option>Transport Type</option>
                                        <option>Transport Type</option>
                                      </select>
                                      </div>
                                       <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                        <label className="form-label pl-3">Choose Vehicle</label>
                                        <select className="form-control option">
                                          <option>Vehicle Type</option>
                                          <option>Vehicle Type</option>
                                          <option>Vehicle Type</option>
                                        </select>
                                        </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-12 pt-lg-0 pt-4">
                                                                             <label className="form-label pl-3">Pick Up</label>
                                                                             <select className="form-control option">
                                                                               <option>Jed</option>
                                                                               <option>Mak</option>
                                                                               <option>Yanbu</option>
                                                                             </select>
                                                                             </div>

                                                                              <div className="col-xl-2 col-lg-2 col-md-2 col-12 pt-lg-0 pt-4">
                                                                                                                   <label className="form-label pl-3">Drop Off</label>
                                                                                                                   <select className="form-control option">
                                                                                                                     <option>Jed</option>
                                                                                                                     <option>Mak</option>
                                                                                                                     <option>Yanbu</option>
                                                                                                                   </select>
                                                                                                                   </div>

                                         <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 mt-1">
                                            <Link to="/airport-transfer"><button className="search-btn btn-primary w-100" type="submit">SEARCH</button></Link>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                          </div>
                       </div>




       </div>
    </div>

            </div>
  </header>




  <section className="flight-det transpaort-sect">
          <div className="container">
            <h1 className="text-center pb-4">Offer of The Day</h1>
            <div className="day-offers">
              <div className=" d-none d-lg-block d-md-block">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4 pr-5">
                  <div className="row mt-lg-5 pt-lg-5 pt-md-2">
                    <div className="col-lg-12 col-md-12 col-12">
                    <div className="row">
                      <div className="col-lg-10 col-md-8 col-6 text-right">
                        <div className="sub-title">DOOR TO DOOR</div>
                        <div className="sub-txt">From the Airport directly to your destination</div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-6">
                        <img className="" src="assets/img/transport-img-1.png" />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-lg-10 col-md-8 col-6 text-right">
                        <div className="sub-title">MEET & GREET</div>
                        <div className="sub-txt">Our driver will meet & greet you in the arrivals hall</div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-6">
                        <img className="" src="assets/img/transport-img-3.png" />
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="main-img">
                    <img className="" src="assets/img/transport-main-img.png" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="row mt-lg-5 pt-lg-5 pt-md-2">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                           <img className="" src="assets/img/transport-img-2.png" />
                        </div>
                        <div className="col-lg-10 col-md-8 col-6 text-left pl-lg-5 pl-md-1 pl-1">
                          <div className="sub-title">PRIVATE TRANSFERS</div>
                          <div className="sub-txt">We offer only private transfers, no shared service</div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-lg-2 col-md-4 col-6">
                           <img className="" src="assets/img/transport-img-4.png" />
                        </div>
                        <div className="col-lg-10 col-md-8 col-6 text-left pl-lg-5 pl-md-1 pl-1">
                          <div className="sub-title">CUSTOMER CARE</div>
                          <div className="sub-txt">We are here to help! Before during and after your trip</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="small-scr d-block d-lg-none d-md-none">
              <div className="row">
                <div className="col-12">
                  <div className="main-img text-center">
                    <img className="" src="assets/img/transport-main-img.png" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                    <div className="row for-img-hide">
                      <div className="col-lg-10 col-md-8 col-sm-6 col-12 text-right">
                        <div className="sub-title">DOOR TO DOOR</div>
                        <div className="sub-txt">From the Airport directly to your destination</div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <img className="" src="assets/img/transport-img-1.png" />
                      </div>
                    </div>
                </div>
                <div className="col-6">
                      <div className="row for-img-hide">
                        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                           <img className="" src="assets/img/transport-img-2.png" />
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-6 col-12 text-left pl-lg-5 pl-md-1 pl-1">
                          <div className="sub-title">PRIVATE TRANSFERS</div>
                          <div className="sub-txt">We offer only private transfers, no shared service</div>
                        </div>
                      </div>
                </div>
                <div className="col-6">
                    <div className="row mt-sm-5 mt-3 for-img-hide">
                      <div className="col-lg-10 col-md-8 col-sm-6 col-12 text-right">
                        <div className="sub-title">MEET & GREET</div>
                        <div className="sub-txt">Our driver will meet & greet you in the arrivals hall</div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <img className="" src="assets/img/transport-img-3.png" />
                      </div>
                    </div>
                </div>
                <div className="col-6">
                      <div className="row mt-sm-5 mt-3 for-img-hide">
                        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                           <img className="" src="assets/img/transport-img-4.png" />
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-6 col-12 text-left pl-lg-5 pl-md-1 pl-1">
                          <div className="sub-title">CUSTOMER CARE</div>
                          <div className="sub-txt">We are here to help! Before during and after your trip</div>
                        </div>
                      </div>
                </div>
              </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 text-center mt-3">
                  <div className="sub-title">250SAR</div>
                  <div className="sub-txt">GMC Economy</div>
                </div>
              </div>
            </div>







                <div className="col-md-12 text-center">
                  <h2 className=" mt-5 pt-5">Travel to your favorite destinations</h2>
                </div>


<FavouriteDestinations />







            <div className="sub-title mt-5 mb-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.
              Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod
              libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.
            </p>
            <div className="sub-title mt-5 mb-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.
              Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod
              libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.
            </p>
          </div>





<CompaniesLogo />


        </section>

        <Footer />

</div>
)
}

export default Transport;