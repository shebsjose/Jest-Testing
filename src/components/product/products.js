import "./styles.css";
import React from "react";
import { purchaseFunction } from "./api";


export const BuyItems = ({ title, slug }) => {
  return (  
      <div className="buyitems">
      <h2>{title}</h2>
      <button className="button" data-testid="sbutton" onClick={() => purchaseFunction(slug)} name = "sheba button">
        Buy Item
      </button>
    </div>
  );
} 

const Products = ({ items }) => {
  return (
    <div className="products">
      {items?.map(({ title, slug }) => (
        <BuyItems key={slug} title={title} slug={slug} />
      ))}
    </div>
  );
};

export default Products;
