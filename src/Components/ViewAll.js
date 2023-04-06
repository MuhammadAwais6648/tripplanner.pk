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
import $ from "jquery";
import DealsHeader from "../Components/Deals/DealsHeader";
import CheapestFlights from "../Components/Deals/CheapestFlights";
import LuxuryHotel from "../Components/Deals/LuxuryHotel";
import CheapUmrahPackages from "../Components/Deals/CheapUmrahPackages";
import AffordableTours from "../Components/Deals/AffordableTours";
import FavouriteDestinations from "../Components/Deals/FavouriteDestinations";


const ViewAll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "View All Deals | Tripplanner ";
  }, [])





  return (
    <div>

      <DealsHeader />

      <section className="flight-det hotel-page view-all">
        <div className="container">

          <CheapestFlights heading="Cheapest Flights Available" />

          <LuxuryHotel />

          <CheapUmrahPackages />

          <AffordableTours />

          <FavouriteDestinations heading="Travel to favourite Destinations" />

          <CompaniesLogo />


        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ViewAll;