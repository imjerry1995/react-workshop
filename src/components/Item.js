import React, {Component} from 'react'

const Item  = props => {
    const {number, handleAdd, handleMinus} = {...props}
    return (
        <div className="item">
          <p>奶茶 數量: {number}</p>
          <button onClick={handleAdd}>+</button>
          <button onClick={handleMinus}>-</button>
        </div>
    )
}

export default Item