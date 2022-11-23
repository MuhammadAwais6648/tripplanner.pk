import React , {useEffect} from "react";
import BlackNavbar from "../Components/BlackNavbar";
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";



const Complaints = () =>{

useEffect(() => {
  window.scrollTo(0, 0);
   document.title = "Complaints | Tripplanner ";

}, []);

return(
<div>

<BlackNavbar />


   <section className="complaints">
          <div className="container">
            <h1 className="mt-5 mb-4 text-center">Complaints</h1>
            <div className="row">
              <div className="col-lg-2 col-md-2"></div>
              <div className="col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                     <input type="text" name="" className="form-control-comp" value="First Name" />
                  </div>
                  <div className="col-lg-6 col-md-6 mt-lg-0 mt-md-0 mt-4">
                     <input type="text" name="" className="form-control-comp" value="Last Name" />
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                     <input type="text" name="" className="form-control-comp" value="Phone" />
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                     <input type="text" name="" className="form-control-comp" value="Email" />
                  </div>
                  <div className="col-lg-12 col-md-12 mt-4">
                    <select className="form-control-comp">
                      <option>Select Department</option>
                      <option>Select Department</option>
                      <option>Select Department</option>
                      <option>Select Department</option>
                    </select>
                  </div>
                  <div className="col-lg-12 col-md-12 mt-4">
                    <textarea className="form-control-comp for-msg-box"> Write your Complaint here... </textarea>
                  </div>
                   <div className="book-now pl-lg-2 pl-md-2 pl-3">
                    <button className="view-btn mt-4" type="submit">send</button>
                   </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2"></div>
            </div>


        <CompaniesLogo />
            </div>
        </section>

<Footer />
</div>
)

}

export default Complaints;