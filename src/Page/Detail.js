import React, {Component} from 'react'
import MenuList from '../components/MenuList'
import ShowItem from '../components/ShowItem'

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0
    }

  }


  render(){
    return (
      <div className="app">
        <MenuList />
        <ShowItem number={this.state.total} handleAdd={this.addTotal} handleMinus={this.minusTotal}/>
      </div>
    )
  }
}

export default Detail