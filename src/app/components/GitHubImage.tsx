'use client';

import Image, { ImageProps } from 'next/image';

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export default function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Always use the basePath for both development and production
  // This ensures images work in GitHub Pages
  const basePath = '';
  
  // Ensure src starts with a slash and combine with basePath
  const formattedSrc = src.startsWith('/') ? `${basePath}${src}` : `${basePath}/${src}`;
  
  return <Image src={formattedSrc} {...props} />;
} 
