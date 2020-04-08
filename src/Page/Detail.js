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

  componentDidMount() {
    if (localStorage.getItem("data")) {
      const result = JSON.parse(localStorage.getItem("data"))
      //console.log(result)
      this.setState({
        total: result.total
      })
    }
  }

  componentDidUpdate() {
    console.log("Detail:元件觸發更新，更新完後掛載")
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