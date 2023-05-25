import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { useRouter } from 'next/router';

import { Box, RichText } from '../../components/base';


/**
 * @typedef {import("@prismicio/client").Content.SectionCardsSlice} SectionCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionCardsSlice>} SectionCardsProps
 * @param { SectionCardsProps }
 */
const SectionCards = ({ slice }) => {
  const { pathname } = useRouter();
  return (
    
 
  <section className={`${
    pathname === '/sustainability' ? 'bg-white' : 'bg-bg-lighter'
  } grid grid-cols-6  text-black`}>
    
    <div className ="col-start-2 col-end-6 justify-center pb-10 clip-border"><img src={slice.primary.banner.url} alt={slice.primary.banner.alt} />
  </div>
    
    
    <Box className="col-end-3 col-span-2 text-center justify-center bg-card-bg  bg-no-repeat bg-center bg-clip-border pb-8" >
      
      <div className="max-w-[15rem] m-auto">
      <img src={slice.primary.icon.url} alt={slice.primary.icon.alt} />
      </div>
      
    <span className="title">
      {
        slice.primary.title ?
        <RichText className="text-governance text-2xl lg:text-3xl font-light pb-10" field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <RichText className="w-fit  text-center text-sm px-0 lg:px-20" field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    
    </Box>
    <Box className="col-end-5 col-span-2 text-center justify-center bg-card-bg bg-center bg-no-repeat bg-clip-border pb-8" >
      
      <div className="max-w-[15rem] m-auto">
      <img src={slice.primary.icon2.url} alt={slice.primary.icon2.alt} />
      </div>
      <div className="text-strategy text-2xl lg:text-3xl font-light pb-10">{ slice.primary.title2 }</div>
  
    {
      slice.primary.description ?
      <RichText className="w-fit  text-center text-sm px-0 lg:px-20" field={slice.primary.description2}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    
    </Box>
    <Box className="col-end-7 col-span-2 text-center justify-center bg-card-bg  bg-no-repeat bg-center bg-clip-border pb-8" >
      
      <div className="max-w-[15rem] m-auto">
      <img src={slice.primary.icon3.url} alt={slice.primary.icon3.alt} />
      </div>
      
      <div className="text-risk text-2xl lg:text-3xl font-light pb-10">{ slice.primary.title3 }</div>
    {
      slice.primary.description ?
      <RichText className="w-fit  text-center text-sm px-0 lg:px-20" field={slice.primary.description3}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    
    </Box>
  </section>
);
      };


export default SectionCards