import React, { useState, useCallback, useEffect, useRef } from 'react';
import CarretButton from 'components/UI/carret-button';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

import { Container, Description, Price, DisplayOnHover } from './sauce.styles';
import { Sauce as SauceType } from 'components/select-sauce/select-sauce.t';
import Separator from '../separator';

interface SauceComponent {
  sauce: SauceType;
  callback: (sauce: SauceType, amount: number) => void;
}

const Sauce: React.FunctionComponent<SauceComponent> = p => {
  const [isHover, setHover] = useState<boolean>(false);
  const device = useSelector((s: RootState) => s.device.resolution);

  const amountRef: React.RefObject<HTMLSelectElement> = useRef();

  const handleCarretButton = () => p.callback(p.sauce, Number(amountRef.current.value));

  return (
    <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} isHover={isHover}>
      <img src={`/images/sauces/${p.sauce.image}`} alt={p.sauce.name} />
      <h2>{p.sauce.name}</h2>
      <Description>{p.sauce.description}</Description>
      <Separator height={10} />
      <Price>£{p.sauce.price.toFixed(2)}</Price>
      {isHover || device === 'mobile' ? (
        <DisplayOnHover>
          <Form.Control ref={amountRef} as='select' size='sm'>
            <option>{1}</option>
            <option>{2}</option>
            <option>{3}</option>
            <option>{4}</option>
            <option>{5}</option>
          </Form.Control>
          <Separator width={15} />
          <CarretButton onClick={handleCarretButton} />
        </DisplayOnHover>
      ) : (
        <Separator height={80} />
      )}
    </Container>
  );
};

export default Sauce;
