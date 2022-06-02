import React from 'react';
import "../styles/Heading.css"

const Heading = ({ text }) => {
  return (
    <div className='heading'>
        <div />
        <p>
            {text}
        </p>
        <div />
    </div>
  )
}

export default Heading