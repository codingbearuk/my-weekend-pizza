import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';

import BasicLayout from '../layouts/basic.layout';
import Navbar from 'components/navbar';
import WelcomeScreen from 'components/welcome-screen';
import SelectPizza from 'components/select-pizza';
import SelectSauce from 'components/select-sauce';
import GET from 'api-comunication/get';
import FinishAndPay from 'components/finish&pay';
import { RootState } from 'redux/reducers/index';

const IndexPage: NextPage<{ pizzas: any; sauces: any }> = p => {
  const isPaymentPageOpen = useSelector((s: RootState) => s.finishAndPay.isOpen);
  return (
    <BasicLayout>
      <title>My weekend pizza</title>
      <Navbar />
      <WelcomeScreen />
      <SelectPizza pizzas={p.pizzas} />
      <SelectSauce sauces={p.sauces} />
      {isPaymentPageOpen && <FinishAndPay />}
    </BasicLayout>
  );
};

IndexPage.getInitialProps = async ctx => {
  const pizzas = await GET('/pizzas');
  const sauces = await GET('/sauces');
  return { pizzas, sauces };
};

export default IndexPage;
