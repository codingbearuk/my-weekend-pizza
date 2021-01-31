import React from 'react';

import View from './how-to-find-us.view';

const HowToFindUs: React.FunctionComponent<{ id: string }> = p => {
  const details = {
    title: 'My Weekend Pizza',
    address: '2 Queen St',
    postcode: 'LL11 1AP',
    city: 'Wrexham',
    phone: '+44 7804492329',
    email: 'contact@myweekendpizza.co.uk',
  };

  return View({ details, id: p.id });
};

export default HowToFindUs;
