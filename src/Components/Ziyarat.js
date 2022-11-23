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

const Ziyarat = () => {

useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Ziyarat | Tripplanner ";
}, []);

return(
<div>
<BlackNavbar />


 <section className="flight-det ziyarat mt-5">
          <div className="container">
            <h2 className="">Ziyarat In Madina</h2>
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-1.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">ARCHERS MOUNTAIN UHUD</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
               </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-2.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID GHAMAMA</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                          <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-3.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">BATTLE OF THE TRENCH SITE</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-4.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID IJABAH</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                       <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-5.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">BIR ALI (DHUL HULAIFA)</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                         <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-6.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID JUMUAH</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                          <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-7.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">CASTLE OF URWAH BIN ZUBAIR</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                       <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-8.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID MASTURAH</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><a href="ziaraat-detail.html"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-9.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">CAVE OF UHUD</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><a href="ziaraat-detail.html"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-10.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID MISBAH</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><a href="ziaraat-detail.html"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <h3 className="mt-5 pt-4">Ziyarat In Makkah</h3>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-11.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">GRAVE OF SAYYIDAH MAYMUNA (RA)</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><a href="ziaraat-detail.html"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-12.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID JINN</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><a href="ziaraat-detail.html"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-13.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">JABAL NUR</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><a href="ziaraat-detail.html"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-14.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID JU'RANAH</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                        <p className="hover-1-description mb-0"><a href="ziaraat-detail.html"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-15.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">JABAL RAHMA, ARAFAAT</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                          <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-16.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID NIMRA</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                 <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-17.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">JABAL THAWR</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                         <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-18.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID OF HUDAIBIYAH</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
         <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-19.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">JAMARAT PILLARS</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                  <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
                    <div className="name-desc hover-1 image-box rounded">
                      <img className="w-100" src="assets/img/Ziaraat-20.png" alt="" />
                      <div className="hover-1-content p-2">
                        <div className="title text-left">MASJID TANEEM</div>
                        <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                interdum dictum purus, at hendrerit metus dictum sed. Maecenas
                                non sapien eget tellus venenatis viverra vitae id felis.
                               Aenean eu dictum neque.</div>
                  <p className="hover-1-description mb-0"><Link to="/ziaraat-detail"><strong>View Details</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
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

export default Ziyarat;