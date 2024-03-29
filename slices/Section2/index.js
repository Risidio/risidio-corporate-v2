import React from 'react';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.Section2Slice} Section2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section2Slice>} Section2Props
 * @param { Section2Props }
 */
const Section2 = ({ slice }) => (
  <section>
    <span>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <div></div>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <div></div>
    )}
  </section>
);

export default Section2;
