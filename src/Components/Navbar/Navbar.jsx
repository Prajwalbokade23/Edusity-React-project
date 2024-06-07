import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Link, { ScrollLink } from 'react-scroll'

const Navbar = () => {

    const [color, setcolor] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setcolor(true) : setcolor(false);
        })

    },[])

  return (
    <nav className={`container ${color? 'dark-nav' : ''}`}>
        <img className="logo" src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About</li>
            <li>Campus</li>
            <li>Testimonials</li>            
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
