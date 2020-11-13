import React from 'react';

import View from './how-to-find-us.view';

const HowToFindUs: React.FunctionComponent<{}> = p => {
  const details = {
    title: 'My Weekend Pizza',
    address: '2 Queen St',
    postcode: 'LL11 1AP',
    city: 'Wrexham',
    phone: '+44 0000 00 00',
    email: 'example@email.com',
  };

  return View({ details });
};

export default HowToFindUs;
