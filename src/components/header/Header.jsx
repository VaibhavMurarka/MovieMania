import React, {useRef, useState} from 'react';
import { Link } from "react-router-dom";
import './header.css'
import {ImVideoCamera} from 'react-icons/im'
import {FaTimes, FaBars} from 'react-icons/fa'
import {RiSearchEyeLine} from 'react-icons/ri'
import LoadingBar from 'react-top-loading-bar';

export const Header = () => {
  const [progress, setProgress] = useState(0);

  const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive-nav");
    }
  return (
    <header className='nav'>
        <h3><ImVideoCamera/> MovieMania</h3>
        <LoadingBar progress={100} onLoaderFinished={() => setProgress(0)}/>
        <nav ref={navRef}>
            <Link className= "links" to='/' onClick={showNavbar}>
              Watchlist
            </Link>
            <Link className= "links" to='/watched' onClick={showNavbar}>Watched</Link>
            <Link className="links add" to='/add' onClick={showNavbar}><RiSearchEyeLine/></Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
    </header>
    
  )
}

export default Header;
