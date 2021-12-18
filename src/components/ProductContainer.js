import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProduct,
  getTotal,
  selectProduct,
} from "../features/product/productSlice";
import ProductItem from "./ProductItem";

const ProductContainer = () => {
  const { product, total } = useSelector(selectProduct);
  const [change, setChange] = useState(true);
  const dispatch = useDispatch();

  const clear = () => {
    setChange(!change);
    dispatch(clearProduct());
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [change]);

  if (product.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {product.map((item, index) => {
          return <ProductItem key={index} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clear}>
          clear product
        </button>
      </footer>
    </section>
  );
};

export default ProductContainer;
