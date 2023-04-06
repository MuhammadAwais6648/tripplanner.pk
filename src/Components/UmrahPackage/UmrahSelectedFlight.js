import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import '../tripplanner.css';
import '../../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";
import HomeCarousal from "../../Components/HomeCarousal";
import '../../Components/HomeCarousal.css';
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";



const SelectedFlight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Selected Flight | Tripplanner ";
  }, [])
  return (
    <div>
      <BlackNavbar />

      <section className="flight-found flight-detail mt-5">
        <div className="container">
          <h2 className="">Selected Flight</h2>
          <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
            <div className="mobile-container">
              <div className="topnav">
                <a href="#home" className="active"></a>
                <div className="row">
                  <div className="col-12">
                    <div id="myLinks">
                      <a className="for-border-btm" href="#news">
                        <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Price</button>
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
                  <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">

            <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
              <div className="left-bar">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="sub-title for-tit-bor pl-3 pt-4 pb-2"> Price Details </div>
                  </div>
                </div>
                <div className="sub-txt pl-3 pt-3 pr-3 pb-2"><strong> Passenger</strong></div>
                <div className="sub-txt pl-3 pr-3 pb-3"> Adult x 1 <span>AED 320</span> </div>
                <div className="sub-txt pl-3 pr-3 pb-3"> Child x 1 <span>AED 320</span> </div>
                <div className="sub-txt pl-3 pr-3 fr-br-botm pb-3"> Infant x 1 <span>AED 320</span> </div>
                <div className="sub-title pl-3 pr-3 mt-2"> Total <span> 960</span> </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="sub-title for-tit-bor pl-3 pt-4 pb-2"> Additional Information </div>
                  </div>
                </div>
                <div className="sub-txt pl-3 pr-3 pb-2 pt-3"><strong>Fare Rules ISB - DXB</strong></div>
                <div className="sub-txt pl-3 pr-3 pb-3">Any cancellation or changes made to this booking may be subject to airline fees, please check fare rules before requesting for a refund.</div>
              </div>
            </div>

            <div className="col-lg-9 col-md-9">
              <div className="right-bar p-3 flight-detail">
                <div className="sub-title"> <img src="assets/img/dep-icon.png" /> Departure </div>
                <div className="fr-br-botm pb-4 mt-3">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                      <div className="dep-det">EY</div>
                      <div className="sub-txt">Boeing 321 - 234</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <div className="dep-det">Islamabad Intl</div>
                      <div className="sub-txt">2021 - 06 -02</div>
                      <div className="sub-txt pb-lg-0 pb-md-0 pb-4">20 : 15</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <div className="dep-det">Duration Time</div>
                      <div className="sub-txt">15h 45min</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <div className="dep-det">Dublin</div>
                      <div className="sub-txt">2021 - 06 - 02</div>
                      <div className="sub-txt">08</div>
                    </div>
                  </div>
                </div>
                <div className="sub-title mt-4"> <img src="assets/img/dep-icon.png" /> Return </div>
                <div className="row mt-3">
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="dep-det">EY</div>
                    <div className="sub-txt">Boeing 321 - 234</div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="dep-det">Dublin</div>
                    <div className="sub-txt">2021 - 06 -02</div>
                    <div className="sub-txt pb-lg-0 pb-md-0 pb-4">20 : 15</div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="dep-det">Duration Time</div>
                    <div className="sub-txt">15h 45min</div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="dep-det">Islamabad Intl</div>
                    <div className="sub-txt">2021 - 06 - 02</div>
                    <div className="sub-txt">08</div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <Link to="/umrah-visa-search-result" > <button className="view-btn" type="submit">Continue Booking</button></Link>
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

export default SelectedFlight;