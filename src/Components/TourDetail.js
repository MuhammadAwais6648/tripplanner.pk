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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




const TourDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tour Detail | Tripplanner PK";
  }, []);



  let img1 = "assets/img/tour-img-4.png";
  let img2 = "assets/img/tour-img-5.png";
  let img3 = "assets/img/tour-img-6.png";
  let img4 = "assets/img/tour-img-4.png";
  let img5 = "assets/img/tour-img-5.png";
  let img6 = "assets/img/tour-img-6.png";


  let slide1Title = "Thailand Beach  -  268 SAR";
  let slide2Title = "Gyman Island  -  268 SAR";
  let slide3Title = "Vali  -  268 SAR";
  let slide4Title = "Thailand Beach  -  268 SAR";
  let slide5Title = "Gyman Island  -  268 SAR";
  let slide6Title = "Vali  -  268 SAR";



  let link1 = "/tour-detail";
  let link2 = "/tour-detail";
  let link3 = "/tour-detail";
  let link4 = "/tour-detail";
  let link5 = "/tour-detail";
  let link6 = "/tour-detail";




  return (
    <div>
      <BlackNavbar />


      <section className="tour-detail-right-bar mt-5">
        <div className="container">
          <div className="nav">
            <a href="!#">Home</a><span><i className="fa fa-angle-right"></i></span>
            <a href="!#" className="pl-3">Tour </a><span><i className="fa fa-angle-right"></i></span>
            <a href="!#" className="pl-3 gand-exce">Sydney</a>
          </div>
          <h1 className="mt-5">Explore Sydney</h1>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className=" tour-detail-slider p-2">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="w-100" src="assets/img/tour-detail-main-img.png" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src="assets/img/tour-detail-main-img.png" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src="assets/img/tour-detail-main-img.png" />
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-angle-left"></i></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa fa-angle-right"></i></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="booking-flex pb-3"><button className="ml-3">Book With flexibility</button> <span className="pl-2 pt-1"> 7 Days </span></div>
              <h1 className="pl-3 pt-1">Highlights of Sydney</h1>
              <div className="sub-txt pl-3 pb-3">From <strong>Dubai</strong> to <strong>Sydney</strong> </div>
              <div className="fac-include mt-3 pl-3">
                <button className="mr-1">Discovery</button>
                <button className="mr-1">Group</button>
                <button className="mr-1">Fully Guided</button>
                <button className="mr-1">Coach / Bus</button>
                <button className="mt-lg-0 mt-md-0 mt-sm-0 mt-2">Historical</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="bor-left pl-4 mt-lg-0 mt-md-4 mt-4">
                <div className="row text-left">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="sub-title">Tour Operator:</div>
                    <div className="sub-txt">Globus</div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="sub-title">Max group size:</div>
                    <div className="sub-txt">35</div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                    <div className="sub-title">Age range:</div>
                    <div className="sub-txt">18 to 50</div>
                  </div>
                </div>
                <div className="row text-left mt-4">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="sub-title">Operated in:</div>
                    <div className="sub-txt">English</div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="sub-title">Tour id:</div>
                    <div className="sub-txt">167522</div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                    <div className="sub-title">Private available</div>
                    <div className="sub-txt">Requested as Private</div>
                  </div>
                </div>
              </div>
              <div className="price pl-4 mt-3">
                <div className="sub-txt">From <span> AED 3203</span> <div className="reduce-pre ml-1"> -50% </div></div>
                <div className="ori-price mt-3">AED2220</div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-9 col-md-12 col-12">
              <div className="book-flex p-5">
                <div className="sub-title">Book With Extra Flexibility</div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="sub-txt-heading"><img className="pr-2" src="assets/img/chk-mark-icon.png" />Change dates</div>
                    <div className="sub-txt pl-4">Choose new departure dates if your plans change.</div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                    <div className="sub-txt-heading"><img className="pr-2" src="assets/img/chk-mark-icon.png" />Change a different tour </div>
                    <div className="sub-txt pl-4">Change to a different tour run by the same tour operator.</div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="sub-txt-heading"><img className="pr-2" src="assets/img/chk-mark-icon.png" />Get credit if plans change</div>
                    <div className="sub-txt pl-4">Get credit for future trips if you need more time to decide.</div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                    <div className="sub-txt-heading"><img className="pr-2" src="assets/img/chk-mark-icon.png" /> 24/7 Support </div>
                    <div className="sub-txt pl-4">Reach out to us anytime via online chat, phone or email.</div>
                  </div>
                </div>
              </div>
              <h2 className="mt-lg-5 mt-md-4 mt-4 mb-lg-5 mb-md-3 mb-3">Places You’ll See</h2>




              <div className="container">

                <HomeCarousal
                  img1={img1}
                  img2={img2}
                  img3={img3}
                  img4={img4}
                  img5={img5}
                  img6={img6}
                  slide1Title={slide1Title}
                  slide2Title={slide2Title}
                  slide3Title={slide3Title}
                  slide4Title={slide4Title}
                  slide5Title={slide5Title}
                  slide6Title={slide6Title}
                  link1={link1}
                  link2={link2}
                  link3={link3}
                  link4={link4}
                  link5={link5}
                  link6={link6}
                />



              </div>




              <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="mapouter">
                    <div className="gmap_canvas"><iframe width="1000" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" ></iframe><a href="https://www.whatismyip-address.com"></a><br /> <a href="https://www.embedgooglemap.net">how to embed a map in wordpress</a>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">Travel, Your Way</h3>
              <div className="sub-txt">Good reasons for travelling privately</div>
              <div className="travel-reason">
                <div className="row mt-4">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="sub-txt-heading"><img className="pr-3" src="assets/img/tour-icon-1.png" /> Personalise your trip</div>
                    <div className="sub-txt pl-4 ml-3">Make changes to the itinerary, accommodation, or transport method.</div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                    <div className="sub-txt-heading"><img className="pr-3" src="assets/img/tour-icon-2.png" /> Increased safety during COVID </div>
                    <div className="sub-txt pl-4 ml-3">Spend the majority of time amongst your group to reduce exposure to others.</div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="sub-txt-heading"><img className="pr-3" src="assets/img/tour-icon-3.png" /> Travel more exclusively </div>
                    <div className="sub-txt pl-4 ml-3">Your tour guide can focus all their attention on your group.</div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                    <div className="sub-txt-heading"><img className="pr-2" src="assets/img/tour-icon-4.png" /> Travel for a special occasion </div>
                    <div className="sub-txt pl-4 ml-3">Celebrate an important event by only travelling with your friends or family.</div>
                  </div>
                </div>
                <div className="find-more mt-5"><button>Find out more</button></div>
              </div>

              <h4 className="mt-5">Itinerary</h4>
              <div className="sub-txt">Start in Scottsdale and end in Las Vegas! With the Adventure tour Canyon Country Adventure, you have a 8 days tour package taking you through Scottsdale, USA and 9 other destinations in USA. Canyon Country Adventure includes accommodation, an expert guide, meals, transport.</div>
              <div className="card mt-3">
                <div className="card-body">
                  <div className="for-border">
                    <button className="card-title w-100 text-left" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="pr-3" src="assets/img/introduction-icon.png" /> Introduction <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span></strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="pr-3" src="assets/img/loctaion-icon-tour.png" /> Day 1: Arrive in Scottsdale <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span></strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="pr-3" src="assets/img/loctaion-icon-tour.png" /> Day 2: Scottsdale–Sedona–oak creek canyon–grand Canyon national park <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/loctaion-icon-tour.png" /> Day 3: Grand Canyon National Park <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/loctaion-icon-tour.png" /> Day 4: grand Canyon national park–monument valley Navajo tribal park–lake Powell <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/loctaion-icon-tour.png" /> Day 5: lake Powell <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/loctaion-icon-tour.png" /> Day 6: lake Powell–Bryce canyon national park <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/loctaion-icon-tour.png" /> Day 7: Bryce Canyon National park–Zion National Park–Las Vegas <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/loctaion-icon-tour.png" /> Day 8: Las Vegas <span className="float-right"><img className="" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                </div>
              </div>

              <div className="want-read p-4">
                <div className="row">
                  <div className="col-lg-9 col-md-8 col-sm-7 col-12">
                    <div className="sub-title">Want to read it later?</div>
                    <div className="sub-txt mt-1">Download this tour’s PDF brochure and start tour planning offline</div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-5 col-12 mt-2">
                    <button>Download Brochure</button>
                  </div>
                </div>
              </div>

              <h4 className="mt-5">What's Included</h4>
              <div className="card mt-3">
                <div className="card-body">
                  <div className="for-border">
                    <button className="card-title w-100 text-left" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/include-icon-tour.png" /> Accommodation <span className="float-right"><img className="pr-3" src="assets/img/card-icon.png" /></span></strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/include-icon-tour.png" /> Guide <span className="float-right"><img className="pr-3" src="assets/img/card-icon.png" /></span></strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/include-icon-tour.png" /> Hygiene Measures <span className="float-right"><img className="pr-3" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse11">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/include-icon-tour.png" />Meals <span className="float-right"><img className="pr-3" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse12">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/include-icon-tour.png" />Transports <span className="float-right"><img className="pr-3" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse13">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/not-include-icon-tour.png" /> Flights <span className="float-right"><img className="pr-3" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                  <div className="for-border">
                    <button className="card-title pt-3 w-100 text-left" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse">
                      <strong> <img className="" src="assets/img/not-include-icon-tour.png" /> Insurance <span className="float-right"><img className="pr-3" src="assets/img/card-icon.png" /></span> </strong>
                    </button>
                    <div className="card-text collapse pb-3" id="collapse15">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque.
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="mt-5">Reviews About This Operator</h5>
              <div className="review-sect">
                <div className="cust-name pl-2 pt-3">By: Dubai tours</div>
                <div className="points pl-2 pt-2"><span className="mr-1"></span><span className="mr-1"></span><span className="mr-1"></span><span className="mr-1"></span><span className="mr-1"></span></div>
                <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">

                  <div className="">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row mt-3">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-none d-lg-block d-md-block d-sm-block">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-none d-lg-block d-md-block">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row mt-3">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-none d-lg-block d-md-block d-sm-block">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-none d-lg-block d-md-block">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row mt-3">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-none d-lg-block d-md-block d-sm-block">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-none d-lg-block d-md-block">
                            <div className="client-review p-4">
                              <div className="client-1">
                                <img className="" src="assets/img/client-1.jpg" /> <span className="sub-txt pl-2">Daisy c <i className="fa fa-edit"></i> <i className="far fa-thumbs-up"></i> </span>
                                <div className="sub-title mt-4">Great Memories</div>
                                <div className="sub-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed.</div>
                                <div className="sub-txt mt-2 pb-3"><a href="!#"> <strong>Read more</strong> </a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-angle-left"></i></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa fa-angle-right"></i></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <h6 className="mt-5">Dates & Availability</h6>
              <div className="date-avail p-4 mt-4">
                <div className="row">
                  <div className="col-lg-9 col-md-9 col-sm-8 col-12">
                    <div className="sub-txt mt-1">7 Days</div>
                    <div className="sub-title">Canyon Country Adventure</div>
                    <div className="sub-txt mt-1">From Scottsdale to Las Vegas</div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-4 col-12 mt-4">
                    <Link to="/continue-booking-tour"><button>Book Now</button></Link>
                  </div>
                </div>

              </div>

            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <div className="start-plane p-4 mt-lg-0 mt-md-4 mt-4">
                <div className="sub-title mt-4">Start planning your tour</div>
                <div className="sub-txt mt-3"><img className="pr-2" src="assets/img/download-icon.png" /> Download Brochure </div>
                <div className="sub-txt mt-3"><img className="pr-2" src="assets/img/ask-quest-icon.png" /> Ask a Question </div>
                <div className="sub-txt mt-3 ml-1">From Scottsdale to Las Vegas</div>
                <div className="sub-txt mt-3 ml-1 pb-4"> <a href="!#">Learn more</a> </div>
              </div>
            </div>
          </div>




          <CompaniesLogo />



        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TourDetail;
