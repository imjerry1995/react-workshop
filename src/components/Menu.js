import React, {Component} from 'react'

const Menu  = props => {
    const menu = {...props}
    return (
      
        <li className="menu"><a href="">{menu.title}</a></li>
  
    )
}

export default Menu