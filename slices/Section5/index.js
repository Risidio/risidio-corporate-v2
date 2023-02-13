import React from 'react';

import { Box, RichText } from '../../components/base';
import Card from '../../components/shared/card';

/**
 * @typedef {import("@prismicio/client").Content.Section5Slice} Section5Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section5Slice>} Section5Props
 * @param { Section5Props }
 */
const Section5 = ({ slice }) => (
  <section className="py-16">
    <Box className=" flex flex-col justify-center text-center items-center px-10">
      {slice.primary.title ? (
        <RichText
          className="text-black font-bold text-lg mb-10"
          field={slice.primary.title}
        />
      ) : (
        <h2>Template slice, update me!</h2>
      )}

      <RichText className="text-4xl font-light" field={slice.primary.title2} />
      <RichText className="text-4xl mt-8 mb-5" field={slice.primary.title3} />
      <RichText className="mb-5" field={slice.primary.subtitle} />
      <RichText
        className="max-w-2xl text-center"
        field={slice.primary.comment}
      />
    </Box>
    <Box className="flex flex-col lg:flex-row max-w-6xl m-auto">
      {slice?.items?.map((item, i) => (
        <Card
          key={i}
          content={item.description}
          title={item.title}
          url={item.icon.url}
          alt={item.icon.alt}
        />
      ))}
    </Box>
  </section>
);

export default Section5;
