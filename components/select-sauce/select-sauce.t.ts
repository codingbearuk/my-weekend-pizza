export interface Sauce {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  __v: number;
}

export interface SelectSauceType {
  sauces: Array<Sauce>;
  id: string;
}
