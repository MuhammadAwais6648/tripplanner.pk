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

const SelectedHotel = () => {

useEffect(() => {
  window.scrollTo(0, 0)
}, []);


const [bgColor , setBgColor] = useState(true);
const [bgColor2 , setBgColor2] = useState(false);
const [noOfRows, setNoOfRows] = useState(1);
const [deleteButton , setDeleteButton] = useState(false);


const Increment = () => {
setNoOfRows(noOfRows + 1);

if(noOfRows >= 1) {
setDeleteButton(true);
}

}


const Decrement = () => {

if(noOfRows == 1){
setNoOfRows(noOfRows - 0);
setDeleteButton(false);
}
else {
setNoOfRows(noOfRows - 1);
}
}




const activeStep = () => {
setBgColor(true);
setBgColor2(false);


}

const activeStep2 = () => {
setBgColor(false);
setBgColor2(true);


}



return(
<div>
<BlackNavbar />

<section className="flight-found flight-detail mt-5">
          <div className="container">
            <h2 className="">Selected Hotel</h2>
            <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
              <div className="mobile-container">
                <div className="topnav">
                  <a href="#home" className="active"></a>
                    <div className="row">
                      <div className="col-12">
                        <div id="myLinks">
                          <a className="for-border-btm" href="#news">
                            <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Price</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  <a href="#;" className="icon" >
                     <i className="fa fa-filter" aria-hidden="true"></i>
                  </a>
              </div>
            </div>
          </span>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
                </div>
              </div>
            </div>
      </div>
            <div className="row mt-5">

              <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                <div className="left-bar">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="sub-title for-tit-bor pl-3 pt-4 pb-2"> Your booking details </div>
                    </div>
                  </div>
                  <div className="row pl-3 pt-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="sub-txt">Check In</div>
                      <div className="sub-txt"><strong>Tue 8 Feb 2022</strong></div>
                      <div className="sub-txt">From 12:00</div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="sub-txt">Check Out</div>
                      <div className="sub-txt"><strong>Tue 8 Feb 2022</strong></div>
                      <div className="sub-txt">From 12:00</div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="sub-txt pt-3">Total length of stay:</div>
                      <div className="sub-txt"><strong>17 Nights</strong></div>
                    </div>
                  </div>
                  <div className="row pl-3 pr-3">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="sub-title for-tit-bor pt-3 pb-2"> Price Details </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="sub-txt pt-3 pb-1"><strong> Passenger</strong></div>
                    <div className="sub-txt"> Adult x 1 <span>AED 320</span> </div>
                    <div className="sub-txt"> Child x 1 <span>AED 320</span> </div>
                    <div className="sub-txt fr-br-botm pb-3"> Infant x 1 <span>AED 320</span> </div>
                    <div className="sub-title pb-4"> Total <span> 960</span> </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-9 col-md-9">
                <div className="right-bar p-4 flight-detail">
                  <div className="row">
                    <div className="col-sm-12 col-lg-4 col-md-4 ">
                      <img className="w-100" src="assets/img/Address-Boulevard-hotel.jpg" />
                    </div>
                    <div className="col-sm-12 col-lg-8 col-md-8 ">
                      <div className="sub-title"> Address Boulevard </div>
                      <div className="sub-txt"><img className="pr-1" src="assets/img/hotel-loction-map.png" alt="" />21447 - Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates</div>
                      <div className="sub-txt mt-3"><strong>Superior Family Room</strong></div>
                      <div className="sub-txt">2 extra-large double beds</div>
                      <div className="client-review">
                        <div className="row mt-3">
                          <div className="col-lg-1 col-md-3">
                            <div className="ranking p-1 text-center">9.5</div>
                          </div>
                          <div className="col-lg-3 col-md-5">
                            <div className="review">Very Good</div>
                            <div className="review-count">2563 reviews</div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="sub-txt free-cancel d-inline-flex mt-2"><i className="fa fa-check mr-1"></i>Free parking</div>
                            <div className="sub-txt free-cancel d-inline-flex mt-2 pl-2"><i className="fa fa-check mr-1"></i>Free Wifi</div>
                          </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-4 flight-detail mt-5">


                   <div className="container tabs-wrap">
                       <ul className="nav nav-pills nav-pills-bg" role="tablist">
                         <li role="presentation" className="nav-item">
                           <a className={bgColor ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep} href="#billing" aria-controls="billing" role="tab" data-toggle="tab" aria-expanded="true">HOTEL</a>
                         </li>
                         <li className="nav-item" >
                           <a  className={bgColor2 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep2} href="#shipping" aria-controls="shipping" role="tab" data-toggle="tab" aria-expanded="false">PASSENGER</a>
                         </li>

                       </ul>


                     <div className="tab-content">

                       <div role="tabpanel" className="tab-pane active" id="billing">


 <div className="col-md-offset-3">
                          <div className="sub-title pb-2 mt-5">Hotel Details</div>
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-2 col-12">
                                <label className="for-color1 pt-2">Booking Date <span>*</span></label>
                                <div className="enter-name"><input type="date" name="" className="" value="01/01/2018 - 01/15/2018" /></div>
                              </div>

                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-2">Hotel Category<span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>

                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-2">Hotel Name <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-2">Destination<span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Islamabad</option>
                                    <option>Dubai</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">City <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Islamabad</option>
                                    <option>Dubai</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Check in / Checkout <span>*</span></label>
                                <div className="enter-name"><input type="text" name="daterange" className="" value="01/01/2018 - 01/15/2018" /></div>
                              </div>

                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Room Type<span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Travelers<span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Adult</option>
                                    <option>Child</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <label className="for-color1 pt-4">No of Rooms<span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                    <option>Please Select</option>
                                  </select>
                                </div>
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

{[...Array(noOfRows)].map((elementInArray, index) => {

              return (
                      <div className="col-md-offset-3 mt-4">
                                                            <div className="sub-title pb-2">Passenger Details</div>

                                                             <div className="row">

                                                                                                         <div className="col-lg-3 col-md-3 col-sm-2 col-12">
                                                                                                           <label className="for-color1 pt-2">Title <span>*</span></label>
                                                                                                           <div className="enter-name">
                                                                                                             <select>
                                                                                                               <option>Miss</option>
                                                                                                               <option>Mr</option>
                                                                                                               <option>Mrs</option>
                                                                                                             </select>
                                                                                                           </div>
                                                                                                         </div>

                                                                                                         <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                                                                                           <label className="for-color1 pt-2">First Name<span>*</span></label>
                                                                                                           <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                                                                                         </div>

                                                                                                         <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                                                                                           <label className="for-color1 pt-2">Middle Name<span>*</span></label>
                                                                                                           <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                                                                                         </div>

                                                                                                         <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                                                                                           <label className="for-color1 pt-2">Last Name<span>*</span></label>
                                                                                                           <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                                                                                         </div>

                                                                                                         <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                                                                                           <label className="for-color1 pt-4">Passport Number<span>*</span></label>
                                                                                                           <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                                                                                                         </div>

                                                                                                         <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                                                                                           <label className="for-color1 pt-4">Date Of Birth <span>*</span></label>
                                                                                                           <div className="enter-name"><input type="Date" name="daterange" className="" value="01/01/2018 - 01/15/2018" /></div>
                                                                                                         </div>

                                                                                                         <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                                                                                           <label className="for-color1 pt-4">Nationality<span>*</span></label>
                                                                                                           <div className="enter-name">
                                                                                                             <select>
                                                                                                               <option>Please Select</option>
                                                                                                               <option>Pakistan</option>
                                                                                                               <option>Dubai</option>
                                                                                                             </select>
                                                                                                           </div>
                                                                                                         </div>

                                                                                                       </div>

  <div className="row">
                             <div className="col-lg-12">
                                 <button id="rowAdder" type="button" onClick={Increment} className="btn mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Add Passenger</button>
                                 {deleteButton ?
                                   <button id="rowRemover" type="button" onClick={Decrement} className="btn ml-1 mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Delete</button>
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
                                                                       <div className="float-right mt-5">
                                                                                  <a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep} href="#billing" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>
                                                                                  <Link to="/hotel-booking-confirm"><button className="btn nav-next-btn btn-primary nextBtn btn-lg pull-right btn-bg-color" type="button">Continue Booking</button></Link>
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

<CompaniesLogo />
        </section>


<Footer />
</div>
)

}

export default SelectedHotel;