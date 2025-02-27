import React from 'react'
import './index.css';
import { useState } from 'react';

const SkillIcon = ({icon, name}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const offHover = () => {
    setHover(false);
  };
  return (
    <div 
      className='skill-icon-container'
      onMouseEnter={onHover}
      onMouseLeave={offHover}
    >
      {hover ? <div className='skill-icon-title'>{name}</div> : <img className='skill-icon-image' src={icon} alt={name} title={name} />}
    </div>
  )
}

export default SkillIcon;
