import React from "react";
import "./Burger.styles.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients.component";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredients key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => arr.concat(el), []);
    
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className='Burger'>
      <BurgerIngredients type='bread-top' />
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom' />
    </div>
  );
};

export default Burger;

