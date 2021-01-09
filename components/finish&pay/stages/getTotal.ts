import { CartItem } from 'redux/actions/cart.action';

import getPrice from './getPrice';

const getTotal = (cart: Array<CartItem>): number => {
  let prices: Array<number> = [];
  for (let item of cart) {
    const price = getPrice(item.price, item.size, item.amount);
    prices = [...prices, price];
  }
  let total: number = 0;
  for (let price of prices) total = total + price;
  return total;
};

export default getTotal;
