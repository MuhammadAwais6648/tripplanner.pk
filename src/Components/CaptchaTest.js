import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/tripplanner.css';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class  CaptchaTest extends Component {
  componentDidMount() {
    loadCaptchaEnginge(8);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  render() {
    return (
      <div className="Container fluid" style={{marginTop: '12px'}}>
      <Row>
        <Col className="capchaOuterBlock"> 
          <LoadCanvasTemplateNoReload />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
              className="form-control"
              placeholder="Kindly write text as above *"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
            ></input>
         </Col>
      </Row>
      </div>
    );
  }
}

export default CaptchaTest;