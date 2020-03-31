# Step-1 開始做奶茶 List

## 加入 State 狀態管理員
* State 是 react 狀態管理員，撰寫 state 的位置在建構式(Constructor)上

    *App.js 檔案*
    ```
    constructor(props){
        super(props)
        this.state = {
          total: 0
        }
     }
    ```
    * state 所管理的資料型態，是為物件型態
    * 物件由{}包住，key-value pair
    * 這裡我們要控制奶茶的數量，因此設計一個key為total 0的奶茶數量

## 綁定到畫面上
* 透過 state 我們已經掌握數量，接著要把這個數量綁定到畫面上
    *App.js 檔案* `render()` 函數部分
    ```
    render(){
        return (
          <div className="show-item">
            <div className="item">
              <p>奶茶 數量: {this.state.total}</p>
              <button>+</button>
            </div>
          </div>
        )
      }
    ```

    * 運用物件取值方法，搭配 JSX ，將 state　綁定在畫面上
        * 透過`{}` 放置要撰寫 JS　的位置
        * `this.state.total` 物件取值方法，拿到 state 的資料
    * 存檔之後，可以發現頁面奶茶數量變成`0`
    * 可以試著將 state 數字改成別的數字

## 綁定方法
### 方法一:寫在元件上

*App.js 檔案* `render()` 函數部分
```
render(){
    return (
      <div className="show-item">
        <div className="item">
          <p>奶茶 數量: {this.state.total}</p>
          <button onClick={()=>{

          }}>+</button>
        </div>
      </div>
    )
  }
```
* 類似以前我們會在 HTML Tag 上綁定 `onclick` 事件，在 button 元素上使用 `onClick` (注意是駝峰式)，一樣透過`{}` 撰寫 JS　在裡面
    * `onClick` 屬性，React 會了解傳進來的 function 是當元素被點及之後要做的事情
    * 透過`{}` 撰寫 JS function，此處使用箭頭函式


### 方法二:將 function 獨立出來
撰寫在 `constructor()` 與`render()` 之間
* 這裡撰寫函式比較不同，要注意
* 由於我們這個函數是要綁定在
* (查一下)

    *App.js* 檔案
    ```
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
        
      }


      render(){
        return (

          <div className="show-item">
            <div className="item">
              <p>奶茶 數量: {this.state.total}</p>
              <button onClick={this.addTotal}>+</button>
            </div>
          </div>
        )
      }
    }

    export default App
    ```
    * addTotal 是函數的名稱，前面不需要宣告子(let, const 不需要)
    * 後面接著箭頭函式
    * 在 `render()`下，button 元素一樣透過 `onClick` 傳入function
        * 使用 `this.addTotal`
            * 這裡的 this 就是"這個元件"，所以是這個元件的 function

## 更改 state 值
絕對不是 ~~this.state = 新值~~ 這樣XD
* 在 React 中，要更動 state，**不能直接使用"指定"的方式**，要透過 `this.setState()` 函數改變

    ```
    this.setState({
        total: this.state.total+1
    })
    ```
    * `this.setState()` 傳入的是一個物件，React 會比對這個傳入的新的物件，來跟舊的 state 物件來比對，不同就會採用新的物件
    * 因此這裡的邏輯是，新的物件的 total 要等於 "目前的 state 的值+1"(this.state.total+1) 
    * 把這個`this.setState()` 函數放到我們觸發 button 就可以囉

*試著自己新增一個 -１的函數並綁定吧！*


