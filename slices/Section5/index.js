import React from 'react';

import { Box, RichText } from '../../components/base';
import Card from '../../components/shared/card';

/**
 * @typedef {import("@prismicio/client").Content.Section5Slice} Section5Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section5Slice>} Section5Props
 * @param { Section5Props }
 */
const Section5 = ({ slice }) => {
  return (
    <section className="py-16 bg-bg-lighter bg-earth-bg bg-no-repeat bg-cover bg-white">
      <Box className=" grid grid-cols-6 gap-6 text-center px-10">
        <Box className="col-start-1 col-span-3 pt-20">
        <RichText
          className="text-governance text-1xl font-light"
          field={slice.primary.title3}
        />
        <RichText className="mb-5 text-lg font-light text-strategy" field={slice.primary.subtitle} />
        <RichText
          className="text-center text-base px-20"
          field={slice.primary.comment}
        />
        </Box>
        <Box className='col-end-7 col-span-3 '>
        {slice.primary.title ? (
          <RichText
            className="text-strategy font-light text-3xl mb-5"
            field={slice.primary.title}
          />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
        <RichText
          className="text-2xl leading-none	 font-extralight"
          field={slice.primary.title2}
        />
        <div className='flex justify-center'>
        <img className='h-96 w-192' src={slice.primary.earth.url} alt={slice.primary.earth.alt} />
        </div>
        
        
        </Box>
      </Box>
      
    </section>
  );
};

export default Section5;
