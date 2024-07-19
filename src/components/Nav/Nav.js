import React, { useEffect, useState } from "react"
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {

    const [show, setShow] = useState(false);

    const transitionNavbar = () =>{
        if(window.scrollY > 100 ){
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.addEventListener("scroll", transitionNavbar);
    }, [])
    
  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
            <Link to='/'>
            <img src='https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png' alt='' className='nav__logo' />
            </Link>
            <Link to="/profile">
            <img src='https://i.pinimg.com/474x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg' alt='' className='nav__avatar' />
            </Link>
        </div>
    </nav>
  )
}

export default Nav