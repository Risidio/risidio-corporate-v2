import React from 'react';
import { Img, RichText, Box, Button } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.Section4Slice} Section4Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section4Slice>} Section4Props
 * @param { Section4Props }
 */
const Section4 = ({ slice }) => (
  <section className="bg-bg-purple flex flex-col justify-center items-center py-48">
    {/* <Box className="max-w-[353px] w-full"> */}
    <Img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    {/* </Box> */}

    <span className="title">
      {slice.primary.title ? (
        <RichText
          className="text-white text-4xl font-light"
          field={slice.primary.title}
        />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>

    <Button className="bg-primary text-white font-base hover:bg-white hover:text-primary from-slate-100 rounded-full px-10 py-4 mt-20">
      Subscribe
    </Button>
  </section>
);

export default Section4;
