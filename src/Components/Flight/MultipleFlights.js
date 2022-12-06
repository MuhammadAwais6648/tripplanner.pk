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



const MultipleFlights = () =>{

useEffect(() => {
  window.scrollTo(0, 0);

}, []);

return(
<div>
<BlackNavbar />

<header class="masthead2 short-header"></header>

<section class="search-fligh">
          <div class="container">
            <h1 class="">Your Search Flight</h1>
            <span class="filter-result float-right w-100 d-block d-lg-none d-md-none">
              <div class="mobile-container">
                <div class="topnav">
                  <a href="#home" class="active"></a>
                    <div class="row">
                      <div class="col-12">
                        <div id="myLinks">
                          <a class="for-border-btm" href="#news">
                            <button type="button" class="btn  airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Airlines</button>
                          </a>
                          <a class="for-border-btm" href="#contact">
                          <button type="button" class="btn  airline-btn" data-toggle="modal" data-target="#exampleModa2" data-whatever="@fat">Stop Over</button>
                          </a>
                          <a class="for-border-btm" href="#contact">
                          <button type="button" class="btn  airline-btn" data-toggle="modal" data-target="#exampleModa3" data-whatever="@fat">Departure Airport</button>
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
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                  <div class="row g-3 needs-validation main-search p-4 bot-search-eng mt-2 m-0" novalidate>
                     <div class="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                        <label class="form-label pl-3">Departure Airport</label>
                        <input type="text" className="form-control" placeholder=" Islamabad (ISB)..." required />
                      </div>
                       <div class="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                          <label class="form-label pl-3">Arrival Airport</label>
                          <input type="text" class="form-control" placeholder=" Going Airport..." required />
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                          <label class="form-label pl-3">Departure/Return Date</label>
                          <input type="text" name="daterange" class="form-control" value="01/01/2018 - 01/15/2018" />
                        </div>
                         <div class="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pt-1">
                            <a href="flight-search-result.html"><button class="search-btn w-100" type="submit">Modify</button></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>






<section class="flight-found pt-0">
          <div class="container">
         <h2 class="">341 Flights Found For - Sydney</h2>
          <div class="row mt-5">

              <div class="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                <div class="left-bar p-3">
                  <div class="sub-title fr-br-botm pb-4"> <img class="pr-2" src="assets/img/filter-result-icon.png" /> Filter Result</div>
                  <div class="sub-title pb-2 pt-4">Price Range</div>
                  <div class="text-center pt-2">SAR 0 - SAR 2000</div>
                  <div class="pl-4 pb-4"><img class="text-center" src="assets/img/price-rang-icon.png" /></div>
                  <div class="fr-br-botm"></div>
                  <div class="sub-title pb-2 mt-3">Stops</div>
                  <div class="filter-list fr-br-botm pt-2">
                    <ul class="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label class="pl-1"> Direct </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> 1 Stop </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> 2 + Stop </label>
                      </li>
                    </ul>
                  </div>
                  <div class="sub-title pb-2 pt-3">Airlines</div>
                  <div class="filter-list fr-br-botm pt-2">
                    <ul class="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label class="pl-1"> Etihad Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Turkish Airline </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> British Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Qatar Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Gulf Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Etihad Airways </label>
                      </li>
                    </ul>
                  </div>
                  <div class="sub-title pb-2 pt-3">Departure Airport</div>
                  <div class="filter-list pt-2">
                    <ul class="p-0">
                      <li>
                          <input type="checkbox" id="" name="" value="" />
                          <label class="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label class="pl-1"> Dubai Airport </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>



              <div class="col-lg-9 col-md-9">
                <div class="right-bar p-2">
                  <div class="row m-0">
                    <div class="col-lg-10 col-md-12">
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>04:00 - 07:05</strong></div>
                                <div class="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>06:00 - 14:05</strong></div>
                                <div class="sub-txt">Sydney Airport - Dubai Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>1 stop</strong> </div>
                                <div class="sub-txt">DXB</div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>8h 05m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="row p-3">
                            <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img class="" src="assets/img/seprator-line.png" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div class="dep-det"><strong>04:00 - 08:00px</strong> </div>
                              <div class="sub-txt">Dubai Airport - ISB Islamabad Int</div>
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>direct</strong> </div>

                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>4h 00m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 right-border" >
                      <div class="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2" >
                        <div class="total-fare text-center"><span class="curency-sign">AED</span>320</div>
                        <Link to="/multi-flight-search-result"><button class="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-bar mt-4">
                  <div class="row m-0">
                    <div class="col-lg-10 col-md-12">
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>04:00 - 07:05</strong></div>
                                <div class="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>06:00 - 14:05</strong></div>
                                <div class="sub-txt">Sydney Airport - Dubai Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>1 stop</strong> </div>
                                <div class="sub-txt">DXB</div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>8h 05m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="row p-3">
                            <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img class="" src="assets/img/seprator-line.png" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div class="dep-det"><strong>04:00 - 08:00px</strong> </div>
                              <div class="sub-txt">Dubai Airport - ISB Islamabad Int</div>
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>direct</strong> </div>

                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>4h 00m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 ">
                      <div class="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div class="total-fare text-center"><span class="curency-sign">AED</span>320</div>
                        <Link to="/multi-flight-search-result"><button class="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-bar mt-4">
                  <div class="row m-0">
                    <div class="col-lg-10 col-md-12">
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>04:00 - 07:05</strong></div>
                                <div class="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>06:00 - 14:05</strong></div>
                                <div class="sub-txt">Sydney Airport - Dubai Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>1 stop</strong> </div>
                                <div class="sub-txt">DXB</div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>8h 05m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="row p-3">
                            <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img class="" src="assets/img/seprator-line.png" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div class="dep-det"><strong>04:00 - 08:00px</strong> </div>
                              <div class="sub-txt">Dubai Airport - ISB Islamabad Int</div>
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>direct</strong> </div>

                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>4h 00m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 ">
                      <div class="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div class="total-fare text-center"><span class="curency-sign">AED</span>320</div>
                      <Link to="/multi-flight-search-result"><button class="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-bar mt-4">
                  <div class="row m-0">
                    <div class="col-lg-10 col-md-12">
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>04:00 - 07:05</strong></div>
                                <div class="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>06:00 - 14:05</strong></div>
                                <div class="sub-txt">Sydney Airport - Dubai Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>1 stop</strong> </div>
                                <div class="sub-txt">DXB</div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>8h 05m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="row p-3">
                            <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img class="" src="assets/img/seprator-line.png" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div class="dep-det"><strong>04:00 - 08:00px</strong> </div>
                              <div class="sub-txt">Dubai Airport - ISB Islamabad Int</div>
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>direct</strong> </div>

                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>4h 00m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 ">
                      <div class="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div class="total-fare text-center"><span class="curency-sign">AED</span>320</div>
                        <Link to="/multi-flight-search-result"><button class="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-bar mt-4">
                  <div class="row m-0">
                    <div class="col-lg-10 col-md-12">
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>04:00 - 07:05</strong></div>
                                <div class="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="border-small-scr">
                            <div class="row p-3">
                              <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img class="" src="assets/img/seprator-line.png" />
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div class="dep-det"><strong>06:00 - 14:05</strong></div>
                                <div class="sub-txt">Sydney Airport - Dubai Airport</div>
                              </div>
                              <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>1 stop</strong> </div>
                                <div class="sub-txt">DXB</div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div class="dep-det"><strong>8h 05m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img class="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div class="col-lg-10 col-md-10 col-12">
                          <div class="row p-3">
                            <div class="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img class="" src="assets/img/seprator-line.png" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div class="dep-det"><strong>04:00 - 08:00px</strong> </div>
                              <div class="sub-txt">Dubai Airport - ISB Islamabad Int</div>
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>direct</strong> </div>

                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div class="dep-det"><strong>4h 00m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 ">
                      <div class="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div class="total-fare text-center"><span class="curency-sign">AED</span>320</div>
                        <Link to="/multi-flight-search-result"><button class="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
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


export default MultipleFlights;