import React, { useState, useEffect } from "react";
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


const CountryPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <Navbar />

      <header className="masthead main-header city-country-header">
        <div className="container d-flex h-100 align-items-center">

          <div className="search-form w-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-7 mb-md-2 mb-sm-0 mb-0">
                  <div className="custom-dropdown cus-down-arrow pr-0">
                    <button className="dropbtn">Return <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                    <div className="dropdown-content">
                      <a href="#">Ony Way</a>
                    </div>
                  </div>
                  <div className="custom-dropdown cus-down-arrow cus-down-arrow pr-0">
                    <button className="dropbtn">Adult  <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                    <div className="dropdown-content">
                      <div className="passenger pt-3 pb-3 pl-2 pr-2">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="title-pax">Adult</div>
                            <div className="count-pax">
                              <div className="qty">
                                <span className="minus bg-dark adultMinus1">-</span>
                                <input type="number" className="count" id="adult1" name="qty" value="1" />
                                <span className="plus bg-dark adultPlus1">+</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mt-3 mb-3">
                            <div className="title-pax">Child</div>
                            <div className="count-pax">
                              <div className="qty">
                                <span className="minus bg-dark childMinus1">-</span>
                                <input type="number" className="count" id="child1" name="qty" value="1" />
                                <span className="plus bg-dark childPlus1">+</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="title-pax">Infant</div>
                            <div className="count-pax">
                              <div className="qty">
                                <span className="minus bg-dark infantMinus1">-</span>
                                <input type="number" className="count" id="infant1" name="qty" value="1" />
                                <span className="plus bg-dark infantPlus1">+</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="custom-dropdown cus-down-arrow pr-0">
                    <button className="dropbtn">Economy <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                    <div className="dropdown-content">
                      <a href="#">Business</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                      <label className="form-label pl-3">Flying From</label>
                      <select className="form-control">
                        <option>City Name</option>
                        <option>City Name</option>
                        <option>City Name</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                      <label className="form-label pl-3">Destination</label>
                      <select className="form-control">
                        <option>Pakistan</option>
                        <option>Pakistan</option>
                        <option>Pakistan</option>
                      </select>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                      <label className="form-label pl-3">Check In / Check Out</label>
                      <div className="dep-icon d-none d-lg-block"> <img className="" src="assets/img/calender-icon.png" /> </div>
                      <input type="text" name="daterange" className="form-control" value="01/01/2018 - 01/15/2018" />
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pb-4 pt-1">
                      <Link to="/flight-search-result"><button className="search-btn  w-100" type="submit">SEARCH</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>



      <section className="flight-det city-country-page">
        <div className="container">
          <div className="nav mb-4">
            <a href="flight.html" >Flight</a><span><i className="fa fa-angle-right"></i></span>
            <a href="!#" className="pl-3">Oceania </a><span className="font-weight-bold"><i className="fa fa-angle-right"></i></span>
            <a href="!#" className="pl-3 gand-exce">Sydney</a>
          </div>


          <h1 className="pb-4 pt-5">Return Flights To Sydney</h1>
          <div className="ret-flig-det city-count-sect">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <Link to="/selected-flight">
                  <div className="box-1 p-4 text-center">
                    <img className="" src="/assets/img/airline-logo-1.png" />
                    <div className="row mt-3">
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">London</div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-2">
                        <div className="airplane-logo">
                          <img className="" src="/assets/img/airplane-icon-city-country-page.png" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">Dubai</div>
                      </div>
                    </div>
                    <div className="sub-txt mt-3">5 May 2021-15 May 2021</div>
                    <div className="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                <Link to="/selected-flight">
                  <div className="box-1 p-4 text-center">
                    <img className="" src="assets/img/airline-logo-1.png" />
                    <div className="row mt-3">
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">London</div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-2">
                        <div className="airplane-logo">
                          <img className="" src="assets/img/airplane-icon-city-country-page.png" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">Dubai</div>
                      </div>
                    </div>
                    <div className="sub-txt mt-3">5 May 2021-15 May 2021</div>
                    <div className="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-4 mt-4">
                <Link to="/selected-flight">
                  <div className="box-1 p-4 text-center">
                    <img className="" src="assets/img/airline-logo-1.png" />
                    <div className="row mt-3">
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">London</div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-2">
                        <div className="airplane-logo">
                          <img className="" src="assets/img/airplane-icon-city-country-page.png" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">Dubai</div>
                      </div>
                    </div>
                    <div className="sub-txt mt-3">5 May 2021-15 May 2021</div>
                    <div className="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                <Link to="/selected-flight">
                  <div className="box-1 p-4 text-center">
                    <img className="" src="assets/img/airline-logo-1.png" />
                    <div className="row mt-3">
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">London</div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-2">
                        <div className="airplane-logo">
                          <img className="" src="assets/img/airplane-icon-city-country-page.png" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">Dubai</div>
                      </div>
                    </div>
                    <div className="sub-txt mt-3">5 May 2021-15 May 2021</div>
                    <div className="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                <Link to="/selected-flight">
                  <div className="box-1 p-4 text-center">
                    <img className="" src="assets/img/airline-logo-1.png" />
                    <div className="row mt-3">
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">London</div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-2">
                        <div className="airplane-logo">
                          <img className="" src="assets/img/airplane-icon-city-country-page.png" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">Dubai</div>
                      </div>
                    </div>
                    <div className="sub-txt mt-3">5 May 2021-15 May 2021</div>
                    <div className="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                <Link to="/selected-flight">
                  <div className="box-1 p-4 text-center">
                    <img className="" src="assets/img/airline-logo-1.png" />
                    <div className="row mt-3">
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">London</div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-2">
                        <div className="airplane-logo">
                          <img className="" src="assets/img/airplane-icon-city-country-page.png" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-5">
                        <div className="sub-title">Dubai</div>
                      </div>
                    </div>
                    <div className="sub-txt mt-3">5 May 2021-15 May 2021</div>
                    <div className="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <h2 className="pt-5 pb-2">Other Airlines</h2>
          <div className="other-airline-sect">
            <div className="row no-gutters">
              <div className="col-lg-12 col-md-12 col-12">
                <ul className="w-100 pl-4">
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                  <li>Japan Airlines</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="pt-5 pb-5"> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>


          <h3 className="pt-5 pb-5">Find Flights To Sydney</h3>
          <div className="other-airline-sect flight-sect">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 pl-0">
                <ul className="pl-1">
                  <li> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Brasilia </Link></li>
                  <li> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Chapeco</Link> </li>
                  <li> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Curitiba</Link> </li>
                  <li> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Fortaleza </Link></li>
                  <li className=""> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Iguassu Falls</Link></li>
                  <li className=""> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Belem</Link></li>
                  <li className=""> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Florianopolis</Link></li>
                  <li className=""> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Goiania</Link></li>
                  <li className=""> <Link to="/country-page"> <img className="" src="assets/img/find-flight-icon.png" /> Flights to Boa Vista</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>


        <span className="mt-5 ">
          <CompaniesLogo />
        </span>
      </section>


      <span className="mt-3">
        <Footer />
      </span>

    </div>
  )
}

export default CountryPage;