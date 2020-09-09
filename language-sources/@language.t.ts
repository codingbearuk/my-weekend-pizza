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
};

export default Language;
