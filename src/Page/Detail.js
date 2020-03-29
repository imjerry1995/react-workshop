import React, {Component} from 'react' // 引入 react 及 component
import ShowItem from '../components/ShowItem'

class Detail extends Component { // 所有元件都繼承 Component
  constructor(props){ // 建構式
    super(props)

    this.state = {
      total: 0
    }

  }

  render(){ //渲染函數
    return (
      <ShowItem number={this.state.total} />
    )
  }
}

export default Detail