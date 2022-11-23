import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props

     <aside className="sidebar">
                  <div className="side-inner">
                    <div className="nav-menu">
                      <ul className="ul">
                        <li className="active d-inline d-lg-none">
                          <li  >Flight</li>
                        </li>
                        <li className="d-inline d-lg-none">
                          <a href="umrah.html">Umrah</a>
                        </li>
                        <li><a href="hotel.html">Hotel</a></li>
                        <li><a href="tour.html">Tour</a></li>
                        <li><a href="visa.html">Visa</a></li>
                        <li><a href="transport.html">Rent A Car</a></li>
                      </ul>
                    </div>
                  </div>
                </aside>
  );
};
