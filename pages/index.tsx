import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers/index';
import GET from 'api-comunication/get';

import BasicLayout from '../layouts/basic.layout';
import PaymentSucces from 'components/payment-succes';
import Navbar from 'components/navbar';
import WelcomeScreen from 'components/welcome-screen';
import SelectPizza from 'components/select-pizza';
import SelectSauce from 'components/select-sauce';
import FinishAndPay from 'components/finish&pay';
import ChangeAddress from 'components/change-address';
import HowToFindUs from 'components/how-to-find-us';
import Footer from 'components/footer';

const IndexPage: NextPage<{ pizzas: any; sauces: any; payment?: any }> = p => {
  const isPaymentPageOpen = useSelector((s: RootState) => s.finishAndPay.isOpen);
  const isChangeAddressModalActive = useSelector((s: RootState) => s.changeAddress.isActive);

  return (
    <BasicLayout>
      <Head>
        <title>My weekend pizza</title>
        <link rel="shortcut icon" href="/images/pizza-logo@2x.png" />
      </Head>
      <Navbar />
      <WelcomeScreen />
      <SelectPizza pizzas={p.pizzas} id='pizzas' />
      <SelectSauce sauces={p.sauces} id='sauces' />
      <HowToFindUs id='find-us' />
      <Footer id='contact-us' />
      {isPaymentPageOpen && <FinishAndPay />}
      {p.payment && <PaymentSucces state={p.payment} />}
      {isChangeAddressModalActive && <ChangeAddress />}
    </BasicLayout>
  );
};

IndexPage.getInitialProps = async ctx => {
  const pizzas = await GET('/pizzas');
  const sauces = await GET('/sauces');
  const payment = ctx.query.payment;
  return { pizzas, sauces, payment };
};

export default IndexPage;
