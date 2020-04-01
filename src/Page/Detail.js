import React, {Component} from 'react' // 引入 react 及 component
import MenuList from '../components/MenuList'
import ShowItem from '../components/ShowItem'

class Detail extends Component { // 所有元件都繼承 Component
  constructor(props){ // 建構式
    super(props)

    this.state = {
      total: 0
    }

  }

  componentDidMount() {
    if (localStorage.getItem("total")) {
      const result = JSON.parse(localStorage.getItem("total"))
      //console.log(result)
      this.setState({
        total: result.total
      })
    }
  }

  componentDidUpdate() {
    console.log("Detail:元件觸發更新，更新完後掛載")
  }

  render(){ //渲染函數
    return (
      <div className="app">
        <MenuList />
        <ShowItem number={this.state.total} />
      </div>
    )
  }
}

export default Detail