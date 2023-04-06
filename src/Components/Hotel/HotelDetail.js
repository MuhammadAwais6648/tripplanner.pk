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

const HotelDetail = () => {
useEffect(() => {
  window.scrollTo(0, 0)
}, [])


return(
<div>
<BlackNavbar />

<section className="flight-found hotel-detail-right-bar mt-5">
          <div className="container">
            <div className="nav mb-4">
              <a href="!#">Home</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3">All Hotels </a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3">United Arab Amarat</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3"> Bur Duba</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3 gand-exce">Gand Excelsior</a>
            </div>
            <h2 className="">Grand Excelsior Hotel - Bur Dubai <i className="fa fa-star checked"></i><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i></h2>
            <div className="sub-txt"><img className="pr-1" src="assets/img/hotel-loction-pin.png" alt="" />Kuwait Street, Bur Dubai, Dubai, United Arab Emirates <img className="pr-1" src="assets/img/hotel-loction-map.png" alt="" /></div>
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


          <div className="col-lg-9 col-md-12">
            <div className="all-hotel-deatil">
             <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="right-bar p-lg-2 p-md-2">
                      <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">

                          <div className="carousel-inner">
                              <div className="carousel-item active"> <img className="" src="assets/img/hotel-gallery-img.png" alt="" /> </div>
                              <div className="carousel-item"> <img className="" src="assets/img/hotel-gallery-img-2.png" alt="" /> </div>
                              <div className="carousel-item"> <img className="" src="assets/img/hotel-gallery-img-3.png" alt="" /> </div>
                              <div className="carousel-item"> <img className="" src="assets/img/hotel-gallery-img-4.png" alt="" /> </div>
                          </div> <a className="carousel-control-prev fa fa-angle-left" href="#custCarousel" data-slide="prev"><i className="fa fa-angle-left"></i>  </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"><i className="fa fa-angle-right"></i> <span className="carousel-control-next-icon "></span> </a>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-8 col-md-12">
                  <div className="bor-btm pb-3 mb-5">
                  <p>Occupying a convenient position in Bur Dubai and just minutes from the World Trade Center, the stylish Grand Excelsior - Bur Dubai has 8 dining options, an expansive spa and a rooftop pool.</p>
                  <p>This modern property features rooms which are contemporary in design with an Arabian touch. All rooms and suites offer the guest a range of modern amenities including flat-screen TVs and interactive entertainment systems.</p>
                  <p>The Grand Excelsior - Bur Dubai offers a choice of 8 food and beverage outlets. Guests can enjoy a wide range of international cuisine, including specialty Indian, Arabic and continental buffet restaurants.</p>
                  <p>The Grand's modern gym features cardiovascular equipment and free weights.</p>
                  </div>
                  <div className="sub-title">Most popular facilities</div>
                  <div className="all-fac-client">
                    <div className="row">
                        <div className="col-lg-12 pb-3 pt-3">
                          <span className="fact-include pr-4 pb-2"><img className="" src="assets/img/swiming-pool.png" alt="" /> 1 swimming pool </span>
                          <span className="fact-include pr-4"><img className="" src="assets/img/airport-shuttle.png" alt="" /> Airport shuttle </span>
                          <span className="fact-include pr-4"><img className="" src="assets/img/fitness-icon.png" alt="" /> Fitness Center </span>
                          <span className="fact-include pr-4"><img className="" src="assets/img/spa-icon.png" alt="" /> Spa </span>
                        </div>
                        <div className="col-lg-12 pb-3">
                          <span className="fact-include pr-4"><img className="" src="assets/img/no-smoking.png" alt="" /> Non-smoking rooms </span>
                          <span className="fact-include pr-4"><img className="" src="assets/img/resturant.png" alt="" /> Restuarent </span>
                          <span className="fact-include pr-4"><img className="" src="assets/img/tea-icon.png" alt="" /> Tea/Coffee Maker in Rooms </span>
                          <span className="fact-include"><img className="" src="assets/img/bar.png" alt="" /> Bar </span>
                        </div>
                        <div className="col-lg-12">
                          <span className="fact-include pr-4"><img className="" src="assets/img/break-fast.png" alt="" /> Breakfast </span>
                        </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 d-none d-lg-block">
                  <div className="guest-lover p-3">
                    <div className="sub-title mt-1">Guest Love</div>
                    <div className="client-attaction mt-2">
                      <div className="row">
                        <div className="col-lg-2 col-md-2">
                          <div className="star p-1 text-center"><i className="fa fa-star"></i></div>
                        </div>
                        <div className="col-lg-10 col-md-10">
                          <div className="sub-txt"><strong>“Friendy Staff”</strong></div>
                          <div className="sub-txt">41 related reviews</div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-2 col-md-2">
                          <div className="star p-1 text-center"><i className="fa fa-star"></i></div>
                        </div>
                        <div className="col-lg-10 col-md-10">
                          <div className="sub-txt"><strong>“Room Size”</strong></div>
                          <div className="sub-txt">41 related reviews</div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-2 col-md-2">
                          <div className="star p-1 text-center"><i className="fa fa-star"></i></div>
                        </div>
                        <div className="col-lg-10 col-md-10">
                          <div className="sub-txt"><strong>“Reception Staff”</strong></div>
                          <div className="sub-txt">41 related reviews</div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-2 col-md-2">
                          <div className="star p-1 text-center"><i className="fa fa-star"></i></div>
                        </div>
                        <div className="col-lg-10 col-md-10">
                          <div className="sub-txt"><strong>“Boutique Style”</strong></div>
                          <div className="sub-txt">41 related reviews</div>
                        </div>
                      </div>
                      <div className="sub-title mt-3">Loyal Customer</div>
                        <div className="sub-txt  d-inline-flex mt-2"><i className="fa fa-check mr-1"></i> There are more repeat guests here than most other properties.</div>
                        <div className="reserve mt-3 mb-3">
                          <Link to="/umrah-transport-search-result"><button className="p-2 w-100">Reserve</button></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="date-chnge p-3 mt-5">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="sub-title">Check-in Date</div>
                    <div className="sub-txt pt-1">Wed, Aug 26, 2020</div>
                    <div className="from pt-1">From 3:00 PM until 12:00 AM</div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="sub-title">Check-out Date</div>
                    <div className="sub-txt pt-1">Wed, Aug 26, 2020</div>
                    <div className="from pt-1">1 -night stay</div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-3 mt-2">
                    <div className="sub-title">Guests</div>
                    <div className="sub-txt pt-1">2 adults</div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 mt-lg-3 mt-md-4 mt-3">
                    <button className="p-2 w-100 date-chng-btn">Date Change</button>
                  </div>
                </div>
              </div>
              <div className="hotel-room-detail mt-4">
                <div className="main-headings d-none d-lg-block">
                  <div className="row text-center">
                    <div className="col-lg-10 col-md-10">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 p-1 br-right">
                          <div className="sub-title p-1">Room Type</div>
                        </div>
                        <div className="col-lg-9">
                          <div className="row">
                          <div className="col-lg-2 col-md-2 p-1 br-right">
                            <div className="sub-title p-1">Sleep</div>
                          </div>
                          <div className="col-lg-3 col-md-3 p-1 br-right">
                            <div className="sub-title p-1">Today’s Price</div>
                          </div>
                          <div className="col-lg-5 col-md-5 p-1 br-right">
                            <div className="sub-title p-1">Your Choices</div>
                          </div>
                          <div className="col-lg-2 col-md-2 p-1 br-right">
                            <div className="sub-title  p-1">Rooms</div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 p-1">
                      <div className="sub-title  p-1 pr-3">Action</div>
                    </div>
                  </div>
                </div>
                <div className="bor-btm">
                  <div className="row">
                  <div className="col-lg-10 col-md-12">
                    <div className="all-room pb-lg-0 pb-md-2 pb-2 mb-lg-0 mb-md-4 mb-4">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 col-12 br-right">
                          <div className="deluxe-room pt-3 pl-2"><a href="!#">Deluxe Room</a></div>
                          <div className="sub-txt pl-3 pt-3">Select your bed (if available)</div>
                          <div className="bed-details pl-2 pt-2"><input type="radio" id="male" name="gender" value="male" /><label className="pl-2" >2 twin beds <img className="" src="assets/img/2-beds.png" alt="" /></label> </div>
                          <div className="bed-details pl-2 pb-3"><input type="radio" id="male" name="gender" value="male" /><label className="pl-2" >1 King beds <img className="" src="assets/img/1-bed.png" alt="" /></label> </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-12">
                          <div className="row h-100">
                            <div className="col-lg-2 col-md-2 col-2 br-right text-center">
                              <img className="pt-4" src="assets/img/deluxe-room.png" alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-3 br-right">
                              <div className="price-cancel pt-3">PKR 7,533</div>
                              <div className="ori-price">PKR 4,508</div>
                              <div className="price-det">+ PKR 1,697 taxes and charges</div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-5 br-right">
                              <div className="breakfast-details pt-3"><img className="pr-1" src="assets/img/cup.png" alt="" />Breakfast PKR 3,415 <span className="pl-3">(optional)</span></div>
                              <div className="sub-txt free-cancel d-inline-flex mt-2"><i className="fa fa-check mr-1"></i> FREE cancellation</div>
                              <div className="sub-txt free-cancel d-inline-flex"><i className="fa fa-check mr-1"></i>  NO PREPAYMENT NEEDED -</div>
                              <div className="pl-3 sub-txt">pay at the property</div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2 pt-3 br-right text-center">
                              <div className="no-room pr-lg-0 pr-2 pr-md-2">
                                <select>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 d-none d-lg-block">
                    <div className="reserve pt-3 pr-3">
                      <Link to="/selected-hotel"><button className="p-1 w-100">Reserve</button></Link>
                      <ul className="p-0 pl-1 pt-2">
                        <li>Confirmation is immediate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                <div className="bor-btm">
                  <div className="row">
                  <div className="col-lg-10 col-md-12">
                    <div className="all-room pb-lg-0 pb-md-2 pb-2 mb-lg-0 mb-md-4 mb-4">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 col-12 br-right">
                          <div className="deluxe-room pt-3 pl-2"><a href="!#">Deluxe Room</a></div>
                          <div className="sub-txt pl-3 pt-3">Select your bed (if available)</div>
                          <div className="bed-details pl-2 pt-2"><input type="radio" id="male" name="gender" value="male" /><label className="pl-2">2 twin beds <img className="" src="assets/img/2-beds.png" alt="" /> </label></div>
                          <div className="bed-details pl-2 pb-3"><input type="radio" id="male" name="gender" value="male" /> <label className="pl-2">1 King beds <img className="" src="assets/img/1-bed.png" alt="" /> </label></div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-12">
                          <div className="row h-100">
                            <div className="col-lg-2 col-md-2 col-2 br-right text-center">
                              <img className="pt-4" src="assets/img/deluxe-room.png" alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-3 br-right">
                              <div className="price-cancel pt-3">PKR 7,533</div>
                              <div className="ori-price">PKR 4,508</div>
                              <div className="price-det">+ PKR 1,697 taxes and charges</div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-5 br-right">
                              <div className="breakfast-details pt-3"><img className="pr-1" src="assets/img/cup.png" alt="" />Breakfast PKR 3,415 <span className="pl-3">(optional)</span></div>
                              <div className="sub-txt free-cancel d-inline-flex mt-2"><i className="fa fa-check mr-1"></i> FREE cancellation</div>
                              <div className="sub-txt free-cancel d-inline-flex"><i className="fa fa-check mr-1"></i>  NO PREPAYMENT NEEDED -</div>
                              <div className="pl-3 sub-txt">pay at the property</div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2 pt-3 br-right text-center">
                              <div className="no-room pr-lg-0 pr-md-2 pr-2">
                                <select>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 d-none d-lg-block">
                    <div className="reserve pt-3 pr-3">
                       <Link to="/selected-hotel"><button className="p-1 w-100">Reserve</button></Link>
                      <ul className="p-0 pl-1 pt-2">
                        <li>Confirmation is immediate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                <div className="">
                  <div className="row">
                  <div className="col-lg-10 col-md-12">
                    <div className="all-room pb-lg-0 pb-md-2 pb-2 mb-lg-0 mb-md-4 mb-4">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 col-12 br-right">
                          <div className="deluxe-room pt-3 pl-2"><a href="!#">Deluxe Room</a></div>
                          <div className="sub-txt pl-3 pt-3">Select your bed (if available)</div>
                          <div className="bed-details pl-2 pt-2"><input type="radio" id="male" name="gender" value="male" /><label className="pl-2" >2 twin beds <img className="" src="assets/img/2-beds.png" alt="" /> </label></div>
                          <div className="bed-details pl-2 pb-3"><input type="radio" id="male" name="gender" value="male" /><label className="pl-2" >1 King beds <img className="" src="assets/img/1-bed.png" alt="" /> </label></div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-12">
                          <div className="row h-100">
                            <div className="col-lg-2 col-md-2 col-2 br-right text-center">
                              <img className="pt-4" src="assets/img/deluxe-room.png" alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-3 br-right">
                              <div className="price-cancel pt-3">PKR 7,533</div>
                              <div className="ori-price">PKR 4,508</div>
                              <div className="price-det">+ PKR 1,697 taxes and charges</div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-5 br-right">
                              <div className="breakfast-details pt-3"><img className="pr-1" src="assets/img/cup.png" alt="" />Breakfast PKR 3,415 <span className="pl-3">(optional)</span></div>
                              <div className="sub-txt free-cancel d-inline-flex mt-2"><i className="fa fa-check mr-1"></i> FREE cancellation</div>
                              <div className="sub-txt free-cancel d-inline-flex"><i className="fa fa-check mr-1"></i>  NO PREPAYMENT NEEDED -</div>
                              <div className="pl-3 sub-txt">pay at the property</div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2 pt-3 br-right text-center">
                              <div className="no-room pr-lg-0 pr-md-2 pr-2">
                                <select>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 d-none d-lg-block">
                    <div className="reserve pt-3 pr-3">
                    <Link to="/selected-hotel"><button className="p-1 w-100">Reserve</button></Link>
                      <ul className="p-0 pl-1 pt-2">
                        <li>Confirmation is immediate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

              <div className="col-lg-3 col-md-3 d-none d-lg-block">
                <div className="left-bar hotel-detail-left-bar p-3">
                  <div className="">
                   <div className="sub-title"> Question may ask? </div>
                    <div className="sub-txt pt-2"> Find quick answers or ask about related hotel</div>
                    <div className="sub-txt pt-3"><strong> hello, we are looking to come to dubai but it seems that we will have to pass a Covid test on arrival at the airport. would you accept us will waiting the result? we have been in quarantine in philippine for 4 months and have all the papers from here showing that we are ok. thank you for answering </strong></div>
                    <div className="sub-txt pt-2">Dear Guest, You may arrive the hotel and check in the room, after your covid test</div>
                    <div className="rate-us mt-3"><button className="un-statisfied p-1"> <i className="fa fa-thumbs-down"></i> </button> <button className="statisfied p-1 ml-2"><i className="fa fa-thumbs-up"></i> </button></div>
                    <div className="ask-quest">
                      <div className="row mt-4 fr-br-botm pb-4">
                        <div className="col-12">
                           <button className="w-100 p-2">Ask a Question</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-title pt-3 pb-3">Reviews</div>
                  <div className="client-review">
                    <div className="row">
                      <div className="col-lg-2 col-md-3">
                        <div className="ranking p-1 text-center">9.5</div>
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <div className="review">Very Good</div>
                        <div className="review-count">2563 reviews</div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-txt pt-4 pb-2"> <strong>What guests loved the most:</strong> </div>
                  <div className="sub-txt">“Everything went well. A very kind and professional staff particularly the receptionists Jasper and Grace, always there ready to help.”</div>
                  <div className="sub-txt pt-3"> <strong>Walter</strong> </div>
                  <div className="client-name pt-1"><img className="pr-2" src="assets/img/cuba-client.png" alt="" />Cuba</div>
                  <div className="sub-txt pt-4 pb-2"> <strong>What guests loved the most:</strong> </div>
                  <div className="sub-txt">“Everything went well. A very kind and professional staff particularly the receptionists Jasper and Grace, always there ready to help.”</div>
                  <div className="sub-txt pt-3"> <strong>Walter</strong> </div>
                  <div className="client-name pt-1"><img className="pr-2" src="assets/img/cuba-client.png" alt="" />Cuba</div>
                  <div className="sub-txt pt-4 pb-2"> <strong>What guests loved the most:</strong> </div>
                  <div className="sub-txt">“Everything went well. A very kind and professional staff particularly the receptionists Jasper and Grace, always there ready to help.”</div>
                  <div className="sub-txt pt-3"> <strong>Walter</strong> </div>
                  <div className="client-name pt-1"><img className="pr-2" src="assets/img/cuba-client.png" alt="" />Cuba</div>
                  <div className="show-reviews mt-4">
                    <div className="row pb-4">
                      <div className="col-lg-12">
                        <button className="w-100 p-2">Show All Reviews</button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>



    </div>
  </div>
  <div className="container for-small-screen">
    <div className="row">
      <div className="col-md-2 col-sm-2"></div>
       <div className="col-md-8 col-sm-8 col-12 d-block d-lg-none">
          <div className="reserve pt-3">
          <Link to="/selected-hotel">
              <button className="p-1 w-100">Reserve</button>
          </Link>
              <ul className="p-0 pl-3 pt-2">
                  <li>Confirmation is immediate</li>
              </ul>
          </div>
       </div>
      <div className="col-md-2 col-sm-2"></div>
    </div>
</div>



     <CompaniesLogo />

</section>

<Footer />
</div>
)
}

export default HotelDetail;