import React, { useState } from 'react';
import { Pizza } from 'components/select-pizza/select-pizza.t';

import View from './select-pizza.view';

const SelectPizza: React.FunctionComponent<{ pizzas: Array<Pizza> }> = p => {
  console.log(p.pizzas);
  const [pizzasArray, setPizzasArray] = useState(p.pizzas.slice(0, 8));
  return <View {...{ pizzas: pizzasArray }} />;
};

export default SelectPizza;
