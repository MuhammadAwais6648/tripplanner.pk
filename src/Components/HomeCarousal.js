import React from "react";
import '../Components/HomeCarousal.css';
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const HomeCarousal = (props) => {



  return (
    <div>

      <div className="container">
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

            <Link to={props.link1}>
              <div className="work1 ml-2 mr-2">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <div className="img align-items-center justify-content-center rounded">
                      <img className="" src={props.img1} />
                      <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                      </a>
                    </div>
                    <div className="hover-1-content p-2">
                      <div className="title float-left">{props.slide1Title}</div>
                      <br />
                      <div className="sub-txt-desc float-left">{props.subText1}</div>
                      <br />
                      <p className="hover-1-description float-left mb-0"><Link to={props.link1}><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>

            <Link to={props.link2}>
              <div className="work1 ml-2 mr-2">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <div className="img align-items-center justify-content-center rounded">
                      <img className="w-100" src={props.img2} />
                      <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                      </a>
                    </div>
                    <div className="hover-1-content p-2 float-left">
                      <div className="title float-left">{props.slide2Title}</div><br />
                      <div className="sub-txt-desc float-left">{props.subText2} </div><br />
                      <p className="hover-1-description mb-0 float-left"> <Link to={props.link2}><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          <div>
            <Link to={props.link3}>
              <div className="work ml-2 mr-2">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <div className="img align-items-center justify-content-center rounded">
                      <img className="w-100" src={props.img3} />
                      <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                      </a>
                    </div>
                    <div className="hover-1-content p-2 ">
                      <div className="title float-left">{props.slide3Title}</div><br />

                      <div className="sub-txt-desc float-left">{props.subText3}</div><br />
                      <p className="hover-1-description mb-0 float-left"> <Link to={props.link3}><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>

            <Link to={props.link4}>
              <div className="work ml-2 mr-2">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <div className="img align-items-center justify-content-center rounded">
                      <img className="w-100" src={props.img4} />
                      <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                      </a>
                    </div>
                    <div className="hover-1-content p-2">
                      <div className="title float-left">{props.slide4Title}</div><br />
                      <div className="sub-txt-desc float-left">{props.subText4}</div><br />
                      <p className="hover-1-description mb-0 float-left"> <Link to={props.link4}><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to={props.link5}>
              <div className="work ml-2 mr-2">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <div className="img align-items-center justify-content-center rounded">
                      <img className="w-100" src={props.img5} />
                      <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                      </a>
                    </div>
                    <div className="hover-1-content p-2">
                      <div className="title float-left">{props.slide5Title}</div><br />
                      <div className="sub-txt-desc float-left">{props.subText5}</div><br />
                      <p className="hover-1-description mb-0 float-left"> <Link to={props.link5}><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>


          <div>
            <Link to={props.link6}>
              <div className="work ml-2 mr-2">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box rounded">
                    <div className="img align-items-center justify-content-center rounded">
                      <img className="w-100" src={props.img6} />
                      <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                      </a>
                    </div>
                    <div className="hover-1-content p-2">
                      <div className="title float-left">{props.slide6Title}</div><br />
                      <div className="sub-txt-desc float-left">{props.subText6}</div><br />
                      <p className="hover-1-description mb-0 float-left"> <Link to={props.link6}><strong>Book Now</strong> <i className="fa fa-angle-double-right"></i> </Link></p>
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

export default HomeCarousal;