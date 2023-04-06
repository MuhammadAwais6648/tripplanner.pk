import {React , useState} from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CheapestFlights = (props) =>{
return (
<div>


         <div className="container">
             <h1 className="pb-4 mb-4">{props.heading}</h1>

              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >


              <div>
                 <Link to="/city-page">
 <div class="work ml-2 mr-2">
                  <div class="image-box">
                    <div class="name-desc hover-1 image-box rounded">
                      <div class="img align-items-center justify-content-center rounded">
                    <img class="w-100" src="assets/img/view-all-deal-img-1.png" />
                    <a href="#" class="icon d-flex align-items-center justify-content-center">
                      <span class="ion-ios-search"></span>
                    </a>
                    </div>
                      <div class="hover-1-content p-2">
                        <div class="title text-left">New York  -  254 SAR</div>
                        <div class="">United State of America</div>
                        <p class="hover-1-description mb-0"><a href="city-page.html"><strong>Book Now</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
                </div>
                                                    </Link>
                </div>

              <div>

               <Link to="/city-page">

  <div class="work ml-2 mr-2">
                  <div class="image-box">
                    <div class="name-desc hover-1 image-box rounded">
                      <div class="img align-items-center justify-content-center rounded">
                    <img class="w-100" src="assets/img/view-all-deal-img-2.png" />
                    <a href="#" class="icon d-flex align-items-center justify-content-center">
                      <span class="ion-ios-search"></span>
                    </a>
                    </div>
                      <div class="hover-1-content p-2">
                        <div class="title text-left">Birmingham</div>
                        <div class="">United Kingdom</div>
                        <p class="hover-1-description mb-0"><a href="city-page.html"><strong>Book Now</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
                </div>
                                                                              </Link>

                </div>

                <div>
                 <Link to="/city-page">
     <div class="work ml-2 mr-2">
                     <div class="image-box">
                       <div class="name-desc hover-1 image-box rounded">
                         <div class="img align-items-center justify-content-center rounded">
                       <img class="w-100" src="assets/img/view-all-deal-img-3.png" />
                       <a href="#" class="icon d-flex align-items-center justify-content-center">
                         <span class="ion-ios-search"></span>
                       </a>
                       </div>
                         <div class="hover-1-content p-2">
                           <div class="title text-left">Moscow</div>
                           <div class="">United State of America</div>
                           <p class="hover-1-description mb-0"><a href="city-page.html"><strong>Book Now</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                         </div>
                       </div>
                     </div>
                   </div>
                                                                </Link>
                </div>



                     <div>
                              <Link to="/city-page">
  <div class="work ml-2 mr-2">
                    <div class="image-box">
                      <div class="name-desc hover-1 image-box rounded">
                        <div class="img align-items-center justify-content-center rounded">
                      <img class="w-100" src="assets/img/view-all-deal-img-1.png" />
                      <a href="#" class="icon d-flex align-items-center justify-content-center">
                        <span class="ion-ios-search"></span>
                      </a>
                      </div>
                        <div class="hover-1-content p-2">
                        <div class="title text-left">New York  -  254 SAR</div>
                        <div class="">United State of America</div>
                        <p class="hover-1-description mb-0"><a href="city-page.html"><strong>Book Now</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                      </div>
                      </div>
                    </div>
                  </div>
                                                                 </Link>
                             </div>

                           <div>

                            <Link to="/city-page">

  <div class="work ml-2 mr-2">
                  <div class="image-box">
                    <div class="name-desc hover-1 image-box rounded">
                      <div class="img align-items-center justify-content-center rounded">
                    <img class="w-100" src="assets/img/view-all-deal-img-2.png" />
                    <a href="#" class="icon d-flex align-items-center justify-content-center">
                      <span class="ion-ios-search"></span>
                    </a>
                    </div>
                      <div class="hover-1-content p-2">
                        <div class="title text-left">Birmingham</div>
                        <div class="">United Kingdom</div>
                        <p class="hover-1-description mb-0"><a href="city-page.html"><strong>Book Now</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
                </div>
                                                                                           </Link>

                             </div>

          <div>
            <Link to="/city-page">
               <div class="work ml-2 mr-2">
                  <div class="image-box">
                    <div class="name-desc hover-1 image-box rounded">
                      <div class="img align-items-center justify-content-center rounded">
                    <img class="w-100" src="assets/img/view-all-deal-img-3.png" />
                    <a href="#" class="icon d-flex align-items-center justify-content-center">
                      <span class="ion-ios-search"></span>
                    </a>
                    </div>
                      <div class="hover-1-content p-2">
                        <div class="title text-left">Moscow</div>
                        <div class="">United State of America</div>
                        <p class="hover-1-description mb-0"><a href="city-page.html"><strong>Book Now</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
             </div>






              </Carousel>

              </div>










</div>
)
}

export default CheapestFlights;