import React from 'react';
import './Step.css';

const Step = ({number, name}) => {
  return (
    <div className='step'>
    <div className='number'>&nbsp; {number} &nbsp;</div>
    <div className='name'>{name}</div>
    </div>
  )
}

export default Step