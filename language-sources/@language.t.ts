type Language = {
  navbar: {
    signIn: string;
    signUp: string;
  };
  login: {
    login: string;
    password: string;
    button: string;
    loading: string;
  };
  signUp: {
    email: string;
    password: string;
    address: string;
    city: string;
    postcode: string;
    phone: string;
    button: string;
    errors: {
      email: string;
      password: string;
      address: string;
      city: string;
      postcode: string;
      phone: string;
    };
    popup: {
      title: string;
      msg: string;
    };
  };
  menu: {
    header: string;
  };
  userMenu: {
    logout: string;
  };
  selectPizza: {
    title: string;
    small: string;
    medium: string;
    large: string;
  };
  selectSauce: {
    title: string;
  };
  cart: {
    title: string;
    button: string;
    modal: {
      title: string;
      title2: string;
      msg: string;
      msg2: string;
    };
  };
  finishAndPay: {
    firstStepTitle: string;
    secondStepTitle: string;
    thirdStepTitle: string;
    thirdStepSubTitle: string;
    firstStepButton: string;
    secondStepButton: string;
    thirdStepButton: string;
    deliveryAddress: string;
    changeAddress: string;
    cancel: string;
    submit: string;
    plusDelivery: string;
    deliveryPrice: string;
    totalPriceToPay: string;
    inputs: {
      nameOnCard: string;
      cardNo: string;
      express: string;
      cvv: string;
    };
    alert: string;
    loading: string;
    complete: {
      title: string;
      content: string;
      info: string;
      button: string;
    };
    cancelWindow: {
      title: string;
      content: string;
    };
  };
};

export default Language;
