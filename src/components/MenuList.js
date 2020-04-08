import React, {Component} from 'react'
import Menu from './Menu'

class MenuList extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: [
        {
          title: "點餐",
          link: "/"
        },
        {
          title: "明細",
          link: "/detail"
        },
      ]
    }

  }

  render(){
    return (
      <ul className="menu-list">
        {
          this.state.menu.map((element,index)=>{
            return <Menu key={index} menu={element}/>
          })
        }
      </ul>
    )
  }
}

export default MenuList