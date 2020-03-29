import React, {Component} from 'react'
import Menu from './Menu'

class MenuList extends Component {
  constructor(props){
    super(props)
    this.state = {
      links: [{
          title: "點餐",
          link: "/"
        },
        {
          title: "明細",
          link: "/detail"
        }
      ]
    }
  }

  render(){
    return (
      <ul className="menu-list">
        {
          this.state.links.map((item,index)=>{
            return <Menu key={index} title={item.title} link={item.link}/>
          })
        }
      </ul>
    )
  }
}

export default MenuList