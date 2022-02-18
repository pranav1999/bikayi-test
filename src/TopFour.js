import React from 'react'
import "./TopFour.css"
import Prize from './Prize'

function TopFour() {
  return (
    <div className='topFour'>
        <h1>Top Four</h1>
        <div className='data'>
            <Prize />
            <Prize />
            <Prize />
            <Prize />
        </div>
    </div>
  )
}

export default TopFour