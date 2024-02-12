import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; asos.com</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
       
      </p>
      <p className="text-center mt-3">
        <Link to="/about">Market Place</Link>|<Link to="/contact">Investors</Link>|
        <Link to="/policy">Industries</Link>
       
      </p>
      <p className="text-center mt-3">
        <Link to="/about">Careers of ASOS</Link>|<Link to="/contact">Delivery & Returns</Link>|
        <Link to="/policy">corporate Responsibility</Link>
       
      </p>
      <p className="text-center mt-3">
      <img style={{alignContent:"center"}}
        src="/images/f1.png"
        // className="banner-img"
        alt="bannerimage"
        width={"3%"}
      />
      <img className="text-center"
        src="/images/f2.png"
        // className="banner-img"
        alt="bannerimage"
        width={"3%"}
      />
      <img className="text-center"
        src="/images/f3.png"
        // className="banner-img"
        alt="bannerimage"
        width={"3%"}
      />
      <img className="text-center"
        src="/images/f4.png"
        // className="banner-img"
        alt="bannerimage"
        width={"3%"}
      />
      <img className="text-center"
        src="/images/f5.png"
        // className="banner-img"
        alt="bannerimage"
        width={"3%"}
      />
      <img className="text-center"
        src="/images/f6.png"
        // className="banner-img"
        alt="bannerimage"
        width={"3%"}
      />
      </p>
    </div>
  );
};

export default Footer;
