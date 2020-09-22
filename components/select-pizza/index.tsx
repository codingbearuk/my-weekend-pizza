import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Pizza } from 'components/select-pizza/select-pizza.t';

import View from './select-pizza.view';
import { addToCartAction } from 'redux/actions/cart.action';

const SelectPizza: React.FunctionComponent<{ pizzas: Array<Pizza> }> = p => {
  const [pizzasArray, setPizzasArray] = useState(p.pizzas.slice(0, 8));
  const dispatch = useDispatch();

  const handleAddPizzaToCart = useCallback((pizza: Pizza, size: string) => {
    const pizzaToAdd = { ...pizza, size };
    dispatch(addToCartAction(pizzaToAdd));
  }, []);
  return <View {...{ pizzas: pizzasArray, handleAddPizzaToCart }} />;
};

export default SelectPizza;
