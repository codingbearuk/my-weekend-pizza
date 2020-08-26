import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";

import View from "./cart.view";

const Cart: FunctionComponent<{ iconSize: number; numberSize?: number }> = ({
  iconSize,
  numberSize,
}) => {
  const numberOfItems = useSelector((s: RootState) => s.cart.length);
  return (
    <View
      numberOfItems={numberOfItems}
      size={iconSize}
      numberSize={numberSize}
    />
  );
};

export default Cart;
