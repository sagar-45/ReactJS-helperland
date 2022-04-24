import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import NotRobot from '../images/not_robot.png';
import arrow from '../images/arrow-white.png';
import DownArrow from '../images/com-down.png';
import img1 from '../images/service_card-1.png';
import img2 from '../images/service_card-2.png';
import img3 from '../images/service_card-3.png';
import BH_card from '../components/BH_card';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { SignUpValidation } from '../components/Validation';

export default function BecomeHelper() {
    const [scrollT, setscrollT] = useState(false);
    const [data, setdata] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        M_no: "",
        Password: "",
        C_password: "",
        UserTypeId: '2'
    });
    let navigate=useNavigate();
    const [error, seterror] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        M_no: "",
        Password: "",
        C_password: ""
      })
    const handleInput = (e) => {
        let { name, value } = e.target;
        setdata({ ...data, [name]: value })
    }
    const handleSubmit = () => {
        seterror({Firstname: "",
        Lastname: "",
        Email: "",
        M_no: "",
        Password: "",
        C_password: ""})
        const errorlist = SignUpValidation(data);
        if (Object.entries(errorlist).length == 0) {
            fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            })
            navigate("/");
        }
        else {
            Object.entries(errorlist).map((key) => {
                seterror((prev) => {
                    return { ...prev, [key[0]]: key[1] }
                })
            })
        }
    }
    const Scrolling = () => {
        if (window.scrollY > 0) {
            setscrollT(true);
        }
        else {
            setscrollT(false);
        }
    }
    window.addEventListener('scroll', Scrolling);
    return (
        <>
            <div className="become_helper">
                <div className='header'>
                    <Navbar newC={scrollT ? 'smallNavbar' : ''} />
                    <div className="form">
                        <p className="BH_title">Register Now!</p>
                        <input type="text" name='Firstname' value={data.Firstname} onChange={handleInput} placeholder="First Name" />
                        <p>{error.Firstname}</p>
                        <input type="text" name='Lastname' value={data.Lastname} onChange={handleInput} placeholder="Last Name" />
                        <p>{error.Lastname}</p>
                        <input type="email" name='Email' value={data.Email} onChange={handleInput} placeholder="Email Address" />
                        <p>{error.Email}</p>
                        <input type="text" name="M_no" value={data.M_no} onChange={handleInput} placeholder="Phone Number" />
                        <p>{error.M_no}</p>
                        <input type="text" name="Password" value={data.Password} onChange={handleInput} placeholder="Password" />
                        <p>{error.Password}</p>
                        <input type="text" name="C_password" value={data.C_password} onChange={handleInput} placeholder="Confirm Password" />
                        <p>{error.C_password}</p>
                        <input type="checkbox" id="check1" />
                        <label htmlFor="check1">Send me newsletters from Helperland </label>
                        <br />
                        <input type="checkbox" id="check2" />
                        <label htmlFor="check2">I accept <span className="color">terms and conditions</span> & <span className="color">privacy policy</span></label>
                        <img src={NotRobot} alt="image" className="not_robot" />
                        <button className='btn' onClick={handleSubmit}>Get Started<img src={arrow} alt="arrow" /></button>
                    </div>
                    <img src={DownArrow} alt='' className="downarrow" />
                </div>
                <div className="image_sec">
                    <p className='title'>How it works</p>
                    <BH_card title="Register yourself" desc="Provide your basic information to register
                    yourself as a service provider." url={img1} />
                    <BH_card title="Get service requests" desc="You will get service requests from
                    customes depend on service area and profile." url={img2} />
                    <BH_card title="Complete service" desc="Accept service requests from your customers
                    and complete your work." url={img3} />
                </div>
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}
