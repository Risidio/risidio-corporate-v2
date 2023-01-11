import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.ComponentProps<'input'> {
  className?: string;
  type?: string;
}

const Root: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, type, ...props },
  ref
) => {
  const classes = twMerge(
    'block w-full appearance-none rounded-md border border-gray-40 px-3 py-2 placeholder-gray-60 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-brand-500 sm:text-sm',
    className
  );
  return (
    <input ref={ref} type={type ?? 'text'} className={classes} {...props} />
  );
};

export const Input = React.forwardRef(Root);
