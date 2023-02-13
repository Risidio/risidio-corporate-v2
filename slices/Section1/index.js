import React from 'react';
import { Box, RichText, Button } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.SectionSliceSlice} SectionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionSliceSlice>} SectionSliceProps
 * @param { SectionSliceProps }
 */
const SectionSlice = ({ slice }) => {
  return (
    <>
      <Box className="mb-16">
        <Box className="h-48 w-0 border-l-[0.1px] m-auto border-[#ffffff80] border-solid"></Box>
      </Box>

      <Box className="text-center m-auto mb-96">
        <span className="title">
          {slice.primary.title ? (
            <RichText
              className="text-white font-bold text-2xl mb-5"
              field={slice.primary.title}
            />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>

        {slice.primary.subtitle ? (
          <RichText
            className="text-white font-medium text-[1rem] mt-9 mb-7"
            field={slice.primary.subtitle}
          />
        ) : (
          <p>Problem Solvers in the Creative Industries</p>
        )}
        {slice.primary.content ? (
          <Box className="max-w-[45rem] m-auto">
            <span className="text-white font-light text-[20px]  mb-5">
              {slice.primary.content}
            </span>
          </Box>
        ) : (
          ''
        )}
        {slice.primary.description ? (
          <Box className="max-w-[43.5rem] m-auto">
            <RichText
              className="text-white font-light mt-7 text-[20px] mb-5"
              field={slice.primary.description}
            />
          </Box>
        ) : (
          <p></p>
        )}
        <Box className="w-80 m-auto mt-10 flex justify-between">
          <Button className="bg-primary font-semibold hover:bg-white hover:text-primary rounded-full px-10">
            About Us
          </Button>
          <Button className="bg-zinc-400/[.4] text-primary font-semibold hover:bg-white from-slate-100 rounded-full px-10">
            Our Work
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default SectionSlice;
