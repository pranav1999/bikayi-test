import React from 'react'
import Prize from './Prize'
import "./AllWinners.css"

function AllWinners() {
  return (
    <div className='allWinners'>
        <h1>All Winners</h1>
        <div className='filters'>

        </div>
        <div className='data'>
            <Prize />
            <Prize />
            <Prize />
            <Prize />
        </div>
    </div>
  )
}

export default AllWinners