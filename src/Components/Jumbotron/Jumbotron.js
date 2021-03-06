import React from "react";
import "./Jumbotron.css";
import Contact from "../ContactBox/ContactForm";
const Column1 = () => {
  return (
    <>
      <h1 className="jumbotron-title">
        Searching to buy dreamhouse in Aurangabad?
      </h1>
      <p className="jumbotron-subtitle">
        We will find your dream home as per your specification like area,
        property type, price, locality etc..
      </p>
      <div className="call-now">Call Now - 8600383222</div>
      <div className="row brokerge-row">
        <h3 className="no-brokerage">No Brokerage</h3>
        <h3 className="free-of-cost">Free of Cost</h3>
      </div>
    </>
  );
};

const Column2 = () => {
  return (
    <>
      <Contact />
    </>
  );
};

function Jumbotron() {
  return (
    <>
      <div className="container-fluid jumbotron-box">
        <div className="container-xl center-container">
          <div className="row row-main">
            <div className="col column1">
              <Column1 />
            </div>
            <div className="col column2">
              <Column2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
