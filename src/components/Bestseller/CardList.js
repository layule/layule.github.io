import React from "react";
import { items } from "../../pages/BestselleItem";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="card-list">
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
