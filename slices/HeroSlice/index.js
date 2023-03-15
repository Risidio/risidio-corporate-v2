import React from 'react';

import { Box, RichText, Text } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className="mt-52 mb-40 flex text-center flex-col justify-center items-center">
    {slice.primary.caption1 ? (
      <Box className="flex sm:w-[420px] group">
        <Text className=" text-[70px] sm:text-[88px] h-20 sm:h-[107px] font-bold before:content-['ı'] before:text-base-grey  text-[#fda800] before:absolute group-hover:before:text-white">
          i
        </Text>
        <RichText
          className="text-base-grey text-center text-[70px] h-20 sm:text-[88px] sm:h-[107px] font-bold hover:text-white "
          field={slice.primary.caption1}
        />
      </Box>
    ) : (
      <h2>Template slice, update me!</h2>
    )}

    {slice.primary.caption2 ? (
      <Box className="flex justify-end pr-8 sm:pr-4 w-[420px] group">
        <Text className=" text-[70px] sm:text-[88px] sm:h-[107px] h-20 font-bold before:content-['ı'] before:text-base-grey  text-[#5fbdc1] before:absolute group-hover:before:text-white">
          i
        </Text>
        <RichText
          className="text-base-grey text-center text-[70px] h-20 sm:text-[88px] sm:h-[107px] font-bold hover:text-white"
          field={slice.primary.caption2}
        />
      </Box>
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    {slice.primary.caption3 ? (
      <Box className="flex justify-center w-[420px] group">
        <Text className=" text-[70px] sm:text-[88px] sm:h-[107px] font-bold before:content-['ı'] before:text-base-grey  text-[#e9493d] before:absolute group-hover:before:text-white">
          i
        </Text>
        <RichText
          className="text-base-grey text-center text-[70px] sm:text-[88px] sm:h-[107px]  font-bold hover:text-white"
          field={slice.primary.caption3}
        />
      </Box>
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <RichText
      className="text-white font-light mt-10 text-center sm:mt-14"
      field={slice.primary.content}
    />
  </section>
);

export default HeroSlice;
