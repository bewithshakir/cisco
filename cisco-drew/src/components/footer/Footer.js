import React, {Component} from 'react';
import './Footer.css';

const Footer = (props)=> {
    return (
        <div className="footer-section">
           <span>Version - 1.0.0</span> 

            <span>Engineered by EN iOPS Business Intelligence Team 
            <a className="hyperlink-user" href="mailto:iops-business-intelligence@cisco.com">(iOPS-Business-Intelligence@cisco.com)</a>
            </span>

            <span>Cisco Systems Inc.</span>
        </div>
    )
};

export default Footer;
