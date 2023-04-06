import React, {useState, useEffect, useContext} from "react";
import Navbar from "../Components/Navbar";
import "../Components/tripplanner.css";
import "../Components/styles.css";
import {Link, useNavigate} from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import "../Components/HomeCarousal.css";
import $ from "jquery";
import Date from "../Components/Date";
import {popularDestination} from "./ProductData/popularDestination";
import {TimePicker} from "antd";
import Axios, {default as axios} from "axios";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {DatePicker, Space} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import '../Components/tripplanner.css';
import Loader from "./Loader";
import "../Components/Flight.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


let margintop = {
    marginTop: "0px",
};
const datePicker = {
    width: "100%",
    height: "55px",
    borderRadius: "5px",
    border: "1px black gray"
}

const Flight = () => {
    const [value, setValue] = useState();
    const [noOfRows, setNoOfRows] = useState(1);
    const [deleteButton, setDeleteButton] = useState(false);
    const [searchBtn, setSearchBtn] = useState(true);
    const [showClass, setShowClass] = useState(false);
    const [departure, setDeparture] = useState([]);
    const [arrival, setArrival] = useState([]);
    const [departureAirport, setDepartureAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [msg, setMsg] = useState('');
    const [destination, setDestination] = useState('');
    const [origin, setOrigin] = useState('');
    const [incorrect, setIncorrect] = useState(false);
    const [depart_date, setDepart_date] = useState("");
    const [spinner, setSpinner] = useState(false)
    const [show, setShow] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0);
        setShow(false)
        document.title = "Flight | Tripplanner ";
    }, []);

    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);

    const adultMinus = () => {
        if (adult > 1) {
            setAdult(adult - 1);
        }
    };
    const adultPlus = () => {
        setAdult(adult + 1);
    };
    //    Child
    const childMinus = () => {
        if (child > 1) {
            setChild(child - 1);
        }
    };
    const childPlus = () => {
        setChild(child + 1);
    };

    const infantMinus = () => {
        if (infant > 1) {
            setInfant(infant - 1);
        }
    };
    const infantPlus = () => {
        setInfant(infant + 1);
    };


    const Increment = () => {
        setNoOfRows(noOfRows + 1);
        margintop = {
            marginTop: "25px",
        };

        if (noOfRows >= 1) {
            setDeleteButton(true);
            setSearchBtn(false);
            setShowClass(true);
        }
    };

    const Decrement = () => {
        if (noOfRows == 1) {
            setNoOfRows(noOfRows - 0);
            setSearchBtn(true);
            setDeleteButton(false);
            setShowClass(false);
        } else {
            setNoOfRows(noOfRows - 1);
        }
    };

    let navigate = useNavigate();
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    }
    const key = 'UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2'
    const searchedItems = {key, origin, destination, depart_date, adult, infant, child};
    const Submit = (e) => {
        e.preventDefault();

        // console.log(searchedItems);return false;
        setSpinner(true)
        axios.post('http://api.tripplannerpk.com/web/flight-search-result', searchedItems, axiosConfig)
            .then((response) => {
                console.log("response: ", response);
                // console.log(searchedItems)
                if (response.data.status === 'fail') {
                    console.log(response.data.message);
                    setMsg(response.data.message);
                    setIncorrect(true);
                    // alert(response.data.message);
                    setSpinner(false)
                    //console.log(searchedItems)
                    setShow(true)

                } else {
                    console.log("else block");
                    localStorage.setItem('searchedItems', JSON.stringify(searchedItems));
                    console.log(searchedItems);
                    navigate('/flight-search-result', {state: {searchedItems}});
                }
            })
            .catch((err) => {
                console.log("AXIOS ERROR:555555 ", err);
            })
    }
    const [data, setData] = useState([])
    useEffect(() => {


        const url = "https://api.tripplanner.ae/web/airports?key=UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
        Axios.post(url).then(function (result) {

            setDeparture(result.data.data);
            setArrival(result.data.data);
        });
    }, [])

    if (spinner === true) {
        return <Loader/>
    }
    return (
        <div>
            <Navbar/>

            <header className="masthead main-header flight-header mob-header">
                <div className="container d-flex h-100 align-items-center">
                    <div className="search-form w-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-7 mb-md-2 mb-sm-0 mb-0">
                                    <div className="custom-dropdown cus-down-arrow pr-0">
                                        <button className="dropbtn">
                                            Return<i className="fa fa-angle-down"></i>
                                        </button>
                                        <div className="dropdown-content">
                                            <a href="#">Any Way</a>
                                        </div>
                                    </div>
                                    <div className="custom-dropdown cus-down-arrow cus-down-arrow pr-0">
                                        <button className="dropbtn">
                                            Adult <i className="fa fa-angle-down"></i>
                                        </button>
                                        <div className="dropdown-content">
                                            <div className="passenger pt-3 pb-3 pl-2 pr-2">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="title-pax">Adult</div>
                                                        <div className="count-pax">
                                                            <div className="qty">
                                                                <span
                                                                    className="minus bg-dark adultMinus"
                                                                    onClick={adultMinus}
                                                                >
                                                                    -
                                                                </span>
                                                                <input
                                                                    type="number"
                                                                    className="count"
                                                                    id="adult"
                                                                    name="qty"
                                                                    value={adult}
                                                                />
                                                                <span
                                                                    className="plus bg-dark adultPlus"
                                                                    onClick={adultPlus}
                                                                >
                                                                    +
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3 mb-3">
                                                        <div className="title-pax">Child</div>
                                                        <div className="count-pax">
                                                            <div className="qty">
                                                                <span
                                                                    className="minus bg-dark childMinus"
                                                                    onClick={childMinus}
                                                                >
                                                                    -
                                                                </span>
                                                                <input
                                                                    type="number"
                                                                    className="count"
                                                                    id="child"
                                                                    name="qty"
                                                                    value={child}
                                                                />
                                                                <span
                                                                    className="plus bg-dark childPlus"
                                                                    onClick={childPlus}
                                                                >
                                                                    +
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="title-pax">Infant</div>
                                                        <div className="count-pax">
                                                            <div className="qty">
                                                                <span
                                                                    className="minus bg-dark infantMinus"
                                                                    onClick={infantMinus}
                                                                >
                                                                    -
                                                                </span>
                                                                <input
                                                                    type="number"
                                                                    className="count"
                                                                    id="infant"
                                                                    name="qty"
                                                                    value={infant}
                                                                />
                                                                <span
                                                                    className="plus bg-dark infantPlus"
                                                                    onClick={infantPlus}
                                                                >
                                                                    +
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-dropdown cus-down-arrow pr-0">
                                        <button className="dropbtn">
                                            Economy<i className="fa fa-angle-down"></i>
                                        </button>
                                        <div className="dropdown-content">
                                            <a href="#">Business</a>
                                        </div>
                                    </div>
                                    <div className="custom-dropdown cus-down-arrow pr-0">
                                        <button className="dropbtn multicities" onClick={Increment}>
                                            Multi Cities
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div
                                        className="g-3 needs-validation main-search scroll-height p-4 mt-2"
                                        novalidate
                                    >
                                        {[...Array(noOfRows)].map((elementInArray, index) => {
                                            return (
                                                <div className="row" style={margintop}>
                                                    {deleteButton && (
                                                        <div className="col-sm-12  text-right">
                                                            <span onClick={Decrement} className="text-orange">
                                                                {" "}
                                                                <i className="fa fa-close fa-close1"></i>
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div
                                                        className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4 onClickHide">
                                                        <label className="form-label pl-2">
                                                            Departure Airport
                                                        </label>
                                                        {/*<div className="dep-icon d-none d-lg-block"><img className=""*/}
                                                        {/*  src="assets/img/deperture-icon.png" />*/}
                                                        {/*</div>*/}
                                                        <Stack spacing={2}>

                                                            <Autocomplete
                                                                freeSolo
                                                                id="free-solo-2-demo"
                                                                disableClearable
                                                                onChange={(event, newValue) => {
                                                                    setOrigin(newValue);
                                                                }}

                                                                options={departure.map((option) => option.Code + ' - ' + option.Name + ' ' + ' ' + option.CountryName)}
                                                                renderInput={(params) => {
                                                                    console.log(params);
                                                                    return (
                                                                        <TextField
                                                                            {...params}
                                                                            label=" Going Airport..."
                                                                            InputProps={{
                                                                                ...params.InputProps,
                                                                                type: 'search',
                                                                                // required: value?.length === 0,
                                                                            }}
                                                                            // {...register("origin")}
                                                                            // required={value === 0}
                                                                            helperText={!origin ? <span
                                                                                style={{color: "red"}}>{show && "Origin field is required"}</span> : ""}

                                                                        />
                                                                    )
                                                                }}
                                                            />
                                                            {/* <small >{errors.origin?.message}</small> */}
                                                        </Stack>
                                                    </div>

                                                    <div
                                                        className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4 onClickHide">
                                                        <label className="form-label pl-2">
                                                            Arrival Airport
                                                        </label>
                                                        <div className="dep-icon d-none d-lg-block">
                                                            {" "}
                                                            {/*<img*/}
                                                            {/*  className=""*/}
                                                            {/*  src="assets/img/location-icon.png"*/}
                                                            {/*/>{" "}*/}
                                                        </div>
                                                        <Stack spacing={2}>

                                                            <Autocomplete
                                                                freeSolo
                                                                id="free-solo-2-demo"
                                                                disableClearable
                                                                onChange={(event, newValue) => {
                                                                    setDestination(newValue);
                                                                }}
                                                                options={arrival.map((option) => option.Code + ' - ' + option.Name + ' ' + ' ' + option.CountryName)}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        label=" Arrival Airport..."
                                                                        InputProps={{
                                                                            ...params.InputProps,
                                                                            type: 'search',
                                                                        }}
                                                                        helperText={!destination ? <span
                                                                            style={{color: "red"}}>{show && "Destination field is required"}</span> : ""}

                                                                    />
                                                                )}
                                                            />
                                                            {/* {destination === "" ? <span>jjjuuii</span> :  ""} */}
                                                        </Stack>
                                                    </div>

                                                    <div
                                                        className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4 onClickHide">
                                                        <label className="form-label pl-2">
                                                            Departure/Return Date
                                                        </label>
                                                        {/*<Date selectedDate={(e) => setValue(e)} />*/}
                                                        <TextField
                                                            id="date"
                                                            type="date"

                                                            defaultValue={depart_date}
                                                            onChange={(e) => setDepart_date(e.target.value)}
                                                            sx={{width: 260, backgroundColor: "white"}}
                                                            InputLabelProps={{
                                                                shrink: true
                                                            }}
                                                            helperText={depart_date === "" ? <span
                                                                style={{color: "red"}}>{show && "Depart date is required "}</span> : ""}
                                                        />
                                                        {/*{depart_date === "" ? <small style={{color:"red" ,height:'100%'}}>{show && "Depart date is required"}</small> : ""}*/}
                                                    </div>

                                                    {showClass && (
                                                        <div
                                                            className="col-xl-2 col-lg-2 col-12 pt-lg-0 pt-4 onClickHide">
                                                            <label className="form-label pl-2">Class</label>
                                                            <select className="form-control">
                                                                <option>Economy</option>
                                                                <option>Business</option>
                                                                <option>Premium</option>
                                                            </select>
                                                        </div>
                                                    )}

                                                    {searchBtn && (
                                                        <div
                                                            className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pb-0 onClickHide">
                                                            <Link to="/flight-search-result">
                                                                <button
                                                                    className="search-btn w-100"
                                                                    type="submit"
                                                                    onClick={Submit}
                                                                >
                                                                    SEARCH
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}

                                        {deleteButton && (
                                            <div className="col-sm-12 text-right">
                                                <span onClick={Increment} className=" text-orange mr-3">
                                                    {" "}
                                                    Add Another City
                                                </span>
                                                <Link to="/multi-flights">
                                                    {" "}
                                                    <button className="search-btn px-5" type="submit">
                                                        SEARCH
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <b/>

            {/*      <section className="flight-det pb-lg-5 pb-md-5 pb-sm-3 pb-3">*/}
            {/*          <h1 className="pb-5" style={{ marginLeft: "140px" }}>Most Popular Flight Destinations</h1>*/}
            {/*          <div className="container">*/}
            {/*              <div className="row">*/}
            {/*                  {popularDestination.map((trip, index) => (*/}

            {/*                      <div className="col-lg-4 col-md-4 col-12">*/}
            {/*                          <div className="image-box">*/}
            {/*                              <div className="name-desc hover-1 image-box rounded">*/}
            {/*                                  <img*/}
            {/*                                      className="w-100"*/}
            {/*                                      src={trip.image}*/}
            {/*                                      alt=""*/}
            {/*                                  />*/}
            {/*                                  <div className="hover-1-content p-2">*/}
            {/*                                      <div className="title text-left">{trip.country} - {trip.price} {trip.currency}</div>*/}
            {/*                                      <p className="hover-1-description mb-0">*/}
            {/*                                          <Link to="/country-page">*/}
            {/*                                              <strong>Click to Book</strong>{" "}*/}
            {/*                                              <i class="fa fa-angle-double-right"></i>{" "}*/}
            {/*                                          </Link>*/}
            {/*                                      </p>*/}
            {/*                                  </div>*/}
            {/*                              </div>*/}
            {/*                          </div>*/}
            {/*                      </div>*/}

            {/*                  ))*/}
            {/*                  }*/}
            {/*              </div>*/}
            {/*              /!* <div className="col-lg-4 col-md-4 col-12">*/}
            {/*    <div className="image-box">*/}
            {/*      <div className="name-desc hover-1 image-box rounded">*/}
            {/*        <div className="flight-deti-img for-width-size1 text-center">*/}
            {/*          {" "}*/}
            {/*          <img*/}
            {/*            class="w-100"*/}
            {/*            src="../../assets/img/india-pop-flig.png"*/}
            {/*          />*/}
            {/*        </div>*/}
            {/*        <div className="hover-1-content p-2">*/}
            {/*          <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            India - 254 SAR*/}
            {/*          </div>*/}
            {/*          <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            <Link to="/country-page">*/}
            {/*              <strong>Click to Book</strong>{" "}*/}
            {/*              <i class="fa fa-angle-double-right"></i>{" "}*/}
            {/*            </Link>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div> *!/*/}
            {/*              <div className="book-flight pt-0">*/}
            {/*                  <h2 className="mt-5 mb-3 pb-5 pt-3">*/}
            {/*                      Book Flights Around the World*/}
            {/*                  </h2>*/}
            {/*                  <div className="row mb-5">*/}
            {/*                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">*/}
            {/*                          <div className="map-africa text-center">*/}
            {/*                              <img*/}
            {/*                                  className="mt-5 mb-3"*/}
            {/*                                  src="../../assets/img/map-pin.png"*/}
            {/*                              />*/}
            {/*                              <div class="country-name">Africa</div>*/}
            {/*                              <div class="custom-dropdown cus-down-arrow">*/}
            {/*                                  <button className="map-btn1 dropbtn1 btn search-btn1 ">*/}
            {/*                                      View All*/}
            {/*                                  </button>*/}
            {/*                                  <div className="dropdown-menu text-center flight-dropdown-content dropdown-content ">*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Harare Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Johannesburg Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Accra Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Lagos Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link*/}
            {/*                                          to="/country-page"*/}
            {/*                                          className="no-border dropdown-text"*/}
            {/*                                      >*/}
            {/*                                          Nairobi Flights*/}
            {/*                                      </Link>*/}
            {/*                                  </div>*/}
            {/*                              </div>*/}
            {/*                          </div>*/}
            {/*                      </div>*/}
            {/*                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">*/}
            {/*                          <div className="map-south-america text-center">*/}
            {/*                              <img*/}
            {/*                                  className="mt-5 mb-3"*/}
            {/*                                  src="../../assets/img/map-pin.png"*/}
            {/*                              />*/}
            {/*                              <div className="country-name">South America</div>*/}
            {/*                              <div className="custom-dropdown cus-down-arrow">*/}
            {/*                                  <button className=" map-btn1 dropbtn1 btn search-btn1">*/}
            {/*                                      View All*/}
            {/*                                  </button>*/}
            {/*                                  <div className="dropdown-menu flight-dropdown-content dropdown-content mt">*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Rio De Janeiro Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Sao Paulo Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Buenos Aires Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Lima Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link*/}
            {/*                                          to="/country-page"*/}
            {/*                                          className="dropdown-text"*/}
            {/*                                          class="no-border"*/}
            {/*                                      >*/}
            {/*                                          Santiago Flights*/}
            {/*                                      </Link>*/}
            {/*                                  </div>*/}
            {/*                              </div>*/}
            {/*                          </div>*/}
            {/*                      </div>*/}
            {/*                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">*/}
            {/*                          <div className="map-oceania text-center">*/}
            {/*                              <img*/}
            {/*                                  className="mt-5 mb-3"*/}
            {/*                                  src="../../assets/img/map-pin.png"*/}
            {/*                              />*/}
            {/*                              <div className="country-name">Oceania</div>*/}
            {/*                              <div className="custom-dropdown cus-down-arrow">*/}
            {/*                                  <button className=" map-btn1 dropbtn1 btn search-btn1">*/}
            {/*                                      View All*/}
            {/*                                  </button>*/}
            {/*                                  <div className="dropdown-menu flight-dropdown-content dropdown-content ">*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Brisbane Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Perth Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Sydney Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Auckland Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link*/}
            {/*                                          to="/country-page"*/}
            {/*                                          className="dropdown-text"*/}
            {/*                                          class="no-border"*/}
            {/*                                      >*/}
            {/*                                          Melbourne Flights*/}
            {/*                                      </Link>*/}
            {/*                                  </div>*/}
            {/*                              </div>*/}
            {/*                          </div>*/}
            {/*                      </div>*/}
            {/*                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">*/}
            {/*                          <div className="map-europe text-center">*/}
            {/*                              <img*/}
            {/*                                  className="mt-5 mb-3"*/}
            {/*                                  src="../../assets/img/map-pin.png"*/}
            {/*                              />*/}
            {/*                              <div className="country-name">Europe</div>*/}
            {/*                              <div className="custom-dropdown cus-down-arrow">*/}
            {/*                                  <button className="map-btn1 dropbtn1 btn search-btn1">*/}
            {/*                                      View All*/}
            {/*                                  </button>*/}
            {/*                                  <div className="dropdown-menu flight-dropdown-content dropdown-content ">*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Amsterdam Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Paris Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Athens Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" className="dropdown-text">*/}
            {/*                                          Madrid Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link*/}
            {/*                                          to="/country-page"*/}
            {/*                                          className="dropdown-text"*/}
            {/*                                          class="no-border"*/}
            {/*                                          href="#"*/}
            {/*                                      >*/}
            {/*                                          Frankfurt Flights*/}
            {/*                                      </Link>*/}
            {/*                                  </div>*/}
            {/*                              </div>*/}
            {/*                          </div>*/}
            {/*                      </div>*/}
            {/*                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 min-height">*/}
            {/*                          <div className="map-north-america text-center">*/}
            {/*                              <img*/}
            {/*                                  className="mt-5 mb-3"*/}
            {/*                                  src="../../assets/img/map-pin.png"*/}
            {/*                              />*/}
            {/*                              <div className="country-name">North America</div>*/}
            {/*                              <div class="custom-dropdown cus-down-arrow">*/}
            {/*                                  <button class=" map-btn1 dropbtn1 btn search-btn1">*/}
            {/*                                      View All*/}
            {/*                                  </button>*/}
            {/*                                  <div class="dropdown-menu flight-dropdown-content dropdown-content ">*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          Montreal Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          Las Vegas Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          Chicago Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          Calgary Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="no-border dropdown-text">*/}
            {/*                                          Orlando Flights*/}
            {/*                                      </Link>*/}
            {/*                                  </div>*/}
            {/*                              </div>*/}
            {/*                          </div>*/}
            {/*                      </div>*/}
            {/*                      <div class="col-lg-4 col-md-4 col-sm-6 col-6 min-height">*/}
            {/*                          <div class="map-asia text-center">*/}
            {/*                              <img class="mt-5 mb-3" src="../../assets/img/map-pin.png" />*/}
            {/*                              <div class="country-name">Asia</div>*/}
            {/*                              <div class="custom-dropdown cus-down-arrow">*/}
            {/*                                  <button class=" map-btn1 dropbtn1 btn search-btn1">*/}
            {/*                                      View All*/}
            {/*                                  </button>*/}
            {/*                                  <div class="dropdown-menu flight-dropdown-content dropdown-content ">*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          Manila Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          DubaiFlights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          Islamabad Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="dropdown-text">*/}
            {/*                                          Kuala Lumpur Flights*/}
            {/*                                      </Link>*/}
            {/*                                      <Link to="/country-page" class="no-border dropdown-text">*/}
            {/*                                          Beijing Flights*/}
            {/*                                      </Link>*/}
            {/*                                  </div>*/}
            {/*                              </div>*/}
            {/*                          </div>*/}
            {/*                      </div>*/}
            {/*                  </div>*/}
            {/*              </div>*/}
            {/*              <CompaniesLogo />*/}
            {/*          </div>*/}
            {/*          /!* <div className="row">*/}
            {/*  <div className="col-lg-4 col-md-4 col-12">*/}
            {/*    <div className="image-box">*/}
            {/*      <div className="name-desc hover-1 image-box rounded">*/}
            {/*        <div className="flight-deti-img for-width-size1 text-center">*/}
            {/*          {" "}*/}
            {/*          <img*/}
            {/*            class="w-100"*/}
            {/*            src="../../assets/img/china-pop-flig.png"*/}
            {/*          />*/}
            {/*        </div>*/}
            {/*        <div className="hover-1-content p-2">*/}
            {/*          <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            China - 254 SAR*/}
            {/*          </div>*/}
            {/*          <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            <Link to="/country-page">*/}
            {/*              <strong>Click to Book</strong>{" "}*/}
            {/*              <i class="fa fa-angle-double-right"></i>{" "}*/}
            {/*            </Link>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-4 col-md-4 col-12">*/}
            {/*    <div className="image-box">*/}
            {/*      <div className="name-desc hover-1 image-box rounded">*/}
            {/*        <div className="flight-deti-img for-width-size1 text-center">*/}
            {/*          {" "}*/}
            {/*          <img*/}
            {/*            class="w-100"*/}
            {/*            src="../../assets/img/itlay-pop-flig.png"*/}
            {/*          />*/}
            {/*        </div>*/}
            {/*        <div className="hover-1-content p-2">*/}
            {/*          <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            Itlay - 254 SAR*/}
            {/*          </div>*/}
            {/*          <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            <Link to="/country-page">*/}
            {/*              <strong>Click to Book</strong>{" "}*/}
            {/*              <i class="fa fa-angle-double-right"></i>{" "}*/}
            {/*            </Link>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-4 col-md-4 col-12">*/}
            {/*    <div className="image-box">*/}
            {/*      <div className="name-desc hover-1 image-box rounded">*/}
            {/*        <div className="flight-deti-img for-width-size1 text-center">*/}
            {/*          {" "}*/}
            {/*          <img*/}
            {/*            class="w-100"*/}
            {/*            src="../../assets/img/islamabad-pop-flig.png"*/}
            {/*          />*/}
            {/*        </div>*/}
            {/*        <div className="hover-1-content p-2">*/}
            {/*          <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            Pakistan - 254 SAR*/}
            {/*          </div>*/}
            {/*          <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            <Link to="/country-page">*/}
            {/*              <strong>Click to Book</strong>{" "}*/}
            {/*              <i class="fa fa-angle-double-right"></i>{" "}*/}
            {/*            </Link>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div> *!/*/}
            {/*          /!* <div className="row">*/}
            {/*  <div className="col-lg-8 col-md-8 col-12">*/}
            {/*    <div className="image-box">*/}
            {/*      <div className="name-desc hover-1 image-box rounded">*/}
            {/*        <div className="flight-deti-img for-width-size1 text-center">*/}
            {/*          {" "}*/}
            {/*          <img*/}
            {/*            class="w-100"*/}
            {/*            src="../../assets/img/united-state-pop-flig.png"*/}
            {/*          />*/}
            {/*        </div>*/}
            {/*        <div className="hover-1-content p-2">*/}
            {/*          <div className="title text-left flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0 mob-margin-top">*/}
            {/*            United State Of America - 254 SAR*/}
            {/*          </div>*/}
            {/*          <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            <Link to="/country-page">*/}
            {/*              <strong>Click to Book</strong>{" "}*/}
            {/*              <i class="fa fa-angle-double-right"></i>{" "}*/}
            {/*            </Link>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-4 col-md-4 col-12">*/}
            {/*    <div className="image-box mob-margin-top1 ">*/}
            {/*      <div className="name-desc hover-1 image-box rounded">*/}
            {/*        <div className="flight-deti-img for-width-size1 text-center ">*/}
            {/*          {" "}*/}
            {/*          <img*/}
            {/*            class="w-100"*/}
            {/*            src="../../assets/img/thailand-pop-flig.png"*/}
            {/*          />*/}
            {/*        </div>*/}
            {/*        <div className="hover-1-content p-2">*/}
            {/*          <div className="title text-left  flight-sub-title mt-1 ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            Thailand - 254 SAR*/}
            {/*          </div>*/}
            {/*          <p className="hover-1-description mb-0 sub-txt flight-sub-title ml-lg-1 ml-md-1 ml-5 pl-lg-0 pl-md-0 pl-sm-5 pl-0">*/}
            {/*            <Link to="/country-page">*/}
            {/*              <strong>Click to Book</strong>{" "}*/}
            {/*              <i class="fa fa-angle-double-right"></i>{" "}*/}
            {/*            </Link>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div> *!/*/}


            {/*      </section>*/}
            <section className="flight-det pb-lg-5 pb-md-5 pb-sm-3 pb-3">
                <div className="container">

                    <div className="top-booking-flight">
                        <h2 className="flight-booking-heading">Top Booking Flights</h2>
                        <div className="col-lg-9 col-md-9">
                            <div className="right-bar p-2">
                                <div className="row m-0">
                                    <div className="col-lg-10 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/gulf-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="border-small-scr">
                                                    <div className="row p-3">
                                                        <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                            <img className="" src="assets/img/seprator-line.png"/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                            <div className="dep-det"><strong>Depart:</strong> 04:00 -
                                                                Wed, 09-03
                                                            </div>
                                                            <div className="sub-txt">ISB Islamabad Int - Sydney
                                                                Airport
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>direct</strong></div>
                                                        </div>
                                                        <div
                                                            className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>3h 30m</strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/etihad-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="row p-3">
                                                    <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                        <img className="" src="assets/img/seprator-line.png"/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                        <div className="dep-det"><strong>Return:</strong> 04:00 - Wed,
                                                            09-03
                                                        </div>
                                                        <div className="sub-txt">ISB Islamabad Int - Sydney Airport
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>1 Stop</strong></div>
                                                        <div className="sub-txt">KHI</div>
                                                    </div>
                                                    <div
                                                        className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>3h 30m</strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12">
                                        <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                                            <div className="total-fare text-center"><span
                                                className="curency-sign">AED</span>320
                                            </div>
                                            <Link to="/selected-flight">
                                                <button className="view-btn w-100" type="submit">Select This</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-bar p-2 mt-4">
                                <div className="row m-0">
                                    <div className="col-lg-10 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/gulf-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="border-small-scr">
                                                    <div className="row p-3">
                                                        <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                            <img className="" src="assets/img/seprator-line.png"/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                            <div className="dep-det"><strong>Depart:</strong> 04:00 -
                                                                Wed, 09-03
                                                            </div>
                                                            <div className="sub-txt">ISB Islamabad Int - Sydney
                                                                Airport
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>direct</strong></div>
                                                        </div>
                                                        <div
                                                            className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>3h 30m</strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/etihad-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="row p-3">
                                                    <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                        <img className="" src="assets/img/seprator-line.png"/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                        <div className="dep-det"><strong>Return:</strong> 04:00 - Wed,
                                                            09-03
                                                        </div>
                                                        <div className="sub-txt">ISB Islamabad Int - Sydney Airport
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>1 Stop</strong></div>
                                                        <div className="sub-txt">KHI</div>
                                                    </div>
                                                    <div
                                                        className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>3h 30m</strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12">
                                        <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                                            <div className="total-fare text-center"><span
                                                className="curency-sign">AED</span>320
                                            </div>
                                            <Link to="/selected-flight">
                                                <button className="view-btn w-100" type="submit">Select This</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-bar p-2 mt-4">
                                <div className="row m-0">
                                    <div className="col-lg-10 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/gulf-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="border-small-scr">
                                                    <div className="row p-3">
                                                        <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                            <img className="" src="assets/img/seprator-line.png"/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                            <div className="dep-det"><strong>Depart:</strong> 04:00 -
                                                                Wed, 09-03
                                                            </div>
                                                            <div className="sub-txt">ISB Islamabad Int - Sydney
                                                                Airport
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>direct</strong></div>
                                                        </div>
                                                        <div
                                                            className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>3h 30m</strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/etihad-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="row p-3">
                                                    <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                        <img className="" src="assets/img/seprator-line.png"/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                        <div className="dep-det"><strong>Return:</strong> 04:00 - Wed,
                                                            09-03
                                                        </div>
                                                        <div className="sub-txt">ISB Islamabad Int - Sydney Airport
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>1 Stop</strong></div>
                                                        <div className="sub-txt">KHI</div>
                                                    </div>
                                                    <div
                                                        className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>3h 30m</strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12">
                                        <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                                            <div className="total-fare text-center"><span
                                                className="curency-sign">AED</span>320
                                            </div>
                                            <Link to="/selected-flight">
                                                <button className="view-btn w-100" type="submit">Select This</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-bar p-2 mt-4">
                                <div className="row m-0">
                                    <div className="col-lg-10 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/gulf-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="border-small-scr">
                                                    <div className="row p-3">
                                                        <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                            <img className="" src="assets/img/seprator-line.png"/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                            <div className="dep-det"><strong>Depart:</strong> 04:00 -
                                                                Wed, 09-03
                                                            </div>
                                                            <div className="sub-txt">ISB Islamabad Int - Sydney
                                                                Airport
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>direct</strong></div>
                                                        </div>
                                                        <div
                                                            className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>3h 30m</strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/etihad-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="row p-3">
                                                    <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                        <img className="" src="assets/img/seprator-line.png"/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                        <div className="dep-det"><strong>Return:</strong> 04:00 - Wed,
                                                            09-03
                                                        </div>
                                                        <div className="sub-txt">ISB Islamabad Int - Sydney Airport
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>1 Stop</strong></div>
                                                        <div className="sub-txt">KHI</div>
                                                    </div>
                                                    <div
                                                        className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>3h 30m</strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12">
                                        <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                                            <div className="total-fare text-center"><span
                                                className="curency-sign">AED</span>320
                                            </div>
                                            <Link to="/selected-flight">
                                                <button className="view-btn w-100" type="submit">Select This</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-bar p-2 mt-4">
                                <div className="row m-0">
                                    <div className="col-lg-10 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/gulf-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="border-small-scr">
                                                    <div className="row p-3">
                                                        <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                            <img className="" src="assets/img/seprator-line.png"/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                            <div className="dep-det"><strong>Depart:</strong> 04:00 -
                                                                Wed, 09-03
                                                            </div>
                                                            <div className="sub-txt">ISB Islamabad Int - Sydney
                                                                Airport
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>direct</strong></div>
                                                        </div>
                                                        <div
                                                            className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                                            <div className="dep-det"><strong>3h 30m</strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                                                <img className="" src="assets/img/etihad-airline-logo.png"/>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-12">
                                                <div className="row p-3">
                                                    <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                        <img className="" src="assets/img/seprator-line.png"/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                        <div className="dep-det"><strong>Return:</strong> 04:00 - Wed,
                                                            09-03
                                                        </div>
                                                        <div className="sub-txt">ISB Islamabad Int - Sydney Airport
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-2 col-md-3 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>1 Stop</strong></div>
                                                        <div className="sub-txt">KHI</div>
                                                    </div>
                                                    <div
                                                        className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                        <div className="dep-det"><strong>3h 30m</strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12">
                                        <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                                            <div className="total-fare text-center"><span
                                                className="curency-sign">AED</span>320
                                            </div>
                                            <Link to="/selected-flight">
                                                <button className="view-btn w-100" type="submit">Select This</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="flight-det hotel-page visa-detail">
                    <div className="container">
                        <h1 className="pb-5 text-center flight-booking-heading">Top Domestic Airlines</h1>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h1 className="pb-5 text-center flight-booking-heading">Top International Airlines</h1>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                                <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                            </div><div className="col-lg-3 col-md-4 col-12">
                            <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                            <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                            <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                            <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                        </div><div className="col-lg-3 col-md-4 col-12">
                            <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                            <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                            <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                            <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                        </div><div className="col-lg-3 col-md-4 col-12">
                            <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                            <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                            <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                            <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                        </div><div className="col-lg-3 col-md-4 col-12">
                            <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                            <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                            <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                            <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                        </div><div className="col-lg-3 col-md-4 col-12">
                            <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                            <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                            <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                            <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                        </div><div className="col-lg-3 col-md-4 col-12">
                            <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                            <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                            <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                            <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                        </div><div className="col-lg-3 col-md-4 col-12">
                            <div className=""> <img className="w-100" src="../../assets/img/visa-img-1.png" /></div>
                            <div className="title mt-1 ml-1">New York  -  254 SAR</div>
                            <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                            <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>
                        </div>
                        </div>
                        <div>
                            <Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>With triplanner.pk.com you can fly with Ease and Convenience!

                                        We are introducing our  e-ticketing service, which is the quickest and easiest method to book flights. Bid farewell to long lines and airport wait periods. You can schedule a flight using triplanner.pk.com from the convenience of your home or workplace at any time of day.


                                        You can quickly select your chosen flight, pick your seat, and securely purchase your flight ticket with just a few clicks. Your E-ticket will be emailed to you immediately, so you won't have to worry about paper tickets or losing them. Moreover, triplanner.pk.com offers multiple discounts on your flight tickets because we think that travel should be accessible to everyone.By using our site to find cheap flights, you can cut your travel costs.

                                        Additionally, our E-ticketing service makes it simple to make changes to your reservation, allowing you to easily alter your travel arrangements. Additionally, our helpful customer service team is always accessible to help if you have any questions or concerns.


                                        Our goal is to make your trip hassle-free. When you choose us, you put all of your travel-related concerns in our capable hands.Your time and money are both saved by us. Opt for triplanner.pk to travel without any worries.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card><Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Card><Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Card><Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Card><Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Card><Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Card><Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Card><Card style={{ width: '100%', maxWidth: '80rem', margin: "10px" }}>
                                <Card.Header>Cheap Flights in triplanner.pk.com</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </div>

                </section>



                <CompaniesLogo/>
            </section>


            <Footer/>
        </div>
    );
};

export default Flight;