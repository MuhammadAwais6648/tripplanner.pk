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
import Date from "../../Components/Date";


const ContinueBookingCustomizeUmrah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Continue Booking | Tripplanner ";
  }, [])


  const [noOfPilgrims, setNoOfPilgrims] = useState(1);
  const [deletePilgrims, setDeletePilgrims] = useState(false);


  const IncrementPilgrims = () => {
    setNoOfPilgrims(noOfPilgrims + 1);

    if (noOfPilgrims >= 1) {
      setDeletePilgrims(true);
    }

  }


  const DecrementPilgrims = () => {

    if (noOfPilgrims == 1) {
      setNoOfPilgrims(noOfPilgrims - 0);
      setDeletePilgrims(false);
    }
    else {
      setNoOfPilgrims(noOfPilgrims - 1);
    }
  }



  const [noOfHotels, setNoOfHotels] = useState(1);
  const [deleteHotels, setDeleteHotels] = useState(false);


  const IncrementHotels = () => {
    setNoOfHotels(noOfHotels + 1);

    if (noOfHotels >= 1) {
      setDeleteHotels(true);
    }

  }


  const DecrementHotels = () => {

    if (noOfHotels == 1) {
      setNoOfPilgrims(noOfHotels - 0);
      setDeleteHotels(false);
    }
    else {
      setNoOfHotels(noOfHotels - 1);
    }
  }



  const [noOfTransport, setNoOfTransport] = useState(1);
  const [deleteTransport, setDeleteTransport] = useState(false);


  const IncrementTransport = () => {
    setNoOfTransport(noOfTransport + 1);

    if (noOfTransport >= 1) {
      setDeleteTransport(true);
    }

  }


  const DecrementTransport = () => {

    if (noOfTransport == 1) {
      setNoOfTransport(noOfTransport - 0);
      setDeleteTransport(false);
    }
    else {
      setNoOfTransport(noOfTransport - 1);
    }
  }



  const [noOfZiyarat, setNoOfZiyarat] = useState(1);
  const [deleteZiyarat, setDeleteZiyarat] = useState(false);


  const IncrementZiyarat = () => {
    setNoOfZiyarat(noOfZiyarat + 1);

    if (noOfZiyarat >= 1) {
      setDeleteZiyarat(true);
    }

  }


  const DecrementZiyarat = () => {

    if (noOfZiyarat == 1) {
      setNoOfZiyarat(noOfZiyarat - 0);
      setDeleteZiyarat(false);
    }
    else {
      setNoOfZiyarat(noOfZiyarat - 1);
    }
  }








  const [bgColor, setBgColor] = useState(true);
  const [bgColor2, setBgColor2] = useState(false);
  const [bgColor3, setBgColor3] = useState(false);
  const [bgColor4, setBgColor4] = useState(false);
  const [bgColor5, setBgColor5] = useState(false);
  const [bgColor6, setBgColor6] = useState(false);
  const [bgColor7, setBgColor7] = useState(false);




  const activeStep = () => {
    setBgColor(true);
    setBgColor2(false);
    setBgColor3(false);
    setBgColor4(false);
    setBgColor5(false);
    setBgColor6(false);
    setBgColor7(false);
  }

  const activeStep2 = () => {
    setBgColor(false);
    setBgColor2(true);
    setBgColor3(false);
    setBgColor4(false);
    setBgColor5(false);
    setBgColor6(false);
    setBgColor7(false);
  }

  const activeStep3 = () => {
    setBgColor(false);
    setBgColor2(false);
    setBgColor3(true);
    setBgColor4(false);
    setBgColor5(false);
    setBgColor6(false);
    setBgColor7(false);
  }


  const activeStep4 = () => {
    setBgColor(false);
    setBgColor4(true);
    setBgColor3(false);
    setBgColor2(false);
    setBgColor5(false);
    setBgColor6(false);
    setBgColor7(false);
  }


  const activeStep5 = () => {
    setBgColor(false);
    setBgColor5(true);
    setBgColor3(false);
    setBgColor4(false);
    setBgColor2(false);
    setBgColor6(false);
    setBgColor7(false);
  }


  const activeStep6 = () => {
    setBgColor(false);
    setBgColor6(true);
    setBgColor3(false);
    setBgColor4(false);
    setBgColor5(false);
    setBgColor2(false);
    setBgColor7(false);
  }

  const activeStep7 = () => {
    setBgColor(false);
    setBgColor7(true);
    setBgColor3(false);
    setBgColor4(false);
    setBgColor5(false);
    setBgColor2(false);
    setBgColor6(false);
  }





  return (
    <div>
      <BlackNavbar />


      <section className="flight-found flight-detail mt-5">
        <div className="container">
          <h2 className="">SECURE BOOKING - ONLY TAKES 2 MINUTES!</h2>
          <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
            <div className="mobile-container">
              <div className="topnav">
                <a href="#home" className="active"></a>
                <div className="row">
                  <div className="col-12">
                    <div id="myLinks">
                      <a className="for-border-btm" href="#news">
                        <button type="button" className="btn airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Price</button>
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

            <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
              <div className="left-bar">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="sub-title for-tit-bor pl-3 pt-4 pb-1"> Trip Summary </div>
                  </div>
                </div>
                <div className="sub-txt pl-3 pr-3 pt-2"><strong>Transport</strong></div>
                <div className="sub-txt pl-3 pr-3 pb-1"> Car Type: GMCa </div>
                <div className="sub-txt pl-3 pr-3 pb-1"> Vehicle Type: Ecomomy Car </div>
                <div className="sub-txt pl-3 pr-3 pb-1"> Sector: Jeddah Airport to Makkah </div>
                <div className="sub-title for-tit-bor pl-3 pb-1 mb-2"> 615 Saudi Riyal </div>
                <div className="sub-txt pl-3 pr-3 pt-2"><strong>Hotel</strong></div>
                <div className="sub-txt pl-3 pr-3"> Grand Excelsior Hotel - Saudi Arabia </div>
                <div className="sub-title for-tit-bor pl-3 pb-1 mb-2"> 615 Saudi Riyal </div>
                <div className="sub-txt pl-3 pr-3 pt-2"><strong>Flight</strong></div>
                <div className="sub-txt pl-3 pr-3 pb-1"> Grand Excelsior Hotel - Saudi Arabia </div>
                <div className="sub-txt pl-3 pr-3 pb-1"> To </div>
                <div className="sub-txt pl-3 pr-3"> Ethihad Airways </div>
                <div className="sub-title for-tit-bor pl-3 pb-1 mb-2"> 615 Saudi Riyal </div>
                <div className="sub-txt pl-3 pr-3 pt-2"><strong>Visa</strong></div>
                <div className="sub-title for-tit-bor pl-3 pb-1 mb-2"> 615 Saudi Riyal </div>
                <div className="sub-txt pl-3 pr-3 pt-2"><strong>Sub Total</strong></div>
                <div className="sub-title pl-3 pb-1 mb-2"> 2200 Saudi Riyal </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-9">
              <div className="right-bar p-4 flight-detail booking-detail">

                <div className="container tabs-wrap">
                  <ul className="nav nav-pills nav-pills-bg" role="tablist">
                    <li role="presentation" className="nav-item">
                      <a className={bgColor ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep} href="#billing" aria-controls="billing" role="tab" data-toggle="tab" aria-expanded="true">BASIC DETAILS</a>
                    </li>
                    <li className="nav-item" >
                      <a className={bgColor2 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep2} href="#shipping" aria-controls="shipping" role="tab" data-toggle="tab" aria-expanded="false">PILGRIMS</a>
                    </li>
                    <li className="nav-item" >
                      <a className={bgColor3 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep3} href="#hotel" aria-controls="hotel" role="tab" data-toggle="tab" aria-expanded="false">HOTEL</a>
                    </li>
                    <li className="nav-item" >
                      <a className={bgColor4 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep4} href="#transport" aria-controls="transport" role="tab" data-toggle="tab" aria-expanded="false">TRANSPORT</a>
                    </li>
                    <li className="nav-item" >
                      <a className={bgColor5 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep5} href="#ziyarat" aria-controls="ziyarat" role="tab" data-toggle="tab" aria-expanded="false">ZIYARAT</a>
                    </li>

                    <li className="nav-item" >
                      <a className={bgColor6 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep6} href="#extra" aria-controls="extra" role="tab" data-toggle="tab" aria-expanded="false">EXTRA</a>
                    </li>

                    <li className="nav-item" >
                      <a className={bgColor7 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep7} href="#summary" aria-controls="summary" role="tab" data-toggle="tab" aria-expanded="false">SUMMARY</a>
                    </li>

                  </ul>


                  <div className="tab-content">

                    <div role="tabpanel" className="tab-pane active" id="billing">

                      <div className="col-md-offset-3">
                        <div className="sub-title pb-2 mt-5">Basic Details</div>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-2 col-12">
                            <label className="for-color1 pt-2">No Of Pax <span>*</span></label>
                            <div className="enter-name">
                              <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <label className="for-color1 pt-2">Transport Type<span>*</span></label>
                            <div className="enter-name">
                              <select>
                                <option>Air</option>
                                <option>Land</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <label className="for-color1 pt-2">Arrival / Departure <span>*</span></label>
                            <div className="enter-name"><input type="text" name="datetimes" /></div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 mt-4">
                            <label className="for-color1">Reference/Remarks<span>*</span></label>
                            <textarea className="form-control-comp for-msg-box w-100" style={{ height: "153px" }}> Remarks </textarea>
                          </div>
                        </div>


                      </div>

                      <div className="row">
                        <div className="col-lg-12 float-right text-right mt-3">
                          <a className="btn nav-next-btn continue" onClick={activeStep2} href="#shipping" role="tab" data-toggle="tab" aria-expanded="true">NEXT</a>
                        </div>
                      </div>



                    </div>

                    <div role="tabpanel" className="tab-pane" id="shipping">
                      {[...Array(noOfPilgrims)].map((elementInArray, index) => {

                        return (
                          <div className="col-md-offset-3">

                            <div className="row mt-5">
                              <div className="col-lg-12 text-center">
                                <div className="pic-border">
                                  <div className="sub-title pb-2">Upload Picture</div>
                                  <img className="w-100 p-3" id="blah" src="http://placehold.it/180" alt="your image" />
                                  <input className="pl-4 pb-5 mb-4" type='file' onchange="readURL(this);" />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="sub-title pb-2 mt-5">Pilgrims Details</div>
                                <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-2 form-label">Title <span>*</span></label>
                                    <div className="enter-name">
                                      <select>
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Miss</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-2 form-label">First name <span>*</span></label>
                                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                  </div>

                                  <div className="col-lg-3 col-md-2 col-sm-2 col-12">
                                    <label className="for-color1 pt-2">Middle name <span>*</span></label>
                                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                  </div>

                                  <div className="col-lg-3 col-md-2 col-sm-2 col-12">
                                    <label className="for-color1 pt-2">Surname <span>*</span></label>
                                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                  </div>

                                </div>

                                <div className="row">

                                  <div className="col-lg-4 col-md-4 col-sm-2 col-12">
                                    <label className="for-color1 pt-4">Gender <span>*</span></label>
                                    <div className="enter-name">
                                      <select>
                                        <option>Female</option>
                                        <option>Male</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Passport Number <span>*</span></label>
                                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                  </div>

                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Passport Expiry Date <span>*</span></label>
                                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                  </div>

                                </div>

                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Nationality <span>*</span></label>
                                    <div className="enter-name">
                                      <select>
                                        <option>Pakistani</option>
                                        <option>Pakistani</option>
                                        <option>Pakistani</option>
                                        <option>Pakistani</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">DOB<span>*</span></label>
                                    <div className="enter-name"><input type="date" name="daterange" className="form-control option" /></div>
                                  </div>

                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Relation<span>*</span></label>
                                    <div className="enter-name">
                                      <select>
                                        <option>Single</option>
                                        <option>Married</option>
                                      </select>
                                    </div>
                                  </div>

                                </div>

                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">CitizenShip Number <span>*</span></label>
                                    <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                  </div>

                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Country <span>*</span></label>
                                    <div className="enter-name">
                                      <select>
                                        <option>Pakistan</option>
                                        <option>Dubai</option>
                                        <option>Saudia</option>
                                        <option>Turkey</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">City<span>*</span></label>
                                    <div className="enter-name">
                                      <select>
                                        <option>Islamabad</option>
                                        <option>Karachi</option>
                                        <option>Lahore</option>
                                        <option>Multan</option>
                                      </select>
                                    </div>
                                  </div>

                                </div>

                                <div className="row">

                                  <div className="col-lg-6 col-md-6">
                                    <label className="for-color1 pt-4">Passport 1st Page <span>*</span></label>
                                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                                  </div>

                                  <div className="col-lg-6 col-md-6">
                                    <label className="for-color1 pt-4">CitizenShip Card <span>*</span></label>
                                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                                  </div>

                                  <div className="col-lg-6 col-md-6">
                                    <label className="for-color1 pt-4">Passport Size Picture <span>*</span></label>
                                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                                  </div>

                                  <div className="col-lg-6 col-md-6">
                                    <label className="for-color1 pt-4">Vaccination Certificate <span>*</span></label>
                                    <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                                  </div>

                                </div>



                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <button id="rowAdder" type="button" onClick={IncrementPilgrims} className="btn mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Add Pilgrim</button>
                                {deletePilgrims ?
                                  <button id="rowRemover" type="button" onClick={DecrementPilgrims} className="btn ml-1 mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> <i className="fa fa-trash"></i></button>
                                  :
                                  <p></p>
                                }
                              </div>
                            </div>
                          </div>

                        )
                      })}




                      <div className="row">
                        <div className="col-lg-12">
                          <div className="float-right mt-3">
                            <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep} href="#billing" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>
                            <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep3} href="#hotel" role="tab" data-toggle="tab" aria-expanded="true">Next</a>
                          </div>
                        </div>
                      </div>



                    </div>


                    <div role="tabpanel" className="tab-pane" id="hotel">
                      {[...Array(noOfHotels)].map((elementInArray, index) => {

                        return (
                          <div className="col-md-offset-3 mt-5">
                            <div className="sub-title pb-2">Hotel Details</div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-2 form-label">City <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Islamabad</option>
                                    <option>Lahore</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-2 form-label">Hotel <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-2 col-12">
                                <label className="for-color1 pt-2">Check In / Check Out <span>*</span></label>
                                <div className="enter-name">
                                  <Date />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-10 col-12">
                                <div id="newinput">
                                  <div className="row"><div className="col-lg-3 col-md-3 col-sm-4 col-12"><label className="for-color1 pt-4">Room Type <span>*</span></label><div className="enter-name"><select><option>Please Select</option><option>Single</option><option>Double</option><option>Sharing</option></select></div></div><div className="col-lg-3 col-md-3 col-sm-3 col-12"><label className="for-color1 pt-4">No Of Beds <span>*</span></label><div className="enter-name"><select><option>Please Select</option><option>01</option><option>02</option><option>03</option></select></div></div><div className="col-lg-3 col-md-3 col-sm-3 col-12"><label className="for-color1 pt-4">Charges <span>*</span></label><div className="ind-charges"><label className="">Sar 245</label></div></div><div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-5 pt-1">
                                  </div></div>

                                </div>
                              </div>

                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <button id="rowAdder" type="button" onClick={IncrementHotels} className="btn mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Add Hotel</button>
                                {deleteHotels ?
                                  <button id="rowRemover" type="button" onClick={DecrementHotels} className="btn ml-1 mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> <i className="fa fa-trash"></i></button>
                                  :
                                  <p></p>
                                }
                              </div>
                            </div>
                          </div>

                        )
                      })}



                      <div className="row">
                        <div className="col-sm-12 text-right">
                          <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep2} href="#shipping" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>
                          <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep4} href="#transport" role="tab" data-toggle="tab" aria-expanded="true">Next</a>

                        </div>
                      </div>

                    </div>



                    <div role="tabpanel" className="tab-pane" id="transport">

                      {[...Array(noOfTransport)].map((elementInArray, index) => {

                        return (
                          <div className="col-md-offset-3 mt-5">
                            <div className="sub-title pb-2">Transport Details</div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-2 form-label">Sector <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>JED APT- JED</option>
                                    <option>JED APT-MAK</option>
                                    <option>JED APT-MED</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-2 form-label">Transport <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>VIP BUS</option>
                                    <option>Economy Bus</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-2">No Of Pax <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">No Of Seats <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Transport Rates <span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <button id="rowAdder" type="button" onClick={IncrementTransport} className="btn mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Add Transport</button>
                                {deleteTransport ?
                                  <span id="rowRemover" type="button" onClick={DecrementTransport} className="btn ml-1 mt-4 nav-next-btn btn-dark"> <i className="fa fa-trash"></i></span>
                                  :
                                  <p></p>
                                }
                              </div>
                            </div>
                          </div>
                        )
                      })}


                      <div className="row mt-3">
                        <div className="col-sm-12 text-right">
                          <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep3} href="#hotel" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>
                          <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep5} href="#ziyarat" role="tab" data-toggle="tab" aria-expanded="true">Next</a>


                        </div>
                      </div>
                    </div>


                    <div role="tabpanel" className="tab-pane" id="ziyarat">

                      {[...Array(noOfZiyarat)].map((elementInArray, index) => {

                        return (
                          <div className="col-md-offset-3 mt-5">
                            <div className="sub-title pb-2">Ziyarat Details</div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-2 form-label">Loctaion <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Abha</option>
                                    <option>Abqaiq</option>
                                    <option>Ad Dilam</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-2 form-label">Ziyarat <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-2 col-sm-2 col-12">
                                <label className="for-color1 pt-2 form-label">Transport <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>VIP BUS</option>
                                    <option>Economy Bus</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">No Of Pax <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Transport Rates <span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <button id="rowAdder" type="button" onClick={IncrementZiyarat} className="btn mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Add Ziyarat</button>
                                {deleteZiyarat ?
                                  <span id="rowRemover" type="button" onClick={DecrementZiyarat} className="btn ml-1 mt-4 nav-next-btn btn-dark"> <i className="fa fa-trash"></i></span>
                                  :
                                  <p></p>
                                }
                              </div>
                            </div>
                          </div>

                        )
                      })}


                      <div className="row mt-3">
                        <div className="col-sm-12 text-right">

                          <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep4} href="#transport" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>
                          <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep6} href="#extra" role="tab" data-toggle="tab" aria-expanded="true">Next</a>

                        </div>
                      </div>

                    </div>


                    <div role="tabpanel" className="tab-pane" id="extra">

                      <div className="col-md-offset-3 mt-4">
                        <div className="sub-title pb-2">Extra</div>
                        <table className="table extraTable">
                          <thead>
                            <tr>
                              <th scope="col"><input type="checkbox" id="" name="" value="" /></th>
                              <th scope="col">Service Name</th>
                              <th scope="col">Serivce Charges</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                              <td>City Tours</td>
                              <td>10.00 SAR</td>
                            </tr>
                            <tr>
                              <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                              <td>Food</td>
                              <td>10.00 SAR</td>
                            </tr>
                            <tr>
                              <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                              <td>Laundry</td>
                              <td>10.00 SAR</td>
                            </tr>
                            <tr>
                              <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                              <td>Medical Assistance</td>
                              <td>10.00 SAR</td>
                            </tr>
                            <tr>
                              <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                              <td>Mobile Sims</td>
                              <td>10.00 SAR</td>
                            </tr>
                            <tr>
                              <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                              <td>Umrah Guide</td>
                              <td>10.00 SAR</td>
                            </tr>
                            <tr>
                              <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                              <td>Wheel-Chair Assistance</td>
                              <td>10.00 SAR</td>
                            </tr>
                          </tbody>
                        </table>


                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="float-right">

                            <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep5} href="#ziyarat" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>
                            <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep7} href="#summary" role="tab" data-toggle="tab" aria-expanded="true">Next</a>
                          </div></div></div>

                    </div>


                    <div role="tabpanel" className="tab-pane" id="summary">

                      <div className="col-md-offset-3 mt-4">
                        <div className="sub-title pb-4">Summary</div>
                        <div className="sub-title pb-2">Basic Details</div>
                        <table className="table horizontal-scrollable" >
                          <thead>
                            <tr>
                              <th scope="col">Agent</th>
                              <th scope="col">Country</th>
                              <th scope="col">Group Name</th>
                              <th scope="col">WTU Code</th>
                              <th scope="col">No Of Pax</th>
                              <th scope="col">Transport Type</th>
                              <th scope="col">Arrival Departure</th>
                              <th scope="col">Visa</th>
                              <th scope="col">Refund Amount</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >1</td>
                              <td>Saudia Arbia</td>
                              <td>Economy </td>
                              <td>67599</td>
                              <td>1</td>
                              <td>Vip Bus</td>
                              <td>23, July</td>
                              <td>Actual</td>
                              <td>20 Sar</td>
                              <td>210 Sar</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sub-title pb-2 mt-2">Pilgrims Details</div>
                        <table className="table horizontal-scrollable">
                          <thead>
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Middle name</th>
                              <th scope="col">Surname</th>
                              <th scope="col">Gender</th>
                              <th scope="col">Passport Number</th>
                              <th scope="col">Passport Expiry Date</th>
                              <th scope="col">Nationality</th>
                              <th scope="col">DOB</th>
                              <th scope="col">Relation</th>
                              <th scope="col">CitizenShip Number</th>
                              <th scope="col">Country</th>
                              <th scope="col">City</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sub-title pb-2 mt-2 ">Accommodation Details</div>
                        <table className="table horizontal-scrollable">
                          <thead>
                            <tr>
                              <th scope="col">City</th>
                              <th scope="col">Hotel </th>
                              <th scope="col">BRN Type</th>
                              <th scope="col">Check In</th>
                              <th scope="col">Check Out</th>
                              <th scope="col">Room Type</th>
                              <th scope="col">No Of Beds</th>
                              <th scope="col">Charges</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sub-title pb-2">Transport Details</div>
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Sector</th>
                              <th scope="col">Transport</th>
                              <th scope="col">BRN Type</th>
                              <th scope="col">No Of Pack</th>
                              <th scope="col">No Of Seats</th>
                              <th scope="col">Transport Rates</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sub-title pb-2">Ziyarat Details</div>
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Loctaion</th>
                              <th scope="col">Ziyarat</th>
                              <th scope="col">Transport</th>
                              <th scope="col">No Of Pack</th>
                              <th scope="col">Transport Rates</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                              <td >-</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sub-title pb-2">Other Services</div>
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Services Name</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >-</td>
                              <td >-</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sub-title pb-2">Refunds Amounts</div>
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Refunds</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >-</td>
                              <td >-</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 mt-2 mb-2">
                            <label className="for-color1">Reference/Remarks<span>*</span></label>
                            <textarea className="form-control-comp for-msg-box w-100" style={{ height: "153px" }}> Remarks </textarea>
                          </div>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-sm-12 text-right">
                          <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep6} href="#extra" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>
                          <Link to="/confirm-flight-booking"><button className="btn nav-next-btn btn-primary nextBtn btn-lg pull-right btn-bg-color" type="button">Continue Booking</button></Link>

                        </div>
                      </div>

                    </div>


                  </div>

                  <div id="push"></div>



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

export default ContinueBookingCustomizeUmrah;