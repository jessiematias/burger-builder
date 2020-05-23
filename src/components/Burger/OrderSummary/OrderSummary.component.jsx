import React from "react";
import Button from "../../UI/Button/Button.component";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <>
      <h3>Your Order</h3>
      <p>Burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
  <p>Total: <strong>{props.price.toFixed(2)}</strong></p>
      <p>Continue to Check out</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled} >CANCEL</Button>
      <Button btnType='Success' clicked={props.purchaseContinued} >CONTINUE</Button>
    </>
  );
};

export default OrderSummary;
