import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeWH from "../components/HomeWH";
import trueImg from "../images/true.png";
import step1 from "../images/1-img.png";
import step2 from "../images/2-img.png";
import step3 from "../images/3-img.png";
import step4 from "../images/4-img.png";
import arrow1 from "../images/step-arrow-1.png";
import arrow2 from "../images/step-arrow-2.png";
import HomeStep from "../components/HomeStep";
import downArrow from "../images/com-down.png";
import wHimg1 from "../images/group-21.png";
import wHimg2 from "../images/group-23.png";
import wHimg3 from "../images/group-24.png";
import sRectimg from "../images/group-36.png";
import blogImg1 from "../images/group-28.png";
import blogImg2 from "../images/group-29.png";
import blogImg3 from "../images/group-30.png";
import HomeBlogCard from "../components/HomeBlogCard";
import cust1 from "../images/group-31.png";
import cust2 from "../images/group-32.png";
import cust3 from "../images/group-33.png";
import HomeCust from "../components/HomeCust";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Uparrow from "../components/Uparrow";
import { Link } from 'react-router-dom';
import { loginValidation } from '../components/Validation';
import { Password } from "@mui/icons-material";
export default function HomePage() {
  const [scrollT, setscrollT] = useState(false);
  const [login_data, setLogin_data] = useState({
    Email: "",
    Password: ""
  })
  const [error, seterror] = useState({
    Email:"",
    Password:""
  })
  const [user_data, setuser_data] = useState({
    Name: "",
    UserId: "",
    Email: "",
    UserTypeId: ""
  })
  const Scrolling = () => {
    if (window.scrollY > 0) {
      setscrollT(true);
    }
    else {
      setscrollT(false);
    }
  }
  const showLogin = () => {
    document.getElementById("login_modal_btn").click();
  }
  const hideLogin = () => {
    document.getElementById("login_modal_btn").click();
  }
  const handleInput = (e) => {
    let { name, value } = e.target;
    setLogin_data({ ...login_data, [name]: value });
  }
  const loginset = () => {
    seterror({Email:"",Password:""})
    const errorlist = loginValidation(login_data);
    if (Object.entries(errorlist).length == 0) {
      fetch(`http://localhost:5000/users?Email=${login_data.Email}&&Password=${login_data.Password}`).
        then((resp) => {
          resp.json().then((data) => {
            if (data.length === 1) {
              setuser_data({
                Name: data[0].Firstname + " " + data[0].Lastname,
                UserId: data[0].id,
                Email: data[0].Email,
                UserTypeId: data[0].UserTypeId
              });
              alert(`Hello ${data[0].Firstname} , you login successfully`)
            }
            else{
              alert("Incorrect Username or password")
            }
          })
        });
    }
    else {
      Object.entries(errorlist).map((key) => {
        seterror((prev) => {
          return { ...prev, [key[0]]: key[1] }
        })
      })
    }
    console.log(error);
  }
  window.addEventListener('scroll', Scrolling);
  useEffect(() => { Scrolling() })
  return (
    <>
      <div className="home">
        <div className="Modals">
          <button type="button" id="login_modal_btn" className="btn btn-primary modal_btn" data-bs-toggle="modal" data-bs-target="#login">
          </button>
          <div className="modal fade" id="login" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Login to your account</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-labelledby="close"></button>
                </div>
                <div className="modal-body">
                  <input type='email' name="Email" placeholder="Email" onChange={handleInput} value={login_data.Email} /><br />
                  <p className="error">{error.Email}</p>
                  <input type='Password' name="Password" placeholder="Password" onChange={handleInput} value={login_data.Password} /><br />
                  <p className="error">{error.Password}</p>
                  <input type="checkbox" id="remember" /> <label htmlFor="remember">Remember me</label><br />
                  <button className='btn login_btn' onClick={loginset} >Login</button>
                  <p>Forgot Password?</p>
                  <p>Don't have an account?</p>
                  <p onClick={hideLogin} ><Link to="/customerSignUp">Create an account</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <Navbar FirstPage='true' login={showLogin} newC={scrollT ? 'smallNavbar' : ''} />
          <div className="text">
            <p className="mainText">Lorem ipsum text</p>
            <p className="smallText">
              <img src={trueImg} alt="image" />
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <p className="smallText">
              <img src={trueImg} alt="image" />
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <p className="smallText">
              <img src={trueImg} alt="image" />
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <button className="btn book_btn">Let's Book a Cleaner</button>
          <div className="steps">
            <HomeStep url={step1} text="Enter your postcode" />
            <img src={arrow1} alt="arrow" className="arrow1" />
            <HomeStep url={step2} text="Select your plan" />
            <img src={arrow2} alt="arrow" className="arrow2" />
            <HomeStep url={step3} text="Pay securely online" />
            <img src={arrow1} alt="arrow" className="arrow1" />
            <HomeStep url={step4} text="Enjoy amazing service" />
          </div>
          <div className="downArrow">
            <img src={downArrow} alt="images" />
          </div>
        </div>
        <div className="whyHelperland">
          <p className="title">Why Helperand</p>
          <div className="wHcard">
            <HomeWH
              url={wHimg1}
              heading="Experience & Vetted Professionals"
              desc="dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results."
            />
            <HomeWH
              url={wHimg2}
              heading="Secure Online Payment"
              desc="Payment is processed securely online. Customers pay safely online and
          manage the booking."
            />
            <HomeWH
              url={wHimg3}
              heading="Dedicated Customer Service"
              desc="to our customers and are guided in all we do by their needs. The team is always happy to support you and offer all the information."
            />
          </div>
        </div>
        <div className="secRect">
          <img src={sRectimg} alt="image" />
          <div className="srText">
            <div className="srHeading">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="sedesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
              sapien, suscipit ut accumsan vitae, pulvinar ac libero. Aliquam erat
              volutpat. Nullam quis ex odio. Nam bibendum cursus purus, vel
              efficitur urna finibus vitae. Nullam finibus aliquet pharetra. Morbi
              in sem dolor. Integer pretium hendrerit ante quis vehicula. Mauris
              consequat ornare enim, sed lobortis quam ultrices sed.
            </div>
          </div>
        </div>
        <div className="ourBlog">
          <p className="title">Our Blog</p>
          <div className="blog_cards">
            <HomeBlogCard
              url={blogImg1}
              heading="Lorem ipsum dolor sit amet"
              date="January 28, 2019"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet."
            />
            <HomeBlogCard
              url={blogImg2}
              heading="Lorem ipsum dolor sit amet"
              date="January 28, 2019"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet."
            />
            <HomeBlogCard
              url={blogImg3}
              heading="Lorem ipsum dolor sit amet"
              date="January 28, 2019"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet."
            />
          </div>
        </div>
        <div className="customer">
          <p className="title">What Our Customers Say</p>
          <div className="c_cards">
            <HomeCust
              url={cust1}
              name="Lary Watson"
              position="Manchester"
              resp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet consequat. Praesent nec malesuada nibh.
            Nullam et metus congue, auctor augue sit amet, consectetur tortor. "
            />
            <HomeCust
              url={cust2}
              name="John Smith"
              position="Manchester"
              resp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet consequat. Praesent nec malesuada nibh.
            Nullam et metus congue, auctor augue sit amet, consectetur tortor. "
            />
            <HomeCust
              url={cust3}
              name="Lars Johnson"
              position="Manchester"
              resp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet consequat. Praesent nec malesuada nibh.
            Nullam et metus congue, auctor augue sit amet, consectetur tortor. "
            />
          </div>
          <div className="newsLetter">
            <NewsLetter />
            {scrollT && <Uparrow />}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
