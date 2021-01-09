import React from 'react';
import Title from 'components/UI/title';
import language from 'language-sources';
import { PhoneFill, At } from 'react-bootstrap-icons';
import Separator from 'components/UI/separator';

import { Container, ContentContainer, MapContainer, DetailsContainer } from './how-to-find-us.styled';

interface ViewType {
  id: string;
  details: {
    title: string;
    address: string;
    postcode: string;
    city: string;
    phone: string;
    email: string;
  };
}

const View: React.FunctionComponent<ViewType> = p => {
  return (
    <Container id={p.id}>
      <Title imageName='map.svg'>{language.howToFindUs.title}</Title>
      <ContentContainer>
        <MapContainer>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d599.6342363557985!2d-2.993928170755841!3d53.04665899874483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDAyJzQ4LjAiTiAywrA1OSczNi4yIlc!5e0!3m2!1spl!2suk!4v1605270563757!5m2!1spl!2suk'
            width='600'
            height='450'
            aria-hidden='false'
          ></iframe>
        </MapContainer>
        <DetailsContainer>
          <h2>{p.details.title}</h2>
          <h3>{p.details.address}</h3>
          <h3>{p.details.city}</h3>
          <h3>{p.details.postcode}</h3>
          <Separator height={30} />
          <div>
            <PhoneFill />
            <Separator width={5} />
            <p>{p.details.phone}</p>
          </div>
          <div>
            <At />
            <Separator width={5} />
            <p>{p.details.email}</p>
          </div>
        </DetailsContainer>
      </ContentContainer>
    </Container>
  );
};

export default View;
