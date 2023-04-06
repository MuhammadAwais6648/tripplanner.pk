import React, { useState, useEffect } from "react";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import axios from 'axios';



const Settings = () => {

  const key = "UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
  const domain = "tripplanner.ae";

  const user = { key, domain };
  const [msg, setMsg] = useState('');


  useEffect(() => {



    fetch('https://api.tripplanner.ae/settings', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(user)
    }).then(async response => {
      if (!response.ok) {
        const validation = await response.json();
        setMsg(validation.errors);
        //           console.log(user);
      }
      else {

        const data = response.json();
        //             localStorage.setItem("users",data.site_address);
        console.log(data);

      }
    });




  }, []);




  return (
    <div>

      <Navbar />

    </div>
  )
}

export default Settings