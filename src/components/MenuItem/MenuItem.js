import "./MenuItem.css";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { addItemToCart } from "../../store/shoppingCart";
import { generateShortUuid } from "../../helpers/generateShortUuid";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function MenuItem({ item }) {
  const dispatch = useDispatch();

  const toast = useRef(null);

  const handleAddToCart = (item) => {
    showToast(
      "success",
      `Add to cart`,
      `1 ${item.name} has been added to your card`
    );
    dispatch(
      addItemToCart({
        id: generateShortUuid(),
        ...item,
      })
    );
  };

  const showToast = (severityValue, summaryValue, detailValue) => {
    toast.current.show({
      life: 2000,
      severity: severityValue,
      summary: summaryValue,
      detail: detailValue,
    });
  };

  const header = (
    <img
      alt="Card"
      src={item.image_url}
      className="menu-item-image"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  const footer = (
    <span>
      <Button
        label="Add to cart"
        icon="pi pi-shopping-cart"
        onClick={() => handleAddToCart(item)}
        style={{ marginRight: ".25em" }}
      />
    </span>
  );
  return (
    <div>
      <Toast ref={toast} position="bottom-right" />
      <Card
        header={header}
        title={item.name}
        subTitle={item.category}
        footer={footer}
      >
        ${item.price}
      </Card>
    </div>
  );
}

export default MenuItem;
