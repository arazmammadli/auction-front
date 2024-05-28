'use client';
import React, { forwardRef, HTMLProps } from 'react';
import Link from 'next/link';

type Props = {
  type: 'email' | 'text' | 'password';
  label?: string | null;
  placeholder?: string;
  isForget?: boolean;
} & HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label = null, type, isForget = false, id,placeholder = '', ...res } = props;

  
  return (
    <>
      {label ? (
        isForget ? (
          <div className='flex justify-between items-center mb-2'>
            <label
              htmlFor={id}
              className='block text-sm font-normal leading-5 text-[#191c1f]'
            >
              {label}
            </label>
            <Link href='/forget-password' className='text-sm text-[#2da5f3] leading-5 font-medium'>
              <span>Forget Password</span>
            </Link>
          </div>
        ) : (
          <label
            htmlFor={id}
            className='block text-sm font-normal mb-2 leading-5 text-[#191c1f]'
          >
            {label}
          </label>
        )
      ) : null}
      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        className='rounded-sm w-full py-3 px-4 focus:ring-0 focus:ring-offset-0 border border-solid focus:border-[#E4E7E9] border-[#E4E7E9] bg-white outline-none'
        {...res}
      />
    </>
  );
});
