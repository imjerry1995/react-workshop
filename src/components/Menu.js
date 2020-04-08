import React, {Component} from 'react'

const Menu  = props => {
		console.log(props)
		const {link,title} = props.menu
    return (
      <li className="menu"><a href={link}>{title}</a></li>
    )
}

export default Menu