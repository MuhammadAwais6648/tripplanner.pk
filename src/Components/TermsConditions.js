import React , {useEffect} from "react";
import BlackNavbar from "../Components/BlackNavbar";
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";



const TermsConditions = () =>{

useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Terms and Conditions ";

}, []);

return(
<div>
<BlackNavbar />


  <section className="flight-found flight-detail mt-5">
          <div className="container">
            <div className="nav mb-4">
              <a href="!#">Home</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3 gand-exce">Terms & Booking Conditions</a>
            </div>
            <h1 className="mt-5 mb-4">TERMS & CONDITIONS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
            <h2 className="mt-5 mb-4">Booking Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
            <h3 className="mt-5 mb-4">Important Information</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>
            <h4 className="mt-5 mb-4">Website Terms & Conditions</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>



       <CompaniesLogo />

            </div>
        </section>

<Footer />
</div>
)

}

export default TermsConditions;