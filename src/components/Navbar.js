import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/akriti.jpg';

import { UserContext } from '../App';

const Navbar = () => {

    const {state, dispatch} = useContext(UserContext); 

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                        <li className="nav-item">
                            <NavLink exact ClassName="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                </>
            )
        }else {
            return(
                <>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Registration</NavLink>
                        </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 pb-0">
                
                <NavLink className="navbar-brand p-0" to="#">
                    <img src={logo} width="160" height="70" className="d-inline-block align-top" alt="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ms-auto">
                        <RenderMenu />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
