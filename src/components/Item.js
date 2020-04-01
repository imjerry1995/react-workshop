import React, {Component} from 'react'

const Item  = props => {
    const {number2, handleAdd2, handleMinus2} = props
    return (
        <div className="item">
          <p>奶茶 數量: {number2}</p>
          
          {
            //三元表達式
            props.isOrder ? 
            <div> 
              <button onClick={handleAdd2}>+</button>
              <button onClick={handleMinus2}>-</button>
            </div> : ""
          }

          {/* {
            //短路求值法
            props.isOrder && 
            <div> 
              <button onClick={handleAdd2}>+</button>
              <button onClick={handleMinus2}>-</button>
            </div>           
          } */}
          
        </div>
    )
}

export default Item