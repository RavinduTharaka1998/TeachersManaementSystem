import React from "react";
import "./css/Header.css";

import Logo from './img/logo.png';

function header() {
  return (
    <div>
      <hr />
      <div className="header">
        <div className="item-img">
          <img src= {Logo} alt="logo" />
        </div>
        <div className="item">
          <h2>Kothalawala Maha Vidyalaya</h2>
          <center>
            <h4>Penvamu Nawa Man - Nanwamu Jaya Tam</h4>
          </center>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default header;
