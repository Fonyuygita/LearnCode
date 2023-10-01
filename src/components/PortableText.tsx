import React from 'react';
import { PortableText } from '@portabletext/react';

const PortableTextWithStyles = ({ value }:any) => {
  const blockStyles = {
    h1: 'text-4xl font-bold mb-4 text-black',
    h2: 'text-3xl font-bold mb-3 text-red-300',
    p: 'text-base mb-2 text-red-300 mt-4',
  };

  return <PortableText value={value} serializers={{ marks: {}, ...blockStyles }} />;
};

export default PortableTextWithStyles;