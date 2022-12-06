import React , {useState , useEffect} from "react";
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



const MultipleFlightSearchResult = () =>{

useEffect(() => {
  window.scrollTo(0, 0);

}, []);

return (
<div>
<BlackNavbar />

<header class="masthead2 short-header"></header>



<section class="flight-found flight-detail">
          <div class="container">
            <h2 class="">Selected Flight</h2>
            <span class="filter-result float-right w-100 d-block d-lg-none d-md-none">
              <div class="mobile-container">
                <div class="topnav">
                  <a href="#home" class="active"></a>
                    <div class="row">
                      <div class="col-12">
                        <div id="myLinks">
                          <a class="for-border-btm" href="#news">
                            <button type="button" class="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Price</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                     <i class="fa fa-filter" aria-hidden="true"></i>
                  </a>
              </div>
            </div>
          </span>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  Price Details
                </div>
                <div class="modal-body">
                  <div class="sub-title"> Price Details </div>
                  <div class="sub-txt pb-4 pt-2">Passenger</div>
                  <div class="sub-txt pb-2"><strong> 1 Adult</strong></div>
                  <div class="sub-txt pb-3"> Adult x 1 <span>AED 320</span> </div>
                  <div class="sub-txt pb-3"> Child x 1 <span>AED 320</span> </div>
                  <div class="sub-txt fr-br-botm pb-3"> Infant x 1 <span>AED 320</span> </div>
                  <div class="sub-title mt-3 p-2"> Total <span> 960</span> </div>
                </div>
                <div class="modal-footer">
                  <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary apply-btn">Apply Filter</button>
                </div>
              </div>
            </div>
      </div>
            <div class="row mt-5">



              <div class="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                <div class="left-bar">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                      <div class="sub-title for-tit-bor pl-3 pt-4 pb-2"> Price Details </div>
                    </div>
                  </div>
                  <div class="sub-txt pl-3 pt-3 pr-3 pb-2"><strong> Passenger</strong></div>
                  <div class="sub-txt pl-3 pr-3 pb-3"> Adult x 1 <span>AED 320</span> </div>
                  <div class="sub-txt pl-3 pr-3 pb-3"> Child x 1 <span>AED 320</span> </div>
                  <div class="sub-txt pl-3 pr-3 fr-br-botm pb-3"> Infant x 1 <span>AED 320</span> </div>
                  <div class="sub-title pl-3 pr-3 mt-2"> Total <span> 960</span> </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                      <div class="sub-title for-tit-bor pl-3 pt-4 pb-2"> Additional Information </div>
                    </div>
                  </div>
                  <div class="sub-txt pl-3 pr-3 pb-2 pt-3"><strong>Fare Rules ISB - DXB</strong></div>
                  <div class="sub-txt pl-3 pr-3 pb-3">Any cancellation or changes made to this booking may be subject to airline fees, please check fare rules before requesting for a refund.</div>
                </div>
              </div>



              <div class="col-lg-9 col-md-9">
                <div class="right-bar p-3 flight-detail">

                  <div class="sub-title"> <img src="assets/img/dep-icon.png" /> Flight 1 </div>
                  <div class="fr-br-botm1 pb-4 mt-3">
                    <div class="row">
                    <div class="col-lg-3 col-md-3 col-6">
                      <div class="dep-det">EY</div>
                      <div class="sub-txt">Boeing 321 - 234</div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                      <div class="dep-det">Islamabad Intl</div>
                      <div class="sub-txt">2021 - 06 -02</div>
                      <div class="sub-txt pb-lg-0 pb-md-0 pb-4">20 : 15</div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                      <div class="dep-det">Duration Time</div>
                      <div class="sub-txt">15h 45min</div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                      <div class="dep-det">Dublin</div>
                      <div class="sub-txt">2021 - 06 - 02</div>
                      <div class="sub-txt">08</div>
                    </div>
                    </div>
                  </div>


                </div>

                <div class="right-bar p-3 flight-detail">

                  <div class="sub-title"> <img src="assets/img/dep-icon.png" /> Flight 2 </div>
                  <div class="fr-br-botm1 pb-4 mt-3">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">EY</div>
                        <div class="sub-txt">Boeing 321 - 234</div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">Sydeny Intl</div>
                        <div class="sub-txt">2021 - 06 -02</div>
                        <div class="sub-txt pb-lg-0 pb-md-0 pb-4">20 : 15</div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">Duration Time</div>
                        <div class="sub-txt">15h 45min</div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">Dubai Intl</div>
                        <div class="sub-txt">2021 - 06 - 02</div>
                        <div class="sub-txt">08</div>
                      </div>
                    </div>
                  </div>



                </div>


                <div class="right-bar p-3 flight-detail">

                  <div class="sub-title"> <img src="assets/img/dep-icon.png" /> Flight 3 </div>
                  <div class="fr-br-botm pb-4 mt-3">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">EY</div>
                        <div class="sub-txt">Boeing 321 - 234</div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">Dubai Intl</div>
                        <div class="sub-txt">2021 - 06 -02</div>
                        <div class="sub-txt pb-lg-0 pb-md-0 pb-4">20 : 15</div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">Duration Time</div>
                        <div class="sub-txt">15h 45min</div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-6">
                        <div class="dep-det">Islamabad Intl</div>
                        <div class="sub-txt">2021 - 06 - 02</div>
                        <div class="sub-txt">08</div>
                      </div>
                    </div>
                  </div>

                  <div class="text-center mt-2">
                    <Link to="/continue-flight-booking"><button class="view-btn" type="submit">Continue Booking</button></Link>
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

export default MultipleFlightSearchResult;