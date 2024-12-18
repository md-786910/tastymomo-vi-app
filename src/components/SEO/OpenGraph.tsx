import React from 'react';

interface OpenGraphProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function OpenGraph({ title, description, image, url }: OpenGraphProps) {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </>
  );
}