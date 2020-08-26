import React, { FunctionComponent } from "react";

import BasicLayout from "../layouts/basic.layout";
import Navbar from "components/navbar";
import WelcomeScreen from "components/welcome-screen";

const IndexPage: FunctionComponent = () => {
  return (
    <BasicLayout>
      <Navbar />
      <WelcomeScreen />
    </BasicLayout>
  );
};

export default IndexPage;
