import React, {Component} from 'react'

const Item  = props => {
    const item = {...props}
    return (
        <div className="item">
          <p>奶茶 數量: {item.number2}</p>
          
          {
            //三元表達式
            props.isOrder ? 
            <div> 
              <button onClick={item.handleAdd2}>+</button>
              <button onClick={item.handleMinus2}>-</button>
            </div> : ""
          }

          {/* {
            //短路求值法
            props.isOrder && 
            <div> 
              <button onClick={item.handleAdd2}>+</button>
              <button onClick={item.handleMinus2}>-</button>
            </div>           
          } */}
          
        </div>
    )
}

export default Item