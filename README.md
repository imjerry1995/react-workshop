# 作業一詳解：
![](https://i.imgur.com/pm8bfuO.png)

## 解析元件類型
* App.js (容器物件)
    * MenuList.js (容器物件)
        * Menu.js (展示物件)
    * ShowItem.js (容器物件)
        * Item.js (展示物件)
    * Done.js (展示物件)


## 撰寫元件
* 先佈局好 `App.js`
![](https://i.imgur.com/11N9A6s.png)

* 到 Components 資料夾新增相對應的元件
    * 開始撰寫元件 [由小到大原則]
    * `Menu.js`
        ```
        import React, {Component} from 'react'

        const Menu  = props => {
            return (
              <div> // 只能回傳一個節點，因此最外圍要有個根節點
                <li class="menu"><a href="">點餐</a></li>
                <li class="menu"><a href="">明細</a></li>
              </div>
            )
        }

        export default Menu
        ```
    * `MenuList.js` (要使用 Menu 記得 import 進去)
        ```
        import React, {Component} from 'react'
        import Menu from './Menu'

        class MenuList extends Component {
          constructor(props){
            super(props)

          }

          render(){
            return (
              <ul className="menu-list">
                <Menu />
              </ul>
            )
          }
        }

        export default MenuList
        ```
    * `Item.js`
        ```
        import React, {Component} from 'react'

        const Item  = props => {
            const item = {...props}
            return (
                <div className="item">
                  <p>奶茶 數量: {item.number}</p>
                  <button onClick={item.handleAdd}>+</button>
                  <button onClick={item.handleMinus}>-</button>
                </div>
            )
        }

        export default Item
        ```
    * `ShowItem.js` 
        ```
        import React, {Component} from 'react'
        import Item from './Item'

        class ItemList extends Component {
          constructor(props){
            super(props)

          }

          render(){
            return (
              <div class="show-item">
                <Item />
              </div>
            )
          }
        }

        export default ShowItem
        ```
    * `Done.js`
        ```
        import React, {Component} from 'react'

        const Done = props => {
            return (
                <button className="done">OK</button>
            )
        }

        export default Done
        ```
## 開始透過 props 傳遞 state
* 剛剛把程式碼都抽取成元件並組織好了（記得 import）
* 結構會變成以下這樣，記得 class 要改成 className (JSX 的語法)
![](https://i.imgur.com/ruVFQbu.png)
* **最終的 state 要傳到 Item 這個元件**，因此要先傳給 Item 的父親元件 ShowItem.js
    * 透過 props 傳遞 state 與方法
    (以下是 App.js 的 return 部分)
    ```
    return (
      <div className="app">
        <MenuList />
        <ShowItem number={this.state.total} handleAdd={this.addTotal} handleMinus={this.minusTotal}/>
        <Done />
      </div>
    )
    ```
    * `ShowItem.js` 的 return 部分
        ```
        return (
          <div class="show-item">
            <Item number2={this.props.number} handleAdd2={this.props.handleAdd} handleMinus2={this.props.handleMinus} />
          </div>
        )
        ```
        * 再透過 props 傳給 Item
    * `Item.js` 的 return 部分
        ```
        return (
            <div className="item">
              <p>奶茶 數量: {item.number2}</p>
              <button onClick={item.handleAdd2}>+</button>
              <button onClick={item.handleMinus2}>-</button>
            </div>
        )
        ```
        
    功能沒問題就大功告成囉！