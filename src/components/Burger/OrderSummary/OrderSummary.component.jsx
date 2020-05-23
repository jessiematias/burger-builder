import React, {Component} from "react";
import Button from "../../UI/Button/Button.component";

class OrderSummary extends Component {

  componentDidUpdate() {
    console.log('[OrderSummary] WillUpdate');
    
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {this.props.ingredients[igKey]}
      </li>
    ));
    return (
<>
      <h3>Your Order</h3>
      <p>Burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
  <p>Total: <strong>{this.props.price.toFixed(2)}</strong></p>
      <p>Continue to Check out</p>
      <Button btnType='Danger' clicked={this.props.purchaseCancelled} >CANCEL</Button>
      <Button btnType='Success' clicked={this.props.purchaseContinued} >CONTINUE</Button>
    </>
    )
  }

}

export default OrderSummary;
