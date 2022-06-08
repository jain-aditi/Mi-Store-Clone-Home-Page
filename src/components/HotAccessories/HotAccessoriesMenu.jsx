import React from 'react'
import { Link } from 'react-router-dom'
import "./HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (
    <div className='hot-accessories-menu'>
        <Link className='hot-accessories-link' to="/music">Music Store</Link>
        <Link className='hot-accessories-link' to="/smartdevices">Smart Devices</Link>
        <Link className='hot-accessories-link' to="/home">Home</Link>
        <Link className='hot-accessories-link' to="lifestyle">Lifestyle</Link>
        <Link className='hot-accessories-link' to="/mobileaccessories">Mobile Accessories</Link>
        
    </div>
  )
}

export default HotAccessoriesMenu