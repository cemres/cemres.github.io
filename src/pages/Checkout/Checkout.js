import "./Checkout.css";

import { Controller, useForm } from "react-hook-form";

import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { countriesList } from "../../data/countries";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useState } from "react";

require("dotenv").config();

const Checkout = () => {
  const [countries] = useState(countriesList);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const itemsOnCart = useSelector((state) => state.shoppingCart.value);

  const sumTotalPrice = () => {
    return itemsOnCart.length > 0
      ? itemsOnCart
          .map((item) => item.price)
          .reduce((prev, curr) => prev + curr, 0)
      : 0;
  };

  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    address: "",
    country: null,
    totalPrice: sumTotalPrice(),
    totalItemCount: itemsOnCart.length || 0,
    accept: false,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const sendEmail = (data) => {
    const {
      REACT_APP_EMAIL_JS_SERVICE_KEY,
      REACT_APP_EMAIL_JS_TEMPLATE_KEY,
      REACT_APP_EMAIL_JS_PUBLIC_KEY,
    } = process.env;
    emailjs
      .send(
        REACT_APP_EMAIL_JS_SERVICE_KEY,
        REACT_APP_EMAIL_JS_TEMPLATE_KEY,
        data,
        REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = (data) => {
    setFormData(data);
    setShowMessage(true);
    sendEmail(data);

    reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div className="form-demo">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Order has been placed!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your order has been placed under name <b>{formData.name}</b>;
            <br />
            Please check <b>{formData.email}</b> for order info.
          </p>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Checkout Form</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      disabled={!itemsOnCart.length}
                      id={field.name}
                      {...field}
                      autoFocus
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="name"
                  className={classNames({ "p-error": errors.name })}
                >
                  Name*
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address. E.g. example@email.com",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      disabled={!itemsOnCart.length}
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="email"
                  className={classNames({ "p-error": !!errors.email })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-phone" />
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required: "Phone number is required.",
                    pattern: {
                      value:
                        /^\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^\d{10}$|^1\s\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^(1\s?)?\(\d{3}\)(\s|-)?\d{3}-\d{4}$/i,
                      message: "Invalid phone number. Must be 10 digit",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      disabled={!itemsOnCart.length}
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="phoneNumber"
                  className={classNames({ "p-error": !!errors.phoneNumber })}
                >
                  Phone Number*
                </label>
              </span>
              {getFormErrorMessage("phoneNumber")}
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-credit-card" />
                <Controller
                  name="cardNumber"
                  control={control}
                  rules={{
                    required: "Card number is required.",
                    pattern: {
                      value:
                        /^(3[47][0-9]{13}|(6541|6556)[0-9]{12}|389[0-9]{11}|3(?:0[0-5]|[68][0-9])[0-9]{11}|65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})|63[7-9][0-9]{13}|(?:2131|1800|35\d{3})\d{11}|9[0-9]{15}|(6304|6706|6709|6771)[0-9]{12,15}|(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}|(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))|(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}|(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}|(62[0-9]{14,17})|4[0-9]{12}(?:[0-9]{3})?|(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}))$/i,
                      message: "Invalid credit/debit card number.",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      disabled={!itemsOnCart.length}
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="cardNumber"
                  className={classNames({ "p-error": !!errors.cardNumber })}
                >
                  Credit/Debit Card Number*
                </label>
              </span>
              {getFormErrorMessage("cardNumber")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Dropdown
                      disabled={!itemsOnCart.length}
                      id={field.name}
                      value={field.value}
                      onChange={(e) => field.onChange(e.value)}
                      options={countries}
                      optionLabel="name"
                    />
                  )}
                />
                <label htmlFor="country">Country</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="address"
                  control={control}
                  rules={{ required: "Address is required." }}
                  render={({ field, fieldState }) => (
                    <InputTextarea
                      disabled={!itemsOnCart.length}
                      id={field.name}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      autoResize
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="address"
                  className={classNames({ "p-error": errors.address })}
                >
                  Address*
                </label>
              </span>
              {getFormErrorMessage("address")}
            </div>
            <div className="field-checkbox">
              <Controller
                name="accept"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Checkbox
                    disabled={!itemsOnCart.length}
                    inputId={field.name}
                    onChange={(e) => field.onChange(e.checked)}
                    checked={field.value}
                    className={classNames({ "p-invalid": fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="accept"
                className={classNames({ "p-error": errors.accept })}
              >
                I agree to the terms and conditions*
              </label>
            </div>

            <Button
              type="submit"
              disabled={!itemsOnCart.length}
              label="Submit"
              className="mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
