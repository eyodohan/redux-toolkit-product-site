import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  remove,
  increase,
  decrease,
  getTotal,
} from "../features/product/productSlice";

const ProductItem = ({ id, title, imgURL, price, amount }) => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(true);
  const removeProduct = (id) => {
    setChange(!change);
    console.log(change);
    dispatch(remove(id));
  };
  const increaseAmount = (id) => {
    dispatch(increase(id));
    setChange(!change);
  };

  const decreaseAmount = () => {
    dispatch(decrease(id));
    setChange(!change);
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [change]);

  return (
    <article className="cart-item">
      <img src={imgURL} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeProduct(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increaseAmount(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decreaseAmount(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
