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

const ZiyaratDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ziyarat Detail | Tripplanner ";
  }, []);

  return (
    <div>
      <BlackNavbar />


      <section className="flight-det ziyarat mt-5">
        <div className="container">
          <h2 className="">Grave Of Sayyidah Maymuna (RA)</h2>
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-1.png" alt="" />
                  </div>
                  <div className="carousel-item hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-2.png" alt="" />
                  </div>
                  <div className="carousel-item hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-3.png" alt="" />
                  </div>
                  <div className="carousel-item hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-4.png" alt="" />
                  </div>
                  <div className="carousel-item hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-5.png" alt="" />
                  </div>
                  <div className="carousel-item hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-6.png" alt="" />
                  </div>
                  <div className="carousel-item hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-7.png" alt="" />
                  </div>
                  <div className="carousel-item hotel-carousel">
                    <img src="assets/img/imag-gallery-ziy-large-img-8.png" alt="" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="hotel-img-gallery p-3 d-none d-lg-block">
                <a href="#"><img src="assets/img/small-img-gallery-1.png" alt="" /></a>
                <a href="#"><img src="assets/img/small-img-gallery-2.png" alt="" /></a>
                <a href="#"><img src="assets/img/small-img-gallery-3.png" alt="" /></a>
                <a href="#"><img src="assets/img/small-img-gallery-4.png" alt="" /></a>
                <a href="#"><img src="assets/img/small-img-gallery-5.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5"></div>
          </div>
          <h2 className="mt-5">Location Map (Show Distance To Haram)</h2>
          <div className="row mt-4">
            <div className="col-lg-9 col-md-9 col-12">
              <div className="ziyarat-map"><img className="w-100" src="assets/img/map-ziyarat.png" alt="" /></div>
              <h3 className="mt-5">Places Nearby Grave Of Sayyidah Maymuna (RA):</h3>
              <ol>
                <li className="pt-2">7.12 km - Masjid Taneem   ( Show Distance / Show Distance to Haram )</li>
                <li className="pt-2">9.23 km - Kiswa Factory and Makkah Museum   ( Show Distance / Show Distance to Haram )</li>
                <li className="pt-2">9.4 km - Jabal Nur   ( Show Distance / Show Distance to Haram )</li>
                <li className="pt-2">9.77 km - Tuwa Well   ( Show Distance / Show Distance to Haram )</li>
                <li className="pt-2">9.82 km - Jannatul Mualla   ( Show Distance / Show Distance to Haram )</li>
                <li className="pt-2">9.93 km - Masjid Jinn   ( Show Distance / Show Distance to Haram )</li>
                <li className="pt-2">10 km - Masjid As-Shajarah   ( Show Distance / Show Distance to Haram )</li>
              </ol>
            </div>
            <div className="col-lg-3 col-md-3 col-3"></div>
          </div>


        </div>


        <CompaniesLogo />
      </section>


      <Footer />
    </div>

  )

}

export default ZiyaratDetail;