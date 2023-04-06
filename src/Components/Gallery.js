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

const Gallery = () => {

useEffect(() => {
  window.scrollTo(0, 0)
}, []);

return(
<div>
<BlackNavbar />



<section className="gallery-img-sect mt-5">
        <div className="container">
          <div className="row">
            <div className="row">
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-1.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery1.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-2.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery2.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-3.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery3.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-4.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery4.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-5.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery5.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-6.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery6.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-7.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery7.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-8.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery8.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-9.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery9.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-10.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery10.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-11.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery11.png" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Gallery Image"
                           data-image="assets/img/large-img-12.png"
                           data-target="#image-gallery">
                            <img className="img-thumbnail"
                                 src="assets/img/img-gallery12.png" />
                        </a>
                    </div>
                </div>
                <div className="modal fade" id="image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="image-gallery-title"></h4>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img id="image-gallery-image" className="img-responsive col-md-12" src="" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary float-left" id="show-previous-image"><i className="fa fa-arrow-left"></i>
                                </button>

                                <button type="button" id="show-next-image" className="btn btn-secondary float-right"><i className="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>


        </div>


        <CompaniesLogo />
</section>


</div>


)

}

export default Gallery;