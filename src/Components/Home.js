import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import HomePageServices from "../Components/HomePageServices";
import '../Tripplanner.css';
import '../Styles.css';
import CompaniesLogo from "../Components/CompaniesLogo";
import { BackTop } from 'antd';


let img1 = "assets/img/world-wide-sydney.png";
let img2 = "assets/img/world-wide-newyork.png";
let img3 = "assets/img/world-wide-jeddah.png";
let img4 = "assets/img/world-wide-umrah.png";
let img5 = "assets/img/world-sydney-tour.png";
let img6 = "assets/img/world-wide-jeddah.png";


let slide1Title = "Cheappest Flights  -  254 SAR";
let slide2Title = "Luxury Hotel  -  254 SAR";
let slide3Title = "Transport  -  254 SAR";
let slide4Title = "Cheapest Umrah  -  254 SAR";
let slide5Title = "Sydney Tour  -  450 SAR";
let slide6Title = "Transport  -  254 SAR";

let subText1 = "Book Cheapest Flight World Wide.";
let subText2 = "Best Five Star Hotels World Wide";
let subText3 = "Book Cheapest Transport.";
let subText4 = "Umrah packages for all Muslims";
let subText5 = "You can find the Cheap Tour";
let subText6 = "Book Cheapest Transport.";

let link1 = "/flight";
let link2 = "/hotel";
let link3 = "/transport";
let link4 = "/umrah";
let link5 = "/tour";
let link6 = "/transport";

const Home = () => {



  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home | Tripplanner PK";
  }, [])
  return (
    <div>
      <Navbar />
      <Header />

      <section className="best-deals">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <h2 className="pb-4 text-capitalize">Find The Best Travel Deals!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec justo orci. Duis bibendum, eros tempor vehicula tincidunt, justo augue tincidunt velit, vitae tempus odio sem sit amet purus. Nam gravida sem pretium nunc placerat sagittis. Curabitur hendrerit pellentesque purus at mattis. Maecenas aliquet, nulla at imperdiet tempor, tellus nulla lobortis tortor, accumsan faucibus eros orci non tellus.</p>
              <Link to="/view-all-deals"><button className="mt-3">View All Deals</button> </Link>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <img className="w-100" src="assets/img/best-travels-deals.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>


      <HomePageServices />





      <section className="sec-pt">
        <div className="ftco-section best-services">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="pb-3 text-capitalize" >Worldwide Travel Offers</h3>

              </div>

            </div>
          </div>
        </div>



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
          subText1={subText1}
          subText2={subText2}
          subText3={subText3}
          subText4={subText4}
          subText5={subText5}
          subText6={subText6}
          link1={link1}
          link2={link2}
          link3={link3}
          link4={link4}
          link5={link5}
          link6={link6}

        />


        <div id="" className="mt-0 mt-lg-auto">
          <div className="find-hotel p-5 mt-5">
            <div className="hotel-details text-center">
              <div className="title pb-2">Find & Book World Best Hotel Deals</div>
              <div className="sub-txt pb-2">Price Starts From</div>
              <div className="price pb-4">SAR - 156</div>
              <Link to="/hotel"><button>View All Deals</button></Link>
            </div>
          </div>
        </div>

        <CompaniesLogo />

      </section>


      <Footer />
    </div>
  )
}

export default Home;