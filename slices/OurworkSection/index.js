import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { RichText, Img, Box } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.OurworkSectionSlice} OurworkSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurworkSectionSlice>} OurworkSectionProps
 * @param { OurworkSectionProps }
 */
const OurworkSection = ({ slice }) => (
  <Box className='flex flex-col items-center'>
    <Box className="box-border pt-16 h-full w-full flex justify-center items-center bg-static-bg min-h-[568px] bg-no-repeat bg-center bg-cover">
      <RichText className="text-white font-bold text-2xl mb-8" field={slice.primary.title} />
    </Box>
    <Box className='w-full bg-white flex justify-center'>
      <Box className='flex justify-start flex-wrap px-[15px] py-[100px] bg-white max-w-[990px]'>{
        slice?.items?.map((item, i) =>
          <Box className='w-[217px] m-auto my-4' key={i}>
            <Img src={item.project_image.url} alt={item.project_image.alt} className="w-[217px] h-[287px]" />
            <RichText field={item.project_title} className="text-left text-[28px] text-black mt-3 box-border block" />
            <RichText field={item.project_description} className="text-[11px]" />
            <PrismicLink field={item.project_link} className="text-[#f9b807] text-[11px] font-bold">Coming soon</PrismicLink>
          </Box>
        )
      }</Box>

    </Box>
  </Box>
)

export default OurworkSection