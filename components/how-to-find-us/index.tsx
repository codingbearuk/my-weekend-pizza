import React from 'react';

import View from './how-to-find-us.view';

const HowToFindUs: React.FunctionComponent<{ id: string }> = p => {
  const details = {
    title: 'My Weekend Pizza',
    address: '2 Queen St',
    postcode: 'LL11 1AP',
    city: 'Wrexham',
    phone: '+44 0000 00 00',
    email: 'example@email.com',
  };

  return View({ details, id: p.id });
};

export default HowToFindUs;
