import React from 'react';

interface TwitterProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function Twitter({ title, description, image, url }: TwitterProps) {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}