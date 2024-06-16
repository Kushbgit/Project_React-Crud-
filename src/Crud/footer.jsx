import React from 'react';
import '../assets/css/style.css';

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante vel est luctus suscipit ut nec diam. Proin sit amet accumsan tortor.</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h3>Quick Links</h3>
                        <ul className="list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h3>Contact Us</h3>
                        <ul className="list">
                            <li>Address: 123 MP Nagar, Bhopal, India</li>
                            <li>Phone: +1234567890</li>
                            <li>Email: cybrom@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;
