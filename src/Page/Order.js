import React, {Component} from 'react' // 引入 react 及 component
import ShowItem from '../components/ShowItem'
import Done from '../components/Done'

class Order extends Component { // 所有元件都繼承 Component
  constructor(props){ // 建構式
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
    //localStorage.setItem("total",this.state.total);
    let itemObject = {
      name: "奶茶",
      total: this.state.total
    }
    itemObject = JSON.stringify(itemObject)
    localStorage.setItem("total", itemObject);
  }

  render(){ //渲染函數
    return (
      <div>  {/* return 只能回傳一個根節點 */}
        <ShowItem number={this.state.total} handleAdd={this.addTotal} handleMinus={this.minusTotal} isOrder={true}/>
        <Done handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default Order