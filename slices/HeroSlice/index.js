import React from 'react';

import { RichText } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className="mt-60 mb-40">
    {slice.primary.caption1 ? (
      <RichText
        className="text-base-grey text-center text-[70px] sm:text-8xl font-bold hover:text-white mb-5"
        field={slice.primary.caption1}
      />
    ) : (
      <h2>Template slice, update me!</h2>
    )}

    {slice.primary.caption2 ? (
      <RichText
        className="text-base-grey text-center text-[70px] sm:text-8xl font-bold hover:text-white mb-5"
        field={slice.primary.caption2}
      />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    {slice.primary.caption3 ? (
      <RichText
        className="text-base-grey text-center text-[70px] sm:text-8xl  font-bold hover:text-white mb-5"
        field={slice.primary.caption3}
      />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <RichText
      className="text-white font-light text-center mt-14"
      field={slice.primary.content}
    />
  </section>
);

export default HeroSlice;
