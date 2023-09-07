import React from 'react'
import logo from '../../images/logo.png'
import './Footer.css'
import Instagram from '../../images/redes/icons8-instagram-100 (2).png'
import Facebook from '../../images/redes/icons8-facebook-100 (2).png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-nav'>
          <img className='footer-img' src={logo} alt="#" />
          <h3 className='footer-h3'>"Si es hecho a mano <br />significa... <br />hecho con amor."</h3>
        </div>
        <div className='footer-redes'>
          <Link to="https://www.facebook.com/people/Nancy-Curbelo/pfbid02HaUvphYMRtc4ucTWQLcYBQCHD9aa77eTFV7pjP5zLyzktVYC41qU9T87FhpXWU3Ll/?mibextid=ZbWKwL">
            <img src={Facebook} alt="Facebook" />
          </Link>
          <Link to="https://www.instagram.com/tejidos_nancy1/">
            <img src={Instagram} alt="Instagram" />
          </Link>
        </div>
            <h4>❤ Nancy Curbelo ❤ </h4>
            <h5>2023</h5>
      </footer>
    </>
  )
}

export default Footer