import React from 'react';
import { type ComponentProps } from 'react';

export default function Link({ href, className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
