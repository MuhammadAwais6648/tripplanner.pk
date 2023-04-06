import {React , useState} from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FavouriteDestinations = (props) => {
return (
<div>

              <div className="ftco-section best-services">



    <div className="container">
    <h1 className="pb-4  mt-5">{props.heading} </h1>
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
            <Link to="/business-gmc">
  <div class="work ml-2 mr-2">
                            <div class="image-box">
                              <div class="name-desc hover-1 image-box rounded">
                                <div class="img align-items-center justify-content-center rounded">
                              <img class="w-100" src="assets/img/transport/tran-view-all-economy-gmc.jpg" />
                              <a href="#" class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-search"></span>
                              </a>
                              </div>
                                <div class="hover-1-content p-2">
                                  <div class="title text-left">Economy GMC - 250 SAR</div>
                                  <p class="hover-1-description mb-0"><a href="economy-gmc.html"><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                                               </Link>
           </div>

         <div>

          <Link to="/business-gmc">

<div class="work ml-2 mr-2">
                            <div class="image-box">
                              <div class="name-desc hover-1 image-box rounded">
                                <div class="img align-items-center justify-content-center rounded">
                              <img class="w-100" src="assets/img/transport/tran-view-all-business-car.jpg" />
                              <a href="#" class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-search"></span>
                              </a>
                              </div>
                                <div class="hover-1-content p-2">
                                  <div class="title text-left">Business Car - 250 SAR</div>
                                  <p class="hover-1-description mb-0"><a href="business-car.html"><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                                                                         </Link>

           </div>

           <div>
           <Link to="/business-gmc">
  <div class="work ml-2 mr-2">
                            <div class="image-box">
                              <div class="name-desc hover-1 image-box rounded">
                                <div class="img align-items-center justify-content-center rounded">
                              <img class="w-100" src="assets/img/transport/tran-view-all-economy-coaster.jpg" />
                              <a href="#" class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-search"></span>
                              </a>
                              </div>
                                <div class="hover-1-content p-2">
                                  <div class="title text-left">Economy Coaster - 250 SAR</div>
                                  <p class="hover-1-description mb-0"><a href="economy-coaster.html"><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                                                           </Link>
           </div>



                <div>


         <Link to="/business-gmc">
 <div class="work ml-2 mr-2">
                              <div class="image-box">
                                <div class="name-desc hover-1 image-box rounded">
                                  <div class="img align-items-center justify-content-center rounded">
                                <img class="w-100" src="assets/img/transport/tran-view-all-economy-car.jpg" />
                                <a href="#" class="icon d-flex align-items-center justify-content-center">
                                  <span class="ion-ios-search"></span>
                                </a>
                                </div>
                                  <div class="hover-1-content p-2">
                                  <div class="title text-left">Economy car - 250 SAR</div>
                                  <p class="hover-1-description mb-0"><a href="economy-car.html"><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                                </div>
                                </div>
                              </div>
                            </div>
                                                            </Link>
                        </div>

                      <div>


                <Link to="/business-gmc">
<div class="work ml-2 mr-2">
                            <div class="image-box">
                              <div class="name-desc hover-1 image-box rounded">
                                <div class="img align-items-center justify-content-center rounded">
                              <img class="w-100" src="assets/img/transport/tran-view-all-business-gmc.jpg" />
                              <a href="#" class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-search"></span>
                              </a>
                              </div>
                                <div class="hover-1-content p-2">
                                  <div class="title text-left">Business GMC - 250 SAR</div>
                                  <p class="hover-1-description mb-0"><a href="business-gmc.html"><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                                                                                      </Link>

                        </div>

                        <div>


             <Link to="/business-gmc">

 <div class="work ml-2 mr-2">
                             <div class="image-box">
                               <div class="name-desc hover-1 image-box rounded">
                                 <div class="img align-items-center justify-content-center rounded">
                               <img class="w-100" src="assets/img/transport/tran-view-all-standard-gmc.jpg" />
                               <a href="#" class="icon d-flex align-items-center justify-content-center">
                                 <span class="ion-ios-search"></span>
                               </a>
                               </div>
                                 <div class="hover-1-content p-2">
                                   <div class="title text-left">Standard GMC - 250 SAR</div>
                                   <p class="hover-1-description mb-0"><a href="standard-gmc.html"><strong>Click to Book</strong> <i class="fa fa-angle-double-right"></i> </a></p>
                                 </div>
                               </div>
                             </div>
                           </div>
                                                                        </Link>
                        </div>






         </Carousel>

         </div>


              </div>



</div>
)
}

export default FavouriteDestinations;