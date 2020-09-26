import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import View from './select-sauce.view';
import { SelectSauceType, Sauce } from './select-sauce.t';
import { addToCartAction } from 'redux/actions/cart.action';

const SelectSauce: React.FunctionComponent<SelectSauceType> = p => {
  const dispatch = useDispatch();

  const handleAddSauceToCart = (sauce: Sauce, amount: number) => {
    const sauceToAdd = { ...sauce, amount };
    dispatch(addToCartAction(sauceToAdd));
  };

  return <View {...{ sauces: p.sauces, handleAddSauceToCart }} />;
};

export default SelectSauce;
