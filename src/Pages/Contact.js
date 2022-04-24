import React from 'react'
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import MainImg from '../images/contact-img.png';
import LocationIcon from '../images/location-img.png';
import MessageIcon from '../images/message-img.png';
import CallIcon from '../images/call-img.png';
import HomeStep from '../components/HomeStep';
import map from '../images/map-img.png';
import point from '../images/pin.png'; 
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
export default function Contact() {
  return (
    <>
        <div className="contact">
            <Navbar newC="smallNavbar" />
            <img src={MainImg} alt="image" className="mainimg"/>
            <Title name="Contact us"/>
            <div className="methods">
                <HomeStep url={LocationIcon} text='1111 Lorem ipsum text 100, Lorem ipsum AB'/>
                <HomeStep url={CallIcon} text='+49 (40) 123 56 7890 +49 (40) 123 56 7890'/>
                <HomeStep url={MessageIcon} text='info@helperland.com'/>
            </div>
            <hr className="container"/>
            <div className="contactUs">
                <p className="title">Get in touch with us</p>
                <div className="form">
                    <input type='text' placeholder="First name"/>
                    <input type='text' placeholder="Last name"/>
                    <input type='text' placeholder="Mobile number"/>
                    <input type='email' placeholder="Email address"/>
                    <select>
                        <option disabled>Subject</option>
                        <option>Subject1</option>
                        <option>Subject2</option>
                        <option>Subject3</option>
                    </select>
                    <textarea placeholder="Message" rows="5"></textarea>
                    <button className='btn'>Submit</button>
                </div>
                <div className='images'>
                <img src={map} alt="map" className="map" />
                <img src={point} alt="image" className="point"/>
                </div>
                <NewsLetter />
                <Footer/>
            </div>
        </div>
    </>
  )
}
