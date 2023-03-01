import React from 'react';

import { RichText } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className="mt-52 mb-40 flex text-center flex-col justify-center items-center">
    {slice.primary.caption1 ? (
      <RichText
        className="text-base-grey text-center text-[70px] sm:text-[88px] h-[107px] font-bold hover:text-white w-[420px]"
        field={slice.primary.caption1}
      />
    ) : (
      <h2>Template slice, update me!</h2>
    )}

    {slice.primary.caption2 ? (
      <RichText
        className="text-base-grey text-center text-[70px] sm:text-[88px] h-[107px] font-bold hover:text-white w-[420px]"
        field={slice.primary.caption2}
      />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    {slice.primary.caption3 ? (
      <RichText
        className="text-base-grey text-center text-[70px] sm:text-[88px] h-[107px]  font-bold hover:text-white w-[420px]"
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
