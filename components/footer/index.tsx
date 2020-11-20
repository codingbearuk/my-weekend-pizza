import React, { useState } from 'react';

import View from './footer.view';
import POST from 'api-comunication/post';

const Footer: React.FunctionComponent<{}> = p => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSent, setSent] = useState<boolean>(false);

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
  const handleSubmitForm = async (): Promise<void> => {
    setSent(false);
    if (!isLoading) {
      setLoading(true);
      interface Response extends Object {
        status?: string;
      }
      const res: Response = await POST('/create-new-message', { name, email, subject, message });
      if (res.status === 'ok') {
        setLoading(false);
        setSent(true);
      } else setLoading(false);
    }
  };

  return View({ handleInputs, handleSubmitForm, message, isLoading, isSent });
};

export default Footer;
