# Step-0 新的 Project


## 打開 VSCode
*目前是 step-0 分支*
若還沒切換，使用以下指令
```
git checkout step-0
```


## 找到 App.js 檔案
這支檔案是一個 React 的**元件**
> 這個元件常是所有元件的集合地

在 React 中，元件是由 Class 撰寫出來，所有的元件都繼承 React 的 Component，因此必須引入 Component

```
import React, {Component} from 'react'
import logo from './logo.svg'; //引入圖片
import './App.css'; //引入css
import './index.css'; //引入css
```

元件主要構成有三: **1.Consturctor 2. render() 函數 3. 輸出元件**

1. **Constructor**
    ```
    constructor(props){
        super(props)

    }
    ```
    * 元件的建構式，元件生成的時候會執行的地方，也式管理狀態(State)的地方
2. **render() 函數**
    ```
    render(){
        return(
        ...
        )
    }
    ```
    * 元件渲染 UI 畫面的函式
        * 其中 return() 會回傳 JSX 
3. **輸出元件**
    ```
    export default App
    ```
    * 將元件輸出，讓其他元件使用組裝

## 找到 index.js 檔案
專案的進入點，所有 JS 檔案會打包到這一支 JS 檔
```
import React from 'react'; // 引入 react
import ReactDOM from 'react-dom'; // 引入 react-dom
import App from './App'; // 引入 App 元件
```
* 前兩行: 要使用 React 及 ReactDom ，分別引入套件
* 第三行: 引入 React 的元件
```
ReactDOM.render( <App />,document.getElementById('root'));
// 透過 React-dom 將 App 這個元件渲染到 html檔中 id 為 root 的節點
```
* ReactDom 是 React 將虛擬 Dom 連結真實 Dom 的方法，透過 render 函數傳入 id　為 root 的HTML 節點，渲染 `App` 這個元件

## 回到 App.js　檔案
* 找到 `render()`　函數
* 將原本註解的地方打開來 (快捷鍵:`Ctrl+/`)，其他地方註解起來
```
...

return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

      <div className="show-item">
        <div className="item">
          <p>奶茶 數量:1</p>
          <button>+</button>
        </div>
      </div>
    )
  }
...
```
* 存檔之後，原本開啟的 [https://localhost:3000](https://localhost:3000) 會重新整理，出現新畫面
![](https://github.com/imjerry1995/react-training-fetnet/blob/master/step-0.PNG?raw=true)

* 若沒有重新整理，表示忘記開 localhost 伺服器
* 在 VScode 的終端機下
    ```
    npm start
    ```
