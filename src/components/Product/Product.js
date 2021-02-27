import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="single-product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="my-button"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
