import React from 'react';
import { NextPage } from 'next';

import BasicLayout from '../layouts/basic.layout';
import Navbar from 'components/navbar';
import WelcomeScreen from 'components/welcome-screen';
import SelectPizza from 'components/select-pizza';
import SelectSauce from 'components/select-sauce';
import GET from 'api-comunication/get';

const IndexPage: NextPage<{ pizzas: any; sauces: any }> = p => {
  return (
    <BasicLayout>
      <title>My weekend pizza</title>
      <Navbar />
      <WelcomeScreen />
      <SelectPizza pizzas={p.pizzas} />
      <SelectSauce sauces={p.sauces} />
    </BasicLayout>
  );
};

IndexPage.getInitialProps = async ctx => {
  const pizzas = await GET('/pizzas');
  const sauces = await GET('/sauces');
  return { pizzas, sauces };
};

export default IndexPage;
