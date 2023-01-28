import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import { Box, Img, PrismicHREF, RichText, Text } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param { GalleryProps }
 */
const Gallery = ({ slice }) => {
  return (
    <Box className="text-center w-full bg-white m-auto  py-40">
      <Box>
        {slice.primary.title ? (
          <RichText
            className="text-black font-bold text-lg mb-10"
            field={slice.primary.title}
          />
        ) : (
          <h2></h2>
        )}
      </Box>

      {slice.primary.subtitle ? (
        <RichText
          className="text-black font-light text-4xl mb-24"
          field={slice.primary.subtitle}
        />
      ) : (
        <p></p>
      )}
      <Box className="max-w-6xl m-auto">
        <Carousel
          autoPlay={false}
          animation="slide"
          NavButton={({ onClick, className, style, next, prev }) => {
            // Other logic

            return (
              <Button onClick={onClick} className={className} style={style}>
                {next && <Img src="/img/arrow-right.png" />}
                {prev && <Img src="/img/arrow-left.png" />}
              </Button>
            );
          }}
          activeIndicatorIconButtonProps={{
            className: 'fill-primary',
          }}
          indicatorIconButtonProps={{
            className: 'fill-gray-300',
          }}
          indicatorContainerProps={{
            className:
              'max-w-[200px] m-auto mt-10 flex justify-center space-x-3.5',
          }}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            className:
              'group-hover:bg-transparent group-hover-brightness-0 group-hover-opacity-0 top-[26%]',
          }}
          navButtonsWrapperProps={{
            className: 'bg-transparent hover:brightness-0 group',
          }}
        >
          {slice?.items?.map((item, i) => (
            <Box className="flex px-40 justify-center" key={i}>
              <Box className="mr-14">
                <Img
                  src={item.image.url}
                  className="w-64 h-[340px]"
                  alt={item.image.alt}
                />
              </Box>
              <Box className="flex flex-col text-left justify-center">
                <RichText
                  className="text-[1.25rem] font-bold mb-4"
                  field={item.title}
                />
                <Box className="max-w-[18rem]">
                  <RichText field={item.content} />
                </Box>
                <Box className="mt-12 flex flex-row justify-between  max-w-[18rem]">
                  <PrismicHREF
                    className="text-purple hover:text-primary font-bold "
                    field={item.link1}
                  >
                    Find Out More
                  </PrismicHREF>
                  <PrismicHREF
                    className="text-black font-bold hover:text-primary"
                    field={item.link2}
                  >
                    See All Projects
                  </PrismicHREF>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Gallery;
