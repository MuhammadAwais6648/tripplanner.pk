import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import $ from 'jquery';
import Date from "../Components/Date";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';






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


const Tour = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Tour | Tripplanner ";
    }, [])


    const [bgColor, setBgColor] = useState(true);
    const [bgColor2, setBgColor2] = useState(false);
    const [bgColor3, setBgColor3] = useState(false);


    const activeStep = () => {
        setBgColor(true);
        setBgColor2(false);
        setBgColor3(false);

    }


    const activeStep2 = () => {
        setBgColor(false);
        setBgColor2(true);
        setBgColor3(false);

    }

    const activeStep3 = () => {
        setBgColor(false);
        setBgColor3(true);
        setBgColor2(false);

    }







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


            <header className="masthead main-header tour-header mob-header-tour">
                <div className="container">
                    <div className="tab-content">
                        <div id="home1" className="tab-pane active">

                            <div className="search-form w-100 umrah-search-frm mt-0 ">
                                <div className="row d-flex justify-content-center active" >
                                    <div className="col-md-12 " >
                                        <div className="container">
                                            <div className="wizard ">

                                                <div className="wizard-inner" style={{ marginBottom: "70px" }}>
                                                    <div className="connecting-line  text-center w-75" ></div>
                                                    <div className="container w-75" >
                                                        <ul className="nav nav-tabs text-center " role="tablist" style={{ justifyContent: "space-between" }}>
                                                            <li role="presentation" onClick={activeStep} className={bgColor ? "active" : "disabled text-center"}>
                                                                <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false">
                                                                    <span className="round-tab">1</span>
                                                                    <i >Your Stay</i></a>
                                                            </li>
                                                            <li role="presentation" onClick={activeStep2} className={bgColor2 ? "active" : "disabled text-center"}>
                                                                <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab"><span className="round-tab">2</span> <i>Transport</i></a>
                                                            </li>
                                                            <li role="presentation" onClick={activeStep3} className={bgColor3 ? "active" : "disabled text-center"}>
                                                                <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab"><span className="round-tab">3</span> <i>Flight</i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <form role="form" action="index.html" className="login-box " method="post">
                                                    <div className="tab-content" id="main_form">
                                                        <div className="tab-pane active step2" role="tabpanel" id="step2">
                                                            <div className="search-form2 w-100 umrah-main-search2" >
                                                                <div className="container" >
                                                                    <div className="header-main-heading pb-2">Hotel</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                                                                <div className="col-xl-2 col-lg-2 col-md-6 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Destination</label>
                                                                                    <input type="text" className="form-control" placeholder=" New York " required />
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-6 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Check In / Check Out</label>
                                                                                    <Date />
                                                                                </div>
                                                                                <div className="col-xl-2 col-lg-2 col-md-4 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">No of Rooms</label>
                                                                                    <div className="search-dropdown dropdown-passenger">
                                                                                        <div className="dropbtn">
                                                                                            <input className="form-control form-control-lg" type="text" placeholder="Single, Double, Quad" />
                                                                                        </div>
                                                                                        <div className="dropdown-content for-rooms">
                                                                                            <div className="row ">
                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                                                                                                    <label className="p-0">Single</label>
                                                                                                </div>
                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center p-0">
                                                                                                    <div className="qty">
                                                                                                        <span className="minus bg-dark adultMinus">-</span>
                                                                                                        <input type="number" className="count" id="adult" name="adult" value="1" />
                                                                                                        <span className="plus bg-dark adultPlus">+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 p-0">
                                                                                                    <label className="p-0">Double</label>
                                                                                                </div>
                                                                                                <div className="col-lg-8 p-0 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                    <div className="qty">
                                                                                                        <span className="minus bg-dark childMinus">-</span>
                                                                                                        <input type="number" className="count" id="child" name="child" value="1" />
                                                                                                        <span className="plus bg-dark childPlus">+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 p-0">
                                                                                                    <label className="p-0">Quad</label>
                                                                                                </div>
                                                                                                <div className="col-lg-8 p-0 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                    <div className="qty">
                                                                                                        <span className="minus bg-dark infantMinus">-</span>
                                                                                                        <input type="number" className="count" id="infant" name="infant" value="1" />
                                                                                                        <span className="plus bg-dark infantPlus">+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0">
                                                                                    <label className="form-label pl-2">No of Travelers</label>
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
                                                                                                        <span className="minus bg-dark adultMinus1">-</span>
                                                                                                        <input type="number" className="count" id="adult1" name="adult" value="1" />
                                                                                                        <span className="plus bg-dark adultPlus1">+</span>
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
                                                                                                        <span className="minus bg-dark childMinus1">-</span>
                                                                                                        <input type="number" className="count" id="child1" name="child" value="1" />
                                                                                                        <span className="plus bg-dark childPlus1">+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                                    <label>Infant</label>
                                                                                                </div>
                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                    <div className="qty">
                                                                                                        <span className="minus bg-dark infantMinus1">-</span>
                                                                                                        <input type="number" className="count" id="infant1" name="infant" value="1" />
                                                                                                        <span className="plus bg-dark infantPlus1">+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-2 col-lg-2 col-md-4 col-12 pb-lg-0 mt-1">
                                                                                    <a href="#step3" data-toggle="tab" aria-controls="step3" onClick={activeStep2} role="tab" aria-expanded="false" type="button" className="btn a next-step default-btn search-btn w-100">Next</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="tab-pane step3" role="tabpanel" id="step3" >
                                                            <div className="search-form2 w-100 umrah-main-search2">
                                                                <div className="container">
                                                                    <div className="header-main-heading pb-2">Transport</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Transport Type</label>
                                                                                    <select className="form-control">
                                                                                        <option>Economy Car</option>
                                                                                        <option>Standard Car</option>
                                                                                        <option>Hyundai H1</option>
                                                                                        <option>Economy GMC</option>
                                                                                        <option>Standard GMC</option>
                                                                                        <option>Business GMC</option>
                                                                                        <option>Standard Hiace</option>
                                                                                        <option>Economy Coaster</option>
                                                                                        <option>Standard Coaster</option>
                                                                                        <option>Standard Innova</option>
                                                                                        <option>VIP BUS</option>
                                                                                        <option>Business Car</option>
                                                                                        <option>Economy Bus</option>
                                                                                        <option>SELF TRANSPORT</option>
                                                                                        <option>VAN</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Wheel Type</label>
                                                                                    <select className="form-control">
                                                                                        <option>Vehicle Type</option>
                                                                                        <option>Economy Car</option>
                                                                                        <option>Standard Car</option>
                                                                                        <option>Business Cars</option>
                                                                                        <option>Economy GMC</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Sector</label>
                                                                                    <select className="form-control">
                                                                                        <option>Jeddah Airport to Makkah</option>
                                                                                        <option>Jeddah Airport to Medina</option>
                                                                                        <option>Medina to Medina Airport</option>
                                                                                        <option>Medina to Jeddah Airport</option>
                                                                                        <option>Medina to Makkah</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pb-lg-0 mt-1">
                                                                                    <a href="#step2" data-toggle="tab" aria-controls="step1" onClick={activeStep} role="tab" aria-expanded="false" type="button" className="btn a prev-step search-btn back-btn w-50">Back</a>
                                                                                    <a href="#step4" data-toggle="tab" aria-controls="step3" onClick={activeStep3} role="tab" aria-expanded="false" type="button" className="btn a next-step default-btn search-btn w-50">Next</a>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>
                                                        <div className="tab-pane step4" role="tabpanel" id="step4" >
                                                            <div className="search-form2 w-100 umrah-main-search2">
                                                                <div className="container">
                                                                    <div className="header-main-heading pb-2">Flight</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Departure Airport</label>
                                                                                    <div className="dep-icon d-none d-lg-block"> <img className="" src="assets/img/deperture-icon.png" /> </div>
                                                                                    <input type="text" className="form-control" placeholder=" Islamabad (ISB)... " required />
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Arrival Airport</label>
                                                                                    <div className="dep-icon d-none d-lg-block"> <img className="" src="assets/img/location-icon.png" /> </div>
                                                                                    <input type="text" className="form-control" placeholder=" Going Airport..." required />
                                                                                </div>
                                                                                <div className="col-xl-4 col-lg-4 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-2">Departure/Return Date</label>
                                                                                    <Date />
                                                                                </div>
                                                                                <div className="col-xl-2 col-lg-2 col-md-3 col-12 pb-lg-0 pb-4 mt-1">

                                                                                    <Link to="/hotel-search-result" className="a"><div className="btn search-btn w-100 text-center a" >PROCEED</div></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>
                        <div id="menu1" className="tab-pane fade">

                            <div className="search-form2 w-100 umrah-search-frm2 mt-0">
                                <div className="container">
                                    <div className="header-main-heading pb-2">Star Packages</div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                    <label className="form-label pl-3">Your City</label>
                                                    <input type="text" className="form-control" value=" Enter City Name" required />
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                    <label className="form-label pl-3">Nationality</label>
                                                    <input type="text" className="form-control" value=" Enter Nationality" required />
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                                                    <label className="form-label pl-3">No of Travelers</label>
                                                    <div className="dpt-icon custom-border">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="main-input">
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
                                                                                        <span className="minus bg-dark adultMinus1">-</span>
                                                                                        <input type="number" className="count" id="adult1" name="adult" value="1" />
                                                                                        <span className="plus bg-dark adultPlus1">+</span>
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
                                                                                        <span className="minus bg-dark childMinus1">-</span>
                                                                                        <input type="number" className="count" id="child1" name="child" value="1" />
                                                                                        <span className="plus bg-dark childPlus1">+</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                    <label>Infant</label>
                                                                                </div>
                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                    <div className="qty">
                                                                                        <span className="minus bg-dark infantMinus1">-</span>
                                                                                        <input type="number" className="count" name="infant" id="infant1" value="1" />
                                                                                        <span className="plus bg-dark infantPlus1">+</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0">
                                                    <a href="umrah-packages.html"> <button className="search-btn  w-100" type="submit">SEARCH</button></a>
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


            <section className="flight-det">
                <div className="container">
                    <h1 className="pb-5">Deal of The Day</h1>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/tour-img-1.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <div className="title text-left">London  -  254 SAR</div>
                                        <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/tour-img-2.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <div className="title text-left">Discover Greece  -  254 SAR</div>
                                        <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">

                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/tour-img-3.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <div className="title text-left">Vacation You Deserve</div>
                                        <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







            <div className="container">

                <div className="ftco-section flight-det hotel-page">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="pb-5 mb-5">Worldwide Tour Offers</h3>
                        </div>
                    </div>
                </div>



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



            </div>


            <section className="flight-det explore pt-5">
                <div className="container">
                    <Link to="/tour-packages" className="float-right btn-view-all text1">view all packages</Link>
                    <h2 className="pb-4">Explore, Discover and Save</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/tour-img-7.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <div className="title text-left">Turkey Tour  -  268 SAR</div>
                                        <p className="hover-1-description mb-0"><a href="#"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/tour-img-8.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <div className="title text-left">Italy Tour  -  268 SAR</div>
                                        <p className="hover-1-description mb-0"><a href="#"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/tour-img-9.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <div className="title text-left">Malaysia Tour  -  268 SAR</div>
                                        <p className="hover-1-description mb-0"><a href="#"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="mt-0">
                <CompaniesLogo />
            </div>

            <div className="mt-5">
                <Footer />
            </div>

        </div>
    )
}

export default Tour;