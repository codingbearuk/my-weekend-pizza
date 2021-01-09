import React from "react";

import View from "./input.view";

const Input: React.FunctionComponent<{
  iconName: string;
  title: string;
  type?: string;
  name?: string;
  callback: (value: string, inputName?: string) => void;
}> = (p) => {
  function handleValueState(e: React.FormEvent<HTMLInputElement>): void {
    const value: string = e.currentTarget.value;
    const inputName: string = e.currentTarget.name;
    p.callback(value, inputName);
  }

  return <View handleValueState={handleValueState} {...p} />;
};

export default Input;
