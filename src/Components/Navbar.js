import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


let userEmail = "";
const Navbar = () => {



 const [showSidebar , setSidebar] = useState(false);
useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
   userEmail = user.userEmail;
  }


}, []);


 const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
 window.addEventListener('scroll', changeNavbarColor);



 const showSideBarFunction = () => {
 if(showSidebar == false)
 {
 setSidebar(true);
 }
 else{
 setSidebar(false);
 }
 }

return (
<div id="page-wrap">

  <nav className={colorChange ? 'navbar navbar-expand-lg navbar-light fixed-top navbar1 colorChange' : 'navbar navbar-expand-lg navbar-light fixed-top'} id="mainNav">

 <div className="container-fluid">
              <div className="row custom-width custom-nav">
                <div className="col-lg-5 col-4">
                  <div className="sidebar d-inline">
                  <div className="toggle d-inline">
                    <Link to="#" className="js-menu-toggle" data-toggle="collapse" data-target="#main-navbar" onClick={showSideBarFunction}>
                        <span className="nav-link pl-0 pr-0 pr-lg-3 d-none d-lg-block d-md-block"><i className="fa fa-bars pr-2"></i> Menu</span>
                        <span className="nav-link pl-0 pr-0 pr-lg-3 d-block d-lg-none d-md-none"><i className="fa fa-bars pr-2"></i> </span>
                    </Link>
                  </div>
                </div>
 {showSidebar ?  <aside className="sidebar">
                    <div className="side-inner">
                      <div className="nav-menu">
                        <ul>
                          <li className="active d-inline d-lg-none menu-hover">
                            <a><Link to="/flight" className="nav-link ">Flight</Link></a>
                          </li>
                          <li className="d-inline d-lg-none menu-hover">
                            <a><Link to="/umrah" className="nav-link ">Umrah</Link></a>
                          </li>
                          <li className="menu-hover"><a><Link to="/hotel" className="nav-link ">Hotel</Link></a></li>
                          <li className="menu-hover"><a><Link to="/tour" className="nav-link ">Tour</Link></a></li>
                          <li><a><Link to="/visa" className="nav-link ">Visa</Link></a></li>
                          <li><a><Link to="/transport" className="nav-link ">Rent a Car</Link></a></li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  :
                  <span></span>

                  }
                <div className="top-menu d-lg-inline d-none">
                  <a><Link to="/flight"><span className="nav-link pl-2">Flight</span></Link></a>
                  <a><Link to="/umrah"><span className="nav-link pl-2">Umrah</span></Link></a>

                </div>
                </div>
                <div className="col-lg-2 col-4 mt-lg-1 main-logo-width text-center">
                  <a><Link to="/">

                      <img className="d-lg-block d-none" src="assets/img/main-logo.png" />
                      <img className="d-block d-lg-none" src="assets/img/main-logo-mobile.png" />
                    </Link>
                    </a>
                </div>
                <div className="col-lg-5 col-4 text-lg-right text-right">
                <Link to="/user-login">
                  <a className="nav-link user-icon pr-0 pr-lg-3"><i className="fa fa-user"></i> <span className="d-none d-lg-inline">Sign</span></a></Link>
                  <div className="custom-dropdown cus-down-arrow pr-0 d-lg-inline-block d-none">
                    <button className="dropbtn">English
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" /></button>
                    <div className="dropdown-content" >
                      <a href="#">Arabic</a>
                    </div>
                  </div>



                </div>
              </div>
            </div>

        </nav>


</div>
)
}

export default Navbar;