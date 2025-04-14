import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
<section className="bg-footer">
    <div className="container">
        <div className="main-footer">
            <div className="conta-one">
                <h6>Contact Us</h6>
                <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
                <p><Link href="mailto:">Email: amet, consetetur sadipscing elitr sed diam</Link></p>
                <p><Link href="tel:">Phone No: 123456789</Link></p>
            </div>
            <div className="follow-one">
                <h6>Follow Us</h6>
                <Link href=""><img src="logo/Icon awesome-facebook-f.svg" alt="icon1"/></Link>
                <Link href=""><img src="logo/Icon awesome-linkedin.svg" alt="icon2"/></Link>
                <Link href=""><img src="logo/Icon awesome-instagram.svg" alt="icon3"/></Link>
                <Link href=""><img src="logo/Icon awesome-twitter.png" alt="icon4"/></Link>
                <Link href=""><img src="logo/Icon awesome-youtube.png" alt="icon5"/></Link>
                <Link href=""><img src="logo/quora.png" alt="icon6"/></Link>
            </div>
            <div className="head-off">
                <h6>Head Office</h6>
                <div className="lac-one">
                    <img src="logo/Iconl-location.png" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
                </div>
                <div className="lac-one">
                    <img src="logo/clock-icon.png" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
                <div className="lac-one">
                    <img src="logo/clock-icon.png" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
                <div className="lac-one">
                    <img src="logo/train-icon.png" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
            </div>
        </div>
        <div className="copy-one">
            <p>© 2025 All Rights Reserved. Privacy Policy</p>
        </div>
    </div>
</section>

    </>
  )
}

export default Footer