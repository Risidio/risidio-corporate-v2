import { useRouter } from 'next/router';
import React from 'react';

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
        pathname === '/sustainability' ? 'bg-white' : 'bg-bg-lighter'
      }  flex flex-col justify-center items-center py-40`}
    >
      <Box className="max-w-[859px]">
        <span>
          {slice.primary.title ? (
            <RichText
              className="font-bold text-2xl text-center mb-9"
              field={slice.primary.title}
            />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>
        {slice.primary.subtitle ? (
          <RichText
            className="text-center text-black font-light text-4xl mb-9"
            field={slice.primary.subtitle}
          />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}

        {slice?.items?.map((item, i) => (
          <Box key={i} className="px-3">
            <RichText
              className="text-center mb-4 text-[14px]"
              field={item.description}
            />
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default Description;
