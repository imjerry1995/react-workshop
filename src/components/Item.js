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