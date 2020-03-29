import React, {Component} from 'react'
import Item from './components/Item'
import logo from './logo.svg';
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

  render(){
    return (

      <div className="show-item">
        <Item number={this.state.total} handleAdd={this.addTotal} handleMinus={this.minusTotal}/>
      </div>
    )
  }
}

export default App