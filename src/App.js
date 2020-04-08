import React, {Component} from 'react'
import MenuList from './components/MenuList'
import ShowItem from './components/ShowItem'
import Done from './components/Done'
import './App.css';
import './index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0
    }

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
        <ShowItem number={this.state.total} handleAdd={this.addTotal} handleMinus={this.minusTotal}/>
        <Done handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App