import React, {Component} from 'react'

const Item  = props => {
    const {number2, handleAdd2, handleMinus2} = props
    return (
        <div className="item">
          <p>奶茶 數量: {number2}</p>
          <button onClick={handleAdd2}>+</button>
          <button onClick={handleMinus2}>-</button>
        </div>
    )
}

export default Item