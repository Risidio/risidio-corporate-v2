import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.GalleryRowSlice} GalleryRowSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryRowSlice>} GalleryRowProps
 * @param { GalleryRowProps }
 */
const GalleryRow = ({ slice }) => (
  <section>
    <span >
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }

  </section>
)

export default GalleryRow