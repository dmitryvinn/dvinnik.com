import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://twitter.com/DmitryVinnik"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link
          href="https://github.com/dmitryvinn"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/dmitry-vinnik/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
