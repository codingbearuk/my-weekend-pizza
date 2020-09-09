import Language from "./@language.t";

const eng: Language = {
  navbar: {
    signIn: "sign in",
    signUp: "sign up",
  },
  login: {
    login: "email address",
    password: "password",
    button: "sign in",
    loading: "sending data",
  },
  signUp: {
    email: "email address",
    password: "password",
    address: "address",
    city: "city/town",
    postcode: "postcode",
    phone: "phone",
    button: "create account",
    errors: {
      email: "this is not correct email format",
      password:
        "password should contain at least one digit, 1 lowercase character, 1 uppercase character, 1 special character and minimum 8 characters",
      address: "insert your address",
      city: "insert your city",
      postcode: "insert correct UK postal code",
      phone: "insert correct UK mobile phone number",
    },
    popup: {
      title: "Register",
      msg: "Your account has been succesfully created. Now you can sign in",
    },
  },
  menu: {
    header: "site menu",
  },
};

export default eng;
