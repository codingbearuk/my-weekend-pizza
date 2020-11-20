import React, { useState } from 'react';

import View from './footer.view';

const Footer: React.FunctionComponent<{}> = p => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleInputs = (value: string, name: string): void => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };
  const handleSubmitForm = (): void => {
    if (!isLoading) {
      setLoading(true);
    }
  };

  return View({ handleInputs, handleSubmitForm, message, isLoading });
};

export default Footer;
