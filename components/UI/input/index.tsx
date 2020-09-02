import React from "react";

import View from "./input.view";

const Input: React.FunctionComponent<{
  iconName: string;
  title: string;
  type?: string;
  callback: (value: string) => void;
}> = (p) => {
  function handleValueState(e: React.FormEvent<HTMLInputElement>): void {
    const value: string = e.currentTarget.value;
    p.callback(value);
  }

  return <View handleValueState={handleValueState} {...p} />;
};

export default Input;
