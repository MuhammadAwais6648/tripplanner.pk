import {React, useState} from "react";
import Navbar from "../../Components/Navbar";
import Date from "../../Components/Date";
import { Link } from "react-router-dom";


const DealsHeader = () =>{

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


 <header className="masthead main-header tour-header mob-header-visa">
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
                        <span className="minus bg-dark" onClick={adultMinus}>-</span>
                        <input type="number" className="count" name="qty" value={adult} />
                        <span className="plus bg-dark" onClick={adultPlus}>+</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3 mb-3">
                  <div className="title-pax">Child</div>
                  <div className="count-pax">
                    <div className="qty">
                        <span className="minus bg-dark" onClick={childMinus}>-</span>
                        <input type="number" className="count" name="qty" value={child} />
                        <span className="plus bg-dark" onClick={childPlus}>+</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="title-pax">Infant</div>
                  <div className="count-pax">
                    <div className="qty">
                        <span className="minus bg-dark" onClick={infantMinus}>-</span>
                        <input type="number" className="count" name="qty" value={infant} />
                        <span className="plus bg-dark" onClick={infantPlus}>+</span>
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
      </div>
    </div>
    <div className="row mb-3">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
             <div className="col-xl-2 col-lg-2 col-md-6 col-12 pt-lg-0 pt-4">
                <label className="form-label pl-3">Destination</label>
                <input type="text" className="form-control" placeholder =" New York " required />
              </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-12 pt-lg-0 pt-4">
                  <label className="form-label pl-3">Check In / Check Out</label>
                  <Date />
                </div>
               <div className="col-xl-2 col-lg-2 col-md-4 col-12 pt-lg-0 pt-4">
                  <label className="form-label pl-3">No of Room</label>
                  <select className="form-control option">
                    <option className="option">1 Room</option>
                    <option className="option">2 Room</option>
                    <option className="option">3 Room</option>
                  </select>
                </div>
               <div className="col-xl-3 col-lg-3 col-md-4 col-12 pt-lg-0 pt-4">
                  <label className="form-label pl-3">No of Travlers</label>
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
                                                                <span className="minus bg-dark" onClick={adultMinus}>-</span>
                                                                <input type="number" className="count" name="adult" value={adult} />
                                                                <span className="plus bg-dark" onClick={adultPlus}>+</span>
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
                                                                <span className="minus bg-dark" onClick={childMinus}>-</span>
                                                                <input type="number" className="count" name="child" value={child} />
                                                                <span className="plus bg-dark" onClick={childPlus}>+</span>
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
                                                                <span className="minus bg-dark" onClick={infantMinus}>-</span>
                                                                <input type="number" className="count" name="infant" value={infant} />
                                                                <span className="plus bg-dark" onClick={infantPlus}>+</span>
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
                 <div className="col-xl-2 col-lg-2 col-md-4 col-12 pb-lg-0">
                    <Link to="/flight-search-result"><button className="search-btn btn-primary w-100" type="submit">SEARCH</button></Link>
                  </div>
              </div>
          </div>
          </div>
       </div>
    </div>



    </div>
        </header>
</div>
)
}


export default DealsHeader;