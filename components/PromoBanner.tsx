import React from 'react';
import CB7Background from './ui/CB7backgound';
import Button1 from './ui/Button1';
import Button2 from './ui/Button2';

interface BannerButton {
  label: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
}

interface PromoBannerProps {
  bgText?: string;
  headline?: string;
  description?: string;
  buttons?: BannerButton[];
  top: string;
  left: string;
}

export default function PromoBanner({
  bgText = "CB7",
  headline = "Take the full advantage of going paper-less now.",
  description = "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
  buttons = [
    { label: "CONTACT US", variant: 'secondary', href: "#" },
    { label: "REQUEST DEMO", variant: 'primary', href: "#" }
  ],
  top,
  left,
}: PromoBannerProps) {

  return (
    <div
      className="relative w-full max-w-7xl ml-auto mr-0 overflow-hidden rounded-[20px] sm:rounded-[24px] px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14 border border-white/[0.03] shadow-2xl"
      style={{
        background:
          'radial-gradient(circle at 0% 0%, #061923 0%, #030a10 50%, #010407 100%)',
      }}
    >

      {/* Background Watermark */}
      <CB7Background
        text={bgText}
        left={left}
        top={top}
        fontSize="32vw"
        strokeWidth="1.5px"
      />

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl space-y-4 text-left">

        <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[53px] font-normal tracking-tight leading-[1.12] text-slate-100">
          {headline}
        </h2>

        <p className="text-[15px] sm:text-[16px] text-slate-400 font-normal leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto lg:flex-shrink-0">

        {buttons.map((btn, index) => {
          if (btn.variant === 'primary') {
            return (
              <Button2
                key={index}
                text={btn.label}
                onClick={btn.onClick}
              />
            );
          }

          return (
            <Button1
              key={index}
              text={btn.label}
              onClick={btn.onClick}
            />
          );
        })}
      </div>
    </div>
  );
}