import React from 'react';
import { NextPage } from 'next';

import BasicLayout from '../layouts/basic.layout';
import Navbar from 'components/navbar';
import WelcomeScreen from 'components/welcome-screen';
import SelectPizza from 'components/select-pizza';
import GET from 'api-comunication/get';
import { Pizza } from 'components/select-pizza/select-pizza.t';

const IndexPage: NextPage<{ pizzas: any }> = p => {
  return (
    <BasicLayout>
      <title>My weekend pizza</title>
      <Navbar />
      <WelcomeScreen />
      <SelectPizza pizzas={p.pizzas} />
    </BasicLayout>
  );
};

IndexPage.getInitialProps = async ctx => {
  const pizzas = await GET('/pizzas');
  return { pizzas };
};

export default IndexPage;
