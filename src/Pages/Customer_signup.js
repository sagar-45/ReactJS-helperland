import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Footer from '../components/Footer';
import { Link,useNavigate } from 'react-router-dom';
import { SignUpValidation } from '../components/Validation';
import HomePage from './HomePage';

export default function CustomerSignUp() {
  const [data, setdata] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    M_no: "",
    Password: "",
    C_password: "",
    UserTypeId: '1'
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
  const submitHandle = () => {
    seterror({
      Firstname: "",
    Lastname: "",
    Email: "",
    M_no: "",
    Password: "",
    C_password: ""
    })
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
  return (
    <>
      <div className="customer_signup">
        <Navbar newC="smallNavbar" />
        <Title name="Create an account" />
        <div className="details">
            <div>
              <input type="text" name='Firstname' value={data.Firstname} placeholder="First Name" onChange={handleInput} />
              <p className="Firstname_error">{error.Firstname}</p>
            </div>
            <div>
              <input type="text" name="Lastname" value={data.Lastname} placeholder="Last Name" onChange={handleInput} />
              <p className="Lastname_error">{error.Lastname}</p>
            </div>
            <div>
              <input type="email" name="Email" value={data.Email} placeholder="Email address" onChange={handleInput} />
              <p className="Email_error">{error.Email}</p>
            </div>
            <div>
              <input type="text" name="M_no" value={data.M_no} placeholder="Mobile number" onChange={handleInput} />
              <p className="M_no_error">{error.M_no}</p>
            </div>
            <div>
              <input type="password" value={data.Password} name="Password" placeholder="Password" onChange={handleInput} />
              <p className="Password_error">{error.Password}</p>
            </div>
            <div>
              <input type="password" name="C_password" value={data.C_password} placeholder="Confirm Password" onChange={handleInput} /><br />
              <p className="C_password_error">{error.C_password}</p>
            </div>
        
          <br/><input type='checkbox' id="privacy" /><label htmlFor="privacy">I have read the <span className="color">privacy policy.</span></label>
          <button className='btn create_btn' onClick={submitHandle}>Register</button>
          <p>Already registered? <Link to="/"><span className="color">Login now</span></Link></p>
        </div>
        <Footer />
      </div>
    </>
  )
}
