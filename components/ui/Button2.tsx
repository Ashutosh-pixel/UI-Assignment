import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
}

export default function Button2({ text, onClick, href, fullWidth = false }: ButtonProps) {
  const baseStyles = `${
    fullWidth ? 'w-full' : 'w-auto'
  } px-8 sm:px-12 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-white hover:to-white text-white hover:text-blue-600 font-medium rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 active:scale-95 text-[13px] sm:text-sm uppercase tracking-wider text-center flex items-center justify-center whitespace-nowrap`;

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