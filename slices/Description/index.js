import { useRouter } from 'next/router';
import React from 'react';
import { PrismicRichText } from '@prismicio/react'

import { Box, RichText } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @param { DescriptionProps }
 */
const Description = ({ slice }) => {
  const { pathname } = useRouter();
  return (
    
    <section
      className={`${
        pathname === '/sustainability' ? 'bg-crm-bg bg-white bg-no-repeat bg-fit' : 'bg-bg-lighter'
      }pt-20  md:pl-20 `}
    >
      <Box className="grid grid-rows-1  text-center justify-center items-center text-center md:relative md:grid md:grid-cols-6 gap-0 min-h-[100vh]">
      
      <Box className="max-w-[80%] md:max-w-[100%] m-auto pt-10 pb-20  grid grid-rows-1 text-center  md:absolute md:col-end-5 md:col-span-5 h-[] w-full object-cover object-right">
      
        <div className="md:w-fit border-b-2 border-susta-blue ">
          {slice.primary.title ? (
            <RichText
              className=" md:text-left text-black font-light tracking-wider	 text-4xl mb-5"
              field={slice.primary.title}
            />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </div>
        
       
        
        {slice?.items?.map((item, i) => (
          <Box key={i} className=" mt-5 ">
            <RichText
              className="md:text-left z-40 md:mb-4 md:w-[80%] text-[14px]"
              field={item.description}
            />
           
          </Box>
        ))}
        
        </Box>
        <Box className='  absolute md:z-20 bottom-0 left-0 col-start-1 col-span-7'>
        <img className='md:w-[90%]' src={slice.primary.tree.url} alt={slice.primary.tree.alt} />
        </Box> 
        
      </Box>  
        
    </section>
    
  );
};

export default Description;
