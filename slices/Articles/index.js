import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { RichText, Img, Box } from '../../components/base';
import { asDate } from '@prismicio/helpers';

/**
 * @typedef {import("@prismicio/client").Content.ArticlesSlice} ArticlesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlesSlice>} ArticlesProps
 * @param { ArticlesProps }
 */
const Articles = ({ slice }) => (
  <Box className='bg-[#f5f5f5] py-28'>
    <Box className="">
      <RichText field={slice.primary.title} className="font-bold text-[17px] text-center mb-28" />
    </Box >
    <Box className="flex justify-center max-w-[750px] px-3 m-auto"> {
      slice?.items?.map((item, i) =>
        <Box key={i} className="w-[280px] mr-12">
          <Img src={item.article_image.url} alt={item.article_image.alt} className="w-[280px] h-[200px] mb-[5px]" />
          <span className="text-[#f9b807] text-[11px]">{(item.article_date).toString()}</span>
          <RichText field={item.article_title} className="text-base font-medium my-2" />
          <RichText field={item.article_text} className="text-[11px] text-left" />
          {/* <PrismicLink field={item.article_link}>My Link</PrismicLink> */}

        </Box>
      )
    }</Box>
  </Box>
)

export default Articles