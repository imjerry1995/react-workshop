import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Menu  = props => {
		const {link,title} = props.menu
    return (
      <li className="menu"><Link to={link}>{title}</Link></li>
    )
}

export default Menu