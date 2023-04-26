import React from 'react'
import './LogoSearch.css'
import logo from "../../../img/logo.png"
import {HiOutlineSearch }from 'react-icons/hi'

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
      <img src={logo} alt='logo' />
      <div className='search'>
        <input type='text' placeholder='#Explore' />
        <div className='s-icon'>
           <HiOutlineSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
