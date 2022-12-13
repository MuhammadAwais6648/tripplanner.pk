import React, { useState, useEffect } from "react";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CaptchaTest from "./CaptchaTest";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";

const UserRegistration = () => {

  useEffect(() => {
    document.title = "Sign Up | Tripplanner ";
  })

  const [first_name, setFName] = useState('');
  const [last_name, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [incorrect, setIncorrect] = useState(false);

  let key = "UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
  let domain = "tripplanner.ae";
  let navigate = useNavigate();

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  };

  const user = { key, domain, first_name, last_name, email, phone, password, confirm_password };
  const doSubmit = (e) => {
    e.preventDefault();
    let user_captcha = document.getElementById("user_captcha_input").value;
    console.log('user_captcha: ', user_captcha);

    if (validateCaptcha(user_captcha) == false) {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
      return;
    }

    axios.post('https://api.tripplanner.ae/web/sign-up', user, axiosConfig)
      .then((response) => {
        console.log("response: ", response);

        if (response.data.status === 'fail') {
          console.log("if block");
          setMsg(response.data.message);
          setIncorrect(true);
          alert(response.data.message);
        }
        else {
          console.log("else block");
          localStorage.setItem('user', JSON.stringify(user));
          console.log(user);
          navigate('/user-login');
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }

  return (
    <div>

      <div id="user-registration-page">
        <form >
          <div className="user-regist p-5">
            <div className="logo-main text-center pt-2">
              <Link to="/" ><img className="" src="../../assets/img/user-registration-logo.png" /></Link>
            </div>
            <div className="row mt-4">
              {incorrect &&
                <div className="row">
                  <div className="col-sm-12 text-center error-msg">
                    <span>{msg}</span>
                  </div>
                </div>
              }
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <input type="text" name="fname" className="form-control"
                  onChange={(e) => setFName(e.target.value)}
                  placeholder="First Name"
                  required />

              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                <input type="text" name="lname" className="form-control"
                  onChange={(e) => setLName(e.target.value)}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                <input type="email" name="email" className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                <input type="text" name="phone" className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contact No"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                <input type="text" name="password" className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password *"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                <input type="text" name="confirm_password" className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confrim Password *"
                  required
                />
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <CaptchaTest />

                {/* <label className="code float-right pt-2 mb-0">309192</label> */}

                {/* <input type="text" name="" className="form-control" placeholder="Kindly write red text as above *" /> */}
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <div className="gen-text pt-3 mb-2">already have a account. <Link to="/user-login">Login</Link></div>
                <div className="login-btn">
                  <div className=""><button className="w-100" onClick={doSubmit}>Register</button></div>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>

    </div>
  )
}

export default UserRegistration;
