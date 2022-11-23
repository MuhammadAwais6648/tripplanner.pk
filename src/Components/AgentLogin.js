import { React, useEffect, useState } from "react";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CaptchaTest from "./CaptchaTest";

const Agentn = () => {

  useEffect(() => {
    document.title = "Agen Sign In | Tripplanner PK";
  })
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');


  return (

    <div>

      <div id="user-registration-page">

        <div className="user-regist" style={{ color: "white" }}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12  pt-lg-5 pt-3 ">
              <div className="text-center">
                <Link to="/"><img className="" src="../../assets/img/user-registration-logo.png" /></Link>
              </div>
              <form action="<?php echo base_url(); ?>auth/doAgentn" className="remember-agent-n-frm"
                id="remember-agent-n-frm" method="post" accept-charset="utf-8"
                enctype="multipart/form-data" >
                <input type="hidden" id="AgentnCaptcha" name="AgentnCaptcha" value="<?= $code ?>" />
                <div className="n-title text-center mt-4">n As Agent</div>
                <div className="row">
                  <div className="col-lg-3 col-md-2 col-sm-2 col-1"></div> 
                  <div className="col-lg-6 col-md-8 col-sm-8 col-10">
                    <div className="for-n pt-4 mt-lg-3">
                      <label className="text-left">Email</label>
                      <input type="text" className="form-control" id="agent_email" name="agent_email"
                         onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
                    <div className="for-n pt-3">
                      <label className="text-left">Password</label>
                      <input type="password" className="form-control" id="agent_password" name="agent_password"
                         onChange={(e) => setUserPassword(e.target.value)} />
                    </div>
                    <div className="for-n pt-3" >
                      <CaptchaTest />
                      {/* <label className="text-left">Captcha </label><span className="float-right">321456</span> */}
                      {/* <input type="text" className="form-control" id="AgentCaptcha" name="AgentCaptcha"
                        placeholder="Kindly write white text as below" value="" autocomplete="off" /> */}
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="n-title text-center mt-4">
                          <a href="#">
                            <span id="nLabel"><u> Register As B2B ?</u></span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="n-btn pt-3">
                          <button className="btn w-100" variant="primary">LOG IN</button>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-3 col-md-2 col-sm-2 col-1"></div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Agentn;