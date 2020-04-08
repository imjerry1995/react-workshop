# step-5 調整 Menu 並加入 LocalStorage 完成，加入明細頁面

## 新增明細頁面
![](https://github.com/imjerry1995/react-training-fetnet/blob/master/order1.png?raw=true)
* 到 src 資料夾底下新增 Page 資料夾
* Page 資料夾底下新增
    * Order.js
    * Detail.js


*Order.js* 檔案
```
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

export default Order
```
* 注意 class 跟 export 的名稱要改為 Order
* import 的元件要注意檔案位置

## 調整明細頁面

*Detail.js*
```
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
```
* 注意 class 跟 export 的名稱要改為 Detail
* import 的元件要注意檔案位置
* 這個元件不需要加、減以及送出功能，把功能移除
* 不需要 Done 元件，移除元件



