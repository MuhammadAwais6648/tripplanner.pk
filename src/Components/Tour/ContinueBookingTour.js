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


const ContinueBookingTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <BlackNavbar />


      <section className="flight-found flight-detail mt-5">
        <div className="container">
          <h2 className="">SECURE BOOKING - ONLY TAKES 2 MINUTES!</h2>
          <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
            <div className="mobile-container">
              <div className="topnav">
                <a href="#home" className="active"></a>
                <div className="row">
                  <div className="col-12">
                    <div id="myLinks">
                      <a className="for-border-btm" href="#news">
                        <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Price</button>
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
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  Price Details
                </div>
                <div className="modal-body">
                  <div className="sub-title"> Price Details </div>
                  <div className="sub-txt pb-4 pt-2">Passenger</div>
                  <div className="sub-txt pb-2"><strong> 1 Adult</strong></div>
                  <div className="sub-txt pb-3"> Adult x 1 <span>AED 320</span> </div>
                  <div className="sub-txt pb-3"> Child x 1 <span>AED 320</span> </div>
                  <div className="sub-txt fr-br-botm pb-3"> Infant x 1 <span>AED 320</span> </div>
                  <div className="sub-title mt-3 p-2"> Total <span> 960</span> </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                  <button type="button" className="btn  apply-btn">Apply Filter</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">

            <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
              <div className="left-bar">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="sub-title pl-3 pt-4">Tour Summery </div>
                    <div className="sub-txt for-tit-bor pl-3 pr-3 pb-3"> 10 Days </div>
                  </div>
                </div>
                <div className="sub-title pt-3 pl-3 pr-3 pb-1"> HIGHLIGHTS OF SYDNEY </div>
                <div className="sub-txt pl-3 pr-3 pb-1">From <strong>Dubai</strong> to <strong>Sydney</strong> </div>
                <div className="fac-include mt-3 pl-3">
                  <button className="mr-1">Discovery</button>
                  <button className="mr-1">Group</button>
                  <button className="mt-2 mr-1">Fully Guided</button>
                  <button>Coach / Bus</button>
                  <button className="mt-2">Historical</button>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="sub-title pl-3 pt-4">Tour Operator:</div>
                    <div className="sub-txt pl-3">Globus</div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="sub-title pt-4">Max group size:</div>
                    <div className="sub-txt pl-3">35</div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="sub-title pl-3">Age range:</div>
                    <div className="sub-txt pl-3">18 to 50</div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="sub-title">Operated in:</div>
                    <div className="sub-txt pl-3">English</div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="sub-title pl-3">Tour id:</div>
                    <div className="sub-txt pl-3">167522</div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="sub-title">Private available:</div>
                    <div className="sub-txt pl-3">Requested as Private</div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="org-price">
                      <div className="sub-title pl-3"> <div className="sub-txt">From <span className="float-none"> AED 3203</span> <div className="reduce-pre ml-1"> -50% </div></div></div>
                      <div className="final-price pl-3">AED 167522</div>
                    </div>

                  </div>
                  <div className="col-lg-6 col-md-6 col-12"></div>
                </div>
              </div>


            </div>

            <div className="col-lg-9 col-md-9">
              <div className="right-bar p-4 flight-detail booking-detail">
                <div className="sub-title"> Who’s Driving</div>
                <div className="sub-txt for-aligment">One-way Private Standart Car. Tue, 24 Nov</div>
                <div className="sub-title pt-3">Traveller 1: Adult</div>
                <div className="row mt-1">
                  <div className="col-lg-4 col-md-4">
                    <label className="contnt-detail">Contact Name <span>*</span></label>
                    <div className="enter-name"><input type="text" value="" placeholder="First name" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <label className="contnt-detail">Middle name <span>*</span></label>
                    <div className="enter-name"><input type="text" value="" placeholder="Middle Name" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <label className="contnt-detail">Surname <span>*</span></label>
                    <div className="enter-name"><input type="text" value="" placeholder="Surname" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-2 col-md-6"></div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-5 col-md-6">
                    <label className="contnt-detail">Phone Number <span>*</span></label>
                    <div className="enter-name"><input type="text" placeholder="In case we need to reach you" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <label className="contnt-detail">Email<span>*</span></label>
                    <div className="enter-name"><input type="text" placeholder="In case we need to reach you" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-2 col-md-6"></div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-5 col-md-6">
                    <label className="contnt-detail">Country/Territory Code <span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>GBR +44</option>
                        <option>GBR +44</option>
                        <option>GBR +44</option>
                        <option>GBR +44</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <label className="contnt-detail">Passport <span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>United Kingdom</option>
                        <option>United Kingdom</option>
                        <option>United Kingdom</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6"></div>
                </div>

                <div className="row">


                  <div className="col-sm-12 col-md-12 col-12">

                    <div id="addTraveler">


                    </div>


                  </div>

                  <div className="col-sm-12 col-md-12 col-12 mt-5">
                    <p>
                      <a className="btn view-btn appendbtn a"  >
                        <i className="fa fa-plus"></i> Traveler
                      </a>

                    </p>

                  </div>
                </div>

              </div>
              <div className="book-now">
                <Link to="/tour-booking-confirm"><button className="view-btn mt-4" type="submit">Confirm Booking</button></Link>
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

export default ContinueBookingTour;