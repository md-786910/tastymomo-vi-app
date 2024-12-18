import React from 'react';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <title>{title}</title>;
}