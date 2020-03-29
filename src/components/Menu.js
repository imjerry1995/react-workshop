import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const Menu  = props => {
    const menu = {...props}
    return (
      
        <li className="menu"><Link to={menu.link}>{menu.title}</Link></li>
  
    )
}

export default Menu