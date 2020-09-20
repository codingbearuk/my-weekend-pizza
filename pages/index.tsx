import React, { FunctionComponent } from 'react';

import BasicLayout from '../layouts/basic.layout';
import Navbar from 'components/navbar';
import WelcomeScreen from 'components/welcome-screen';
import SelectPizza from 'components/select-pizza';

const IndexPage: FunctionComponent = () => {
  return (
    <BasicLayout>
      <title>My weekend pizza</title>
      <Navbar />
      <WelcomeScreen />
      <SelectPizza />
    </BasicLayout>
  );
};

export default IndexPage;
