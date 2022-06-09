import "./ShopingCart.css";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "primereact/button";
import { DataScroller } from "primereact/datascroller";
import { Toast } from "primereact/toast";
import { removeItemFromCard } from "../../store/shoppingCart";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function ShoppingCart() {
  const toast = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const itemsOnCart = useSelector((state) => state.shoppingCart.value);

  const sumTotalPrice = () => {
    return itemsOnCart.length > 0
      ? itemsOnCart
          .map((item) => item.price)
          .reduce((prev, curr) => prev + curr, 0)
      : 0;
  };

  const showToast = (severityValue, summaryValue, detailValue) => {
    toast.current.show({
      life: 2000,
      severity: severityValue,
      summary: summaryValue,
      detail: detailValue,
    });
  };

  const handleRemoveFomCart = (item) => {
    showToast(
      "info",
      `Remove from cart`,
      `${item.name} has been removed to your card`
    );
    dispatch(removeItemFromCard(item));
  };

  const itemTemplate = (data) => {
    return (
      <div className="product-item">
        <img
          className="cart-image"
          src={data.image_url}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          alt={data.name}
        />
        <div className="product-detail">
          <div className="product-name">{data.name}</div>
          <i className="pi pi-tag product-category-icon"></i>
          <span className="product-category">{data.category}</span>
        </div>
        <div className="product-action">
          <span className="product-price">${data.price}</span>
          <Button
            className="p-button-danger"
            icon="pi pi-times"
            label="Remove from Cart"
            onClick={() => {
              handleRemoveFomCart(data);
            }}
          ></Button>
        </div>
      </div>
    );
  };
  return (
    <div className="datascroller">
      <Toast ref={toast} position="bottom-right" />

      <div className="card">
        <DataScroller
          className="mb-5 mt-5"
          value={itemsOnCart}
          itemTemplate={itemTemplate}
          rows={5}
          inline
          emptyMessage="Your shopping cart is empty"
          scrollHeight="500px"
          header="Shopping card list"
        />
      </div>
      <div className="text-center mb-5">
        <div className="mb-4 font-bold text-2xl">
          <span className="text-900">Total amount is </span>
          <span className="text-blue-600">${sumTotalPrice()}</span>
          <hr />
        </div>
        <Button
          className="p-button-info px-3 py-2 text-xl"
          icon="pi pi-arrow-circle-right p"
          label="Checkout"
          onClick={() => {
            navigate("/checkout");
          }}
          disabled={!itemsOnCart.length}
        ></Button>
      </div>
    </div>
  );
}

export default ShoppingCart;
