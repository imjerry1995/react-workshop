import React, {Component} from 'react'

const Item  = props => {
    const item = {...props}
    return (
        <div className="item">
          <p>奶茶 數量: {item.number2}</p>
          <button onClick={item.handleAdd2}>+</button>
          <button onClick={item.handleMinus2}>-</button>
        </div>
    )
}

export default Item