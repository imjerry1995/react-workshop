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

  render(){
    return (

      <div className="show-item">
        <div className="item">
          <p>奶茶 數量: {this.state.total}</p>
          <button onClick={()=>{
            this.setState({
              total: this.state.total +1
            })
          }}>+</button>
          <button onClick={()=>{
            this.setState({
              total: this.state.total -1
            })
          }}>-</button>
        </div>
      </div>
    )
  }
}

export default App