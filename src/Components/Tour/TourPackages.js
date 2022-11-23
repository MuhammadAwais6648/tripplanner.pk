import React, {useEffect} from "react";
import BlackNavbar from "../../Components/BlackNavbar";
import { Link } from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";

const TourPackages = () =>{

useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Tour Packages | Tripplanner ";
}, [])

return(
<div>

<BlackNavbar />



        <section className="flight-det tour-package mt-5">
          <div className="container">

            <h1 className="">Inbound/Outbound Tour Packages</h1>



            <div className="col-lg-12">
                <ul className="nav nav-tabs inbound-outbound-nav-tabs mt-3 mb-4 no-border">
                    <li className="active mr-3"><a className="select-pack mt-4" data-toggle="tab" href="#home"><button>Inbound</button></a></li>
                    <li><a className="select-pack mt-4" data-toggle="tab" href="#menu1"><button>Outbound</button></a></li>
                </ul>
                <div className="tab-content">
                    <div id="home" className="tab-pane active">
                      <div className="sub-title mt-5">Domestic Tours</div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                             <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                             <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                             <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                             <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <div className="sub-title mt-5">International Tours</div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-1.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">Dubai Fully Loaded - Bogo (Deira Area)</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                              <div className="name-desc hover-1 image-box rounded">
                                <img className="w-100" src="assets/img/international-tour-packages-img-2.png" alt="" />
                                <div className="hover-1-content p-2">
                                  <div className="title text-left">CAMPING ADVENTURES IN AL ULA</div>
                                  <div className="">4 Nights 5 Days</div>
                                  <p className="hover-1-description mb-0"><Link to="/tour-detail"><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>


            </div>

          </div>
        </section>


<CompaniesLogo />

<div className="mt-5">
<Footer />
</div>

</div>
)
}

export default TourPackages;