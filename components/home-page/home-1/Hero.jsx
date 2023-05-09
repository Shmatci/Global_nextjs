import Image from "next/image";
import React from "react";

const Hero1 = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
            At <span>Simed Global</span>
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
            Our mission is to bring world beating – 
            life changing IVD medical devices to the market to allow instant screening for illnesses in the population.
            </p>
            <p className="text-m tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
            We continuously research, innovate, and create new ways to improve medical diagnostics solutions together with our partners and investors.
            </p>
          </div>
        </div>
      </div>
      {/* End .container */}
    </div>
  );
};

export default Hero1;
