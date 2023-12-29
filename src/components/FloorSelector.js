import React from 'react'
import './FloorSelector.css'

const FloorSelector = ({floor, setFloor}) => {

  return (
    <div className='floor-selector'>
        <div className={`btn ${(floor == 0) && 'btn-active'}`} onClick={() => { setFloor(0) }}>přízemí</div>
        <div className={`btn ${(floor == 1) && 'btn-active'}`} onClick={() => { setFloor(1) }}>galerie</div>
    </div>
  )
}

export default FloorSelector