import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
        <img src="https://tap-pencyinfra-prod.s3.amazonaws.com/nopainnogain/1676592923475.jpg" className='logoNavBar' />
            {}
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to='/productos/invierno'>Invierno</Link>
            <Link className='link' to='/productos/verano'>Verano</Link>
            {}
            <Link className='link' to='/cart'><CartWidget/></Link>
        </div>
    )
}
