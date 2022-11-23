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


const AirportTransfer = () => {
useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Airport Transfer | Tripplanner ";
}, [])
return(
<div>
<BlackNavbar />


 <section className="search-flight mt-5">
          <div className="container">
            <div className="nav mb-4">
              <a href="!#">Home</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3">All Hotels </a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3">United Arab Amarat</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3"> Bur Duba</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3 gand-exce">Gand Excelsior</a>
            </div>
            <span className="filter-result hotel-search-filter float-right w-100 d-block d-lg-none">
              <div className="mobile-container">
                <div className="topnav">
                  <a href="#home" className="active"></a>
                    <div className="row">
                      <div className="col-12">
                        <div className="mylink-hotel-search" id="myLinks">
                          <a className="for-border-btm" href="#news">
                            <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Car Type</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa2" data-whatever="@fat">Capacity</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa3" data-whatever="@fat">Car Hire Company</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa4" data-whatever="@fat">Pickup Location</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa5" data-whatever="@fat">Specifications</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                     <i className="fa fa-filter" aria-hidden="true"></i>
                  </a>
              </div>
            </div>
          </span>
          <div className="row mb-3 m-0">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="g-3 needs-validation main-search bot-search-eng p-4 mt-2" >
                  <div className="sub-title pl-3 pb-lg-2 pb-md-0">Pick-Up Near</div>
                  <div className="row">
                   <div className="col-xl-5 col-lg-5 col-md-4 col-12 pt-lg-0 pt-md-1 pt-1">
                      <label className="form-label pl-3">Destination</label>
                      <input type="text" className="form-control" placeholder=" Your Searched Destination " required />
                    </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-12 pt-lg-0 pt-md-1 pt-4">
                        <label className="form-label pl-3">Pick Up Check In / Check Out</label>
                        <input type="text" name="daterange" className="form-control" value="01/01/2018 - 01/15/2018" />
                      </div>
                     <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-md-1 pt-4">
                        <label className="form-label pl-3">Pick Up Time</label>
                        <select className="form-control">
                          <option>Pick Up Time</option>
                          <option>Pick Up Time</option>
                          <option>Pick Up Time</option>
                        </select>
                      </div>
                      </div>
                      <div className="sub-title pl-3 pb-lg-2 mb-md-0 pt-3">Drop-Off Near</div>
                      <div className="row">
                       <div className="col-xl-5 col-lg-5 col-md-4 col-12 pt-lg-0 pt-md-1 pt-1">
                          <label className="form-label pl-3">Destination</label>
                          <input type="text" className="form-control" placeholder=" Same as Drop Off Location " required />
                        </div>
                          <div className="col-xl-4 col-lg-4 col-md-5 col-12 pt-lg-0 pt-md-1 pt-4">
                            <label className="form-label pl-3">Drop Off Check In / Check Out</label>
                            <input type="text" name="daterange" className="form-control" value="01/01/2018 - 01/15/2018" />
                          </div>
                         <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-md-1 pt-4">
                            <label className="form-label pl-3">Drop Off Time</label>
                            <select className="form-control">
                              <option>Drop Off Time</option>
                              <option>Drop Off Time</option>
                              <option>Drop Off Time</option>
                            </select>
                          </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-10 col-lg-10 col-md-8"></div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-12 pb-lg-0">
                              <Link to="/transport-search-result"><button className="search-btn btn-primary w-100 mt-md-3" type="submit">Modify</button></Link>
                            </div>
                          </div>
                    </div>
                </div>
                </div>
          </div>
        </section>



<section className="flight-found pt-0">
  <div className="container">
    <h1>Select Your Airport Transport</h1>
          <div className="row mt-5">

              <div className="col-lg-12 transport-serach-result col-md-12">
                <div className="right-bar">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/business-gmc.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Business GMC</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                          <div className="text-center"><Link to="/business-gmc"><button className="view-btn w-100" type="submit">Book Now</button></Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/economy-gmc.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Economy GMC</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/standard-gmc.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Standard GMC</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/business-car.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Business Car</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/economy-car.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Economy Car</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/standard-car.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Standard Car</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/hundai-h1.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Hundai H1</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/standard-innova.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Standard Innova</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/standard-hiace.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Standard Hiace</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/economy-coaster.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Economy Coaster</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><Link to="/business-gmc"><button className="view-btn w-100" type="submit">Book Now</button></Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/standard-coaster.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">Standard Coaster</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/vip-bus.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">VIP Bus</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/vvip-bus.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail no-border pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="hotel-name">VVIP Bus</div>
                            <div className="dep-det">Car 2 Airport</div>
                            <div className="canc-detail pb-1"> <i className="fa fa-check mr-1"></i> <strong>Recommended 80%</strong></div>

                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="mt-2">Facilities</div>
                            <div className="fact-pro pt-1"><img className="" src="assets/img/airp-man.png" /> 5 <span className="pl-2"><img className="" src="assets/img/airp-2man.png" /> 2</span> <span className="pl-2"><img className="" src="assets/img/airp-babge.png" /> 1</span></div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="sub-title mt-3">SAR-123</div>
                            <div className="">One Way</div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="canc-detail pb-1 text-center"> <i className="fa fa-check mr-1"></i> <strong>Free Cancellation</strong></div>
                            <div className="text-center"><a href="business-gmc.html"><button className="view-btn w-100" type="submit">Book Now</button></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

     </div>
  </div>
</section>


<Footer />

</div>


)
}

export default AirportTransfer;