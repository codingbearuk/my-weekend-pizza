import Language from './@language.t';

const eng: Language = {
  navbar: {
    signIn: 'sign in',
    signUp: 'sign up',
  },
  login: {
    login: 'email address',
    password: 'password',
    button: 'sign in',
    loading: 'sending data',
  },
  signUp: {
    email: 'email address',
    password: 'password',
    address: 'address',
    city: 'city/town',
    postcode: 'postcode',
    phone: 'phone',
    button: 'create account',
    errors: {
      email: 'this is not correct email format',
      password:
        'password should contain at least one digit, 1 lowercase character, 1 uppercase character, 1 special character and minimum 8 characters',
      address: 'insert your address',
      city: 'insert your city',
      postcode: 'insert correct UK postal code',
      phone: 'insert correct UK mobile phone number',
    },
    popup: {
      title: 'Register',
      msg: 'Your account has been succesfully created. Now you can sign in',
    },
  },
  menu: {
    header: 'site menu',
  },
  userMenu: {
    logout: 'logout',
  },
  selectPizza: {
    title: 'select your pizza',
    small: 'small (9.5")',
    medium: 'medium (11.5") +£3',
    large: 'large (13.5") +£5',
  },
  selectSauce: {
    title: 'add a sauce',
  },
  cart: {
    title: 'my shoppings',
    button: 'finish and pay',
    modal: {
      title: 'you are not logged in!',
      title2: 'Ooops!',
      msg: 'you have to login to process the payment',
      msg2: 'your trolley is currently empty',
    },
  },
  finishAndPay: {
    firstStepTitle: 'order summary',
    secondStepTitle: 'delivery address',
    thirdStepTitle: 'payment',
    thirdStepSubTitle: 'total price to pay for this order',
    firstStepButton: 'submit my order',
    secondStepButton: 'go to payment',
    thirdStepButton: 'finnish and pay',
    deliveryAddress: 'My delivery address',
    changeAddress: 'change my address for this delivery',
    cancel: 'cancel address change',
    submit: 'submit address',
    plusDelivery: 'extra charge for delivery',
    inputs: {
      nameOnCard: 'name on card',
      cardNo: 'card number',
      express: 'expire date (MM/YY)',
      cvv: 'cvv code',
    },
    alert: 'getting location problem. Try again for several minutes',
    loading: 'please wait, processing transaction...',
  },
};

export default eng;
