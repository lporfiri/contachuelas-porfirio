import React from "react";

function ItemListContainer(greeting) {
  return (
    <div
      style={{
        width: "10em",
        height: "5em",
        background: "green",
        border: "black",
      }}
    >
      {(greeting = "Hola")}
    </div>
  );
}

export default ItemListContainer;
