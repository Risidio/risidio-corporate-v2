import React, { useState } from 'react';
import { Box, Img, PrismicHREF, RichText, Text } from '../../components/base';
import Image from 'next/image';

/**
 * @typedef {import("@prismicio/client").Content.FooterSectionSlice} FooterSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSectionSlice>} FooterSectionProps
 * @param { FooterSectionProps }
 */

const FooterSection = ({ slice }) => {
  const [hover, setHover] = useState('');
  return (
    <section className="bg-footer-bg bg-cover pt-52">
      <Box className="max-w-screen-2xl text-white pb-20  m-auto">
        <Box className="flex flex-col justify-center items-center mb-56">
          <RichText
            className="text-white font-bold text-3xl mb-5"
            field={slice.primary.title}
          />
          <Box className="flex flex-col text-center">
            <span className="text-[36px] font-thin mb-5">
              {slice.primary.subtitle}
            </span>
            <span className="w-64 font-light">{slice.primary.content}</span>
          </Box>
          <Box className="flex flex-row w-52 justify-between mt-11">
            <Image
              onMouseOver={() => setHover('discord')}
              onMouseLeave={() => setHover('')}
              className="cursor-pointer"
              src={`/img/${
                hover == 'discord' ? 'discord-light' : 'discord'
              }.svg`}
              alt="discord"
              width={90}
              height={90}
            />
            <Image
              onClick={() => {
                window.location.href = 'mailto:info@risidio.com';
              }}
              onMouseOver={() => setHover('mail')}
              onMouseLeave={() => setHover('')}
              src={`/img/${hover == 'mail' ? 'mail-light' : 'mail'}.svg`}
              alt="Risidio"
              width={90}
              height={90}
              className="cursor-pointer"
            />
          </Box>
        </Box>

        <Box className="flex flex-row justify-between">
          <Box>
            <Image
              src="/img/logoWhite.svg"
              alt="Risidio"
              width={300}
              height={200}
            />
          </Box>
          <Box className="flex flex-col">
            <RichText
              className="font-light  text-slate-400 text-xl mb-3"
              field={slice.primary.title1}
            />

            <PrismicHREF
              className="text-white font-medium mb-1"
              field={slice.primary.link2}
            >
              About
            </PrismicHREF>
            <PrismicHREF
              className="text-white font-medium mb-1"
              field={slice.primary.itemlink1}
            >
              our work
            </PrismicHREF>
            <PrismicHREF
              className="text-white font-medium mb-1"
              field={slice.primary.link3}
            >
              Sustainability
            </PrismicHREF>
          </Box>
          <Box className="flex flex-col text-white">
            <span className="font-light text-slate-400 text-xl mb-3">
              {slice.primary.title2}
            </span>

            <PrismicHREF
              className="text-white font-medium mb-1"
              field={slice.primary.link4}
            >
              Marketplace
            </PrismicHREF>
            <PrismicHREF
              className="text-white font-medium mb-1"
              field={slice.primary.link2}
            >
              IndigeNFT
            </PrismicHREF>
            <PrismicHREF
              className="text-white font-medium mb-1"
              field={slice.primary.link3}
            >
              This is #1
            </PrismicHREF>
          </Box>
          <Box className="flex flex-col">
            <Text className="font-light text-slate-400  text-xl mb-3">
              <span>{slice.primary.title3}</span>
            </Text>
            <Text className="text-white mb-1 font-medium w-36">
              Kemp House 152 - 160 City Road, London EC1V 2NX
            </Text>
            <Text
              onClick={() => {
                window.location.href = 'mailto:info@risidio.com';
              }}
              className="text-sm text-risidio-yellow cursor-pointer"
            >
              info@risidio.com
            </Text>
          </Box>
        </Box>
      </Box>
      <Text className="text-white text-xs pb-3">
        © 2023 Risidio Ltd. All right reserved.
      </Text>
    </section>
  );
};

export default FooterSection;
