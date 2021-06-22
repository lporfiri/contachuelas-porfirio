/* eslint-disable prettier/prettier */
import React, { useState } from "react";

function ItemCount({ stock, onAdd, initial }) {

  let [count, setCount] = useState(initial);

  const addCount = () => {
    if (stock > 1 && count <= stock) {
      setCount(count++)
    }
  }

  return (
    <div>
      <button onClick={addCount}>+</button>
      {count}
      <button onClick={() => setCount(count > 1 && count - 1)}>-</button>

      <button onClick={onAdd}>Agregar al carrito</button>
    </div >
  )
}

export default ItemCount;
