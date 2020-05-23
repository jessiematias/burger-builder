import React from "react";
import "./BuildControls.styles.css";
import BuildControl from "./BuildControl/BuildControl.component";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

const BuildControls = props => (
  <div className='BuildControls'>
    <p>
      Price: <strong>{props.price.toFixed(2)} </strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button 
    disabled={!props.purchasable} 
    onClick={props.ordered}
    className='OrderButton'>
      PLACE ORDER
    </button>
  </div>
);

export default BuildControls;

//finished 18
