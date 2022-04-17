import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bottom-style text-center d-flex justify-content-center align-items-center mt-5">
        <div className="">
            <h3>Showaround Travel Guide</h3>
            <h5>Copyright &copy; 2022, Showaround Travel</h5>
            <h6>All rights reserved</h6>
            <h3>
                <i className="fab fa-instagram-square m-2"></i> 
                <i className="fab fa-dribbble-square m-2"></i>
                <i className="fab fa-twitter-square m-2"></i>
            </h3>
            </div>
        </div>
    );
};

export default Footer;