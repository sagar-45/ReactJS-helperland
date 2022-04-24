import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top ${props.newC}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className={props.newC} src={logo}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="">Book a Cleaner</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/prices">Prices</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Our Guarantee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Countact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="" onClick={props.login}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/becomeHelper">Become a Helper</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
