import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

function Shop() {
  const first10 = fakeData.slice(0, 10);
  let [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.key}
            product={product}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <button className="my-button">Review Your Order</button>
        </Cart>
      </div>
    </div>
  );
}

export default Shop;
