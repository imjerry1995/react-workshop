import React, {Component} from 'react'
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
        <div className="item">
          <p>奶茶 數量: {this.state.total}</p>
          <button onClick={this.addTotal}>+</button>
          <button onClick={this.minusTotal}>-</button>
        </div>
      </div>
    )
  }
}

export default App