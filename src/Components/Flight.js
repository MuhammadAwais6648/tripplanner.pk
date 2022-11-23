import React , {useState , useEffect} from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import $ from "jquery";
import Date from "../Components/Date";



let margintop = {
marginTop:"0px",
}


const Flight = () => {

const [value, setValue] = useState();


useEffect(() => {
   window.scrollTo(0, 0);
   document.title = "Flight | Tripplanner ";
}, []);






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



const [noOfRows, setNoOfRows] = useState(1);
const [deleteButton , setDeleteButton] = useState(false);
const [searchBtn , setSearchBtn] = useState(true);
const [showClass , setShowClass] = useState(false);





const Increment = () => {
setNoOfRows(noOfRows + 1);
margintop = {
marginTop:"25px",
}



if(noOfRows >= 1) {
setDeleteButton(true);
setSearchBtn(false);
setShowClass(true);
}

}


const Decrement = () => {

if(noOfRows == 1){
setNoOfRows(noOfRows - 0);
setSearchBtn(true);
setDeleteButton(false);
setShowClass(false);
}
else {
setNoOfRows(noOfRows - 1);
}
}


return(
<div>
<Navbar />

 <header className="masthead main-header flight-header mob-header" >
            <div className="container d-flex h-100 align-items-center">

            <div className="search-form w-100">
              <div className="container">

       <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-7 mb-md-2 mb-sm-0 mb-0">
            <div className="custom-dropdown cus-down-arrow pr-0">
              <button className="dropbtn">Return<i className="fa fa-angle-down"></i></button>
              <div className="dropdown-content">
                <a href="#">Ony Way</a>
              </div>
            </div>
            <div className="custom-dropdown cus-down-arrow cus-down-arrow pr-0">
              <button className="dropbtn">Adult <i className="fa fa-angle-down"></i></button>
              <div className="dropdown-content">
                <div className="passenger pt-3 pb-3 pl-2 pr-2">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="title-pax">Adult</div>
                      <div className="count-pax">
                        <div className="qty">
                            <span className="minus bg-dark adultMinus" onClick={adultMinus}>-</span>
                            <input type="number" className="count" id="adult" name="qty" value={adult} />
                            <span className="plus bg-dark adultPlus" onClick={adultPlus}>+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-3 mb-3">
                      <div className="title-pax">Child</div>
                      <div className="count-pax">
                        <div className="qty">
                            <span className="minus bg-dark childMinus" onClick={childMinus}>-</span>
                            <input type="number" className="count" id="child" name="qty" value={child} />
                            <span className="plus bg-dark childPlus" onClick={childPlus}>+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="title-pax">Infant</div>
                      <div className="count-pax">
                        <div className="qty">
                            <span className="minus bg-dark infantMinus" onClick={infantMinus}>-</span>
                            <input type="number" className="count" id="infant" name="qty" value={infant} />
                            <span className="plus bg-dark infantPlus" onClick={infantPlus}>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-dropdown cus-down-arrow pr-0">
              <button className="dropbtn">Economy<i className="fa fa-angle-down"></i></button>
              <div className="dropdown-content">
                <a href="#">Business</a>
              </div>
            </div>
              <div className="custom-dropdown cus-down-arrow pr-0">
                <button className="dropbtn multicities" onClick={Increment}>Multi Cities</button>
              </div>


          </div>
      </div>

    <div className="row mb-3">
        <div className="col-lg-12 col-md-12 col-12">
<div className="g-3 needs-validation main-search scroll-height p-4 mt-2" novalidate>
 {[...Array(noOfRows)].map((elementInArray, index) => {

    return (

 <div className="row" style={margintop}>
 {deleteButton &&
           <div className="col-sm-12  text-right">
              <span  onClick={Decrement} className="text-orange"> <i className="fa fa-close fa-close1"></i></span>
           </div>
          }
     <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4 onClickHide">
             <label className="form-label pl-2">Departure Airport</label>
             <div className="dep-icon d-none d-lg-block"> <img className="" src="assets/img/deperture-icon.png" /> </div>
             <input type="text" className="form-control" placeholder=" Islamabad (ISB)... " required />
           </div>

           <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4 onClickHide">
             <label className="form-label pl-2">Arrival Airport</label>
             <div className="dep-icon d-none d-lg-block"> <img className="" src="assets/img/location-icon.png" /> </div>
             <input type="text" className="form-control" placeholder=" Going Airport..." required />
           </div>

           <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4 onClickHide">
             <label className="form-label pl-2">Departure/Return Date</label>
             <Date selectedDate={(e)=> setValue(e)}/>

           </div>

           {showClass &&
            <div className="col-xl-2 col-lg-2 col-12 pt-lg-0 pt-4 onClickHide">
               <label className="form-label pl-2">Class</label>
               <select className="form-control">
                <option>Economy</option>
                <option>Business</option>
                <option>Premium</option>
               </select>
             </div>
             }

        {searchBtn &&
        <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pb-0 onClickHide">
            <Link to="/flight-search-result"><button className="search-btn w-100" type="submit">SEARCH</button></Link>
          </div>
        }



           </div>
     ) } )}


{deleteButton &&
            <div className="col-sm-12 text-right">
                             <span onClick={Increment} className=" text-orange mr-3"> Add Another City</span>
                            <Link to="/multi-flights"> <button className="search-btn px-5"  type="submit">SEARCH</button></Link>

                        </div>
            }


</div>
          </div>
          </div>
       </div>
    </div>

            </div>
        </header>



     <section className="flight-det pb-lg-5 pb-md-5 pb-sm-3 pb-3">
              <div className="container">

                <h1 className="pb-5">Most Popular Flight Destinations</h1>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12">
                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100" src="../../assets/img/london-pop-flig.png" alt="" />
                          <div className="hover-1-content p-2">
                            <div className="title text-left">London  -  254 SAR</div>
                            <p className="hover-1-description mb-0"><Link to="/country-page" ><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <div className="flight-deti-img for-width-size1 text-center"> <img class="w-100" src="../../assets/img/india-pop-flig.png" /></div>
                          <div className="hover-1-content p-2">
                            <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">India  -  254 SAR</div>
                            <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0"><Link to="/country-page" ><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <div className="flight-deti-img for-width-size1 text-center"> <img class="w-100" src="../../assets/img/china-pop-flig.png" /></div>
                          <div className="hover-1-content p-2">
                            <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">China  -  254 SAR</div>
                            <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0"><Link to="/country-page" ><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <div className="flight-deti-img for-width-size1 text-center"> <img class="w-100" src="../../assets/img/itlay-pop-flig.png" /></div>
                          <div className="hover-1-content p-2">
                            <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">Itlay  -  254 SAR</div>
                            <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0"><Link to="/country-page" ><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <div className="flight-deti-img for-width-size1 text-center"> <img class="w-100" src="../../assets/img/islamabad-pop-flig.png" /></div>
                          <div className="hover-1-content p-2">
                            <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">Pakistan  -  254 SAR</div>
                            <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0"><Link to="/country-page" ><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12">
                    <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <div className="flight-deti-img for-width-size1 text-center"> <img class="w-100" src="../../assets/img/united-state-pop-flig.png" /></div>
                          <div className="hover-1-content p-2">
                            <div className="title text-left flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0 mob-margin-top">United State Of America  -  254 SAR</div>
                            <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0"><Link to="/country-page" ><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="image-box mob-margin-top1 ">
                        <div className="name-desc hover-1 image-box rounded">
                          <div className="flight-deti-img for-width-size1 text-center "> <img class="w-100" src="../../assets/img/thailand-pop-flig.png" /></div>
                          <div className="hover-1-content p-2">
                            <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">Thailand  -  254 SAR</div>
                            <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0"><Link to="/country-page" ><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                  <div className="book-flight pt-0">
                      <h2 className="mt-5 mb-3 pb-5 pt-3">Book Flights Around the World</h2>
                          <div className="row mb-5">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">
                            <div className="map-africa text-center">
                              <img className="mt-5 mb-3" src="../../assets/img/map-pin.png" />
                              <div class="country-name">Africa</div>
                              <div class="custom-dropdown cus-down-arrow">
                              <button className="map-btn1 dropbtn1 btn search-btn1 ">View All</button>
                                <div className="dropdown-menu text-center flight-dropdown-content dropdown-content ">
                                 <Link to="/country-page" className="dropdown-text">Harare Flights</Link>
                                  <Link to="/country-page" className="dropdown-text">Johannesburg Flights</Link>
                                 <Link to="/country-page" className="dropdown-text">Accra Flights</Link>
                                  <Link to="/country-page" className="dropdown-text">Lagos Flights</Link>
                                 <Link to="/country-page" className="no-border dropdown-text" >Nairobi Flights</Link>
                                </div>
                            </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">
                            <div className="map-south-america text-center">
                              <img className="mt-5 mb-3" src="../../assets/img/map-pin.png" />
                              <div className="country-name">South America</div>
                              <div className="custom-dropdown cus-down-arrow">
                                <button className=" map-btn1 dropbtn1 btn search-btn1">View All</button>
                                <div className="dropdown-menu flight-dropdown-content dropdown-content mt">
                                  <Link to="/country-page" className="dropdown-text" >Rio De Janeiro Flights</Link>
                                  <Link to="/country-page" className="dropdown-text">Sao Paulo Flights</Link>
                                  <Link to="/country-page" className="dropdown-text">Buenos Aires Flights</Link>
                                  <Link to="/country-page" className="dropdown-text">Lima Flights</Link>
                                  <Link to="/country-page" className="dropdown-text" class="no-border">Santiago Flights</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">
                            <div className="map-oceania text-center">
                              <img className="mt-5 mb-3" src="../../assets/img/map-pin.png" />
                              <div className="country-name">Oceania</div>
                              <div className="custom-dropdown cus-down-arrow">
                                 <button className=" map-btn1 dropbtn1 btn search-btn1">View All</button>
                                  <div className="dropdown-menu flight-dropdown-content dropdown-content ">
                                    <Link to="/country-page" className="dropdown-text" >Brisbane Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" >Perth Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" >Sydney Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" >Auckland Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" class="no-border" >Melbourne Flights</Link>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">
                              <div className="map-europe text-center">
                                <img className="mt-5 mb-3" src="../../assets/img/map-pin.png" />
                                <div className="country-name">Europe</div>
                                <div className="custom-dropdown cus-down-arrow">
                                  <button className="map-btn1 dropbtn1 btn search-btn1">View All</button>
                                  <div className="dropdown-menu flight-dropdown-content dropdown-content ">
                                    <Link to="/country-page" className="dropdown-text" >Amsterdam Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" >Paris Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" >Athens Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" >Madrid Flights</Link>
                                    <Link to="/country-page" className="dropdown-text" class="no-border" href="#">Frankfurt Flights</Link>
                                  </div>
                                </div>

                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">
                              <div className="map-north-america text-center">
                                <img className="mt-5 mb-3" src="../../assets/img/map-pin.png" />
                                <div className="country-name">North America</div>
                                <div class="custom-dropdown cus-down-arrow">
                                  <button class=" map-btn1 dropbtn1 btn search-btn1">View All</button>
                                  <div class="dropdown-menu flight-dropdown-content dropdown-content ">
                                    <Link to="/country-page" class="dropdown-text" >Montreal Flights</Link>
                                    <Link to="/country-page"  class="dropdown-text">Las Vegas Flights</Link>
                                    <Link to="/country-page"  class="dropdown-text">Chicago Flights</Link>
                                    <Link to="/country-page"  class="dropdown-text" >Calgary Flights</Link>
                                    <Link to="/country-page" class="no-border dropdown-text" >Orlando Flights</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6 min-height">
                              <div class="map-asia text-center">
                                <img class="mt-5 mb-3" src="../../assets/img/map-pin.png" />
                                <div class="country-name">Asia</div>
                                <div class="custom-dropdown cus-down-arrow">
                                  <button class=" map-btn1 dropbtn1 btn search-btn1">View All</button>
                                  <div class="dropdown-menu flight-dropdown-content dropdown-content ">
                                    <Link to="/country-page" class="dropdown-text" >Manila Flights</Link>
                                    <Link to="/country-page"  class="dropdown-text">DubaiFlights</Link>
                                    <Link to="/country-page"  class="dropdown-text">Islamabad Flights</Link>
                                    <Link to="/country-page"  class="dropdown-text">Kuala Lumpur Flights</Link>
                                    <Link to="/country-page" class="no-border dropdown-text" >Beijing Flights</Link>
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

export default Flight;