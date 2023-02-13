import { SliceZone } from '@prismicio/react';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { PageProps } from '..';
import { Box, Button, Input, Text } from '../../components/base';
import { createClient } from '../../prismicio';
import { components } from '../../slices';

export default function Contact({ page }: PageProps) {
  return (
    <>
      <section className="bg-bg-purple flex flex-col px-4 justify-center items-center py-48">
        <Box className="max-w-xl flex flex-col  w-full">
          <Text className="text-white font-bold text-center text-base mb-4">
            Any thoughts, Questions, Just Want To Say Hello?
          </Text>
          <Text className="text-white text-center font-extralight text-4xl mb-2">
            Contact us
          </Text>
          <Box className="flex flex-row mt-2 justify-between w-full">
            <Input
              required
              placeholder="Your name"
              className="w-[47%] focus:bg-white focus:text-[#707070] focus:placeholder-black placeholder-gray-100 placeholder:text-xs"
            />
            <Input
              required
              placeholder="Email"
              className="w-[47%] focus:bg-white focus:text-[#707070] focus:placeholder-black placeholder-gray-100 placeholder:text-xs"
            />
          </Box>
          <Input
            placeholder="Subject"
            required
            className="mt-6  focus:bg-white focus:text-[#707070] focus:placeholder-black placeholder:text-xs placeholder-gray-100"
          />
          <textarea
            placeholder="Your message.."
            className="mt-6  focus:bg-white focus:text-[#707070]  focus:placeholder-black block placeholder:text-xs placeholder-gray-100 w-full text-xs appearance-none bg-white/[.2] rounded-2xl  px-5 py-2 placeholder-gray-60 shadow-sm text-white focus:outline-none focus:ring-brand-500 sm:text-sm h-24 resize-none"
          />
        </Box>

        <Button className="bg-primary text-xs text-white font-base hover:bg-white hover:text-primary from-slate-100 rounded-full px-10 py-2 mt-16">
          Submit
        </Button>
      </section>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types
  const page = await client.getSingle('contact');
  return {
    props: {
      page,
    },
  };
}
