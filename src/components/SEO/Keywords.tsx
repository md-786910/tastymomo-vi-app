import React from 'react';

interface KeywordsProps {
  keywords: string[];
}

export default function Keywords({ keywords }: KeywordsProps) {
  return (
    <>
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </>
  );
}