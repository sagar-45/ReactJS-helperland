import React from 'react'
import logo from '../images/logo.png';
import Ficon from '../images/facebook.png';
import Iicon from '../images/instagram.png';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="logo col"><Link className="nav-link" to="/"><img src={logo} alt="images" className="logo" /></Link></div>
          <div className="list col-6">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/about"><p>ABOUT</p></Link>
            <Link className="nav-link" to=""><p>Testimonials</p></Link>
            <Link className="nav-link" to="/faq"><p>FAQs</p></Link>
            <Link className="nav-link" to=""><p>Insurance Policy</p></Link>
            <Link className="nav-link" to=""><p>Impressum</p></Link>
          </div>
          <div className="icon col">
            <img src={Ficon} alt="image" />
            <img src={Iicon} alt="image" />
          </div>
        </div>
        <div className='container hr'></div>
        <div className="copyright">
          ©2018 Helperland. All rights reserved.     Terms and Conditions  |  Privacy Policy
        </div>
      </div>
    </>
  )
}
