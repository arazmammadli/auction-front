import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

type Props = {
  type?: 'button' | 'submit';
  width: 'w-full' | 'w-fit';
  bgColor?: string;
  disabled?: boolean;
} & PropsWithChildren &
  HTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
  const { children, type, width, disabled = false, bgColor = 'bg-[#FA8232]', ...res } = props;
  return (
    <button
      type={type}
      className={classNames(width, bgColor, 'flex justify-center items-center px-6 gap-2 rounded-sm', {
        ['bg-opacity-50']: disabled
      })}
      disabled={disabled}
      {...res}
    >
      {children}
    </button>
  );
}
