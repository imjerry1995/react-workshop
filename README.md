# step-4 畫面元件化完成，開始調整 Menu 並加入 LocalStorage

## 檢視並處理資料
* 有完成作業的人，可能接著會這樣設計資料

*App.js* 檔案中的 constructor
```
constructor(props){
    super(props)
    this.state = {
      total: 0,
      menu: [
        {
          title: "點餐",
          link: "/"
        },
        {
          title: "明細",
          link: "/detail"
        },
      ]
    }
```
* 另外也把 menu 的資料也讓 state 管理
    * 會設計成物件陣列的原因是，陣列是存放一群相同性質的資料

### 思考看看:
>Menu 的資料，Item 有需要用到嗎?
Item 的資料，會影響 Menu 的資料嗎?

答案是不會，他們的資料彼此不需要溝通，因此

* Menu 的資料給 Menu 的容器元件管理


*MenuList.js* 檔案中的 constructor
```
constructor(props){
    super(props)
    this.state = {
      menu: [{
          title: "點餐",
          link: "/"
        },
        {
          title: "明細",
          link: "/detail"
        },
      ]
    }
}
```

## Menu 顯示多筆資料
接著，我們要試著把 MenuList 的資料取出來，以下來介紹一個常見取出陣列元素的方法

### map()
* map 方法
    * 針對陣列的每個元件去處理，處理完需要回傳一個值，這些回傳的值會組成一個新的陣列
* 常用在以下兩種情形
    * 列出每個元素
    * 針對特定條件，修改元素
* 寫法
    ```
    陣列.map(function(element, index){
        return 值
    })

    ```
    * element : 就是該陣列裡面的元素
    * index: 元素的索引值


更詳細的內容可以參考:
https://wcc723.github.io/javascript/2017/06/29/es6-native-array/


*MenuList.js* 檔案中的 render() 函數
```
render(){
    return (
      <ul className="menu-list">
        {
          this.state.menu.map((item, index) => {
            return <Menu key={index} menu={element}/>
          })
        }
      </ul>
    )
  }
```
* 我們要把每個存在陣列的元素拉出來，因此使用到 map()
* 這裡不需要使用變數去存印出來的陣列，因為要直接渲染

*Menu.js* 
```
const Menu  = props => {
    const {link,title} = props.menu
    return (
      <li className="menu"><a href={link}>{title}</a></li>
    )
}
```

* 透過解構賦值把傳進來的資料渲染出來


## 加入 localStorage
存在瀏覽器，過一段時間會消失

### 寫法
* 存入 localstroage
`localStorage.setItem(key, value) // key, value 都要是字串`
* 取出
`localStorage.getItem(key) //取出的值是字串`

* 傳入 JSON 物件 
透過 JSON.stringify() 方法，將要儲存的資料轉換為 JSON 格式的字串；要取出資料時，再透過 JSON.parse() 方法，將資料轉換回原本的格式

*App.js* 檔案 新增以下函數
```
handleSubmit = () => {
   const data = {
      item: "奶茶",
      total: this.state.total
    }
    localStorage.setItem("data",JSON.stringify(data))
  }
```


* 透過新增一個變數 `data` 來存要傳到 localstroage 的物件
* 要存入 localStorage 必須是字串，因此透過 `JSON.stringify` 語法將物件轉為字串
* 透過 `localStorage.setItem("data",JSON.stringify(data))` 語法，將 localStorage 的 key 設成 data ，裡面放我們剛轉換的字串


*Done.js* 檔案
```
import React, {Component} from 'react'

const Done = props => {

    return (
        <button className="done" onClick={props.handleSubmit}>OK</button>
    )
}

export default Done
```

* Done 元件綁定父親元件的方法


