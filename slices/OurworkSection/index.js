import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.OurworkSectionSlice} OurworkSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurworkSectionSlice>} OurworkSectionProps
 * @param { OurworkSectionProps }
 */
const OurworkSection = ({ slice }) => (
  <section>
    <span className="title">
    
          <PrismicRichText field={slice.primary.title} />
          
    </span>
    {
      slice?.items?.map((item, i) =>
      <div>

        <img src={item.project_image.url} alt={item.project_image.alt} />
        <PrismicRichText field={item.project_title} />
        <PrismicRichText field={item.project_description} />        
        <PrismicLink field={item.project_link}>My Link</PrismicLink>
      </div>
      )
    }

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default OurworkSection