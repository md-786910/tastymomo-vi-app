import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
  children: React.ReactNode;
}

export default function Head({ children }: HeadProps) {
  return <Helmet>{children}</Helmet>;
}