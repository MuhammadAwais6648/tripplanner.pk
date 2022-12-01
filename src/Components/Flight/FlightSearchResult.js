import React , {useState , useEffect} from "react";
import Navbar from "../../Components/Navbar";
import '../tripplanner.css';
import '../../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";
import HomeCarousal from "../../Components/HomeCarousal";
import '../../Components/HomeCarousal.css';
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";
import { useLocation } from "react-router-dom";


const FlightSearchResult = () => {
  const [searchedResult, setSearchedResult] = useState({
    key: '',
    departureAirport: '',
    arrivalAirport: '',
    returned: '',
    adult: '',
    infant: '',
    economyClass: '',
    child: '',
    selectedDate: ''
  });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Flight Search Result | Tripplanner PK ";

    console.log("searchedResult: ", location.state.searchedItems);
    setSearchedResult(location.state.searchedItems);
    console.log("searchedResult 2: ", searchedResult);

  }, []);

  return(
      <div>
        <BlackNavbar />
        <section className="search-flight mt-5">
          <div className="container">
            <h1 className="">Your Search Flight</h1>
            <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
              <div className="mobile-container">
                <div className="topnav">
                  <a href="#home" className="active"></a>
                    <div className="row">
                      <div className="col-12">
                        <div id="myLinks">
                          <a className="for-border-btm" href="#news">
                            <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Airlines</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModa2" data-whatever="@fat">Stop Over</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModa3" data-whatever="@fat">Departure Airport</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  <a href="javascript:void(0);" className="icon">
                     <i className="fa fa-filter" aria-hidden="true"></i>
                  </a>
              </div>
            </div>
          </span>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="row g-3 needs-validation main-search p-4 bot-search-eng mt-2 m-0" >
                  <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                    <label className="form-label pl-3">Departure Airport </label>
                    <input type="text" value={searchedResult.departureAirport.split('-')[0]} className="form-control" placeholder=" Islamabad (ISB)..." required />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                    <label className="form-label pl-3">Arrival Airport</label>
                    <input type="text" value={searchedResult.arrivalAirport.split('-')[0]} className="form-control" placeholder=" Going Airport..." required />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                    <label className="form-label pl-3">Departure/Return Date</label>
                    <input type="text" value={searchedResult.selectedDate} name="daterange" className="form-control" />
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pt-1">
                    <a href="flight-search-result.html"><button className="search-btn w-100" type="submit">Modify</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Airline Details
              </div>
              <div className="modal-body">
                <ul className="p-0">
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Etihad Airways </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Turkish Airline </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> British Airways </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Qatar Airways </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Gulf Airways </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Etihad Airways </label>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn  apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Stop Over Details
              </div>
              <div className="modal-body">
                <ul className="p-0">
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Direct </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> 1 Stop </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> 2 + Stop </label>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn  apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Stop Over Details
              </div>
              <div className="modal-body">
                <ul className="p-0">
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Dubai Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Dubai Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Dubai Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Dubai Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Dubai Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-1"> Dubai Airport </label>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn  apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>

        <section className="flight-found pt-0">
          <div className="container">
            <h2 className="">341 Flights Found For - Sydney</h2>
            <div className="row mt-5">

              <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                <div className="left-bar p-3">
                  <div className="sub-title fr-br-botm pb-4"> <img className="pr-2" src="assets/img/filter-result-icon.png" /> Filter Result</div>
                  <div className="sub-title pb-2 pt-4">Price Range</div>
                  <div className="text-center pt-2">SAR 0 - SAR 2000</div>
                  <div className="pl-4 pb-4"><img className="text-center" src="assets/img/price-rang-icon.png" /></div>
                  <div className="fr-br-botm"></div>
                  <div className="sub-title pb-2 mt-3">Stops</div>
                  <div className="filter-list fr-br-botm pt-2">
                    <ul className="p-0">
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Direct </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> 1 Stop </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> 2 + Stop </label>
                      </li>
                    </ul>
                  </div>
                  <div className="sub-title pb-2 pt-3">Airlines</div>
                  <div className="filter-list fr-br-botm pt-2">
                    <ul className="p-0">
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Etihad Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Turkish Airline </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> British Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Qatar Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Gulf Airways </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Etihad Airways </label>
                      </li>
                    </ul>
                  </div>
                  <div className="sub-title pb-2 pt-3">Departure Airport</div>
                  <div className="filter-list pt-2">
                    <ul className="p-0">
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value=""/>
                        <label className="pl-1"> Dubai Airport </label>
                      </li>
                      <li>
                        <input type="checkbox" id="" name="" value="" />
                        <label className="pl-1"> Dubai Airport </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>




              <div className="col-lg-9 col-md-9">
                <div className="right-bar p-2">
                  <div className="row m-0">
                    <div className="col-lg-10 col-md-12">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="border-small-scr">
                            <div className="row p-3">
                              <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img className="" src="assets/img/seprator-line.png" />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div className="dep-det"><strong>Depart:</strong> 04:00 - Wed, 09-03</div>
                                <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="row p-3">
                            <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img className="" src="assets/img/seprator-line.png" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div className="dep-det"><strong>Return:</strong> 04:00 - Wed, 09-03</div>
                              <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>1 Stop</strong> </div>
                              <div className="sub-txt">KHI</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>3h 30m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div className="total-fare text-center"><span className="curency-sign">AED</span>320</div>
                        <Link to="/selected-flight"><button className="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-2 mt-4">
                  <div className="row m-0">
                    <div className="col-lg-10 col-md-12">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="border-small-scr">
                            <div className="row p-3">
                              <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img className="" src="assets/img/seprator-line.png" />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div className="dep-det"><strong>Depart:</strong> 04:00 - Wed, 09-03</div>
                                <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="row p-3">
                            <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img className="" src="assets/img/seprator-line.png" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div className="dep-det"><strong>Return:</strong> 04:00 - Wed, 09-03</div>
                              <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>1 Stop</strong> </div>
                              <div className="sub-txt">KHI</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>3h 30m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div className="total-fare text-center"><span className="curency-sign">AED</span>320</div>
                        <Link to="/selected-flight"><button className="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-2 mt-4">
                  <div className="row m-0">
                    <div className="col-lg-10 col-md-12">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="border-small-scr">
                            <div className="row p-3">
                              <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img className="" src="assets/img/seprator-line.png" />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div className="dep-det"><strong>Depart:</strong> 04:00 - Wed, 09-03</div>
                                <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="row p-3">
                            <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img className="" src="assets/img/seprator-line.png" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div className="dep-det"><strong>Return:</strong> 04:00 - Wed, 09-03</div>
                              <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>1 Stop</strong> </div>
                              <div className="sub-txt">KHI</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>3h 30m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div className="total-fare text-center"><span className="curency-sign">AED</span>320</div>
                        <Link to="/selected-flight"><button className="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-2 mt-4">
                  <div className="row m-0">
                    <div className="col-lg-10 col-md-12">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="border-small-scr">
                            <div className="row p-3">
                              <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img className="" src="assets/img/seprator-line.png" />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div className="dep-det"><strong>Depart:</strong> 04:00 - Wed, 09-03</div>
                                <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="row p-3">
                            <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img className="" src="assets/img/seprator-line.png" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div className="dep-det"><strong>Return:</strong> 04:00 - Wed, 09-03</div>
                              <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>1 Stop</strong> </div>
                              <div className="sub-txt">KHI</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>3h 30m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div className="total-fare text-center"><span className="curency-sign">AED</span>320</div>
                        <Link to="/selected-flight"><button className="view-btn w-100" type="submit">Select This</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-2 mt-4">
                  <div className="row m-0">
                    <div className="col-lg-10 col-md-12">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/gulf-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="border-small-scr">
                            <div className="row p-3">
                              <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                <img className="" src="assets/img/seprator-line.png" />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                <div className="dep-det"><strong>Depart:</strong> 04:00 - Wed, 09-03</div>
                                <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                              </div>
                              <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>direct</strong> </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                <div className="dep-det"><strong>3h 30m</strong> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                          <img className="" src="assets/img/etihad-airline-logo.png" />
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                          <div className="row p-3">
                            <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                              <img className="" src="assets/img/seprator-line.png" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                              <div className="dep-det"><strong>Return:</strong> 04:00 - Wed, 09-03</div>
                              <div className="sub-txt">ISB Islamabad Int - Sydney Airport</div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>1 Stop</strong> </div>
                              <div className="sub-txt">KHI</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                              <div className="dep-det"><strong>3h 30m</strong> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                        <div className="total-fare text-center"><span className="curency-sign">AED</span>320</div>
                        <Link to="/selected-flight"><button className="view-btn w-100" type="submit">Select This</button></Link>
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

export default FlightSearchResult;