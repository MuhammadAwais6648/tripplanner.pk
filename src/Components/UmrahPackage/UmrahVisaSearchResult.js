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


const VisaSearchResult = () => {
useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Search Result | Tripplanner ";
}, [])
return(
<div>
<BlackNavbar />

<section className="flight-det umrah-main umrah-visa-search mt-5">
          <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-12">
                    <div className="row">
                        <div className="col-lg-9 col-md- col-sm-8 col-12 pb-lg-4">
                        <h1>Sydney</h1>
                       </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                      <Link to="/continue-booking-customize-umrah"> <button className="view-btn  w-100" type="submit">Continue Booking</button></Link>
                    </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-3"></div>
                </div>
                <div className="row">
                  <div className="col-lg-9 col-md-9 col-12">
                    <div className="umrah-visa-search-img mb-lg-4 mb-md-4 mb-4 p-2">
                        <div className="row">
                           <div className="col-lg-12 col-md-12">
                             <img className="w-100" src="assets/img/Umrah-Visa-Search-Result.jpg" alt="" />
                            </div>
                        </div>
                     </div>
                      <div id="regular-text">
                       <div className="row">
                      <div className="col-lg-12 col-md-12 col-12">
                      <h1>Visit Visa</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>Visa Policy</h1>
                      <tr>
                      <td>
                        <table className="for-tabel">
                          <tr className="border-title"><th align="left">Visa Type</th><th align="left">Visa Type Detail</th><th align="left"> Validity of Visa</th></tr>
                          <tr className="border-data"><td>USA Non-Immigrant Visa</td><td>
                            <div className="pb-1">Non-Immigrant Visa Single Entry</div>
                            <div className="pb-1">Non-Immigrant Visa Multiple Entry</div></td><td>
                              <div className="pb-1">3 months</div>
                              <div className="pb-1">1 years / 3 years</div></td></tr>
                              <tr className="border-data"><td>USA Tourist Visa</td><td>
                            <div className="pb-1">Tourist Visa Single Entry</div>
                            <div className="pb-1">Tourist Visa Multiple Entry</div></td><td>
                              <div className="">3 months</div>
                              <div className="">1 years / 3 years</div></td></tr>
                              <tr className="border-data"><td>Transit Visa</td><td>
                            <div className="pb-1">Transit Visa Single Entry</div>
                            <div className="pb-1">Transit Visa Triple Entry</div>
                            <div className="pb-1">Non-Immigrant Visa Multiple Entry</div></td><td>
                              <div className="pb-1">3 months</div>
                              <div className="pb-1">3 month / 6 months</div>
                              <div className="pb-1">3 month / 6 months</div></td></tr>
                        </table>
                      </td>
                    </tr>
                    <p className="pt-3">Note: The time / period of stay are determined by the USA Immigration.</p>
                      <h1>USA Visit Visa Requirements</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>USA Tourist Visa</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>USA Visit Visa Requirements</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>USA Visit Visa Price</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>Travel Tips for USA Travel</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>Best Time to Visit USA</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>Things to do in USA</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>Shopping in USA</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <h1>FAQs</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
                      <div className="row">
                        <div className="col-lg-3 col-md-4">
                          <div className="Continue-btn">
                             <Link to="/continue-booking-customize-umrah"><button className="view-btn  w-100" type="submit">Continue Booking</button></Link>
                        </div>
                        </div>
                        <div className="col-lg-9 col-md-8"></div>
                      </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="left-bar p-3">
            <div className="sub-heading">30 Days Visit Visa</div>
            <div className="price-person p-2 mt-2">SAR 650 /-Per Person</div>
            <div className="sub-heading mt-2 pt-3">INCLUDES</div>
            <div className="booking-points pt-3">
             <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>USA Immigration Fees </span></div>
               <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>Visa Service Charges</span></div>
               <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>All Taxes</span></div>
               <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>Tourist Visa</span></div>
               <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>30 Days Duration of stay in USA</span></div>
               <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>90 Days Validity (Travel Time )</span></div>
               <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>7 Working Days Visa Processing Time</span></div>
            </div>
            <div className="">
              <div className="Continue-btn">
                   <Link to="/continue-booking-customize-umrah"><button className="view-btn  w-100" type="submit">Continue Booking</button></Link>
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

export default VisaSearchResult;