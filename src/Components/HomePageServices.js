import React from "react";
import { Link } from "react-router-dom";


const HomePageServices = () => {
  return (
    <div>

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" best-services heig-width-small-sc">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="pb-5 text-capitalize">We Are Best In Services</h3>
                    </div>

                    <div className="col-lg-12 mb-3 mb-lg-4">
                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100 h-75" src="assets/img/best-services.png" alt="" />
                          <div className="hover-1-content p-2">
                            <div className="title text-left">Hotel</div>
                            <div className="">Your booking instantly confirmed!</div>
                            <p className="hover-1-description mb-0"><Link to="/hotel"><strong>Discover & Explore</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3 mb-lg-4">
                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100" src="assets/img/tourisum.png" alt="" />
                          <div className="hover-1-content p-2">
                            <div className="title text-left">TOURISUM</div>
                            <div className="">Book your dream tour package</div>
                            <p className="hover-1-description mb-0"><Link to="/tour"><strong>Discover & Explore</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3 mb-lg-4">
                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100" src="assets/img/hajj.png" alt="" />
                          <div className="hover-1-content p-2">
                            <div className="title text-left">Hajj / Umrah</div>
                            <div className="">We offers umrah packages with premium services</div>
                            <p className="hover-1-description mb-0"><Link to="/umrah"><strong>Discover & Explore</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100" src="assets/img/transport.png" alt="" />
                          <div className="hover-1-content p-2">
                            <div className="title text-left">Transport</div>
                            <div className="">Book online car rental with driver as tour package</div>
                            <p className="hover-1-description mb-0"><Link to="/transport"><strong>Discover & Explore</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="image-box">
                        <div className="name-desc hover-1 image-box rounded">
                          <img className="w-100" src="assets/img/visa.png" alt="" />
                          <div className="hover-1-content p-2">
                            <div className="title text-left">Visa</div>
                            <div className="">Please access Visa Online</div>
                            <p className="hover-1-description mb-0"><Link to="/visa"><strong>Discover & Explore</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
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
      </section>
    </div>
  )
}


export default HomePageServices;