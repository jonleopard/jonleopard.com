import React from 'react';
import Section, { SectionTitle } from '../section';

export default () => (
  <div>
    <Section pt={[20, 40]}>
      <h1>
        Hello, my name is Jon.
        <br />
        I am a web developer based in Paris.
      </h1>
    </Section>
    <SectionTitle>
      Recent articles
    </SectionTitle>
  </div>
);
