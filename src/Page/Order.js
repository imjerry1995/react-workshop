import React, {Component} from 'react'
import MenuList from '../components/MenuList'
import ShowItem from '../components/ShowItem'
import Done from '../components/Done'

class Order extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0
    }

  }
  componentDidMount() {
    console.log("Order:元件初始化掛載")
  }

  componentDidUpdate() {
    console.log("Order:元件觸發更新，更新完後掛載")
  }

  addTotal = () => {
    this.setState({
      total: this.state.total + 1
    })
  }

  minusTotal = () => {
    this.setState({
      total: this.state.total - 1
    })
  }

  handleSubmit = () =>{
    const data = {
      item: "奶茶",
      total: this.state.total
    }
    localStorage.setItem("data",JSON.stringify(data))
  }

  render(){
    return (
      <div className="app">
        <MenuList />
        <ShowItem number={this.state.total} handleAdd={this.addTotal} handleMinus={this.minusTotal} isOrder={true}/>
        <Done handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default Order