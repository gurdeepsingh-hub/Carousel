import React from "react";
import "./item.css";

const Item = ({ Item }) => {
  return (
    <div className="item" key={Item.id}>
      <img src={Item.img} alt="" />
      <h1 className="content">{Item.content}</h1>
    </div>
  );
};

export default Item;
