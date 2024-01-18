import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
   <div className='n-wrapper'>
    <div className='n-left'>
        <div className='n-name'>Aman</div>
        <span>toggle</span>
    </div>
    <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experiences</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <button className="button n-button">Contact</button>
    </div>
   </div>
  )
}
