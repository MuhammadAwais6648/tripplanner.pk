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


const BusinessGMC = () => {
useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Vehicle Detail | Tripplanner ";
}, [])
return(
<div>
<BlackNavbar />


<section className="flight-found hotel-detail-right-bar mt-5">
          <div className="container">
            <h2 className="">Secure Your Booking - Only Takes a few minutes!</h2>
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

              <div className="col-lg-3 col-md-3 d-none d-lg-block">
                <div className="left-bar-tour-pack p-3">
                  <div className="row fr-br-botm">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="sub-title"> Price Summery </div>
                    </div>
                  </div>
                  <div className="sub-title final-price mt-3">615</div>
                  <div className="sub-txt"> <strong>Dubai Aed</strong> </div>
                  <div className="sub-txt for-green-color mt-3"> <i className="fa fa-check mr-1"></i> <strong>Pay Now</strong> </div>
                  <div className="sub-txt pl-3">Total includes taxes and fees</div>
                  <div className="benifits mt-4 mb-4">
                  <ul className="p-0">
                      <li className="pb-1"> <i className="fa fa-check mr-1"></i> Free cancellation up to 6 hours before pick-up</li>
                      <li className="pb-1"> <i className="fa fa-check mr-1"></i> Zero Excess Damage Protection available</li>
                      <li> <i className="fa fa-check mr-1"></i> Enhanced cleaning</li>
                  </ul>
                  </div>
                </div>
                </div>

          <div className="col-lg-9 col-md-12">
            <div className="right-bar-transport trans-pack-detail p-lg-2 p-md-2 p-2">
                      <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">

                          <div className="carousel-inner">
                              <div className="carousel-item active"> <img className="" src="assets/img/transport/large-image/business-gmc/gallery-business-gmc-1.jpg" alt="" /> </div>
                              <div className="carousel-item"> <img className="" src="assets/img/transport/large-image/business-gmc/gallery-business-gmc-2.jpg" alt="" /> </div>
                              <div className="carousel-item"> <img className="" src="assets/img/transport/large-image/business-gmc/gallery-business-gmc-3.jpg" alt="" /> </div>
                              <div className="carousel-item"> <img className="" src="assets/img/transport/large-image/business-gmc/gallery-business-gmc-4.jpg" alt="" /> </div>
                          </div>  <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"><i className="fa fa-angle-left"></i> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"><i className="fa fa-angle-right"></i> <span className="carousel-control-next-icon"></span> </a>
                      </div>
                  <div className="mt-lg-3 mt-md-3 d-none d-lg-block d-md-block ml-lg-5 ml-md-3">
                          <div className="carousel-indicators list-inline">
                              <div className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img className="pb-lg-2 pr-lg-2 pb-md-0 pr-md-0" src="assets/img/transport/thumbnail/business-gmc/thumbnail-business-gmc-1.jpg" alt="" /> </a> </div>
                              <div className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img className="pb-lg-2 pr-lg-2 pb-md-0 pr-md-0" src="assets/img/transport/thumbnail/business-gmc/thumbnail-business-gmc-2.jpg" alt="" /> </a> </div>
                              <div className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img className="pb-lg-2 pr-lg-2 pb-md-0 pr-md-0" src="assets/img/transport/thumbnail/business-gmc/thumbnail-business-gmc-3.jpg" alt="" /> </a> </div>
                              <div className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img className="pb-lg-2 pr-lg-2 pb-md-0 pr-md-0" src="assets/img/transport/thumbnail/business-gmc/thumbnail-business-gmc-4.jpg" alt="" /> </a> </div>
                          </div>
                  </div>
                  <div className="transport-detail pl-3">
                    <div className="sub-title mt-3">Business GMC:</div>
                    <div className="sub-txt">GMC or Similar</div>
                   <div className="features pt-2">
                      <span className="pr-2"><img className="pr-1" src="assets/img/adult-icon.png" alt="" /> 5</span>
                      <span className="pr-2"><img className="pr-1" src="assets/img/door.png" alt="" /> 2</span>
                      <span className="pr-2"><img className="pr-1" src="assets/img/aircon.png" alt="" /> Aircon</span>
                   </div>
                   <div className="sub-txt mt-3"> <strong>Fuel Info:</strong> Full to Full</div>
                   <div className="row mt-4">
                     <div className="col-lg-5 col-md-5 col-6">
                       <div className="sub-title">Pick-up</div>
                       <div className="form-to">LHR Airport <img className="pb-1 pl-1" src="assets/img/tran-searchpage-icon-2.png" alt="" /> </div>
                       <div className="sub-txt mt-1">6 Airport Gate Business Centre, Bath Road Harmondsworth, London, GBR</div>
                       <div className="form-to mt-4">Hours of operation</div>
                       <div className="sub-txt mt-1">00:00 to 00:30</div>
                       <div className="sub-txt mt-1">05:00 to 23:59</div>
                     </div>
                     <div className="col-lg-5 col-md-5 col-6">
                       <div className="sub-title">Drop-Off</div>
                       <div className="form-to">LHR Airport <img className="pb-1 pl-1" src="assets/img/tran-searchpage-icon-2.png" alt="" /> </div>
                       <div className="sub-txt mt-1">6 Airport Gate Business Centre, Bath Road Harmondsworth, London, GBR</div>
                       <div className="form-to mt-4">Hours of operation</div>
                       <div className="sub-txt mt-1">00:00 to 00:30</div>
                       <div className="sub-txt mt-1">05:00 to 23:59</div>
                     </div>
                     <div className="col-lg-2 col-md-2"></div>
                   </div>
                   <div className="form-to mt-4">Shuttle to counter and car</div>
                   <div className="sub-txt mt-1">Free shuttle to the rental car counter and car located off the airport.</div>
                  </div>
            </div>
            <div className="right-bar-transport trans-pack-detail d-inline-block p-lg-3 p-md-2 p-2 mt-4">
              <div className="sub-title pb-2">Cleanliness and safety practices</div>
              <div className="clean-safety">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <ul className="p-0">
                      <li className="pb-2"> <img className="pb-1 pl-1" src="assets/img/trans-pack-det-icon-1.png" alt="" />Protective shields at pick-up counters </li>
                      <li className="pb-2"> <img className="pb-1 pl-1" src="assets/img/trans-pack-det-icon-2.png" alt="" /> Social distancing measures </li>
                      <li className="pb-2"> <img className="pb-1 pl-1" src="assets/img/trans-pack-det-icon-3.png" alt="" /> Temperature checks </li>
                      <li className="pb-2 w-100"><img className="pb-1 pl-1" src="assets/img/trans-pack-det-icon-4.png" alt="" /> Car interiors and exteriors cleaned with disinfectant before pick-up</li>
                      <li className="float-left w-100"><img className="pb-1 pl-1" src="assets/img/trans-pack-det-icon-5.png" alt="" /> High-touch surfaces are sanitised at pick-up locations </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-now">
              <Link to="/continue-booking-transport"><button className="view-btn mt-4" type="submit">Continue Booking</button></Link>
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


export default BusinessGMC;