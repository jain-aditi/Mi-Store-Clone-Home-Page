import React from 'react';
import "./NavCard.css";

const NavCard = ({name, price, image}) => {
  return (
    <div className='nav-card'>
        <img src={image} alt={name}/>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard