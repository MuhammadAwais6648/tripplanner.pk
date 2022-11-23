import React ,{useState , useEffect } from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import Date from "../Components/Date";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




let img1="assets/img/hotel-main-img-3.png";
let img2="assets/img/hotel-main-img-4.png";
let img3="assets/img/hotel-main-img-5.png";
let img4="assets/img/hotel-main-img-3.png";
let img5="assets/img/hotel-main-img-4.png";
let img6="assets/img/hotel-main-img-5.png";


let slide1Title="london  -  268 aed";
let slide2Title="paris  -  268 aed";
let slide3Title="berlin  -  268 aed";
let slide4Title="london  -  268 aed";
let slide5Title="paris  -  268 aed";
let slide6Title="berlin  -  268 aed";


let link1 = "/transport";
let link2 = "/tour";
let link3 = "/transport";
let link4 = "/tour";
let link5 = "/transport";
let link6 = "/tour";




const Hotel = () => {

useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Hotel | Tripplanner ";
}, [])



 const [adult ,setAdult] = useState(1);
  const [child ,setChild] = useState(1);
  const [infant ,setInfant] = useState(1);

  const adultMinus = () =>{
  if(adult >1 )
  {
  setAdult(adult-1);
  }
  }
   const adultPlus = () =>{
    setAdult(adult+1);
    }
//    Child
     const childMinus = () =>{
      if(child >1 )
      {
      setChild(child-1);
      }
      }
       const childPlus = () =>{
        setChild(child+1);
        }

      const infantMinus = () =>{
       if(infant >1 )
       {
       setInfant(infant-1);
       }
       }
        const infantPlus = () =>{
         setInfant(infant+1);
         }



return(
<div>
<Navbar />

  <header className="masthead main-header tour-header mob-header">
            <div className="container d-flex h-100 align-items-center">

            <div className="search-form w-100">
              <div className="container">





    <div className="row mb-3">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
             <div className="col-xl-2 col-lg-2 col-md-6 col-12 pt-lg-0 pt-4">
                <label className="form-label pl-3">Destination</label>
                <input type="text" className="form-control" placeholder=" New York " required />
              </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-12 pt-lg-0 pt-4">
                  <label className="form-label pl-3">Check In / Check Out</label>
                  <Date />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-3 col-12 pt-lg-0">
                               <label className="form-label pl-3">No of Rooms</label>
                               <div className="search-dropdown dropdown-passenger">
                                   <div className="dropbtn">
                                       <input className="form-control form-control-lg" type="text"  placeholder="Single, Double, Quad" />
                                   </div>
                                   <div className="dropdown-content">
                                       <div className="row">
                                           <div className="col-lg-4 col-md-4 col-sm-4">
                                               <label>Single</label>
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
                                               <label>Double</label>
                                           </div>
                                           <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                               <div className="qty">
                                                     <span className="minus bg-dark childMinus" onClick={childMinus}>-</span>
                                                                                        <input type="number" className="count" id="child" name="child" value={child} />
                                                                                        <span className="plus bg-dark childPlus" onClick={childPlus}>+</span>
                                               </div>
                                           </div>
                                           <div className="col-lg-12 col-md-12"><hr /></div>
                                       </div>
                                       <div className="row">
                                           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                               <label>Quad</label>
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
              <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0">
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
                              <div className="col-lg-12 col-md-12"><hr /></div>
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
                 <div className="col-xl-1 col-lg-1 col-md-4 col-12 pb-lg-0 mt-1">
                    <Link to="/hotel-search-result"><button className="search-btn " type="submit">SEARCH</button></Link>
                  </div>
              </div>
          </div>
          </div>
       </div>
    </div>

            </div>
        </header>
        <section className="flight-det hotel-page">
                <div className="container">

                  <h1 className="pb-5">The Best Hotel Deals All Around the World</h1>


  <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <img className="w-100" src="assets/img/hotel-main-img-1.png" alt="" />
                    <div className="hover-1-content p-2">
                      <Link to="/hotel-detail" ><div className="title mt-1 ml-1 title1">town hotel apartment - 24 sar</div></Link>
                      <div className="sub-txt ml-1">4Nights - Double Bed</div>
                      <p className="hover-1-description mb-0"><a><span className="star-ranking text-center mr-1 p-1"> 4.5 </span> Reviews </a></p>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-4">



                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <img className="w-100" src="../../assets/img/hotel-main-img-2.png" alt="" />
                    <div className="hover-1-content p-2">
                      <Link to="/hotel-detail" ><div className="title mt-1 ml-1 title1">evergreen place siam by uhg - 24 sar</div></Link>
                      <div className="sub-txt ml-1">4Nights - Double Bed</div>
                      <p className="hover-1-description mb-0"><a><span className="star-ranking text-center mr-1 p-1"> 4.5 </span> Reviews </a></p>
                    </div>
                  </div>
                  </div>
              </div>
            </div>



                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100" src="../../assets/img/hotel-main-img-1.png" alt="" />
                          <div className="hover-1-content p-2">
                           <Link to="/hotel-detail" ><div className="title mt-1 ml-1 title1">town hotel apartment - 24 sar</div></Link>
                            <div className="sub-txt ml-1">4Nights - Double Bed</div>
                            <p className="hover-1-description mb-0"><a><span className="star-ranking text-center mr-1 p-1"> 4.5 </span> Reviews </a></p>
                          </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-4">



                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100" src="../../assets/img/hotel-main-img-2.png" alt="" />
                          <div className="hover-1-content p-2">
                           <Link to="/hotel-detail" ><div className="title mt-1 ml-1 title1">evergreen place siam by uhg - 24 sar</div></Link>
                            <div className="sub-txt ml-1">4Nights - Double Bed</div>
                            <p className="hover-1-description mb-0"><a><span className="star-ranking text-center mr-1 p-1"> 4.5 </span> Reviews </a></p>
                          </div>
                        </div>
                        </div>
                    </div>
                  </div>
</div>



<div >

                  <div className="ftco-section flight-det hotel-page">


                      </div>




<div className="container">

 <div className="ftco-section flight-det hotel-page">
               <div className="row">
                 <div className="col-md-12">
                          <h2 className="mb-5 mt-5 pt-5">World Wide Best Hotel</h2>
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
         slide1Title = {slide1Title}
         slide2Title = {slide2Title}
         slide3Title = {slide3Title}
         slide4Title = {slide4Title}
         slide5Title = {slide5Title}
         slide6Title = {slide6Title}

         link1 = {link1}
         link2 = {link2}
         link3 = {link3}
         link4 = {link4}
         link5 = {link5}
         link6 = {link6}

         />




         </div>







</div>


                      <div className="container">

                      <h3 className="pb-5 pt-5 mt-5">Get inspiration for your next trip</h3>
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-12">
                           <div className="image-box">
                            <div className="name-desc hover-1 image-box rounded">
                              <img className="w-100" src="../../assets/img/berlin-hotel.jpg" alt="" />
                              <div className="hover-1-content p-2">
                                <div className="title text-left">berlin - Town Hotel</div>
                                <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-4">
                          <div className="image-box">
                            <div className="name-desc hover-1 image-box rounded">
                              <img className="w-100" src="../../assets/img/paris-hotel.jpg" alt="" />
                              <div className="hover-1-content p-2">
                                <div className="title text-left">paris - Hotel</div>
                                <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mt-5">
                          <div className="image-box">
                            <div className="name-desc hover-1 image-box rounded">
                              <img className="w-100" src="../../assets/img/london-hotel.jpg" alt="" />
                              <div className="hover-1-content p-2">
                                <div className="title text-left">London - Hotel</div>
                                <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mt-5">
                          <div className="image-box">
                            <div className="name-desc hover-1 image-box rounded">
                              <img className="w-100" src="../../assets/img/japan-hotel.jpg" alt="" />
                              <div className="hover-1-content p-2">
                                <div className="title text-left">Japan - Hotel</div>
                                <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mt-5">
                          <div className="image-box">
                            <div className="name-desc hover-1 image-box rounded">
                              <img className="w-100" src="../../assets/img/turkey-hotel.jpg" alt="" />
                              <div className="hover-1-content p-2">
                                <div className="title text-left">Turkey - Hotel</div>
                                <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>



<CompaniesLogo />

                </div>
              </section>
<Footer />

</div>
)}

export default Hotel;