import React from "react";
import Menu from "components/UI/menu";
import Input from "components/UI/input";
import ArrowButton from "components/UI/arrow-button";
import Separator from "components/UI/separator";
import language from "language-sources";
import Loading from "components/UI/loading-arrow-button";

import { Container, ButtonContainer, ErrorBox } from "./sign-up-menu.styles";
import { InputType } from "./@sign-up-menu.t";
import { Errors } from "./sign-up-menu.state";

const View: React.FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
  errors: Errors;
  handleInputs: (value: string, name: string) => void;
  handleCreateAccountButton: () => void;
  isLoading: boolean;
}> = (p) => {
  const inputs: Array<InputType> = [
    {
      name: "email",
      title: language.signUp.email,
      iconName: "PersonFill",
      type: "text",
    },
    {
      name: "password",
      title: language.signUp.password,
      iconName: "LockFill",
      type: "password",
    },
    {
      name: "address",
      title: language.signUp.address,
      iconName: "HouseDoorFill",
      type: "text",
    },
    {
      name: "city",
      title: language.signUp.city,
      iconName: "SignpostFill",
      type: "text",
    },
    {
      name: "postcode",
      title: language.signUp.postcode,
      iconName: "SignpostSplitFill",
      type: "text",
    },
    {
      name: "phone",
      title: language.signUp.phone,
      iconName: "TelephoneFill",
      type: "text",
    },
  ];

  return (
    <Menu positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <Container>
        {inputs.map((input: InputType) => (
          <React.Fragment key={input.title}>
            <Input
              iconName={input.iconName}
              title={input.title}
              callback={p.handleInputs}
              type={input.type}
              name={input.name}
            />
            {p.errors[input.name] && (
              <ErrorBox>{language.signUp.errors[input.name]}</ErrorBox>
            )}
            <Separator height={10} />
          </React.Fragment>
        ))}
        <Separator height={20} />
        {p.errors.general && (
          <React.Fragment>
            <ErrorBox>{p.errors.general}</ErrorBox>
            <Separator height={20} />
          </React.Fragment>
        )}
        <ButtonContainer>
          {p.isLoading ? (
            <Loading />
          ) : (
            <ArrowButton onClick={p.handleCreateAccountButton}>
              {language.signUp.button}
            </ArrowButton>
          )}
        </ButtonContainer>
      </Container>
    </Menu>
  );
};

export default View;
