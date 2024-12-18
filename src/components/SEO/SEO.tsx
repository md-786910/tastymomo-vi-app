import React from 'react';
import Head from './Head';
import Title from './Title';
import OpenGraph from './OpenGraph';
import Twitter from './Twitter';
import Keywords from './Keywords';
import { useSEO } from '../../hooks/useSEO';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords,
  image = 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
  url = 'https://tastymomo.com'
}: SEOProps) {
  const { siteTitle, processedKeywords } = useSEO(title, keywords);

  return (
    <Head>
      <Title title={siteTitle} />
      <meta name="description" content={description} />
      <OpenGraph 
        title={siteTitle}
        description={description}
        image={image}
        url={url}
      />
      <Twitter 
        title={siteTitle}
        description={description}
        image={image}
        url={url}
      />
      <Keywords keywords={processedKeywords} />
      <link rel="canonical" href={url} />
    </Head>
  );
}