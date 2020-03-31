# step-2 奶茶 List 完成，開始元件化奶茶List

## 元件化
>奶茶(品項)與數量，當專案大之後這些品項會越來越多(重複)
因此我們可以把奶茶(品項)與數量，獨立出一個可重用的元件
* 在 src 資料夾底下新增一個 components 資料夾
* 在 components 底下將 `App.js` 檔案複製過去，改名為 `Item.js`，並修改 class 名稱


*components 底下的 `Item.js`*

```
import React, {Component} from 'react'


class Item extends Component {
  constructor(props){
    super(props)


  }


  render(){
    return (

      <div className="item">
          <p>奶茶 數量: {number}</p>
          <button onClick={handleAdd}>+</button>
          <button onClick={handleMinus}>-</button>
      </div>
    )
  }
}

export default Item

```

* 只需 import 需要的套件
* 展示物件不需要控制 state ，把 state 與 function 刪掉
* 指保留 Item 這部分的 UI


## 使用元件
* 回到 `App.js` ，引用剛剛建立的 Item 元件

*App.js 檔案*
```
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
        <Item />
      </div>
    )
  }
}

export default App
```

* 記得 import 剛剛建立的 Item 元件
* 並將原本 Item 相關的 HTML 替換成 Item 元件

## 使用 props 傳遞 state
* 透過 Props 屬性: 元件的溝通的媒介
    * State 是一層一層傳下去的
    * 透過 props 將父親元件的 state 及 方法傳給子元件

*App.js 檔案* 的 `render()` 部分

```
...
render(){
    return (

      <div className="show-item">
        <Item number={this.state.total} handleAdd={this.addTotal} handleMinus={this.addMinus}/>
      </div>
    )
 }
...
```

* Pros，自定義駝峰式命名，透過自訂的 props (類似HTML的attribute)，將父親元件的 state 或方法傳給子元件
    * number: 傳遞父親元件state控管的 `total` 的值
    * handleAdd: 傳遞父親元件的 `addTotal` 方法
    * handleMinus: 傳遞父親元件的 `minusTotal` 方法

## 子元件接收 state & 方法

### 解析 props 傳來的資料
*components 底下的 `Item.js`* 的 constructor

```
import React, {Component} from 'react'


class Item extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }
...

```
* 可以透過在建構式下 `console.log(props)`，檢視父親元件傳來甚麼資料
    * 攤開 props 其實長這樣
        ```
        {
            number: 0,
            handleAdd: ()=>{...}
            handleMinus: ()=>{}
        }
        
        ```
        * 確實就是父親元件的資料
### 把資料綁定在畫面上
同把 state 綁定在畫面上的道理一樣，只是換成把 props 綁定在畫面上

*components 底下的 `Item.js`* 的 `render()`
```
render(){
    return (

      <div className="item">
          <p>奶茶 數量: {this.props.number}</p>
          <button onClick={this.props.handleAdd}>+</button>
          <button onClick={this.props.handleMinus}>-</button>
      </div>
    )
  }
}
```

## 活用 ES6 語法: 解構賦值
* 複習
    ```
    const people = {
    name: "Jerry",
    age: 24 
    }

    const {name, age} = people
    console.log(name) //Jerry
    console.log(age) //24
    ```
* 將 props 用解構賦值來撰寫
```
render(){
    const {number, handleAdd, handleMinus} = this.props
    return (
      <div className="item">
          <p>奶茶 數量: {number}</p>
          <button onClick={handleAdd}>+</button>
          <button onClick={handleMinus}>-</button>
      </div>
    )
  }

```

## 改成 pure function component
> 由於展示元件通常不需要處理 state，因此用不到建構子，一般的元件如果數量一多，也是很耗效能。因此 React 設計出 function component 來解決這個問題


* 整個元件變成一個 function，回傳 UI

    ```
    import React, {Component} from 'react'

    const Item  = props => {
        const {number, handleAdd, handleMinus} = props
        return (
            <div className="item">
              <p>奶茶 數量: {number}</p>
              <button onClick={handleAdd}>+</button>
              <button onClick={handleMinus}>-</button>
            </div>
        )
    }

    export default Item
    ```
    * 由於沒有建構式，直接傳入 props，因此在使用 props 的時候不用 `this`
    * 還是要記得 export 元件
    * 優點
        * 簡潔、易讀
        * 提升效能

元件化~成功!
