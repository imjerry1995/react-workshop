import React, {Component} from 'react'
import Menu from './Menu'

class MenuList extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <ul className="menu-list">
        <Menu />
      </ul>
    )
  }
}

export default MenuList