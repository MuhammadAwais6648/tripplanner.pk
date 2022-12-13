import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import BlackNavbar from "../Components/BlackNavbar";

const HajjPackages = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hajj Package | Tripplanner ";
  }, []);



  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(1);
  const [infant, setInfant] = useState(1);

  const adultMinus = () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  }
  const adultPlus = () => {
    setAdult(adult + 1);
  }
  //    Child
  const childMinus = () => {
    if (child > 1) {
      setChild(child - 1);
    }
  }
  const childPlus = () => {
    setChild(child + 1);
  }

  const infantMinus = () => {
    if (infant > 1) {
      setInfant(infant - 1);
    }
  }
  const infantPlus = () => {
    setInfant(infant + 1);
  }


  return (
    <div>
      <Navbar />


      <header className="masthead main-header umrah-header">
        <div className="container">
          <div className="row pb-2">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="umrah-pack-type">
                <ul className="nav nav-pills umrah-nav-pills ml-0 ">
                  <li className="nav-item t-white">
                    <a className="nav-link tab-nav-link tab-pad active t-white" data-toggle="pill" href="#home">Customize Hajj</a>
                  </li>
                  <li className="nav-item tab-nav-item t-white">
                    <a className="nav-link tab-nav-link tab-pad " data-toggle="pill" href="#menu1">Hajj Package
                    </a>
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12"></div>
          </div>
          <div className="tab-content">
            <div id="home" className="tab-pane active">

              <div className="search-form w-100 umrah-search-frm mt-0">
                <div className="container">
                  <div className="header-main-heading pb-2">Country</div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                          <label className="form-label pl-3">Your City</label>
                          <input type="text" className="form-control" placeholder=" Enter City Name" required />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                          <label className="form-label pl-3">Nationality</label>
                          <input type="text" className="form-control" placeholder=" Enter Nationality" required />
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0">
                          <label className="form-label pl-3">No of Travelers</label>
                          <div className="search-dropdown dropdown-passenger">
                            <div className="dropbtn">
                              <input className="form-control form-control-lg" type="text" placeholder="ADT 1, CNN 0, INF 0" />
                            </div>
                            <div className="dropdown-content">
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                  <label>Adult</label>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                  <div className="qty">
                                    <span className="minus bg-dark adultMinus" onClick={adultMinus}>-</span>
                                    <input type="number" className="count" id="adult" name="adult" value={adult} />
                                    <span className="plus bg-dark adultPlus" onClick={adultPlus}>+</span>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12"><hr /></div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                  <label>Child</label>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                  <div className="qty">
                                    <span className="minus bg-dark childMinus" onClick={childMinus}>-</span>
                                    <input type="number" className="count" id="child" name="child" value={child} />
                                    <span className="plus bg-dark childPlus" onClick={childPlus}>+</span>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12"><hr /> </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                  <label>Infant</label>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                  <div className="qty">
                                    <span className="minus bg-dark infantMinus" onClick={infantMinus}>-</span>
                                    <input type="number" className="count" id="infant" name="infant" value={infant} />
                                    <span className="plus bg-dark infantPlus" onClick={infantPlus}>+</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0">
                          <button className="search-btn  w-100" type="submit">SEARCH</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div id="menu1" className="tab-pane fade">

              <div className="search-form w-100 umrah-search-frm mt-0">
                <div className="container">
                  <div className="header-main-heading pb-2">Star Packages</div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="row g-3 needs-validation main-search p-4 mt-2" >
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                          <label className="form-label pl-3">Your City</label>
                          <input type="text" className="form-control" value=" Enter City Name" required />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                          <label className="form-label pl-3">Nationality</label>
                          <input type="text" className="form-control" value=" Enter Nationality" required />
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0">
                          <label className="form-label pl-3">No of Travelers</label>
                          <div className="search-dropdown dropdown-passenger">
                            <div className="dropbtn">
                              <input className="form-control form-control-lg" type="text" placeholder="ADT 1, CNN 0, INF 0" />
                            </div>
                            <div className="dropdown-content">
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                  <label>Adult</label>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                  <div className="qty">
                                    <span className="minus bg-dark adultMinus" onClick={adultMinus}>-</span>
                                    <input type="number" className="count" id="adult" name="adult" value={adult} />
                                    <span className="plus bg-dark adultPlus" onClick={adultPlus}>+</span>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12"><hr /></div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                  <label>Child</label>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                  <div className="qty">
                                    <span className="minus bg-dark childMinus" onClick={childMinus}>-</span>
                                    <input type="number" className="count" id="child" name="child" value={child} />
                                    <span className="plus bg-dark childPlus" onClick={childPlus}>+</span>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12"><hr /> </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                  <label>Infant</label>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                  <div className="qty">
                                    <span className="minus bg-dark infantMinus" onClick={infantMinus}>-</span>
                                    <input type="number" className="count" id="infant" name="infant" value={infant} />
                                    <span className="plus bg-dark infantPlus" onClick={infantPlus}>+</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0">
                          <button className="search-btn  w-100" type="submit">SEARCH</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>


      <section className="flight-det umrah-packages search-fligh mb-0 pb-3">
        <div className="container">
          <h1 className="pb-4">Most Popular Hajj Packages</h1>
          <span className="filter-result hotel-search-filter float-right w-100 d-block d-lg-none">
            <div className="mobile-container">
              <div className="topnav">
                <a href="#home" className="active"></a>
                <div className="row">
                  <div className="col-12">
                    <div className="mylink-hotel-search" id="myLinks">
                      <a className="for-border-btm" href="#news">
                        <button type="button" className="btn airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Your Budget (per night)</button>
                      </a>
                      <a className="for-border-btm" href="#contact">
                        <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa2" data-whatever="@fat">Star Ranking</button>
                      </a>
                      <a className="for-border-btm" href="#contact">
                        <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa3" data-whatever="@fat">Facilities</button>
                      </a>
                      <a className="for-border-btm" href="#contact">
                        <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa4" data-whatever="@fat">Review Score</button>
                      </a>
                      <a className="for-border-btm" href="#contact">
                        <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa5" data-whatever="@fat">Availability</button>
                      </a>
                      <a className="for-border-btm" href="#contact">
                        <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa6" data-whatever="@fat">Room Facilities</button>
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
          <div className="row">
            <div className="col-lg-9 col-md-8 col-12">
              <div className="sort-by mt-lg-0 mt-md-4 mt-4">
                <div className="sub-title pt-1 pb-2">Sort By:</div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <select className="p-2">
                      <option>AED2400-AED2600</option>
                      <option>AED2400-AED2600</option>
                      <option>AED2400-AED2600</option>
                      <option>AED2400-AED2600</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <select className="p-2">
                      <option>Rating</option>
                      <option>Rating</option>
                      <option>Rating</option>
                      <option>Rating</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <select className="p-2">
                      <option>Most Popular</option>
                      <option>Most Popular</option>
                      <option>Most Popular</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                </div>
                <div className="sub-title view-by pt-3 pb-2">View By: <a href=""><i className="fa fa-list mr-lg-2 ml-lg-2 mr-md-2 ml-md-2 mr-2 ml-2 "></i></a> <a href=""><i className="fas fa-th"></i></a></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="starting-price text-center p-3">
                <div className="sub-txt">40 | hotels starting at</div>
                <div className="total-price">AED-2400</div>
                <div className="chk-all"><a href="!#">Check All <i className='fa fa-angle-double-right'></i> </a></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content hotel-model-content">
            <div className="modal-header">
              Budget Details
            </div>
            <div className="modal-body">
              <ul className="p-0">
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> SAR 0 - SAR 200 <span className="float-right">90</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> SAR 200 - SAR 400 <span className="float-right">401</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> SAR 400 - SAR 600 <span className="float-right">345</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> SAR 600 - SAR 800 <span className="float-right">410</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> SAR 800 - SAR 1000 <span className="float-right">69</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> SAR 1000 - SAR 1500 <span className="float-right">105</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> SAR 1500 - SAR 2000 <span className="float-right">260</span> </label>
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
              Ranking
            </div>
            <div className="modal-body">
              <ul className="p-0">
                <li>
                  <input type="checkbox" id="" name="" value="" />
                  <label>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="" name="" value="" />
                  <label>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="" name="" value="" />
                  <label>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </label>
                </li>

                <li>
                  <input type="checkbox" id="" name="" value="" />
                  <label>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="" name="" value="" />
                  <label>
                    <span className="fa fa-star checked"></span>
                  </label>
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
              Facilities Details
            </div>
            <div className="modal-body">
              <ul className="p-0">
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Breakfast <span className="float-right">90</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Air Conditioning <span className="float-right">401</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Electric Kattle <span className="float-right">345</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Wifi <span className="float-right">410</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Non Smoking <span className="float-right">69</span> </label>
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
              Review Score Details
            </div>
            <div className="modal-body">
              <ul className="p-0">
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Wonderful: 9+ <span className="float-right">90</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Very Good: 8+ <span className="float-right">401</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Good: 7+ <span className="float-right">345</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Pleasamd: 6+ <span className="float-right">410</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> No Rating <span className="float-right">69</span> </label>
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
              Availability Details
            </div>
            <div className="modal-body">
              <ul className="p-0">
                <li>
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Only Show Available Hotels <span className="float-right">90</span> </label>
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
      <div className="modal fade" id="exampleModa6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              Room Facilities Details
            </div>
            <div className="modal-body">
              <ul className="p-0">
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Kitchen <span className="float-right">90</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Private Bathroom  <span className="float-right">401</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Air Conditioning <span className="float-right">345</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Bathtub <span className="float-right">410</span> </label>
                </li>
                <li className="pb-2">
                  <input type="checkbox" id="" name="" value="" />
                  <label className="pl-1 w-100 d-inline"> Terrace <span className="float-right">69</span> </label>
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
          <div className="row mt-5">


            <div className="col-lg-9 col-md-12">
              <div className="right-bar umrah-pack-det">
                <div className="row p-2">
                  <div className="col-lg-3 col-md-3">
                    <img className="hotel-img" src="assets/img/umrah-hotel.png" />
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="umrah-hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                      <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                          <div className="hotel-name mt-2">5 star Hajj Package 14 Days</div>
                          <div className="hotel-compl-det">
                            <div className="row mt-3">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name"><img className="mr-2" src="assets/img/makkah.png" /> Makkah</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name madinah-hotel"><img className="mr-2" src="assets/img/madinah.png" /> <span>Madinah</span></div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Zamzam <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Madinah <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-makkah.png" /> @100mtrs </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-madinah.png" /> @200mtrs </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /></div>
                              </div>
                            </div>
                            <div className="sub-title mt-3">Includes</div>
                            <div className="fac-include mt-2">
                              <button className="mr-1">Transport</button>
                              <button className="mr-1">Visa</button>
                              <button className="mr-1">Ticket</button>
                              <button className="mr-1">Hotel</button>
                              <button className="mt-lg-0 mt-md-0 mt-sm-0 mt-2">Taxes</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12 mt-2 col-sm-12">
                          <div className="row">
                            <div className="col-lg-9 col-md-3 col-sm-3">
                              <div className="review">Very Good</div>
                              <div className="review-count">2563 reviews</div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-2 text-center">
                              <div className="ranking p-1">9.5</div>
                            </div>
                          </div>
                          <div className=" flight-fare pt-5">
                            <div className="sub-txt text-center">02 adults 05 nights</div>
                            <div className=" text-center total-fare1 ">AED 2,450</div>
                            <Link to="/continue-booking-customize-umrah"><button className="view-btn  w-100" type="submit">Check Availability</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-bar umrah-pack-det mt-4">
                <div className="row p-2">
                  <div className="col-lg-3 col-md-3">
                    <img className="hotel-img" src="assets/img/umrah-hotel.png" />
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="umrah-hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                      <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                          <div className="hotel-name mt-2">5 star Hajj Package 14 Days</div>
                          <div className="hotel-compl-det">
                            <div className="row mt-3">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name"><img className="mr-2" src="assets/img/makkah.png" /> Makkah</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name madinah-hotel"><img className="mr-2" src="assets/img/madinah.png" /> <span>Madinah</span></div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Zamzam <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Madinah <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-makkah.png" /> @100mtrs </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-madinah.png" /> @200mtrs </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /></div>
                              </div>
                            </div>
                            <div className="sub-title mt-3">Includes</div>
                            <div className="fac-include mt-2">
                              <button>Transport</button>
                              <button>Visa</button>
                              <button>Ticket</button>
                              <button>Hotel</button>
                              <button className="mt-lg-0 mt-md-0 mt-sm-0 mt-2">Taxes</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12 mt-2 col-sm-12">
                          <div className="row">
                            <div className="col-lg-9 col-md-3 col-sm-3">
                              <div className="review">Very Good</div>
                              <div className="review-count">2563 reviews</div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-2 text-center">
                              <div className="ranking p-1">9.5</div>
                            </div>
                          </div>
                          <div className=" flight-fare pt-5">
                            <div className="sub-txt text-center">02 adults 05 nights</div>
                            <div className=" text-center total-fare1 ">AED 2,450</div>
                            <Link to="/continue-booking-customize-umrah"><button className="view-btn  w-100" type="submit">Check Availability</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-bar umrah-pack-det mt-4">
                <div className="row p-2">
                  <div className="col-lg-3 col-md-3">
                    <img className="hotel-img" src="assets/img/umrah-hotel.png" />
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="umrah-hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                      <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                          <div className="hotel-name mt-2">5 star Hajj Package 14 Days</div>
                          <div className="hotel-compl-det">
                            <div className="row mt-3">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name"><img className="mr-2" src="assets/img/makkah.png" /> Makkah</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name madinah-hotel"><img className="mr-2" src="assets/img/madinah.png" /> <span>Madinah</span></div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Zamzam <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Madinah <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-makkah.png" /> @100mtrs </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-madinah.png" /> @200mtrs </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /></div>
                              </div>
                            </div>
                            <div className="sub-title mt-3">Includes</div>
                            <div className="fac-include mt-2">
                              <button>Transport</button>
                              <button>Visa</button>
                              <button>Ticket</button>
                              <button>Hotel</button>
                              <button className="mt-lg-0 mt-md-0 mt-sm-0 mt-2">Taxes</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12 mt-2 col-sm-12">
                          <div className="row">
                            <div className="col-lg-9 col-md-3 col-sm-3">
                              <div className="review">Very Good</div>
                              <div className="review-count">2563 reviews</div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-2 text-center">
                              <div className="ranking p-1">9.5</div>
                            </div>
                          </div>
                          <div className=" flight-fare pt-5">
                            <div className="sub-txt text-center">02 adults 05 nights</div>
                            <div className=" text-center total-fare1 ">AED 2,450</div>
                            <Link to="/continue-booking-customize-umrah"><button className="view-btn  w-100" type="submit">Check Availability</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-bar umrah-pack-det mt-4">
                <div className="row p-2">
                  <div className="col-lg-3 col-md-3">
                    <img className="hotel-img" src="assets/img/umrah-hotel.png" />
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="umrah-hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                      <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                          <div className="hotel-name mt-2">5 star Hajj Package 14 Days</div>
                          <div className="hotel-compl-det">
                            <div className="row mt-3">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name"><img className="mr-2" src="assets/img/makkah.png" /> Makkah</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name madinah-hotel"><img className="mr-2" src="assets/img/madinah.png" /> <span>Madinah</span></div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Zamzam <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Madinah <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-makkah.png" /> @100mtrs </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-madinah.png" /> @200mtrs </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /></div>
                              </div>
                            </div>
                            <div className="sub-title mt-3">Includes</div>
                            <div className="fac-include mt-2">
                              <button>Transport</button>
                              <button>Visa</button>
                              <button>Ticket</button>
                              <button>Hotel</button>
                              <button className="mt-lg-0 mt-md-0 mt-sm-0 mt-2">Taxes</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12 mt-2 col-sm-12">
                          <div className="row">
                            <div className="col-lg-9 col-md-3 col-sm-3">
                              <div className="review">Very Good</div>
                              <div className="review-count">2563 reviews</div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-2 text-center">
                              <div className="ranking p-1">9.5</div>
                            </div>
                          </div>
                          <div className=" flight-fare pt-5">
                            <div className="sub-txt text-center">02 adults 05 nights</div>
                            <div className=" text-center total-fare1 ">AED 2,450</div>
                            <Link to="/continue-booking-customize-umrah"><button className="view-btn  w-100" type="submit">Check Availability</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-bar umrah-pack-det mt-4">
                <div className="row p-2">
                  <div className="col-lg-3 col-md-3">
                    <img className="hotel-img" src="assets/img/umrah-hotel.png" />
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="umrah-hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                      <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                          <div className="hotel-name mt-2">5 star Hajj Package 14 Days</div>
                          <div className="hotel-compl-det">
                            <div className="row mt-3">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name"><img className="mr-2" src="assets/img/makkah.png" /> Makkah</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="makkah-hotel-name madinah-hotel"><img className="mr-2" src="assets/img/madinah.png" /> <span>Madinah</span></div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Zamzam <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="" src="assets/img/hotel-shape.png" /> Pulmam Madinah <img className="mr-2" src="assets/img/hotel-loction-map.png" /> </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="hotel-rating ml-4 pl-2"><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked mr-1"></span><span className="fa fa-star checked"></span> </div>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-makkah.png" /> @100mtrs </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt"><img className="pr-1" src="assets/img/map-to-madinah.png" /> @200mtrs </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /> </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="sub-txt">1 Bedroom with Breakfast <img className="pr-1" src="assets/img/no-person.png" /></div>
                              </div>
                            </div>
                            <div className="sub-title mt-3">Includes</div>
                            <div className="fac-include mt-2">
                              <button>Transport</button>
                              <button>Visa</button>
                              <button>Ticket</button>
                              <button>Hotel</button>
                              <button className="mt-lg-0 mt-md-0 mt-sm-0 mt-2">Taxes</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12 mt-2 col-sm-12">
                          <div className="row">
                            <div className="col-lg-9 col-md-3 col-sm-3">
                              <div className="review">Very Good</div>
                              <div className="review-count">2563 reviews</div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-2 text-center">
                              <div className="ranking p-1">9.5</div>
                            </div>
                          </div>
                          <div className=" flight-fare pt-5">
                            <div className="sub-txt text-center">02 adults 05 nights</div>
                            <div className=" text-center total-fare1 ">AED 2,450</div>
                            <Link to="/continue-booking-customize-umrah"><button className="view-btn  w-100" type="submit">Check Availability</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 d-none d-lg-block">
              <div className="left-bar p-3">
                <div className="sub-title fr-br-botm pb-4"> <img className="pr-2" src="assets/img/filter-result-icon.png" /> Filter Result</div>
                <div className="sub-title pb-2 mt-3">Your Budget (per night)</div>
                <div className="filter-list hotel-search-list fr-br-botm pt-2">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> SAR 0 - SAR 200 <span className="float-right">90</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> SAR 200 - SAR 400 <span className="float-right">401</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> SAR 400 - SAR 600 <span className="float-right">345</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> SAR 600 - SAR 800 <span className="float-right">410</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> SAR 800 - SAR 1000 <span className="float-right">69</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> SAR 1000 - SAR 1500 <span className="float-right">105</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> SAR 1500 - SAR 2000 <span className="float-right">260</span> </label>
                    </li>
                  </ul>
                </div>
                <div className="sub-title pb-2 pt-3">Star Ranking</div>
                <div className="filter-list hotel-search-list fr-br-botm pt-2">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label>

                        <span className="fa fa-star"></span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>

                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </label>
                    </li>

                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="sub-title pb-2 pt-3">Facilities</div>
                <div className="filter-list hotel-search-list fr-br-botm pt-2">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Breakfast <span className="float-right">90</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Air Conditioning <span className="float-right">401</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Electric Kattle <span className="float-right">345</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Wifi <span className="float-right">410</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Non Smoking <span className="float-right">69</span> </label>
                    </li>
                  </ul>
                </div>
                <div className="sub-title pb-2 pt-3">Review Score</div>
                <div className="filter-list hotel-search-list fr-br-botm pt-2">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Wonderful: 9+ <span className="float-right">90</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Very Good: 8+ <span className="float-right">401</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Good: 7+ <span className="float-right">345</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Pleasamd: 6+ <span className="float-right">410</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> No Rating <span className="float-right">69</span> </label>
                    </li>
                  </ul>
                </div>
                <div className="sub-title pb-2 pt-3">Availability</div>
                <div className="filter-list hotel-search-list fr-br-botm pt-2">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Only Show Available Hotels <span className="float-right">90</span> </label>
                    </li>
                  </ul>
                </div>
                <div className="sub-title pb-2 pt-3">Room Facilities</div>
                <div className="filter-list hotel-search-list pt-2">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Kitchen <span className="float-right">90</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Private Bathroom  <span className="float-right">401</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Air Conditioning <span className="float-right">345</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Bathtub <span className="float-right">410</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="" name="" value="" />
                      <label className="pl-1 w-100"> Terrace <span className="float-right">69</span> </label>
                    </li>
                  </ul>
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

export default HajjPackages;