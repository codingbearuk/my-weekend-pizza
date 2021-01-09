import React, { useReducer, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showPopup } from "redux/actions/popup.action";
import { menuOFF } from "redux/actions/navigation.actions";
import post from "api-comunication/post";
import language from "language-sources";

import View from "./sign-up-menu.view";
import { reducer, Action, initialState } from "./sign-up-menu.state";
import { Body } from "./@sign-up-menu.t";

const SignUpMenu: React.FunctionComponent<{
  buttonRef: React.RefObject<HTMLDivElement>;
}> = (p) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isValidationOk, setValidation] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;

  const reduxDispatch = useDispatch();

  function handleInputs(value: string, name: string): void {
    if (name === "email") {
      dispatch({
        type: "insert email",
        payload: { email: value },
      });
    } else if (name === "password") {
      dispatch({
        type: "insert password",
        payload: { password: value },
      });
    } else if (name === "address") {
      dispatch({
        type: "insert address",
        payload: { address: value },
      });
    } else if (name === "city") {
      dispatch({
        type: "insert city",
        payload: { city: value },
      });
    } else if (name === "postcode") {
      dispatch({
        type: "insert postcode",
        payload: { postcode: value },
      });
    } else if (name === "phone") {
      dispatch({
        type: "insert phone",
        payload: { phone: value },
      });
    }
  }

  function handleValidationErrors(): boolean {
    const errors = state.errors;
    if (errors.email) return true;
    else if (errors.password) return true;
    else if (errors.address) return true;
    else if (errors.city) return true;
    else if (errors.postcode) return true;
    else if (errors.phone) return true;
    else return false;
  }

  async function handleRegister(): Promise<any> {
    setValidation(false);
    const isError: boolean = handleValidationErrors();
    if (!isError) {
      const body: Body = {
        email: state.email,
        password: state.password,
        address: state.address,
        city: state.city,
        postcode: state.postcode,
        phone: state.phone,
      };
      const res: any = await post("/register", body);
      console.log(res);
      if (res.status === "error") {
        setLoading(false);
        dispatch({
          type: "throw general error",
          payload: {
            generalError: res.msg,
          },
        });
      } else {
        setLoading(false);
        reduxDispatch(
          showPopup({
            title: language.signUp.popup.title,
            msg: language.signUp.popup.msg,
          })
        );
        reduxDispatch(menuOFF());
      }
    } else setLoading(false);
  }

  // error handlers for halidation
  const throwError = (type: string): void => {
    dispatch({
      type: "throw error",
      payload: {
        errorType: type,
      },
    });
  };
  const releaseError = (type: string): void => {
    dispatch({
      type: "release error",
      payload: {
        errorType: type,
      },
    });
  };

  function handleCreateAccountButton(): void {
    setLoading(true);
    // regular expressions
    const mailRegEx: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegEx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const postcodeRegEx: RegExp = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    const phoneRegEx: RegExp = /(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}/;

    // validation

    if (!mailRegEx.test(state.email)) throwError("email");
    else if (mailRegEx.test(state.email)) releaseError("email");

    if (!passwordRegEx.test(state.password)) throwError("password");
    else if (passwordRegEx.test(state.password)) releaseError("password");

    if (state.address.length <= 0) throwError("address");
    else if (state.address.length > 0) releaseError("address");

    if (state.city.length === 0) throwError("city");
    else if (state.city.length > 0) releaseError("city");

    if (!postcodeRegEx.test(state.postcode)) throwError("postcode");
    else if (postcodeRegEx.test(state.postcode)) releaseError("postcode");

    if (!phoneRegEx.test(state.phone)) throwError("phone");
    else if (phoneRegEx.test(state.phone)) releaseError("phone");

    setValidation(true);
  }

  useEffect(() => {
    if (isValidationOk) handleRegister();
  }, [isValidationOk]);

  return (
    <View
      {...{
        positionLeft,
        buttonWidth,
        handleInputs,
        handleCreateAccountButton,
        isLoading,
      }}
      errors={state.errors}
    />
  );
};

export default SignUpMenu;
