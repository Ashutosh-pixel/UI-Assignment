import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
}

export default function Button1({ text, onClick, href, fullWidth = false }: ButtonProps) {
  const baseStyles = `${
    fullWidth ? 'w-full' : 'w-auto'
  } px-8 sm:px-14 py-3.5 border border-slate-700 hover:bg-white text-white hover:text-blue-600 font-medium rounded-xl transition-all duration-300 active:scale-95 text-[13px] sm:text-sm uppercase tracking-wider text-center flex items-center justify-center whitespace-nowrap`;

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {text}
    </button>
  );
}