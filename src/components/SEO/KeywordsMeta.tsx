import React from 'react';

interface KeywordsMetaProps {
  keywords: string[];
}

export default function KeywordsMeta({ keywords }: KeywordsMetaProps) {
  return (
    <>
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </>
  );
}