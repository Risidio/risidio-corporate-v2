/* eslint-disable @next/next/no-img-element */

export const IMAGE_URL = process.env['NX_IMAGE_URL'];

interface ImgProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

function Img({ src, width, height, alt, ...props }: ImgProps) {
  const params = src.includes('?');
  let source: string;

  if (params) {
    source = `${src}&w=${width}&h=${height}`;
  } else {
    source = `${src}?w=${width}&h=${height}`;
  }

  return <img src={`${IMAGE_URL}${source}`} alt={alt} {...props} />;
}

export { Img };
