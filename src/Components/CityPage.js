import React , {useEffect} from "react";
import BlackNavbar from "../Components/BlackNavbar";
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Date from "../Components/Date";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const CityPage = () =>{

useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "City Page | Tripplanner ";
}, [])


return(
<div>

<Navbar />

 <header class="masthead main-header city-country-header">
            <div class="container d-flex h-100 align-items-center">


            <div class="search-form w-100">
              <div class="container">
                <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-7 mb-md-2 mb-sm-0 mb-0">
              <div class="custom-dropdown cus-down-arrow pr-0">
                <button class="dropbtn">Return<i class="fa fa-angle-down"></i></button>
                <div class="dropdown-content">
                  <a href="#">Ony Way</a>
                </div>
              </div>
              <div class="custom-dropdown cus-down-arrow cus-down-arrow pr-0">
                <button class="dropbtn">Adult <i class="fa fa-angle-down"></i></button>
                <div class="dropdown-content">
                  <div class="passenger pt-3 pb-3 pl-2 pr-2">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="title-pax">Adult</div>
                        <div class="count-pax">
                          <div class="qty">
                              <span class="minus bg-dark">-</span>
                              <input type="number" class="count" name="qty" value="1" />
                              <span class="plus bg-dark">+</span>
                          </div>
                  </div>
                </div>
                <div class="col-lg-12 mt-3 mb-3">
                  <div class="title-pax">Child</div>
                  <div class="count-pax">
                    <div class="qty">
                        <span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="1" />
                        <span class="plus bg-dark">+</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="title-pax">Infant</div>
                  <div class="count-pax">
                    <div class="qty">
                        <span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="1" />
                        <span class="plus bg-dark">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-dropdown cus-down-arrow pr-0">
          <button class="dropbtn">Economy<i class="fa fa-angle-down"></i></button>
          <div class="dropdown-content">
            <a href="#">Business</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
           <div class="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                <div class="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                  <label class="form-label pl-3">Flying From</label>
                  <select class="form-control">
                    <option>City Name</option>
                    <option>City Name</option>
                    <option>City Name</option>
                  </select>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                  <label class="form-label pl-3">Destination</label>
                  <select class="form-control">
                    <option>Pakistan</option>
                    <option>Pakistan</option>
                    <option>Pakistan</option>
                  </select>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                  <label class="form-label pl-3">Check In / Check Out</label>

                  <Date />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pb-4 pt-1">
                  <Link to="/flight-search-result"><button class="search-btn  w-100" type="submit">SEARCH</button></Link>
                </div>
            </div>
         </div>
        </div>
      </div>
    </div>

  </div>
</header>







 <section class="flight-det city-country-page">
          <div class="container">
                  <div class="nav mb-4">
                    <Link to="flight">Flight</Link><span><i class="fa fa-angle-right"></i></span>
                    <Link to="/city-page" class="pl-3">Oceania </Link><span><i class="fa fa-angle-right"></i></span>
                    <Link to="/city-page" class="pl-3 gand-exce">Sydney</Link>
                  </div>



            <h1 class="pb-4 pt-5">Return Flights To Sydney</h1>
            <div class="ret-flig-det city-count-sect">
              <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <Link to="/selected-flight">
                <div class="box-1 p-4 text-center">
                  <img class="" src="assets/img/airline-logo-1.png" />
                  <div class="row mt-3">
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">London</div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-2">
                      <div class="airplane-logo">
                        <img class="" src="assets/img/airplane-icon-city-country-page.png" />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">Dubai</div>
                    </div>
                  </div>
                  <div class="sub-txt mt-3">5 May 2021-15 May 2021</div>
                  <div class="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                </div>
                </Link>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                 <Link to="/selected-flight">
                <div class="box-1 p-4 text-center">
                  <img class="" src="assets/img/airline-logo-1.png" />
                  <div class="row mt-3">
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">London</div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-2">
                      <div class="airplane-logo">
                        <img class="" src="assets/img/airplane-icon-city-country-page.png" />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">Dubai</div>
                    </div>
                  </div>
                  <div class="sub-txt mt-3">5 May 2021-15 May 2021</div>
                  <div class="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                </div>
                </Link>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-4 mt-4">
                <Link to="/selected-flight">
                <div class="box-1 p-4 text-center">
                  <img class="" src="assets/img/airline-logo-1.png" />
                  <div class="row mt-3">
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">London</div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-2">
                      <div class="airplane-logo">
                        <img class="" src="assets/img/airplane-icon-city-country-page.png" />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">Dubai</div>
                    </div>
                  </div>
                  <div class="sub-txt mt-3">5 May 2021-15 May 2021</div>
                  <div class="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                </div>
                </Link>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                <Link to="/selected-flight">
                <div class="box-1 p-4 text-center">
                  <img class="" src="assets/img/airline-logo-1.png" />
                  <div class="row mt-3">
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">London</div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-2">
                      <div class="airplane-logo">
                        <img class="" src="assets/img/airplane-icon-city-country-page.png" />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">Dubai</div>
                    </div>
                  </div>
                  <div class="sub-txt mt-3">5 May 2021-15 May 2021</div>
                  <div class="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                </div>
                </Link>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                  <Link to="/selected-flight">
                <div class="box-1 p-4 text-center">
                  <img class="" src="assets/img/airline-logo-1.png" />
                  <div class="row mt-3">
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">London</div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-2">
                      <div class="airplane-logo">
                        <img class="" src="assets/img/airplane-icon-city-country-page.png" />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">Dubai</div>
                    </div>
                  </div>
                  <div class="sub-txt mt-3">5 May 2021-15 May 2021</div>
                  <div class="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                </div>
                </Link>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                <Link to="/selected-flight">
                <div class="box-1 p-4 text-center">
                  <img class="" src="assets/img/airline-logo-1.png" />
                  <div class="row mt-3">
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">London</div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-2">
                      <div class="airplane-logo">
                        <img class="" src="assets/img/airplane-icon-city-country-page.png" />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-5">
                      <div class="sub-title">Dubai</div>
                    </div>
                  </div>
                  <div class="sub-txt mt-3">5 May 2021-15 May 2021</div>
                  <div class="rtn-final-price text-center mt-3"> <strong>365</strong> -AED</div>
                </div>
                </Link>
              </div>
          </div>
        </div>


        <h2 class="pt-5 pb-2">Other Airlines</h2>
          <div class="other-airline-sect">
          <div class="row no-gutters">
            <div class="col-lg-12 col-md-12 col-12">
              <ul class="w-100 pl-4">
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

        <h2 class="pt-5 pb-5"> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>


        <h3 class="pt-5 pb-3">Find Flights To Sydney</h3>
        <div class="other-airline-sect flight-sect">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12 pl-0">
              <ul class="pl-1">
                <li> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Brasilia </Link></li>
                <li> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Chapeco</Link> </li>
                <li> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Curitiba</Link> </li>
                <li> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Fortaleza </Link></li>
                <li class=""> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Iguassu Falls</Link></li>
                <li class=""> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Belem</Link></li>
                <li class=""> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Florianopolis</Link></li>
                <li class=""> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Goiania</Link></li>
                <li class=""> <Link to="/city-page"> <img class="" src="assets/img/find-flight-icon.png" /> Flights to Boa Vista</Link></li>
                </ul>
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

export default CityPage;