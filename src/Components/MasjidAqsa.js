import React , {useState , useEffect} from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import BlackNavbar from "../Components/BlackNavbar";

const MasjidAqsa = () => {

useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Masjid Aqsa | Tripplanner ";
}, []);

return(
<div>
<BlackNavbar />


 <section className="flight-det ziyarat masjid-aqsa mt-5">
          <div className="container">
            <h2 className="">Ziyarat Of AL-AQSA</h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-1.png" /></div>
                <div className="title mt-1 ml-1">THE QIBLY MOSQUE (MASJID AL-AQSA)</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="mt-5 w-100" src="assets/img/masjid-aqsa-2.png" /></div>
                <div className="title mt-1 ml-1">MIHRAB AND MIMBAR OF MASJID AL-AQSA</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-3.png" /></div>
                <div className="title mt-1 ml-1">MIHRAB-E-ZAKARIYYA</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-4.png" /></div>
                <div className="title mt-1 ml-1">BASEMENT OF MASJID AL-AQSA</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-5.png" /></div>
                <div className="title mt-1 ml-1">MARWAN-E-MASJID</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-6.png" /></div>
                <div className="title mt-1 ml-1">MASJID AL-BURAQ</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-7.png" /></div>
                <div className="title mt-1 ml-1">BURAQ WALL (WESTERN/WAILING WALL)</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-8.png" /></div>
                <div className="title mt-1 ml-1">THE DOME OF THE ROCK</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-9.png" /></div>
                <div className="title mt-1 ml-1">INTERIOR OF THE DOME OF THE ROCK</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-10.png" /></div>
                <div className="title mt-1 ml-1">UNDERNEATH THE DOME OF THE ROCK</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-11.png" /></div>
                <div className="title mt-1 ml-1">DOME OF THE CHAIN</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-12.png" /></div>
                <div className="title mt-1 ml-1">SPOT WHERE PROPHET SULAIMAN DIED</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-13.png" /></div>
                <div className="title mt-1 ml-1">MOROCCAN GATE (BAB AL-MAGHARIB)</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-14.png" /></div>
                <div className="title mt-1 ml-1">COTTON MERCHANTS GATE (BAB AL-QATTANIN)</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-15.png" /></div>
                <div className="title mt-1 ml-1">MADRASA AL-UTHMANIYAH</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-16.png" /></div>
                <div className="title mt-1 ml-1">MADRESSA AL-ISARDIYYAH</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className=""> <img className="w-100 mt-5" src="assets/img/masjid-aqsa-17.png" /></div>
                <div className="title mt-1 ml-1">MADRASA AL-ASHRAFIYYA</div>
                <div className="sub-txt ml-1 pr-lg-0 pr-md-4 pr-4 mr-lg-0 mr-md-0 mr-0 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                    non sapien eget tellus venenatis viverra vitae id felis.
                    Aenean eu dictum neque.</div>
              </div>
          </div>
          <div className="row">
            <div className="col-12">
               <div className="masjid-aqsa-map text-center">
                  <img className="mt-5" src="assets/img/map-masjid-aqsa.png" />
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

export default MasjidAqsa;