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


const UmrahPackageDetail = () => {
    useEffect(() => {
        document.title = "Package Detail | Tripplanner ";
    })


    return (
        <div>
            <BlackNavbar />

            <section className="flight-det umrah-packages search-fligh mb-0 pb-3">
                <div id="hotel-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-lg-4">
                                <div className="row">

                                    <div className="nav1 mb-2 mt-3">
                                        <a href="#" className="text-thin mr-2">Hotel</a><span><i className="fa fa-angle-right"></i></span>
                                        <a href="#" className="text-thin pl-3 mr-2 ">Umrah Packages </a><span><i className="fa fa-angle-right"></i></span>
                                        <a href="#" className="text-thin pl-3 mr-2">Hotel</a><span><i className="fa fa-angle-right"></i></span>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-md-10">
                                <div className="row">
                                    <div className="col-lg-12 text-left">
                                        <div className="primary-title head-left ">
                                            <h1>Concorde Makkah Hotel - Saudi Arabia <img src="../../assets/img/five-star.png" alt="" /></h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="hotel-add">
                                        <img src="../../assets/img/hotel-map-pin.png" alt="" /> Building No. 4254, Mahbas AlJinn, Al Rahma Road، Mecca 24236, Saudi Arabia
                                        <img src="../../assets/img/address-pin.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 text-lg-right">
                                <div className="reserve">
                                    <Link to="/continue-booking-customize-umrah" ><button className="btn-default">Reserve</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="right-bar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                            <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">

                                                <div className="carousel-inner cus-carousel-inner">
                                                    <div className="carousel-item active"> <img className="w-100" src="/assets/img/concorde-makkah-hotel.jpg" alt="" /> </div>
                                                    <div className="carousel-item"> <img className="w-100" src="/assets/img/concorde-makkah-hotel.jpg" alt="" /> </div>
                                                    <div className="carousel-item"> <img className="w-100" src="/assets/img/concorde-makkah-hotel.jpg" alt="" /> </div>
                                                    <div className="carousel-item"> <img className="w-100" src="/assets/img/concorde-makkah-hotel.jpg" alt="" /> </div>
                                                </div>  <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon"></span><i className="fa fa-angle-left"></i> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon"><i className="fa fa-angle-right"></i></span> </a>
                                            </div>
                                            <div className="mt-lg-3 mt-md-3 d-none d-lg-block d-md-block mx-5">
                                                <div className="carousel-indicators position-static ">
                                                    <div className="list-inline-item  active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img className="" src="assets/img/thumbnail-concorde-makkah-hotel.jpg" alt="" /> </a></div>
                                                    <div className="list-inline-item "><a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img className="" src="assets/img/thumbnail-concorde-makkah-hotel.jpg" alt="" /> </a> </div>
                                                    <div className="list-inline-item "> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img className="" src="assets/img/thumbnail-concorde-makkah-hotel.jpg" alt="" /> </a> </div>
                                                    <div className="list-inline-item "><a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img className="" src="assets/img/thumbnail-concorde-makkah-hotel.jpg" alt="" /> </a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-hotel">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="parag-hotel">
                                                <p>
                                                    Occupying a convenient position in Bur Dubai and just minutes from the World Trade Center, the stylish Grand Excelsior - Bur Dubai has 8 dining options, an expansive spa and a rooftop pool.
                                                </p>
                                                <p>
                                                    This modern property features rooms which are contemporary in design with an Arabian touch. All rooms and suites offer the guest a range of modern amenities including flat-screen TVs and interactive entertainment systems.
                                                </p>
                                                <p>
                                                    The Grand Excelsior - Bur Dubai offers a choice of 8 food and beverage outlets. Guests can enjoy a wide range of international cuisine, including specialty Indian, Arabic and continental buffet restaurants.
                                                </p>
                                                <p>
                                                    The Grand's modern gym features cardiovascular equipment and free weights. After a
                                                </p>
                                            </div>
                                            <div className="popular-fac">
                                                <div className="facilities-add pt-lg-4">
                                                    <div className="faci-provide"><img src="assets/img/swiming-pool.png" alt="" /> 1 swimming pool</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/airport-shuttle.png" alt="" /> Airport shuttle</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/fitness-icon.png" alt="" /> Fitness Center</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/spa-icon.png" alt="" /> Spa</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/no-smoking.png" alt="" /> Non-smoking rooms</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/resturant.png" alt="" /> Restuarent</div>
                                                    <div className="faci-provide">
                                                        <img className="" src="assets/img/tea-icon.png" alt="" /> Tea/Coffee Maker in Rooms
                                                    </div>
                                                    <div className="faci-provide">
                                                        <img className="" src="assets/img/bar.png" alt="" /> Bar
                                                    </div>
                                                    <div className="faci-provide">
                                                        <img className="" src="assets/img/break-fast.png" alt="" /> Breakfast
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-left mt-5">
                                        <div className="primary-title head-left">
                                            <h1>Madinah Hilton <img src="assets/img/five-star.png" alt="" /></h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="hotel-add">
                                        <img src="assets/img/hotel-map-pin.png" alt="" /> Building No. 4254, Mahbas AlJinn, Al Rahma Road، Mecca 24236, Saudi Arabia
                                        <img src="assets/img/address-pin.png" alt="" />
                                    </div>
                                </div>
                                <div className="right-bar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                            <div id="custCarousel1" className="carousel slide" data-ride="carousel" align="center">

                                                <div className="carousel-inner cus-carousel-inner">
                                                    <div className="carousel-item active"> <img className="w-100" src="assets/img/madinah-hilton.jpg" alt="" /> </div>
                                                    <div className="carousel-item"> <img className="w-100" src="assets/img/madinah-hilton.jpg" alt="" /> </div>
                                                    <div className="carousel-item"> <img className="w-100" src="assets/img/madinah-hilton.jpg" alt="" /> </div>
                                                    <div className="carousel-item"> <img className="w-100" src="assets/img/madinah-hilton.jpg" alt="" /> </div>
                                                </div>  <a className="carousel-control-prev" href="#custCarousel1" data-slide="prev"><i className="fa fa-angle-left"></i> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel1" data-slide="next"><i className="fa fa-angle-right"></i> <span className="carousel-control-next-icon"></span> </a>
                                            </div>
                                            <div className="mt-lg-3 mt-md-3 d-none d-lg-block d-md-block mx-5">
                                                <div className="carousel-indicators position-static">
                                                    <div className="list-inline-item  active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel1"> <img className="" src="assets/img/madinah-hilton-thumbnail.jpg" alt="" /> </a></div>
                                                    <div className="list-inline-item "><a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel1"> <img className="" src="assets/img/madinah-hilton-thumbnail.jpg" alt="" /> </a> </div>
                                                    <div className="list-inline-item "> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel1"> <img className="" src="assets/img/madinah-hilton-thumbnail.jpg" alt="" /> </a> </div>
                                                    <div className="list-inline-item "><a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel1"> <img className="" src="assets/img/madinah-hilton-thumbnail.jpg" alt="" /> </a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-hotel">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="parag-hotel">
                                                <p>
                                                    Occupying a convenient position in Bur Dubai and just minutes from the World Trade Center, the stylish Grand Excelsior - Bur Dubai has 8 dining options, an expansive spa and a rooftop pool.
                                                </p>
                                                <p>
                                                    This modern property features rooms which are contemporary in design with an Arabian touch. All rooms and suites offer the guest a range of modern amenities including flat-screen TVs and interactive entertainment systems.
                                                </p>
                                                <p>
                                                    The Grand Excelsior - Bur Dubai offers a choice of 8 food and beverage outlets. Guests can enjoy a wide range of international cuisine, including specialty Indian, Arabic and continental buffet restaurants.
                                                </p>
                                                <p>
                                                    The Grand's modern gym features cardiovascular equipment and free weights. After a
                                                </p>
                                            </div>
                                            <div className="popular-fac">
                                                <div className="facilities-add pt-lg-4">
                                                    <div className="faci-provide"><img src="assets/img/swiming-pool.png" alt="" /> 1 swimming pool</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/airport-shuttle.png" alt="" /> Airport shuttle</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/fitness-icon.png" alt="" /> Fitness Center</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/spa-icon.png" alt="" /> Spa</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/no-smoking.png" alt="" /> Non-smoking rooms</div>
                                                    <div className="faci-provide"><img className="" src="assets/img/resturant.png" alt="" /> Restuarent</div>
                                                    <div className="faci-provide">
                                                        <img className="" src="assets/img/tea-icon.png" alt="" /> Tea/Coffee Maker in Rooms
                                                    </div>
                                                    <div className="faci-provide">
                                                        <img className="" src="assets/img/bar.png" alt="" /> Bar
                                                    </div>
                                                    <div className="faci-provide">
                                                        <img className="" src="assets/img/break-fast.png" alt="" /> Breakfast
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 text-lg-right">
                                        <div className="reserve">
                                            <Link to="/continue-booking-customize-umrah" ><button className="btn-default">Reserve</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-12 col-12">
                                <div className="left-bar p-lg-3">
                                    <div className="row">
                                        <div className="cilent-info">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="quest">Question may ask?</div>
                                                <div className="sub-heading">Find quick answers or ask about related hotel</div>
                                                <div className="ans">hello, we are looking to come to dubai but it seems that we will have to pass a Covid test on arrival at the airport. would you accept us will waiting the result? we have been in quarantine in philippine for 4 months and have all the papers from here showing that we are ok. thank you for answering</div>
                                                <div className="conclude">Dear Guest, You may arrive the hotel and check in the room, after your covid test</div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-3">
                                                        <div className="dislike-btn bg-danger">
                                                            <button className="bg-danger like-btn"><img src="/assets/img/dislike.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3">
                                                        <div className="like-btn">
                                                            <button className="bg-success like-btn  "><img src="/assets/img/like.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-6"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="query text-center reserve">
                                                    <button className="btn-default mt-2">ASK A QUESTION</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="quest pt-3 pb-3">Review</div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="rating">9.5</div>
                                        </div>
                                        <div className="col-lg-10 col-md-10">
                                            <div className="remarks">
                                                <span>Very Good</span>123 reviews
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 pt-lg-4">
                                            <div className="review-box">
                                                <div className="review-title">What guests loved the most:</div>
                                                <div className="ans-1 pt-lg-2">
                                                    “Everything went well. A very kind and professional staff particularly the receptionists Jasper and Grace, always there ready to help.”
                                                </div>
                                                <div className="walter pt-lg-3">Walter</div>
                                                <div className="cuba"><img src="assets/img/walter-img.png" alt="" /> Cuba</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 pt-lg-4">
                                            <div className="review-box">
                                                <div className="review-title">What guests loved the most:</div>
                                                <div className="ans-1 pt-lg-2">
                                                    “Everything went well. A very kind and professional staff particularly the receptionists Jasper and Grace, always there ready to help.”
                                                </div>
                                                <div className="walter pt-lg-3">Walter</div>
                                                <div className="cuba"><img src="assets/img/walter-img.png" alt="" /> Cuba</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 pt-lg-4">
                                            <div className="review-box">
                                                <div className="review-title">What guests loved the most:</div>
                                                <div className="ans-1 pt-lg-2">
                                                    “Everything went well. A very kind and professional staff particularly the receptionists Jasper and Grace, always there ready to help.”
                                                </div>
                                                <div className="walter pt-lg-3">Walter</div>
                                                <div className="cuba"><img src="assets/img/walter-img.png" alt="" /> Cuba</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="review-btn">
                                                <button className="btn-default">Show All Reviews</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default UmrahPackageDetail;