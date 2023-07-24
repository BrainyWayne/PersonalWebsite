import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

// The Accomplishments component renders a section displaying personal accomplishments.
const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

// The data constant contains an array of accomplishment objects, each having a number and text property.
const data = [
  { number: 30, text: 'Open Source Projects'},
  { number: 1000, text: 'Students taught through Google DSC', },
  { number: 500, text: 'Twitter Followers', },
  { number: 5000, text: 'Github Stars', }
];

export default Accomplishments;
