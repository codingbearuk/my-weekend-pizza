import React from "react";
import Menu from "components/UI/menu";
import Input from "components/UI/input";
import ArrowButton from "components/UI/arrow-button";
import Separator from "components/UI/separator";
import language from "language-sources";

import { Container, ButtonContainer } from "./sign-up-menu.styles";
import { InputType } from "./@sign-up-menu.t";

const View: React.FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
  handleInputs: (value: string, name: string) => void;
}> = (p) => {
  const inputs: Array<InputType> = [
    {
      title: language.signUp.email,
      iconName: "PersonFill",
      type: "text",
    },
    {
      title: language.signUp.password,
      iconName: "LockFill",
      type: "password",
    },
    {
      title: language.signUp.address,
      iconName: "HouseDoorFill",
      type: "text",
    },
    {
      title: language.signUp.city,
      iconName: "SignpostFill",
      type: "text",
    },
    {
      title: language.signUp.postcode,
      iconName: "SignpostSplitFill",
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
            />
            <Separator height={10} />
          </React.Fragment>
        ))}
        <Separator height={20} />
        <ButtonContainer>
          <ArrowButton onClick={() => {}}>{language.signUp.button}</ArrowButton>
        </ButtonContainer>
      </Container>
    </Menu>
  );
};

export default View;
