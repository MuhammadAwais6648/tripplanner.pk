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


const UmrahTransportSearchResult = () => {
useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Search Result | Tripplanner ";
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

          </div>
        </section>



        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content hotel-model-content">
              <div className="modal-header">
                Car Type Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> Mini (8) <span className="float-right">90</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Economy (13) <span className="float-right">401</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Compact(9) <span className="float-right">345</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Standart (7) <span className="float-right">410</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Luxury (6) <span className="float-right">69</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Full Size (6) <span className="float-right">105</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> AMG (20) <span className="float-right">260</span> </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Capacity
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> 2-5 Pax </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> 6 or more Pax </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Car Hire Company Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> Alamo (26) <span className="float-right">90</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Avis (30) <span className="float-right">401</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Budget (30) <span className="float-right">345</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Easirent EU (19) <span className="float-right">410</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Enterprise (24) <span className="float-right">69</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Europcar (11) <span className="float-right">69</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Flizzr (6) <span className="float-right">69</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Greenmotion (31) <span className="float-right">69</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Hertz (8) <span className="float-right">69</span> </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Pickup Location Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> In-Terminal (82) </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Shuttle (221) </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Specifications Details
              </div>
              <div className="modal-body">
                  <ul className="p-0">
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1 w-100 d-inline"> Automatic Transmission (133)  </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1 w-100 d-inline"> Manual Transmission (170) </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1 w-100 d-inline"> Unlimited Mileage (224)  </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1 w-100 d-inline"> Limited Mileage (79)  </label>
                      </li>
                  </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>



<section className="flight-found pt-0">
  <div className="container">
    <h1>94 car hire options at Dubai airport from AED-50</h1>
          <div className="row mt-5">

              <div className="col-lg-3 col-md-3 d-none d-lg-block">
                <div className="left-bar p-3">
                  <div className="sub-title fr-br-botm pb-4"> <img className="pr-2" src="assets/img/filter-result-icon.png" /> Car Filter</div>
                  <div className="sub-title pb-2 mt-3">Car Type</div>
                  <div className="filter-list hotel-search-list fr-br-botm pt-2">
                    <ul className="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label className="pl-1 w-100"> Mini (8) <span className="float-right">90</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Economy (13) <span className="float-right">401</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Compact(9) <span className="float-right">345</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Standart (7) <span className="float-right">410</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Luxury (6) <span className="float-right">69</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Full Size (6) <span className="float-right">105</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> AMG (20) <span className="float-right">260</span> </label>
                      </li>
                    </ul>
                  </div>
                  <div className="sub-title pb-2 pt-3">Capacity</div>
                  <div className="filter-list hotel-search-list fr-br-botm pt-2">
                    <ul className="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label>2-5 Pax</label>
                      </li>
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label>6 or more Pax</label>
                      </li>
                    </ul>
                  </div>
                  <div className="sub-title pb-2 pt-3">Car Hire Company</div>
                  <div className="filter-list hotel-search-list fr-br-botm pt-2">
                    <ul className="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label className="pl-1 w-100"> Alamo (26) <span className="float-right">90</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Avis (30) <span className="float-right">401</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Budget (30) <span className="float-right">345</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Easirent EU (19) <span className="float-right">410</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Enterprise (24) <span className="float-right">69</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Europcar (11) <span className="float-right">69</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Flizzr (6) <span className="float-right">69</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Greenmotion (31) <span className="float-right">69</span> </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Hertz (8) <span className="float-right">69</span> </label>
                      </li>
                    </ul>
                  </div>
                  <div className="sub-title pb-2 pt-3">Pickup Location</div>
                  <div className="filter-list hotel-search-list fr-br-botm pt-2">
                    <ul className="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label className="pl-1 w-100"> In-Terminal (82) </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                         <label className="pl-1 w-100"> Shuttle (221) </label>
                      </li>
                    </ul>
                  </div>
                  <div className="sub-title pb-2 pt-3">Specifications</div>
                  <div className="filter-list hotel-search-list pt-2">
                    <ul className="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label className="pl-1 w-100"> Automatic Transmission (133) </label>
                      </li>
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label className="pl-1 w-100"> Manual Transmission (170) </label>
                      </li>
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label className="pl-1 w-100"> Unlimited Mileage (224) </label>
                      </li>
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label className="pl-1 w-100"> Limited Mileage (79) </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 transport-serach-result col-md-12">
                <div className="right-bar">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <div className="car-type">
                        <img className="pl-4 pt-3 w-100" src="assets/img/transport/business-gmc.png" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12col-lg-9 col-md-12">
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Business GMC</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><Link to="/umrah-transport-detail-general"><button className="view-btn" type="submit">Check Availability</button></Link></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Economy GMC</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="economy-gmc.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Standard GMC</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="standard-gmc.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Business Car</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="business-car.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Economy Car</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="economy-car.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Standard Car</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="standard-car.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Hundai H1</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className=" fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="hundai-h1.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Standard Innova</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="standard-innova.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Standard Hiace</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="standard-hiace.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Economy Coaster</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="economy-coaster.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">Standard Coaster</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="standard-coaster.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">VIP Bus</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="vip-bus.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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
                      <div className="hotel-detail pb-3 pt-lg-1 pt-md-0 pt-3 mt-lg-0 mt-md-3">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-9">
                            <div className="hotel-name">VVIP Bus</div>
                            <div className="dep-det">GMC or similar</div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-md-3">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/adult-icon.png" /> 5 Seats |  Manual</div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="sub-txt pb-lg-0 pb-md-2 pb-2"><img className="" src="assets/img/tran-searchpage-icon-1.png" /> 100 free miles per day</div>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <div className="sub-txt"><img className="" src="assets/img/tran-searchpage-icon-2.png" /> Shuttle to counter and car </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail car-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <ul className="p-0">
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                              <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                              <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                              <div className="text-center"><a href="vvip-bus.html"><button className="view-btn" type="submit">Check Availability</button></a></div>
                        </div>
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

export default UmrahTransportSearchResult;