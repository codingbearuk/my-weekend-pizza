import React from 'react';
import Title from 'components/UI/title';
import language from 'language-sources';
import Sauce from 'components/UI/sauce';
import Separator from 'components/UI/separator';

import { Container, SaucesContainer } from './select-sauce.styles';
import { Sauce as SauceType } from './select-sauce.t';

const View: React.FunctionComponent<{
  sauces: Array<SauceType>;
  handleAddSauceToCart: (sauce: SauceType, amount: number) => void;
  id: string;
}> = p => {
  return (
    <Container id={p.id}>
      <Title imageName='sauce-red@2x.png'>{language.selectSauce.title}</Title>
      <Separator height={20} />
      <SaucesContainer>
        {p.sauces.map(sauce => (
          <Sauce key={sauce._id} sauce={sauce} callback={p.handleAddSauceToCart} />
        ))}
      </SaucesContainer>
      <Separator height={20} />
    </Container>
  );
};

export default View;
