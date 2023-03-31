import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact'>
        <p>Phone: (+254)-720-345-654</p>
        <p>Email: motorworldkenya@nairobi.com</p>
        <p>Address: 5th Street, Upperhill</p>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default Contact