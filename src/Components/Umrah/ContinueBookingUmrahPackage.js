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


const ContinueBookingUmrahPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Continue Booking | Tripplanner ";
  }, [])


  return (
    <div>
      <BlackNavbar />


      <section className="flight-found flight-detail mt-5">
        <div className="container">
          <h2 className="">Umrah Package - SECURE BOOKING!</h2>
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

            <div className="col-lg-12 col-md-12">
              <div className="right-bar p-4 flight-detail booking-detail">
                <div className="sub-title"> Who’s Travelling</div>
                <div className="sub-txt for-aligment">One-way Private Standart Car. Tue, 24 Nov</div>
                <div className="sub-title pt-3">Traveller 1: Adult</div>

                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-2 form-label">Title <span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Miss</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-2 form-label">First name <span>*</span></label>
                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                    <label className="for-color1 pt-2">Middle name <span>*</span></label>
                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                    <label className="for-color1 pt-2">Surname <span>*</span></label>
                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-3 col-md-2 col-sm-2 col-12">
                    <label className="for-color1 pt-2">Gender <span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">Passport Number <span>*</span></label>
                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">Passport Expiry Date <span>*</span></label>
                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">Nationality <span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>Pakistani</option>
                        <option>Pakistani</option>
                        <option>Pakistani</option>
                        <option>Pakistani</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">DOB<span>*</span></label>
                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">Relation<span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>Single</option>
                        <option>Married</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">CitizenShip Number <span>*</span></label>
                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">Country <span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>Pakistan</option>
                        <option>Dubai</option>
                        <option>Saudia</option>
                        <option>Turkey</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                    <label className="for-color1 pt-4">City<span>*</span></label>
                    <div className="enter-name">
                      <select>
                        <option>Islamabad</option>
                        <option>Karachi</option>
                        <option>Lahore</option>
                        <option>Multan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-3">
                    <label className="for-color1 pt-4">Passport 1st Page <span>*</span></label>
                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <label className="for-color1 pt-4">CitizenShip Card <span>*</span></label>
                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <label className="for-color1 pt-4">Passport Size Picture <span>*</span></label>
                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <label className="for-color1 pt-4">Vaccination Certificate <span>*</span></label>
                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                  </div>
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
                <Link to="/umrah-package-booking-confirm"><button className="view-btn mt-4" type="submit">Confirm Booking</button></Link>
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

export default ContinueBookingUmrahPackage;