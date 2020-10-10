const getPrice = (itemPrice: number, itemSize?: string, itemAmount?: number): number => {
  let price = itemPrice;
  if (itemSize) {
    switch (itemSize[0]) {
      case 's':
        return price;
      case 'm':
        return price + 3;
      case 'l':
        return price + 5;
    }
  } else {
    return price * itemAmount;
  }
};

export default getPrice;
