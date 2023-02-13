import React from 'react';

import { Box, RichText } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @param { DescriptionProps }
 */
const Description = ({ slice }) => (
  <section className="bg-[#f5f5f5]  flex flex-col justify-center items-center py-60">
    <Box className="max-w-[859px]">
      <span>
        {slice.primary.title ? (
          <RichText
            className="font-bold text-2xl text-center mb-9"
            field={slice.primary.title}
          />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.subtitle ? (
        <RichText
          className="text-center text-black font-light text-4xl mb-9"
          field={slice.primary.subtitle}
        />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}

      {slice?.items?.map((item, i) => (
        <Box key={i} className="px-3">
          <RichText
            className="text-center mb-4 text-[14px] md:text-base"
            field={item.description}
          />
        </Box>
      ))}
    </Box>
  </section>
);

export default Description;
