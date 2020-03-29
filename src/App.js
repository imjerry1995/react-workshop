import React, {Component} from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import MenuList from './components/MenuList'
import './App.css';
import './index.css';
import Order from './Page/Order';
import Detail from './Page/Detail';

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
    let itemObject = {
      name: "奶茶",
      total: this.state.total
    }
    itemObject = JSON.stringify(itemObject)
    localStorage.setItem("total", itemObject)
  }

  render(){
    return (
      <BrowserRouter>
          <Switch>
            <div className="app">
              <MenuList />
              <Route exact path="/" component={Order} />
              <Route path="/detail" component={Detail} />
            </div>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App