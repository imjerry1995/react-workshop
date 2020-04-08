import React, {Component} from 'react'
import Item from './Item'

class ShowItem extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="show-item">
        <Item number2={this.props.number} handleAdd2={this.props.handleAdd} handleMinus2={this.props.handleMinus} isOrder={this.props.isOrder}/>
      </div>
    )
  }
}

export default ShowItem