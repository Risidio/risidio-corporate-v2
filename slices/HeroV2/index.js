import React from 'react';

import { RichText, Box } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.HeroV2Slice} HeroV2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroV2Slice>} HeroV2Props
 * @param { HeroV2Props }
 */
const HeroV2 = ({ slice }) => (
  <section className="flex flex-col justify-center items-center  text-center bg-susta-bg bg-no-repeat bg-cover bg-center h-[100vh]">
    <Box className="pb-40 pt-10">
    <Box>
      {slice.primary.title ? (
        <RichText
          className="text-susta-blue text-lg mb-7 mt-4 mr-10 tracking-wider"
          field={slice.primary.title}
        />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </Box>
    {slice.primary.description ? (
      <RichText
        className="text-white text-lg font-light mr-10  md:text-[22px] max-w-xs sm:max-w-full"
        field={slice.primary.description}
      />
      
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    </Box>
  </section>
);

export default HeroV2;
