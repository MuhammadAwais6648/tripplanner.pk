import {React , useState} from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LuxuryHotel = () =>{
return (
<div>


        <div className="container">
        <h1 className="pb-4 mb-4 mt-5">luxury hotel accommodation</h1>
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
            <Link to="/flight">
                                              <div className="work ml-2 mr-2">
                                                                                       <div className="image-box">
                                                                                                                    <div className="name-desc hover-1 image-box rounded">
                                                                                                                      <div className="img align-items-center justify-content-center rounded">
                                                                                                                    <img className="w-100" src="../../assets/img/hotel-main-img-3.png" />
                                                                                                                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                                                                                                                      <span className="ion-ios-search"></span>
                                                                                                                    </a>
                                                                                                                    </div>
                                                                                                                      <div className="hover-1-content p-2">
                                                                                                                        <div className="title text-left">london  -  268 aed</div>
                                                                                                                        <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                  </div>
                                               </Link>
           </div>

         <div>

          <Link to="/hotel">

                       <div className="work1 ml-2 mr-2">
                                                                                  <div className="image-box">
                                                                                     <div className="name-desc hover-1 image-box rounded">
                                                                                                                       <div className="img align-items-center justify-content-center rounded">
                                                                                                                     <img className="w-100" src="../../assets/img/hotel-main-img-4.png" />
                                                                                                                     <a href="#" className="icon d-flex align-items-center justify-content-center">
                                                                                                                       <span className="ion-ios-search"></span>
                                                                                                                     </a>
                                                                                                                     </div>
                                                                                                                       <div className="hover-1-content p-2">
                                                                                                                         <div className="title text-left">Paris  -  268 aed</div>
                                                                                                                         <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                                                                                                       </div>
                                                                                                                     </div>
                                                                                  </div>
                                                                                </div>

          </Link>

           </div>

           <div>
            <Link to="/transport">

                  <div className="work ml-2 mr-2">
                                                                 <div className="image-box">
                                                                      <div className="name-desc hover-1 image-box rounded">
                                                                                                     <div className="img align-items-center justify-content-center rounded">
                                                                                                   <img className="w-100" src="../../assets/img/hotel-main-img-5.png" />
                                                                                                   <a href="#" className="icon d-flex align-items-center justify-content-center">
                                                                                                     <span className="ion-ios-search"></span>
                                                                                                   </a>
                                                                                                   </div>
                                                                                                     <div className="hover-1-content p-2">
                                                                                                       <div className="title text-left">Berlin  -  268 aed</div>
                                                                                                       <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                                                                                     </div>
                                                                                                   </div>
                                                                 </div>
                                                               </div>
                                                           </Link>
           </div>



  <div>
            <Link to="/flight">
                                              <div className="work ml-2 mr-2">
                                                                                       <div className="image-box">
                                                                                                                    <div className="name-desc hover-1 image-box rounded">
                                                                                                                      <div className="img align-items-center justify-content-center rounded">
                                                                                                                    <img className="w-100" src="../../assets/img/hotel-main-img-3.png" />
                                                                                                                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                                                                                                                      <span className="ion-ios-search"></span>
                                                                                                                    </a>
                                                                                                                    </div>
                                                                                                                      <div className="hover-1-content p-2">
                                                                                                                        <div className="title text-left">london  -  268 aed</div>
                                                                                                                        <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                  </div>
                                               </Link>
           </div>

         <div>

          <Link to="/hotel">

                       <div className="work1 ml-2 mr-2">
                                                                                  <div className="image-box">
                                                                                     <div className="name-desc hover-1 image-box rounded">
                                                                                                                       <div className="img align-items-center justify-content-center rounded">
                                                                                                                     <img className="w-100" src="../../assets/img/hotel-main-img-4.png" />
                                                                                                                     <a href="#" className="icon d-flex align-items-center justify-content-center">
                                                                                                                       <span className="ion-ios-search"></span>
                                                                                                                     </a>
                                                                                                                     </div>
                                                                                                                       <div className="hover-1-content p-2">
                                                                                                                         <div className="title text-left">Paris  -  268 aed</div>
                                                                                                                         <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                                                                                                                       </div>
                                                                                                                     </div>
                                                                                  </div>
                                                                                </div>

          </Link>

           </div>

           <div>
            <Link to="/transport">

                  <div className="work ml-2 mr-2">
                                                                 <div className="image-box">
                                                                      <div className="name-desc hover-1 image-box rounded">
                                                                                                     <div className="img align-items-center justify-content-center rounded">
                                                                                                   <img className="w-100" src="../../assets/img/hotel-main-img-5.png" />
                                                                                                   <a href="#" className="icon d-flex align-items-center justify-content-center">
                                                                                                     <span className="ion-ios-search"></span>
                                                                                                   </a>
                                                                                                   </div>
                                                                                                     <div className="hover-1-content p-2">
                                                                                                       <div className="title text-left">Berlin  -  268 aed</div>
                                                                                                       <p className="hover-1-description mb-0"><Link to="/hotel-search-result"><strong>Click to Book</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
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

export default LuxuryHotel;